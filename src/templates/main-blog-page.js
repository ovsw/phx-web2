import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import TwoColumnsRightSidebar from '../components/two-columns-right-sidebar'
import BlogPostPreviewList from '../components/blog-post-preview-list'
import Sidebar from '../components/sidebar'
import BlogPageHeader from '../components/blog-page-header'

// import {toPlainText} from '../lib/helpers'

const BlogPage = props => {
  const {data, errors, pageContext: {currentPage, numPages}, location} = props

  // const page = data && data.page
  const posts = data && data.posts
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {/* {page && <SEO title='Blog Posts' />} */}

      {errors && (
        <>
          <GraphQLErrorList errors={errors} />
        </>
      )}
      <SEO title={'Blog | Phoenix Mortgage Lender Jimmy V - Goldwater Mortgage'} />
      {posts &&
      <TwoColumnsRightSidebar
        path={location.pathname}
        header={<BlogPageHeader title='Blog' />}
        mainContent={<BlogPostPreviewList title='Blog Posts'
          rootSlug='/blog'
          nodes={postNodes}
          currentPage={currentPage}
          numPages={numPages} />}
        sidebarContent={<Sidebar />}
      />

      }
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query blogListQuery($skip: Int!, $limit: Int!) {
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          categories {
            title
          }
          publishedAt
          mainImage {
            ...SanityImage
            alt
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { Helmet } from "react-helmet"

import {imageUrlFor} from '../lib/image-url'
import {buildImageObj} from '../lib/helpers'

import { GatsbySeo, LocalBusinessJsonLd } from 'gatsby-plugin-next-seo'

// JSON+LD schemas
import {localBusinessSchema} from './schemas'

import {useSiteMetadata} from '../hooks/use-site-metadata'
import {useSiteSettings} from '../hooks/use-site-settings'


function SEO({ title, description, lang = 'en', slug = '', image }) {
  // grab default values from gatsby config
  const siteMetadata = useSiteMetadata()
  const {defaultImage, siteUrl} = siteMetadata

  // grab site settings from CMS
  const siteSettings = useSiteSettings()
  const {title: settingsTitle, description: settingsDescription} = siteSettings

  // default to default values
  const seoTitleComputed = title || settingsTitle
  const seoDescriptionComputed = description || settingsDescription

  // seoImage
  const seoImage = (image && image.asset) ? imageUrlFor(buildImageObj(image)).width(1200).url() : `${siteUrl}/images/jimmy-vercellino-phx-home-loans-banner.jpg`

  return (
    <>
    <GatsbySeo
      title={seoTitleComputed}
      description={seoDescriptionComputed}
      canonical={`${siteUrl}/${slug}/`}
      openGraph={{
        url: `${siteUrl}/${slug}/`,
        title: seoTitleComputed,
        description: seoDescriptionComputed,
        images: [
          {
            url: seoImage,
            width: 1200
          }
        ],
        site_name: seoTitleComputed,
      }}
      />

      <LocalBusinessJsonLd
        type='LocalBusiness'
        id={localBusinessSchema['@id']}
        name={localBusinessSchema.name}
        description={settingsDescription}
        url={`${siteUrl}/${slug}/`}
        telephone='+1-480-800-8387'
        address={{
          streetAddress: `${localBusinessSchema.address.streetAddress}`,
          addressLocality: `${localBusinessSchema.address.addressLocality}`,
          addressRegion: `${localBusinessSchema.address.addressRegion}`,
          postalCode: `${localBusinessSchema.address.postalCode}`,
          addressCountry: `${localBusinessSchema.address.addressCountry}`,
        }}
        geo={{
          latitude: `${localBusinessSchema.geo.latitude}`,
          longitude: `${localBusinessSchema.geo.longitude}`,
        }}
        images={[...localBusinessSchema.image]}
        overrides={{
          '@type': 'LocalBusiness',
          'priceRange': '$$$',
          'openingHoursSpecification': {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
            ],
            'opens': '08:00',
            'closes': '17:00'
          },
          'sameAs': [
            'https://www.facebook.com/TheVercellinoTeam',
            'https://twitter.com/phxhomeloan',
            'https://www.instagram.com/jimmyvercellino_/',
            'https://www.youtube.com/channel/UCmSqQXiy5BIxh-hZYp_RDWw',
            'https://www.linkedin.com/in/jimmy-vercellino-29060930/'
          ]
        }}
      />

    </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.object
}

export default SEO

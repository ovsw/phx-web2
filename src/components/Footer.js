/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'
import {useStaticQuery, graphql} from 'gatsby'
// import BackgroundImage from 'gatsby-background-image'

import SocialLinks from './social-links'

import {FaGlobeAmericas, FaPhone, FaEnvelope} from 'react-icons/fa'

const Footer = () => {
  const {footerLogoImage} = useStaticQuery(graphql`
  query{
    footerLogoImage: file(relativePath: { eq: "goldwater-vercellino-team-logo.png" }) {
      childImageSharp {
        original{
          width
          height
          src
        }
        fixed(width: 320) {
          ...GatsbyImageSharpFixed_noBase64
          srcSet
          src
        }
      }
    }
  }
`)

  // const backgroundFluidImageStack = [
  //   footerBg.childImageSharp.fluid,
  //   `linear-gradient(rgba(3, 27, 56, 0.8), rgba(3, 27, 56, 0.8))`
  // ].reverse()

  return (
    <footer >
      <div sx={{background: 'linear-gradient(to right, #ebb745 0%, #dd8729 100%)', color: 'white', fontSize: 0, p: {my: 0}}}>
        <Container sx={{
          display: 'flex',
          flexWrap: ['wrap', null, null, 'nowrap'],
          py: 5,
          a: {textDecoration: 'none',
            color: 'white'
          },
          '.footerColumn': {
            pb: [4, 4, 4, 0]          }
        }}>
          <div className='footerColumn' sx={{width: ['full', null, null, '1/5']}}>
            <p sx={{variant: 'text.superHeading', '::before': {borderTopColor: 'white',width: '20px'}, color: 'white'}}>About Us</p>
            <img src={footerLogoImage.childImageSharp.fixed.src} alt='Goldwater Bank - Vercellino Team logo' sx={{
              maxWidth: 'full', mt: 3
            }} />
            <h4 sx={footerHeaderStyles}>Goldwater Bank N.A.<br /> Mortgage Division</h4>
            <p>NMLS #452955</p>
            <p>5050 North 40th Street, <br />Phoenix AZ 85018</p>

          </div>

          <div className='footerColumn' sx={{
            width: ['full', null, null, '3/5'],
            px: 4
          }}>
            <p sx={{variant: 'text.superHeading', '::before': {borderTopColor: 'white'}, color: 'white'}}>Important</p>
            <h4 sx={footerHeaderStyles}>Important Information about Procedures for Opening a New Account.</h4>
            <p sx={{color: '#fff6dd'}}> To help the government fight the funding of terrorism and money laundering activities, Federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account (e.g., establishes a formal relationship by means of a loan application). What this means for you: When you open an account, we will ask for your name, address, date of birth, and other information that will allow us to identify you. We may also ask to see your driver's license or other identifying documents.</p>
            <p sx={{pt: 3}}>
              <a href='http://www.nmlsconsumeraccess.org/' title='NML Consumer Access' rel='noopener noreferrer' style={{marginRight: '1rem'}}><img src='/images/logo/ico2.png' alt='NML Consumer Access Logo' /></a>
              <img src='/images/logo/equal-housing-opportunity-logo.png' alt='Equal Housing Opportunity Logo' title='Equal Housing Opportunity Logo' />
            </p>
          </div>

          <div className='footerColumn' sx={{
            width: ['full', null, null, '1/5'],
            px: 2
          }}>
            <p sx={{variant: 'text.superHeading', '::before': {borderTopColor: 'white',width: '20px'}, color: 'white'}}>Contact Jimmy</p>
            <h4 sx={footerHeaderStyles}>Jimmy Vercellino</h4>
            <p>NMLS# 184169</p>
            <ul sx={{variant: 'lists.reset', mt: 4, li: {mt: 2}, svg: {color: 'black'}}}>
              <li><a href='tel:480-800-8387'><FaPhone /> 480-800-8387</a></li>
              <li><a href='mailto:JimmyV@goldwaterbank.com'><FaEnvelope /> JimmyV@goldwaterbank.com</a></li>
              <li><a href='https://phxhomeloan.com/'><FaGlobeAmericas /> phxhomeloan.com</a></li>
            </ul>
            <ul sx={{
              variant: 'lists.reset',
              pt: 4,
              display: 'flex',
              li: {
                fontSize: 5,
                mr: 3,
                a: {
                  color: 'black',
                  ':hover': {
                    color: 'white'
                  }
                }
              }
            }}>
              <SocialLinks />
            </ul>
          </div>
        </Container>
      </div>
      {/* <BackgroundImage
        Tag='div'
        className='footer-inner'
        fluid={backgroundFluidImageStack}
        backgroundColor={`#163963`}
        >

      </BackgroundImage> */}
      <div sx={{bg: 'black', color: 'white', textAlign: 'center', py: 1, fontSize: 0}}>
        <Container>
          <p>Copyright &copy; 2019-{new Date().getFullYear()}
          Jimmy Vercellino NMLS #184169
          {/* Goldwater Bank LLC */}
          . All rights reserved. | Website by <a href='https://ovswebsites.com' target='_blank' sx={{color: '#ff5071'}}>OVS Websites</a>.</p>
        </Container>

      </div>
    </footer>

  )
}

export default Footer

const footerHeaderStyles = {
  color: 'black',
  fontSize: 2,
  my: 3,
  lineHeight: '1.45'
}

/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'
import {Helmet} from 'react-helmet-async'
// import HomeTestimonialItem from './HomeTestimonialItem'

const HomeTestimonials = () => {
  return (
    <>
      <Helmet>
        <script src='https://embedsocial.com/embedscript/ri.js' />
      </Helmet>
      {/*{esScript}*/}
    <section sx={{
      variant: 'sections.hpSection',
      bg: 'black',
      pb: [4, null, null, 5]
    }}>
      <Container>
        <span sx={{variant: 'text.superHeading', color: 'white'}}>Reviews from Our</span>
        <h2 sx={{variant: 'text.mainHeading', mb: 4, color: 'primary'}}>Satisfied <span sx={{color: 'white'}}>Clients</span></h2>
        <div className='embedsocial-reviews' data-ref='dbf6aa080360d368baaa5c359edfb1d06eab94c0' />
      </Container>
    </section>
    </>
  )
}

export default HomeTestimonials

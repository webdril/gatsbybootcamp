import React from 'react'
<<<<<<< HEAD

const Footer = () =>{
    return(
        <footer>
            <p>Created by Emeka Eluwa, &copy;2020</p>
=======
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () =>{
    const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata {
          author
        }
      }
    }
  `)

    return(
        <footer>
            <p>Created by {data.site.siteMetadata.author}, &copy;2020</p>
>>>>>>> c1a2efbe59c22d124b013fe1dc6f68f04c8886d9
        </footer>
    )
}

export default Footer
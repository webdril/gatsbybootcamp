import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage =() =>{
    return (
        <Layout>
        <h1>About Us</h1>
        <p>About us Page</p>
        <p>Need a Developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default AboutPage
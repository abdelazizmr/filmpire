import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <h2 className="error">This page is not available ! you can go back to main page by clicking <Link to="/" style={{color:'red'}}>here</Link></h2>
  )
}

export default ErrorPage
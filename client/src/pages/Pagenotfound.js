import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <Layout title={'404 Page Not Found - Pharma'}>
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <span class="ri-error-warning-line display-3 text-danger"></span><br/>
            <span class="display-2 text-black fw-bold">404</span>
            <h2 class="display-3 text-black fw-bolder">Oops! Page not found</h2>
            <p><Link to={'/'} class="btn btn-md height-auto px-4 py-3 mt-5 btn-outline-info">Back to home</Link></p>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default PageNotFound
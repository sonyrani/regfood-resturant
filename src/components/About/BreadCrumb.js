import React from 'react'
import breadcrumb_bg from '../../images/breadcrumb_bg.jpg';
function BreadCrumb() {
  return (
    <>
     <section className="page_breadcrumb" style={{ backgroundImage: "url(" + breadcrumb_bg + ")" }}>
        <div className="breadcrumb_overlay">
          <div className="container">
            <div className="breadcrumb_text">
              <h1>about us</h1>
              <ul>
                <li><a href="index-2.html">home</a></li>
                <li><a>about us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BreadCrumb
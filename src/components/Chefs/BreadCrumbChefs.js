import React from 'react'
import breadcrumb_bg from '../../images/breadcrumb_bg.jpg';
function BreadCrumbChefs() {
  return (
    <>
     <section className="page_breadcrumb" style={{ backgroundImage: "url(" + breadcrumb_bg + ")" }}>
        <div className="breadcrumb_overlay">
          <div className="container">
            <div className="breadcrumb_text">
              <h1>meet our expert chefs</h1>
              <ul>
                <li><a href="index-2.html">home</a></li>
                <li><a>chefs</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BreadCrumbChefs
import React from 'react'
import offer_slider_1 from '../images/offer_slider_1.png';
import offer_slider_2 from '../images/offer_slider_2.png';

function AddSliderStart() {
  return (
    <>
        <section className="add_slider mt_75 xs_mt_45">
        <div className="container">
            <div className="row wow fadeInUp" data-wow-duration="1s">
                <div className="col-xl-6 col-lg-6">
                    <div className="add_slider_single" style={{backgroundImage: "url(" + offer_slider_1 + ")"}}>
                        <div className="text">
                            <h5>weekly best seller</h5>
                            <h2>Fried Chicken</h2>
                            <p>Neque porro quisquam est qui dolor ipsum quia dolor sit ametsed.</p>
                            <a href="menu_details.html">shop now <i className="far fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="add_slider_single" style={{backgroundImage: "url(" + offer_slider_2 + ")"}}>
                        <div className="text">
                            <h5>daily offer</h5>
                            <h2>Hyderabadi Biryani</h2>
                            <p>Neque porro quisquam est qui dolor ipsum quia dolor sit ametsed.</p>
                            <a href="menu_details.html">shop now <i className="far fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AddSliderStart
import React from 'react'
import tree5 from '../images/tree_5.png';
import tree4 from '../images/tree_4.png';
import tree3 from '../images/tree_3.png';
import tree2 from '../images/tree_2.png';
import tree7 from '../images/tree_7.png';
import tree6 from '../images/tree_6.png';
import banner_bg from '../images/banner_bg.jpg'

import slider_image_1 from '../images/slider_img_1.png';

function Banner() {
    return (
        <>
            <section className="banner">
                <div className="banner_overlay">
                    <span className="banner_shape_1">
                        <img src={tree5} alt="shape" className="img-fluid w-100" />
                    </span>
                    <span className="banner_shape_2">
                        <img src={tree4} alt="shape" className="img-fluid w-100" />
                    </span>
                    <span className="banner_shape_3">
                        <img src={tree3} alt="shape" className="img-fluid w-100" />
                    </span>
                    <span className="banner_shape_4">
                        <img src={tree2} alt="shape" className="img-fluid w-100" />
                    </span>
                    <span className="banner_shape_5">
                        <img src={tree7} alt="shape" className="img-fluid w-100" />
                    </span>
                    <span className="banner_shape_6">
                        <img src={tree6} alt="shape" className="img-fluid w-100" />
                    </span>
                    <div className="col-12">
                        <div className="banner_slider" style={{ backgroundImage: "url(" + banner_bg + ")" }}>
                            <div className="banner_slider_overlay">
                                <div className=" container">
                                    <div className="row justify-content-center">
                                        <div className="col-xxl-6 col-xl-6 col-md-10 col-lg-6">
                                            <div className="banner_text wow fadeInLeft" data-wow-duration="1s">
                                                <h3>Satisfy Your Cravings</h3>
                                                <h1>Delicious Foods With Wonderful Eating</h1>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum fugit
                                                    minimaet debitis ut distinctio optio.</p>
                                                <form>
                                                    <input type="text" placeholder="Search . . ." />
                                                    <button type="submit" className="common_btn">search</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-xxl-5 col-xl-6 col-sm-10 col-md-9 col-lg-6">
                                            <div className="banner_img wow fadeInRight" data-wow-duration="1s">
                                                <div className="img">
                                                    <img src={slider_image_1} alt="food item" className="img-fluid w-100" />
                                                    <span>
                                                        35% off
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;
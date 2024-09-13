import React from 'react'
import about_chef from '../../images/about_chef.jpg';
import why_choose_img from '../../images/why_choose_img.jpg';
import mission_bg from '../../images/mission_bg.png';
import testimonial_img_2 from '../../images/testimonial_img_2.jpg';
import testimonial_img_1 from '../../images/testimonial_img_1.jpg';
import testimonial_img_3 from '../../images/testimonial_img_3.jpg';
import counter_bg from '../../images/counter_bg.jpg';

function AboutPageStart() {
    return (
        <>
            <section className="about_us mt_100 xs_mt_70">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-duration="1s">
                            <div className="about_us_img">
                                <div className="img">
                                    <img src={about_chef} alt="about us" className="img-fluid w-100" />
                                </div>
                                <h3>12+ <span>Years experience</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis architecto
                                    reiciendis.
                                    <span>jhon deo</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-duration="1s">
                            <div className="section_heading mb_25">
                                <h4>About Company</h4>
                                <h2>Helathy Foods Provider</h2>
                            </div>
                            <div className="about_us_text">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur molestiae
                                    minima pariatur consequatur voluptate sapiente deleniti soluta,.</p>
                                <ul>
                                    <li>
                                        <h4>trusted partner</h4>
                                        <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Minus, Officiis Placeat
                                            Iusto Quasi Adipisci Impedit Delectus Beatae Ab Maxime.</p>
                                    </li>
                                    <li>
                                        <h4>first Delivery</h4>
                                        <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Minus, Officiis Placeat
                                            Iusto Quasi Adipisci Impedit Delectus Beatae Ab Maxime.</p>
                                    </li>
                                    <li>
                                        <h4>secure payment</h4>
                                        <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Minus, Officiis Placeat
                                            Iusto Quasi Adipisci Impedit Delectus Beatae Ab Maxime.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mission mt_100 xs_mt_70" style={{ backgroundImage: "url(" + mission_bg + ")" }}>
                <div class="mission_overlay pt_70 xs_pt_40 pb_100 xs_pb_70">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-md-10 col-lg-7">
                                <div class="mission_text">
                                    <ul>
                                        <li>
                                            <div class="icon">
                                                <i class="far fa-bullseye-arrow"></i>
                                            </div>
                                            <div class="text">
                                                <h4>vision</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis
                                                    perspiciatis voluptatum odit.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="fas fa-lightbulb-on"></i>
                                            </div>
                                            <div class="text">
                                                <h4>mission</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis
                                                    perspiciatis voluptatum odit.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="far fa-gem"></i>
                                            </div>
                                            <div class="text">
                                                <h4>goals</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis
                                                    perspiciatis voluptatum odit.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="about_choose mt_100 xs_mt_70">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-8 col-lg-7 wow fadeInLeft" data-wow-duration="1s">
                            <div class="section_heading mb_25">
                                <h4>Why choose us</h4>
                                <h2>Why we are the best</h2>
                            </div>
                            <div class="about_choose_text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa, itaque repudiandae
                                    praesentium tempore quos, totam, facilis doloribus doloremque illo delectus.</p>
                                <div class="row">
                                    <div class="col-xl-6">
                                        <div class="about_choose_text_box">
                                            <span><i class="fas fa-burger-soda"></i></span>
                                            <h4>Fresh food</h4>
                                            <p>Objectively pontificate quality models before intuitive information.</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="about_choose_text_box">
                                            <span><i class="fal fa-truck"></i></span>
                                            <h4>Fast Delivery</h4>
                                            <p>Objectively pontificate quality models before intuitive information.</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="about_choose_text_box">
                                            <span><i class="fas fa-file-certificate"></i></span>
                                            <h4>Quality Maintain</h4>
                                            <p>Objectively pontificate quality models before intuitive information.</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="about_choose_text_box">
                                            <span><i class="fas fa-headset"></i></span>
                                            <h4>24/7 Service</h4>
                                            <p>Objectively pontificate quality models before intuitive information.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-4 col-lg-5 wow fadeInRight" data-wow-duration="1s">
                            <div class="about_choose_img">
                                <img src={why_choose_img} alt="about us" class="img-fluid w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="counter_part mt_100 xs_mt_70" style={{ backgroundImage: "url(" + mission_bg + ")" }}>
                <div class="counter_overlay pt_120 xs_pt_90 pb_100 xs_pb_0">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
                                <div class="single_counter">
                                    <div class="text">
                                        <h2 class="counter">85,000</h2>
                                        <span><i class="fas fa-user"></i></span>
                                    </div>
                                    <p>customer serve</p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
                                <div class="single_counter">
                                    <div class="text">
                                        <h2 class="counter">120</h2>
                                        <span><i class="fas fa-hat-chef"></i></span>
                                    </div>
                                    <p>experience chef</p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
                                <div class="single_counter">
                                    <div class="text">
                                        <h2 class="counter">72,000</h2>
                                        <span><i class="fas fa-users"></i></span>
                                    </div>
                                    <p>happy customer</p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
                                <div class="single_counter">
                                    <div class="text">
                                        <h2 class="counter">30</h2>
                                        <span><i class="fas fa-trophy"></i></span>
                                    </div>
                                    <p>winning award</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="testimonial pt_95 xs_pt_65 mb_100 xs_mb_70">
                <div class="container">
                    <div class="row wow fadeInUp" data-wow-duration="1s">
                        <div class="col-md-8 col-lg-7 col-xl-6">
                            <div class="section_heading mb_20">
                                <h4>testimonial</h4>
                                <h2>our customar feedbacks</h2>
                            </div>
                        </div>
                    </div>

                    <div class="row testi_slider">
                        <div class="col-xl-6 wow fadeInUp" data-wow-duration="1s">
                            <div class="single_testimonial">
                                <div class="single_testimonial_img">
                                    <img src={testimonial_img_2} alt="testimonial" class="img-fluid w-100" />
                                </div>
                                <div class="single_testimonial_text">
                                    <h4>isita islam</h4>
                                    <p class="designation">nyc usa</p>
                                    <p class="feedback">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus
                                        praesentium quaerat nihil magnam a porro eaque numquam</p>
                                    <span class="rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 wow fadeInUp" data-wow-duration="1s">
                            <div class="single_testimonial">
                                <div class="single_testimonial_img">
                                    <img src={testimonial_img_3} alt="testimonial" class="img-fluid w-100" />
                                </div>
                                <div class="single_testimonial_text">
                                    <h4>isita islam</h4>
                                    <p class="designation">nyc usa</p>
                                    <p class="feedback">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus
                                        praesentium quaerat nihil magnam a porro eaque numquam</p>
                                    <span class="rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 wow fadeInUp" data-wow-duration="1s">
                            <div class="single_testimonial">
                                <div class="single_testimonial_img">
                                    <img src={testimonial_img_1} alt="testimonial" class="img-fluid w-100" />
                                </div>
                                <div class="single_testimonial_text">
                                    <h4>isita islam</h4>
                                    <p class="designation">nyc usa</p>
                                    <p class="feedback">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus
                                        praesentium quaerat nihil magnam a porro eaque numquam</p>
                                    <span class="rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPageStart
import React from 'react'
import popup_cart_img from '../images/popup_cart_img.jpg';
import offerItem1 from '../images/offer_item_img1.jpg';
import offer_item_img2 from '../images/offer_item_img2.jpg';
import offer_item_img3 from '../images/offer_item_img3.jpg';

function OfferItem() {
    return (
        <>
            <section className="offer_item pt_95 pb_100 xs_pt_65 xs_pb_70">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-duration="1s">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <div className="section_heading mb_25">
                                <h4>daily offer</h4>
                                <h2>up to 75% off for this day</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row offer_item_slider wow fadeInUp" data-wow-duration="1s">
                        <div className="col-xl-4">
                            <div className="offer_item_single" style={{ backgroundImage: "url(" + offer_item_img2 + ")" }}>
                                <span>37% off</span>
                                <a className="title" href="menu_details.html">Chicken Nuggets</a>
                                <p>Enim ipsam voluptat in quia voluptas sit aspe rnatur aut odit aut.</p>
                                <ul className="d-flex flex-wrap">
                                    <li><a href="#" data-bs-toggle="modal" data-bs-target="#cartModal"><i
                                        class="fas fa-shopping-basket"></i></a></li>
                                    <li><a href="#"><i className="fal fa-heart"></i></a></li>
                                    <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="offer_item_single" style={{ backgroundImage: "url(" + offer_item_img2 + ")" }}>
                                <span>40% off</span>
                                <a className="title" href="menu_details.html">Beef Masala</a>
                                <p>Enim ipsam voluptat in quia voluptas sit aspe rnatur aut odit aut.</p>
                                <ul className="d-flex flex-wrap">
                                    <li><a href="#" data-bs-toggle="modal" data-bs-target="#cartModal"><i
                                        className="fas fa-shopping-basket"></i></a></li>
                                    <li><a href="#"><i class="fal fa-heart"></i></a></li>
                                    <li><a href="menu_details.html"><i class="far fa-eye"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="offer_item_single" style={{ backgroundImage: "url(" + offerItem1 + ")" }}>
                                <span>55% off</span>
                                <a className="title" href="menu_details.html">Dal Makhani</a>
                                <p>Enim ipsam voluptat in quia voluptas sit aspe rnatur aut odit aut.</p>
                                <ul className="d-flex flex-wrap">
                                    <li><a href="#" data-bs-toggle="modal" data-bs-target="#cartModal"><i
                                        className="fas fa-shopping-basket"></i></a></li>
                                    <li><a href="#"><i className="fal fa-heart"></i></a></li>
                                    <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="offer_item_single" style={{ backgroundImage: "url(" + offerItem1 + ")" }}>
                                <span>45% off</span>
                                <a className="title" href="menu_details.html">Beef Masala</a>
                                <p>Enim ipsam voluptat in quia voluptas sit aspe rnatur aut odit aut.</p>
                                <ul className="d-flex flex-wrap">
                                    <li><a href="#" data-bs-toggle="modal" data-bs-target="#cartModal"><i
                                        className="fas fa-shopping-basket"></i></a></li>
                                    <li><a href="#"><i className="fal fa-heart"></i></a></li>
                                    <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CART POPUT START */}
            <div className="cart_popup">
                <div className="modal fade" id="cartModal" tabindex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                                    className="fal fa-times"></i></button>
                                <div className="cart_popup_img">
                                    <img src={popup_cart_img} alt="menu" className="img-fluid w-100" />
                                </div>
                                <div className="cart_popup_text">
                                    <a href="#" className="title">Maxican Pizza Test Better</a>
                                    <p className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                        <i className="far fa-star"></i>
                                        <span>(201)</span>
                                    </p>
                                    <h4 className="price">$320.00 <del>$350.00</del> </h4>

                                    <div className="details_size">
                                        <h5>select size</h5>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="large"
                                                checked />
                                            <label className="form-check-label" for="large">
                                                large <span>+ $350</span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="medium" />
                                            <label className="form-check-label" for="medium">
                                                medium <span>+ $250</span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="small" />
                                            <label className="form-check-label" for="small">
                                                small <span>+ $150</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="details_extra_item">
                                        <h5>select option <span>(optional)</span></h5>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="coca-cola" />
                                            <label className="form-check-label" for="coca-cola">
                                                coca-cola <span>+ $10</span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="7up" />
                                            <label className="form-check-label" for="7up">
                                                7up <span>+ $15</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="details_quentity">
                                        <h5>select quentity</h5>
                                        <div className="quentity_btn_area d-flex flex-wrapa align-items-center">
                                            <div className="quentity_btn">
                                                <button className="btn btn-danger"><i className="fal fa-minus"></i></button>
                                                <input type="text" placeholder="1" />
                                                <button className="btn btn-success"><i className="fal fa-plus"></i></button>
                                            </div>
                                            <h3>$320.00</h3>
                                        </div>
                                    </div>
                                    <ul className="details_button_area d-flex flex-wrap">
                                        <li><a className="common_btn" href="#">add to cart</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfferItem
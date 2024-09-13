import React from 'react'
import counter_bg from '../images/counter_bg.jpg';
import menu2_img_1 from '../images/menu2_img_1.jpg';
import menu2_img_2 from '../images/menu2_img_2.jpg';
import menu2_img_3 from '../images/menu2_img_3.jpg';
import menu2_img_4 from '../images/menu2_img_4.jpg';
import menu2_img_5 from '../images/menu2_img_5.jpg';
import menu2_img_6 from '../images/menu2_img_6.jpg';
import menu2_img_7 from '../images/menu2_img_7.jpg';
import menu2_img_8 from '../images/menu2_img_8.jpg';
import popup_cart_img from  '../images/popup_cart_img.jpg';
import Footer from './Footer.js'

function MenuItemStart() {
  return (
   <>
    <section className="page_breadcrumb" style={{ backgroundImage: "url(" + counter_bg + ")" }}>
    <div className="breadcrumb_overlay">
        <div className="container">
            <div className="breadcrumb_text">
                <h1>Popular Foods menu</h1>
                <ul>
                    <li><a href="index-2.html">home</a></li>
                    <li><a href="#">menu</a></li>
                </ul>
            </div>
        </div>
    </div>
</section>  


<section className="menu_page mt_100 xs_mt_70 mb_100 xs_mb_70">
        <div className="container">
            <form className="menu_search_area">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        <div className="menu_search">
                            <input type="text" placeholder="search..." />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="menu_search">
                            <div className="select_area">
                                <select className="select_js">
                                    <option value="AL">default shorting</option>
                                    <option value="">short by popularity</option>
                                    <option value="">short by avarage rating</option>
                                    <option value="">short by latest</option>
                                    <option value="">short by low to high</option>
                                    <option value="">short by high to low</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3">
                        <div className="menu_search">
                            <button className="common_btn" type="submit">Search</button>
                        </div>
                    </div>
                </div>
            </form>

            <div className="row">
                <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                    <div className="menu_item">
                        <div className="menu_item_img">
                            <img src={menu2_img_1} alt="menu" className="img-fluid w-100" />
                        </div>
                        <div className="menu_item_text">
                            <a className="category" href="#">Biryani</a>
                            <a className="title" href="menu_details.html">Hyderabadi biryani</a>
                            <p className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                                <span>24</span>
                            </p>
                            <h5 className="price">$65.00 <del>$90.00</del></h5>
                            <a className="add_to_cart" href="#" data-bs-toggle="modal" data-bs-target="#cartModal">add
                                to cart</a>
                            <ul className="d-flex flex-wrap justify-content-end">
                                <li><a href="#"><i className="fal fa-heart"></i></a></li>
                                <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                    <div className="menu_item">
                        <div className="menu_item_img">
                            <img src={menu2_img_2} alt="menu" className="img-fluid w-100" />
                        </div>
                        <div className="menu_item_text">
                            <a className="category" href="#">Chicken</a>
                            <a className="title" href="menu_details.html">Daria Shevtsova</a>
                            <p className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span>30</span>
                            </p>
                            <h5 className="price">$80.00</h5>
                            <a className="add_to_cart" href="#" data-bs-toggle="modal" data-bs-target="#cartModal">add
                                to cart</a>
                            <ul className="d-flex flex-wrap justify-content-end">
                                <li><a href="#"><i className="fal fa-heart"></i></a></li>
                                <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                    <div className="menu_item">
                        <div className="menu_item_img">
                            <img src={menu2_img_3} alt="menu" className="img-fluid w-100" />
                        </div>
                        <div className="menu_item_text">
                            <a className="category" href="#">burger</a>
                            <a className="title" href="menu_details.html">Spicy Burger</a>
                            <p className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <span>17</span>
                            </p>
                            <h5 className="price">$100.00 <del>$110.00</del></h5>
                            <a className="add_to_cart" href="#" data-bs-toggle="modal" data-bs-target="#cartModal">add
                                to cart</a>
                            <ul className="d-flex flex-wrap justify-content-end">
                                <li><a href="#"><i className="fal fa-heart"></i></a></li>
                                <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                    <div className="menu_item">
                        <div className="menu_item_img">
                            <img src={menu2_img_4} alt="menu" className="img-fluid w-100" />
                        </div>
                        <div className="menu_item_text">
                            <a className="category" href="#">dressert</a>
                            <a className="title" href="menu_details.html">Fried Chicken</a>
                            <p className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <span>22</span>
                            </p>
                            <h5 className="price">$99.00</h5>
                            <a className="add_to_cart" href="#" data-bs-toggle="modal" data-bs-target="#cartModal">add
                                to cart</a>
                            <ul className="d-flex flex-wrap justify-content-end">
                                <li><a href="#"><i className="fal fa-heart"></i></a></li>
                                <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                    <div className="menu_item">
                        <div className="menu_item_img">
                            <img src={menu2_img_5} alt="menu" className="img-fluid w-100" />
                        </div>
                        <div className="menu_item_text">
                            <a className="category" href="#">kabab</a>
                            <a className="title" href="menu_details.html">Mozzarella Sticks</a>
                            <p className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <span>72</span>
                            </p>
                            <h5 className="price">$75.00</h5>
                            <a className="add_to_cart" href="#" data-bs-toggle="modal" data-bs-target="#cartModal">add
                                to cart</a>
                            <ul className="d-flex flex-wrap justify-content-end">
                                <li><a href="#"><i className="fal fa-heart"></i></a></li>
                                <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                    <div className="menu_item">
                        <div className="menu_item_img">
                            <img src={menu2_img_6} alt="menu" className="img-fluid w-100" />
                        </div>
                        <div className="menu_item_text">
                            <a className="category" href="#">kacchi</a>
                            <a className="title" href="menu_details.html">Popcorn Chicken</a>
                            <p className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                                <span>57</span>
                            </p>
                            <h5 className="price">$69.00 <del>$80.00</del></h5>
                            <a className="add_to_cart" href="#" data-bs-toggle="modal" data-bs-target="#cartModal">add
                                to cart</a>
                            <ul className="d-flex flex-wrap justify-content-end">
                                <li><a href="#"><i className="fal fa-heart"></i></a></li>
                                <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                    <div className="menu_item">
                        <div className="menu_item_img">
                            <img src={menu2_img_7} alt="menu" className="img-fluid w-100" />
                        </div>
                        <div className="menu_item_text">
                            <a className="category" href="#">noodles</a>
                            <a className="title" href="menu_details.html">Chicken Wings</a>
                            <p className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <span>43</span>
                            </p>
                            <h5 className="price">$79.00 <del>$90.00</del></h5>
                            <a className="add_to_cart" href="#" data-bs-toggle="modal" data-bs-target="#cartModal">add
                                to cart</a>
                            <ul className="d-flex flex-wrap justify-content-end">
                                <li><a href="#"><i className="fal fa-heart"></i></a></li>
                                <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                    <div className="menu_item">
                        <div className="menu_item_img">
                            <img src={menu2_img_8} alt="menu" className="img-fluid w-100" />
                        </div>
                        <div className="menu_item_text">
                            <a className="category" href="#">grill</a>
                            <a className="title" href="menu_details.html">Onion Rings</a>
                            <p className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span>62</span>
                            </p>
                            <h5 className="price">$110.00</h5>
                            <a className="add_to_cart" href="#" data-bs-toggle="modal" data-bs-target="#cartModal">add
                                to cart</a>
                            <ul className="d-flex flex-wrap justify-content-end">
                                <li><a href="#"><i className="fal fa-heart"></i></a></li>
                                <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pagination mt_50">
                <div className="row">
                    <div className="col-12">
                        <nav aria-label="...">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#"><i className="fas fa-long-arrow-alt-left"></i></a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#"><i className="fas fa-long-arrow-alt-right"></i></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>


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


    < Footer/>

</>
  )
}

export default MenuItemStart
import React from 'react';
import counter_bg from '../../images/counter_bg.jpg';
import Footer from '../Footer';
function OrderDetails() {
  return (
    <>
    
    <section className="page_breadcrumb" style={{ backgroundImage: "url(" + counter_bg + ")" }}>
        <div className="breadcrumb_overlay">
            <div className="container">
                <div className="breadcrumb_text">
                    <h1>order history</h1>
                    <ul>
                        <li><a href="index-2.html">home</a></li>
                        <li><a href="#">order</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

 
    <section className="cart_view mt_100 xs_mt_70 mb_100 xs_mb_70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
              <div className="cart_list">
                <div className="table-responsive">
                  <table>
                    <tbody>
                      <tr>
                        <th className="pro_img">Image</th>
                        <th className="pro_name">details</th>
                        <th className="pro_status">price</th>
                        <th className="pro_select">quantity</th>
                        <th className="pro_tk">total</th>
                        <th className="pro_icon">
                          <a className="clear_all" href="#">clear all</a>
                        </th>
                      </tr>
                      <tr>
                        <td className="pro_img">
                          <img src="images/menu2_img_1.jpg" alt="product" className="img-fluid w-100" />
                        </td>
                        <td className="pro_name">
                          <a href="#">Hyderabadi Biryani</a>
                          <span>medium</span>
                          <p>coca-cola</p>
                          <p>7up</p>
                        </td>
                        <td className="pro_status">
                          <h6>$180.00</h6>
                        </td>
                        <td className="pro_select">
                          <div className="quentity_btn">
                            <button className="btn btn-danger"><i className="fal fa-minus" aria-hidden="true"></i></button>
                            <input type="text" placeholder="1" />
                            <button className="btn btn-success"><i className="fal fa-plus" aria-hidden="true"></i></button>
                          </div>
                        </td>
                        <td className="pro_tk">
                          <h6>$180,00</h6>
                        </td>
                        <td className="pro_icon">
                          <a href="#"><i className="far fa-times" aria-hidden="true"></i></a>
                        </td>
                      </tr>
                      {/* Additional rows... */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-12 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
              <div className="cart_list_footer_button mt_50">
                <div className="row">
                  <div className="col-xl-7 col-md-6">
                    <div className="cart_list_footer_button_img">
                      <img src="images/cart_offer_img.jpg" alt="cart offer" className="img-fluid w-100" />
                    </div>
                  </div>
                  <div className="col-xl-5 col-md-6">
                    <div className="cart_list_footer_button_text">
                      <h6>total cart (02)</h6>
                      <p>subtotal: <span>$124.00</span></p>
                      <p>delivery: <span>$00.00</span></p>
                      <p>discount: <span>$10.00</span></p>
                      <p className="total"><span>total:</span> <span>$134.00</span></p>
                      <form>
                        <input type="text" placeholder="Coupon Code" />
                        <button type="submit">apply</button>
                      </form>
                      <a className="common_btn" href="check_out.html">checkout</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    <Footer />
    </>
  )
}

export default OrderDetails
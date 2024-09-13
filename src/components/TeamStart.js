import React from 'react'
import chef_1 from '../images/chef_1.jpg';
import chef_2 from '../images/chef_2.jpg';
import chef_3 from '../images/chef_3.jpg';
import chef_4 from '../images/chef_4.jpg';
import chef_5 from '../images/chef_5.jpg';

function TeamStart() {
  return (
    <>
        <section className="team mt_100 xs_mt_70 pt_95 xs_pt_65 pb_95 xs_pb_65">
        <div className="container">
            <div className="row wow fadeInUp" data-wow-duration="1s">
                <div className="col-md-8 col-lg-7 col-xl-6">
                    <div className="section_heading mb_25">
                        <h4>our team</h4>
                        <h2>meet our expert chefs</h2>
                    </div>
                </div>
            </div>

            <div className="row team_slider">
                <div className="col-xl-3 wow fadeInUp" data-wow-duration="1s">
                    <div className="single_team">
                        <div className="single_team_img">
                            <img src={chef_1} alt="team" className="img-fluid w-100" />
                        </div>
                        <div className="single_team_text">
                            <h4>ismat joha</h4>
                            <p>senior chef</p>
                            <ul className="d-flex flex-wrap">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 wow fadeInUp" data-wow-duration="1s">
                    <div className="single_team">
                        <div className="single_team_img">
                            <img src={chef_2} alt="team" className="img-fluid w-100" />
                        </div>
                        <div className="single_team_text">
                            <h4>arun chandra</h4>
                            <p>senior chef</p>
                            <ul className="d-flex flex-wrap">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 wow fadeInUp" data-wow-duration="1s">
                    <div className="single_team">
                        <div className="single_team_img">
                            <img src={chef_3} alt="team" className="img-fluid w-100" />
                        </div>
                        <div className="single_team_text">
                            <h4>isita rahman</h4>
                            <p>senior chef</p>
                            <ul className="d-flex flex-wrap">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 wow fadeInUp" data-wow-duration="1s">
                    <div className="single_team">
                        <div className="single_team_img">
                            <img src={chef_4} alt="team" className="img-fluid w-100" />
                        </div>
                        <div className="single_team_text">
                            <h4>khandakar rashed</h4>
                            <p>senior chef</p>
                            <ul className="d-flex flex-wrap">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 wow fadeInUp" data-wow-duration="1s">
                    <div className="single_team">
                        <div className="single_team_img">
                            <img src={chef_5} alt="team" className="img-fluid w-100" />
                        </div>
                        <div className="single_team_text">
                            <h4>naurin nipu</h4>
                            <p>senior chef</p>
                            <ul className="d-flex flex-wrap ">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default TeamStart
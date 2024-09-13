import React from 'react'
function Topnavbar() {
    return (
        <>
            <section className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-sm-6 col-md-8">
                            <ul className="topbar_info d-flex flex-wrap d-none d-sm-flex">
                                <li><a href="mailto:example@gmail.com"><i class="fas fa-envelope"></i> examplemail@gmail.com</a>
                                </li>
                                <li className="d-none d-md-block"><a href="callto:8851815266"><i class="fas fa-phone-alt"></i>
                                    +96487452145214</a></li>
                            </ul>
                        </div>
                        <div className="col-xl-6 col-sm-6 col-md-4">
                            <ul className="topbar_icon d-flex flex-wrap">
                                <li><a href="https://www.google.com"><i class="fab fa-facebook-f"></i></a> </li>
                                <li><a href="https://www.google.com"><i class="fab fa-twitter"></i></a> </li>
                                <li><a href="https://www.google.com"><i class="fab fa-linkedin-in"></i></a> </li>
                                <li><a href="https://www.google.com"><i class="fab fa-behance"></i></a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Topnavbar
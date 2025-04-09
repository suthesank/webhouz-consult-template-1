import Link from "next/link"


export default function Header4({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header className="header about-bg d-none d-lg-block">
                <div className={`header-area header ${scroll ? "sticky" : ""}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/"><img src="/assets/images/logo/logo5.png" alt="" /></Link>
                                    </div>
                                    <div className="main-menu-ex homepage3 homepage5">
                                        <ul>
                                            <li><Link href="/" className="font-nunito font-16 weight-600 color-1">Home</Link>
                                            </li>
                                            <li><Link href="/about" className="font-nunito font-16 weight-600 color-1">About Us</Link>
                                            </li>
                                            <li><Link href="#" className="font-nunito font-16 weight-600 color-ni">Our Services
                                                <span><i className="fa-solid fa-angle-down" /></span></Link>
                                                <ul className="dropdown-padding">
                                                    <li><Link href="/about" className="font-nunito font-16 weight-500 color"> Our
                                                        Service <i className="fa-solid fa-angle-right" /></Link>
                                                        <ul>
                                                            <li><Link href="/servicev1" className="font-nunito font-16 weight-500 color-ni">Service
                                                                V1</Link></li>
                                                            <li><Link href="/servicev2" className="font-nunito font-16 weight-500 color-ni">Service
                                                                V2</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link href="/about" className="font-nunito font-16 weight-500 color">Service Details <i className="fa-solid fa-angle-right" /></Link>
                                                        <ul>
                                                            <li><Link href="/serviceleft" className="font-nunito font-16 weight-500 color-ni">Service
                                                                Details Left</Link></li>
                                                            <li><Link href="/serviceright" className="font-nunito font-16 weight-500 color-ni">Service
                                                                Details Right</Link></li>
                                                            <li><Link href="/servicemiddle" className="font-nunito font-16 weight-500 color-ni">Single
                                                                Service</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><Link href="#" className="font-nunito font-16 weight-600 color-ni">Case Studies
                                                <span><i className="fa-solid fa-angle-down" /></span></Link>
                                                <ul>
                                                    <li><Link href="/casestudy1" className="font-nunito font-16 weight-500 color">Case Study</Link></li>
                                                    <li><Link href="/caseleft" className="font-nunito font-16 weight-500 color">Case Details left</Link>
                                                    </li>
                                                    <li><Link href="/caseright" className="font-nunito font-16 weight-500 color">Case Details Right</Link>
                                                    </li>
                                                    <li><Link href="/casemiddle" className="font-nunito font-16 weight-500 color">Single Case</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="#" className="font-nunito font-16 weight-600 color-ni"> Our Blogs <span><i className="fa-solid fa-angle-down" /></span></Link>
                                                <ul>
                                                    <li><Link href="/blog2" className="font-nunito font-16 weight-500 color">Our
                                                        Blog <i className="fa-solid fa-angle-right" /></Link>
                                                        <ul>
                                                            <li><Link href="/blog2" className="font-nunito font-16 weight-500 color">Blog One</Link>
                                                            </li>
                                                            <li><Link href="/blog3" className="font-nunito font-16 weight-500 color">Blog Two</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><Link href="/blogleft" className="font-nunito font-16 weight-500 color">Blog Details <i className="fa-solid fa-angle-right" /></Link>
                                                        <ul>
                                                            <li><Link href="/blogleft" className="font-nunito font-16 weight-500 color">Blog Details
                                                                Left</Link></li>
                                                            <li><Link href="/blogright" className="font-nunito font-16 weight-500 color">BLog Details
                                                                Right</Link></li>
                                                            <li><Link href="/blogmiddle" className="font-nunito font-16 weight-500 color">Single Blog</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><Link href="#" className="font-nunito font-16 weight-600 color-ni">Pages <span><i className="fa-solid fa-angle-down" /></span></Link>
                                                <ul>
                                                    <li><Link href="#" className="font-nunito font-16 weight-600 color-ni">Testimonials</Link>
                                                    </li>
                                                    <li><Link href="/team" className="font-nunito font-16 weight-500 color-ni">Our
                                                        Team</Link></li>
                                                    <li><Link href="/team-details" className="font-nunito font-16 weight-500 color-ni">Single Team</Link></li>
                                                    <li><Link href="/contact1" className="font-nunito font-16 weight-500 color">Contact 1</Link></li>
                                                    <li><Link href="/contact2" className="font-nunito font-16 weight-500 color">Contact 2</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="contact-3 d-lg-block d-none">
                                        <div className="all-3-btn theme-btn1">
                                            {/* <div className="first-name-input header3">
                                                <select name="country" id="country" className="country-area">
                                                    <option value={1} data-display="ENG" className="font-nunito weight-600">ENG
                                                    </option>
                                                    <option value>BAN</option>
                                                    <option value>IND</option>
                                                    <option value>ARG</option>
                                                    <option value>USA</option>
                                                    <option value>UK</option>
                                                </select>
                                            </div> */}
                                            <div className="theme-btn-3">
                                                <img src="/assets/images/icons/phone6.svg" alt="" className="imgicon" />
                                                <div className="phonr6-area">
                                                    <p className="font-16 lineh-16 color-25 weight-400 font-nunito margin-b8">Free
                                                        Consultation</p>
                                                    <Link href="/tel:+601111019592" className="font-nunito font-18 lineh-18 weight-600 color-25">+601111019592</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

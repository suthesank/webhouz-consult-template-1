import Link from "next/link"


export default function Header6({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header className="header about-bg d-none d-lg-block">
                <div className={`header-area header ${scroll ? "sticky" : ""}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/index1"><img src="/assets/images/logo/logo9.png" alt="" /></Link>
                                    </div>
                                    <div className="main-menu-ex homepage3 homepage5 homepage6">
                                        <ul>
                                            <li className="mega-dropdawn"><Link href="#" className="font-nunito">Home <i className="fa-solid fa-angle-down" /></Link>
                                                <ul className="mega-dropdawn-ul backgroudnone">
                                                    <div className="mega-menu-all">
                                                        <div className="row">
                                                            <div className="col-lg-3">
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo4.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index1" className="theme-btn11 font-f-3 consultingbtn8"><span className="font-nunito font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index1" className="theme-btn11 font-f-3 consultingbtn8 d-inline-block margin-t"><span className="font-nunito font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index1" className="font-nunito font-40 lineh-52 weight-500 colorhp3 colorpera">Law
                                                                    Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo7.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index7" className="theme-btn11 font-f-3 consultingbtn8"><span className="font-nunito font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index2" className="theme-btn11 font-f-3 consultingbtn8 d-inline-block margin-t"><span className="font-nunito font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index7" className="font-nunito font-40 lineh-52 weight-500 colorhp3 colorpera">Law
                                                                    Consulting O2</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo2.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index3" className="theme-btn11 font-f-3 consultingbtn8"><span className="font-nunito font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index3" className="theme-btn11 font-f-3 consultingbtn8 d-inline-block margin-t"><span className="font-nunito font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index3" className="font-nunito font-40 lineh-52 weight-500 colorhp3 colorpera">Tax
                                                                    Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo8.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index8" className="theme-btn11 font-f-3 consultingbtn8"><span className="font-nunito font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index4" className="theme-btn11 font-f-3 consultingbtn8 d-inline-block margin-t"><span className="font-nunito font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index8" className="font-nunito font-40 lineh-52 weight-500 colorhp3 colorpera">Tax
                                                                    Consulting O2</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo1.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index2" className="theme-btn11 font-f-3 consultingbtn8"><span className="font-nunito font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index5" className="theme-btn11 font-f-3 consultingbtn8 d-inline-block margin-t"><span className="font-nunito font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index2" className="font-nunito font-40 lineh-52 weight-500 colorhp3 colorpera">Bussiness
                                                                    Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo5.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index5" className="theme-btn11 font-f-3 consultingbtn8"><span className="font-nunito font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index6" className="theme-btn11 font-f-3 consultingbtn8 d-inline-block margin-t"><span className="font-nunito font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index5" className="font-nunito font-40 lineh-52 weight-500 colorhp3 colorpera">Bussiness
                                                                    Consulting O2</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo3.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index4" className="theme-btn11 font-f-3 consultingbtn8"><span className="font-nunito font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index7" className="theme-btn11 font-f-3 consultingbtn8 d-inline-block margin-t"><span className="font-nunito font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index4" className="font-nunito font-40 lineh-52 weight-500 colorhp3 colorpera">Finance
                                                                    Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo6.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index6" className="theme-btn11 font-f-3 consultingbtn8"><span className="font-nunito font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index8" className="theme-btn11 font-f-3 consultingbtn8 d-inline-block margin-t"><span className="font-nunito font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index6" className="font-nunito font-40 lineh-52 weight-500 colorhp3 colorpera">Finance
                                                                    Consulting O2</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo9.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index9" className="theme-btn11 font-f-3 consultingbtn8"><span className="font-nunito font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index9" className="theme-btn11 font-f-3 consultingbtn8 d-inline-block margin-t"><span className="font-nunito font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index9" className="font-nunito font-40 lineh-52 weight-500 colorhp3 colorpera">Insurance
                                                                    Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo10.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index10" className="theme-btn11 font-f-3 consultingbtn8"><span className="font-nunito font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index10" className="theme-btn11 font-f-3 consultingbtn8 d-inline-block margin-t"><span className="font-nunito font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index10" className="font-nunito font-40 lineh-52 weight-500 colorhp3 colorpera">Insurance
                                                                    Consulting O2</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo11.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index11" className="theme-btn11 font-f-3 consultingbtn8"><span className="font-nunito font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index11" className="theme-btn11 font-f-3 consultingbtn8 d-inline-block margin-t"><span className="font-nunito font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index11" className="font-nunito font-40 lineh-52 weight-500 colorhp3 colorpera">Visa
                                                                    Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo12.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index12" className="theme-btn11 font-f-3 consultingbtn8"><span className="font-nunito font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index12" className="theme-btn11 font-f-3 consultingbtn8 d-inline-block margin-t"><span className="font-nunito font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index12" className="font-nunito font-40 lineh-52 weight-500 colorhp3 colorpera">Visa
                                                                    Consulting O2</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </ul>
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
                                                    <li><Link href="/caseright" className="font-nunito font-16 weight-500 color">Case Detals Right</Link>
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
                                                    <li><Link href="/team" className="font-nunito font-16 weight-500 color">Our
                                                        Team</Link></li>
                                                    <li><Link href="/team-details" className="font-nunito font-16 weight-500 color">Single Team</Link></li>
                                                    <li><Link href="/contact1" className="font-nunito font-16 weight-500 color">Contact 1</Link></li>
                                                    <li><Link href="/contact2" className="font-nunito font-16 weight-500 color">Contact 2</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="contact-3 d-lg-block d-none">
                                        <div className="all-3-btn theme-btn1">
                                            <div className="first-name-input header3">
                                                <select name="country" id="country" className="country-area">
                                                    <option value={1} data-display="Eng" className="font-nunito weight-600">Eng
                                                    </option>
                                                    <option value>Ban</option>
                                                    <option value>Span</option>
                                                    <option value>Hindi</option>
                                                    <option value>Tamil</option>
                                                    <option value>Turkey</option>
                                                </select>
                                            </div>
                                            <div className="theme-btn-3">
                                                <img src="/assets/images/icons/phoneheader1.png" alt="" className="imgicon" />
                                                <div className="phonr6-area">
                                                    <p className="font-16 lineh-16 color-h5 weight-400 font-nunito margin-b8">Free
                                                        Consultation</p>
                                                    <Link href="/tel:+601111019592" className="font-nunito font-18 lineh-18 weight-600 color-h5">+601111019592</Link>
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

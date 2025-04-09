import Link from "next/link"


export default function Header3({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header className="header about-bg d-none d-lg-block">
                <div className={`header-area header ${scroll ? "sticky" : ""}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/index1"><img src="/assets/images/logo/logo1.png" alt="" /></Link>
                                    </div>
                                    <div className="main-menu-ex homepage5">
                                        <ul>
                                            <li className="mega-dropdawn"><Link href="#">Home <i className="fa-solid fa-angle-down" /></Link>
                                                <ul className="mega-dropdawn-ul backgroudnone">
                                                    <div className="mega-menu-all">
                                                        <div className="row">
                                                            <div className="col-lg-3">
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo4.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index1" className="theme-btn11 font-f-3 consultingbtn3"><span className="font-ks font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index1" className="theme-btn11 font-f-3 consultingbtn3 d-inline-block margin-t"><span className="font-ks font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index1" className="font-ks font-40 lineh-52 weight-500 colorhp3 colorpera">Law
                                                                    Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo7.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index7" className="theme-btn11 font-f-3 consultingbtn3"><span className="font-ks font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index2" className="theme-btn11 font-f-3 consultingbtn3 d-inline-block margin-t"><span className="font-ks font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index7" className="font-ks font-40 lineh-52 weight-500 colorhp3 colorpera">Law
                                                                    Consulting O2</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo2.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index3" className="theme-btn11 font-f-3 consultingbtn3"><span className="font-ks font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index3" className="theme-btn11 font-f-3 consultingbtn3 d-inline-block margin-t"><span className="font-ks font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index3" className="font-ks font-40 lineh-52 weight-500 colorhp3 colorpera">Tax
                                                                    Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo8.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index8" className="theme-btn11 font-f-3 consultingbtn3"><span className="font-ks font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index4" className="theme-btn11 font-f-3 consultingbtn3 d-inline-block margin-t"><span className="font-ks font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index8" className="font-ks font-40 lineh-52 weight-500 colorhp3 colorpera">Tax
                                                                    Consulting O2</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo1.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index2" className="theme-btn11 font-f-3 consultingbtn3"><span className="font-ks font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index5" className="theme-btn11 font-f-3 consultingbtn3 d-inline-block margin-t"><span className="font-ks font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index2" className="font-ks font-40 lineh-52 weight-500 colorhp3 colorpera">Bussiness
                                                                    Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo5.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index5" className="theme-btn11 font-f-3 consultingbtn3"><span className="font-ks font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index6" className="theme-btn11 font-f-3 consultingbtn3 d-inline-block margin-t"><span className="font-ks font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index5" className="font-ks font-40 lineh-52 weight-500 colorhp3 colorpera">Bussiness
                                                                    Consulting O2</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo3.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index4" className="theme-btn11 font-f-3 consultingbtn3"><span className="font-ks font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index7" className="theme-btn11 font-f-3 consultingbtn3 d-inline-block margin-t"><span className="font-ks font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index4" className="font-ks font-40 lineh-52 weight-500 colorhp3 colorpera">Finance
                                                                    Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo6.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index6" className="theme-btn11 font-f-3 consultingbtn3"><span className="font-ks font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index8" className="theme-btn11 font-f-3 consultingbtn3 d-inline-block margin-t"><span className="font-ks font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index6" className="font-ks font-40 lineh-52 weight-500 colorhp3 colorpera">Finance
                                                                    Consulting O2</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo9.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index9" className="theme-btn11 font-f-3 consultingbtn3"><span className="font-ks font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index9" className="theme-btn11 font-f-3 consultingbtn3 d-inline-block margin-t"><span className="font-ks font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index9" className="font-ks font-40 lineh-52 weight-500 colorhp3 colorpera">Insurance
                                                                    Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo10.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index10" className="theme-btn11 font-f-3 consultingbtn3"><span className="font-ks font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index10" className="theme-btn11 font-f-3 consultingbtn3 d-inline-block margin-t"><span className="font-ks font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index10" className="font-ks font-40 lineh-52 weight-500 colorhp3 colorpera">Insurance
                                                                    Consulting O2</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo11.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index11" className="theme-btn11 font-f-3 consultingbtn3"><span className="font-ks font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index11" className="theme-btn11 font-f-3 consultingbtn3 d-inline-block margin-t"><span className="font-ks font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index11" className="font-ks font-40 lineh-52 weight-500 colorhp3 colorpera">Visa
                                                                    Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo12.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index12" className="theme-btn11 font-f-3 consultingbtn3"><span className="font-ks font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index12" className="theme-btn11 font-f-3 consultingbtn3 d-inline-block margin-t"><span className="font-ks font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index12" className="font-ks font-40 lineh-52 weight-500 colorhp3 colorpera">VIsa
                                                                    Consulting O2</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </ul>
                                            </li>
                                            <li><Link href="/about" className="font-ks font-16 weight-500 color-1">About Us</Link>
                                            </li>
                                            <li><Link href="#" className="font-ks font-16 weight-500 color-1">Our Services <span><i className="fa-solid fa-angle-down" /></span></Link>
                                                <ul className="dropdown-padding">
                                                    <li><Link href="/about" className="font-ks font-16 weight-500 color"> Our
                                                        Service <span><i className="fa-solid fa-angle-right" /></span></Link>
                                                        <ul>
                                                            <li><Link href="/servicev1" className="font-ks font-16 weight-500 color">Service V1</Link></li>
                                                            <li><Link href="/servicev2" className="font-ks font-16 weight-500 color">Service V2</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link href="/about" className="font-ks font-16 weight-500 color">Service
                                                        Details <span><i className="fa-solid fa-angle-right" /></span></Link>
                                                        <ul>
                                                            <li><Link href="/serviceleft" className="font-ks font-16 weight-500 color">Service Details
                                                                Left</Link></li>
                                                            <li><Link href="/serviceright" className="font-ks font-16 weight-500 color">Service Details
                                                                Right</Link></li>
                                                            <li><Link href="/servicemiddle" className="font-ks font-16 weight-500 color">Single Service</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><Link href="#" className="font-ks font-16 weight-500 color-1">Case Studies <span><i className="fa-solid fa-angle-down" /></span></Link>
                                                <ul>
                                                    <li><Link href="/casestudy1" className="font-ks font-16 weight-500 color">Case
                                                        Study</Link></li>
                                                    <li><Link href="/caseleft" className="font-ks font-16 weight-500 color">Case
                                                        Details left</Link></li>
                                                    <li><Link href="/caseright" className="font-ks font-16 weight-500 color">Case
                                                        Details Right</Link></li>
                                                    <li><Link href="/casemiddle" className="font-ks font-16 weight-500 color">Single Case</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="#" className="font-ks font-16 weight-500 color-1">Our Blogs <span><i className="fa-solid fa-angle-down" /></span></Link>
                                                <ul>
                                                    <li><Link href="/blog2" className="font-ks font-16 weight-500 color">Our Blog
                                                        <span><i className="fa-solid fa-angle-right" /></span></Link>
                                                        <ul>
                                                            <li><Link href="/blog2" className="font-ks font-16 weight-500 color">Blog One</Link></li>
                                                            <li><Link href="/blog3" className="font-ks font-16 weight-500 color">Blog Two</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link href="/blogleft" className="font-ks font-16 weight-500 color">Blog
                                                        Details <span><i className="fa-solid fa-angle-right" /></span></Link>
                                                        <ul>
                                                            <li><Link href="/blogleft" className="font-ks font-16 weight-500 color">Blog Details
                                                                Left</Link></li>
                                                            <li><Link href="/blogright" className="font-ks font-16 weight-500 color">BLog Details
                                                                Right</Link></li>
                                                            <li><Link href="/blogmiddle" className="font-ks font-16 weight-500 color">Single Blog</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><Link href="#" className="font-ks font-16 weight-500 color-1">Pages <span><i className="fa-solid fa-angle-down" /></span></Link>
                                                <ul>
                                                    <li><Link href="#" className="font-ks font-16 weight-500 color-1">Testimonials</Link>
                                                    </li>
                                                    <li><Link href="/team" className="font-ks font-16 weight-500 color">Our
                                                        Team</Link></li>
                                                    <li><Link href="/team-details" className="font-ks font-16 weight-500 color">Single Team</Link></li>
                                                    <li><Link href="/contact1" className="font-ks font-16 weight-500 color">Contact
                                                        1</Link></li>
                                                    <li><Link href="/contact2" className="font-ks font-16 weight-500 color">Contact
                                                        2</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="contact-3 d-lg-block d-none">
                                        <div className="all-3-btn theme-btn">
                                            <div className="theme-btn-1">
                                                <img src="/assets/images/icons/phoneicon.svg" alt="" className="imgicon" />
                                                <div className="call-text-area">
                                                    <Link href="/tel:425-264-8637" className=" font-ks weight-700 lineh-16 font-16 color"> <span className="font-ks font-10 weight-600 color d-inline-block">Call
                                                        Now:</span> <br />425-264-8637</Link>
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

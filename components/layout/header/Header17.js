import Link from "next/link"

export default function Header17({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header className="header about-bg d-none d-lg-block">
                <div className={`header-area header ${scroll ? "sticky" : ""}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/index1"><img src="/assets/images/logo/logo3.png" alt="" /></Link>
                                    </div>
                                    <div className="main-menu-ex homepage5 mainmenuex">
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
                                                                        <Link href="/index1" className="theme-btn11 font-f-3 consultingbtn2"><span className="font-outfit font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index1" className="theme-btn11 font-f-3 consultingbtn2 d-inline-block margin-t"><span className="font-outfit font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index1" className="font-outfit font-40 lineh-52 weight-500 colorhp3 colorpera">Law
                                                                    Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo7.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index7" className="theme-btn11 font-f-3 consultingbtn2"><span className="font-outfit font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index2" className="theme-btn11 font-f-3 consultingbtn2 d-inline-block margin-t"><span className="font-outfit font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index7" className="font-outfit font-40 lineh-52 weight-500 colorhp3 colorpera">Law
                                                                    Consulting O2</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo2.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index3" className="theme-btn11 font-f-3 consultingbtn2"><span className="font-outfit font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index3" className="theme-btn11 font-f-3 consultingbtn2 d-inline-block margin-t"><span className="font-outfit font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index3" className="font-outfit font-40 lineh-52 weight-500 colorhp3 colorpera">Tax
                                                                    Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo8.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index8" className="theme-btn11 font-f-3 consultingbtn2"><span className="font-outfit font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index4" className="theme-btn11 font-f-3 consultingbtn2 d-inline-block margin-t"><span className="font-outfit font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index8" className="font-outfit font-40 lineh-52 weight-500 colorhp3 colorpera">Tax
                                                                    Consulting O2</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo1.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index2" className="theme-btn11 font-f-3 consultingbtn2"><span className="font-outfit font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index5" className="theme-btn11 font-f-3 consultingbtn2 d-inline-block margin-t"><span className="font-outfit font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index2" className="font-outfit font-40 lineh-52 weight-500 colorhp3 colorpera">Bussiness
                                                                    Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo5.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index5" className="theme-btn11 font-f-3 consultingbtn2"><span className="font-outfit font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index6" className="theme-btn11 font-f-3 consultingbtn2 d-inline-block margin-t"><span className="font-outfit font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index5" className="font-outfit font-40 lineh-52 weight-500 colorhp3 colorpera">Business
                                                                    Consulting O2</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo3.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index4" className="theme-btn11 font-f-3 consultingbtn2"><span className="font-outfit font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index7" className="theme-btn11 font-f-3 consultingbtn2 d-inline-block margin-t"><span className="font-outfit font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index4" className="font-outfit font-40 lineh-52 weight-500 colorhp3 colorpera">Finance
                                                                    Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo6.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index6" className="theme-btn11 font-f-3 consultingbtn2"><span className="font-outfit font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index8" className="theme-btn11 font-f-3 consultingbtn2 d-inline-block margin-t"><span className="font-outfit font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index6" className="font-outfit font-40 lineh-52 weight-500 colorhp3 colorpera">Finance
                                                                    Consulting O2</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo9.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index9" className="theme-btn11 font-f-3 consultingbtn2"><span className="font-outfit font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index9" className="theme-btn11 font-f-3 consultingbtn2 d-inline-block margin-t"><span className="font-outfit font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index9" className="font-outfit font-40 lineh-52 weight-500 colorhp3 colorpera">Insurance
                                                                    Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo10.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index10" className="theme-btn11 font-f-3 consultingbtn2"><span className="font-outfit font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index10" className="theme-btn11 font-f-3 consultingbtn2 d-inline-block margin-t"><span className="font-outfit font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index10" className="font-outfit font-40 lineh-52 weight-500 colorhp3 colorpera">Insurance
                                                                    Consulting O2</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo11.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index11" className="theme-btn11 font-f-3 consultingbtn2"><span className="font-outfit font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index11" className="theme-btn11 font-f-3 consultingbtn2 d-inline-block margin-t"><span className="font-outfit font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index11" className="font-outfit font-40 lineh-52 weight-500 colorhp3 colorpera">Visa
                                                                    Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo12.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index12" className="theme-btn11 font-f-3 consultingbtn2"><span className="font-outfit font-16 lineh-16 weight-600 color">Multipage
                                                                            <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index12" className="theme-btn11 font-f-3 consultingbtn2 d-inline-block margin-t"><span className="font-outfit font-16 lineh-16 weight-600 color">Landing
                                                                            Page <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index12" className="font-outfit font-40 lineh-52 weight-500 colorhp3 colorpera">Visa
                                                                    Consulting O2</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </ul>
                                            </li>
                                            <li><Link href="/#about" className="font-outfit font-18 weight-500 color-1">About Us</Link>
                                            </li>
                                            <li><Link href="/#service" className="font-outfit font-18 weight-500 color-1">Our
                                                Services</Link></li>
                                            <li><Link href="/#casestudy" className="font-outfit font-18 weight-500 color-1">Case
                                                Study</Link></li>
                                            <li><Link href="/#blog" className="font-outfit font-18 weight-500 color-1"> Our Blog </Link>
                                            </li>
                                            <li><Link href="/#pricing" className="font-outfit font-18 weight-500 color-1">Pricing </Link>
                                            </li>
                                            <li><Link href="/#contact" className="font-outfit font-18 weight-500 color-1">Contact </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="contact-3 d-lg-block d-none">
                                        <div className="all-3-btn theme-btn1">
                                            <div className="theme-btn-2">
                                                <img src="/assets/images/icons/phone2.svg" alt="" className="imgicon" />
                                                <Link href="/tel:+601111019592" className="font-outfit font-18 lineh-18 weight-600 color-17">+601111019592</Link>
                                            </div>
                                            <div className="theme-btn4">
                                                <Link href="/contact1" className="theme-btn5 font-outfit font-16  weight-700 ">GET
                                                    STARTED <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
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

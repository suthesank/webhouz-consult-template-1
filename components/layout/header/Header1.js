import Link from "next/link"


export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header className="header about-bg d-none d-lg-block">
                <div className={`header-area header header-sticky ${scroll ? "sticky" : ""}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/"><img src="/assets/images/logo/logo7.png" alt="" /></Link>
                                    </div>
                                    <div className="main-menu-ex homepage4 main-menu-ex7">
                                        <ul>
                                            <li><Link href="/" className="font-ks font-16 weight-500 color">Home</Link></li>
                                            <li><Link href="/about" className="font-ks font-16 weight-500 color">About Us</Link></li>
                                            <li><Link href="#" className="font-ks font-16 weight-500 color">Our Services <span><i className="fa-solid fa-angle-down" /></span></Link>
                                                <ul className="dropdown-padding">
                                                    <li><Link href="/about" className="font-ks font-16 weight-500 color">Service
                                                        <span><i className="fa-solid fa-angle-right" /></span></Link>
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
                                                            <li><Link href="/servicemiddle" className="font-ks font-16 weight-500 color">Service Single</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><Link href="/testimonials" className="font-ks font-16 weight-500 color">Case
                                                Studies <span><i className="fa-solid fa-angle-down" /></span></Link>
                                                <ul>
                                                    <li><Link href="/casestudy1" className="font-ks font-16 weight-500 color">Case
                                                        Study</Link></li>
                                                    <li><Link href="/caseleft" className="font-ks font-16 weight-500 color">Case
                                                        Details Left</Link></li>
                                                    <li><Link href="/caseright" className="font-ks font-16 weight-500 color">Case
                                                        Details Right</Link></li>
                                                    <li><Link href="/casemiddle" className="font-ks font-16 weight-500 color">Case
                                                        Single </Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="#" className="font-ks font-16 weight-500 color"> Our Blog <span><i className="fa-solid fa-angle-down" /></span></Link>
                                                <ul>
                                                    <li><Link href="/blog2" className="font-ks font-16 weight-500 color"> Our Blog
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
                                                            <li><Link href="/blogmiddle" className="font-ks font-16 weight-500 color">Blog Single</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><Link href="#" className="font-ks font-16 weight-500 color">Pages <span><i className="fa-solid fa-angle-down" /></span></Link>
                                                <ul>
                                                    <li><Link href="/testimonials" className="font-ks font-16 weight-500 color">Testimonials</Link></li>
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
                                        <div className="shecdule-btn1">
                                            <Link href="/contact1" className="font-ks font-16 lineh-16 color weight-700 shedule-btn2">Schedule
                                                Consulation <span><i className="fa-solid fa-arrow-right" /></span></Link>
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

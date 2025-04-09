import Link from "next/link"

export default function Footer9() {
    return (
        <>
            <div className="footer9-section-area6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer4-all-area footer6 section-padding15">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="footer-3logo">
                                            <img src="/assets/images/logo/logo9.png" alt="" />
                                            <p className="font-nunito font-16 lineh-26 color-nuni margin-t margin-b24">Include any
                                                additional information that may be relevant or helpful for visitors, such as
                                                FAQs, pricing options, or service packages. Provide contact details.</p>
                                        </div>
                                        <div className="social3-links-area list9area">
                                            <ul>
                                                <li><Link href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                                                <li><Link href="#" className="ml1"><i className="fa-brands fa-google-plus-g" /></Link></li>
                                                <li><Link href="#" className="ml1"><i className="fa-brands fa-instagram" /></Link></li>
                                                <li><Link href="#" className="ml1"><i className="fa-brands fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <div className="about-3-links align-items-center">
                                            <h1 className="font-20 lineh-20 font-lora weight-600 color-ni">About Link</h1>
                                            <ul>
                                                <li><Link href="/blog2" className="font-nunito font-16 lineh-16 colorhp1 weight-600 margin-t32 d-inline-block">Our
                                                    Blog</Link></li>
                                                <li><Link href="/about" className="font-nunito font-16 lineh-16 colorhp1 weight-600 margin-t d-inline-block">About
                                                    Us</Link></li>
                                                <li><Link href="/servicev1" className="font-nunito font-16 lineh-16 colorhp1 weight-600 margin-t d-inline-block">
                                                    Practice Areas</Link></li>
                                                <li><Link href="/casestudy1" className="font-nunito font-16 lineh-16 colorhp1 weight-600 margin-t d-inline-block">Case
                                                    Studies</Link></li>
                                                <li><Link href="/testimonials" className="font-nunito font-16 lineh-16 colorhp1 weight-600 margin-t d-inline-block">Testimonials</Link>
                                                </li>
                                                <li><Link href="/contact1" className="font-nunito font-16 lineh-16 colorhp1 weight-600 margin-t d-inline-block">Contact
                                                    Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="contcat4-footer">
                                            <h1 className="font-20 lineh-20 font-lora weight-600 color-ni">Get in touch</h1>
                                            <div className="location-icon4 margin-t32">
                                                <div className="image5">
                                                    <img src="/assets/images/icons/email5.png" alt="" />
                                                </div>
                                                <Link href="/mailto:info@taxvice.com" className="font-ks font-16 lineh-24 weight-500 colorhp1">info@taxvice.com</Link>
                                            </div>
                                            <div className="location-icon4 margin-t">
                                                <div className="imgge5">
                                                    <img src="/assets/images/icons/location4.svg" alt="" />
                                                </div>
                                                <Link href="#" className="font-ks font-16 lineh-24 weight-500 colorhp1">8708 Technology
                                                    Forest <br /> Pl Suite 125 -G, The <br /> Woodlands, TX 77381</Link>
                                            </div>
                                            <div className="location-icon4 margin-t">
                                                <div className="image5">
                                                    <img src="/assets/images/icons/phone7.svg" alt="" />
                                                </div>
                                                <Link href="/tel:+601111019592" className="font-ks font-16 lineh-24 weight-500 colorhp1">+601111019592</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="cta-contact6">
                                            <h1 className="font-20 lineh-20 font-lora weight-600 color-h9">Subscribe Our Newsletter
                                            </h1>
                                            <form className="margin-t32">
                                                <div className="cta5-form">
                                                    <input type="text" placeholder="Enter Your email" />
                                                    <div className="buttnocontact1">
                                                        <button type="Submit" className="font-ks font-1 lineh-16 weight-700 color contactbtn6 contacts9">Subscribe
                                                            Now <span className="ml1"><i className="fa-solid fa-arrow-right" /></span></button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border7" />
                            <div className="copyright4 text-center">
                                <p className="font-16 font-nunito color-28 weight-500 ">Copyright {new Date().getFullYear()} © WebHouz Technologies,
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor41.png" alt="" className="elementor61" />
                <img src="/assets/images/elementor/elementor42.png" alt="" className="elementors62" />
            </div>

        </>
    )
}

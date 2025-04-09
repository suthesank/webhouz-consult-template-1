'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us">
                <div>
                    <div className="cotactinner-section-area section-padding5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="contcat5-textarea5">
                                        <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">Contact
                                            Us</span>
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20 clienth2">Contact Us for
                                            Expert Legal Guidance</h1>
                                        <p className="font-ks font-16 weight-500 lineh-26 color-30">Provide professional advice and guidance
                                            on legal matters, helping clients understand their rights, obligations, and potential
                                            courses.</p>
                                        <div className="phone7-textarea margin-t32 contactinnerbg">
                                            <div className="phone7-icon">
                                                <img src="/assets/images/icons/phone8.png" alt="" />
                                            </div>
                                            <div className="phone7-text">
                                                <p className="font-16 lineh-16 weight-500 font-ks color-30 margin-b">Gives us a Call</p>
                                                <Link href="/tel:+601111019592" className="font-lora font-24 weight-700 lineh-24 color-29">+601111019592</Link>
                                            </div>
                                        </div>
                                        <div className="phone7-textarea margin-t contactinnerbg">
                                            <div className="phone7-icon">
                                                <img src="/assets/images/icons/email7.png" alt="" />
                                            </div>
                                            <div className="phone7-text">
                                                <p className="font-16 lineh-16 weight-500 font-ks color-30 margin-b">Send me Mail</p>
                                                <Link href="/mailto:Consult@hotmail.com" className="font-lora font-24 weight-700 lineh-24 color-29">Consult@hotmail.com</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="contact5-main-section">
                                        <div className="contact-main-text">
                                            <h1 className="font-lora font-24 lineh-24 weight-600 color">Send us a Message</h1>
                                            <p className="font-ks font-16 lineh-26 weight-500 color margin-t">As a fellow small business
                                                owner, we know the fulfillment that an a comes from running your own business contact to
                                                Financy.</p>
                                        </div>
                                        <div className="contac5-input5area">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="input-5area margin-t32">
                                                        <input type="text" placeholder="First Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input-5area margin-t32">
                                                        <input type="text" placeholder="Last Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input-5area margin-t">
                                                        <input type="email" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input-5area margin-t">
                                                        <input type="number" placeholder="Phone" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="input-5area margin-t">
                                                        <input type="text" placeholder="Subject" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="input-5area margin-t">
                                                        <textarea cols={30} rows={10} placeholder="Message" />
                                                    </div>
                                                    <div className="contact5-btn5">
                                                        <button className="font-ks font-16 lineh-16 weight-700 color margin-t32 contcat5" type="submit">Submit Now <span><i className="fa-solid fa-arrow-right" /></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== CONTACT  END=======*/}
                    {/*===== FAQ STARTS=======*/}
                    <div className="faq-section-area section-padding5">
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor24" />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 m-auto">
                                    <div className="faq-textarea margin-b60">
                                        <h1 className="font-lora font-48 lineh-52 color-29 weight-600 margin-b">Frequently Asked Questions
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="accordian-area accourbutton">
                                        <div className="accordion accordian4" id="accordionExample">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="accordion-item bordernone">
                                                        <h2 className="accordion-header" onClick={() => handleClick(1)}>
                                                            <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                What types of consulting services do you offer?
                                                            </button>
                                                        </h2>
                                                        <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p className="font-ks font-16 lineh-26 weight-500 color-22 ">Our consulting
                                                                    process involves four key steps: Discovery, Strategy,
                                                                    Implementation, and Sustainment. We start by understanding your
                                                                    challenges and goals, then craft a customized strategy.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item bordernone">
                                                        <h2 className="accordion-header" onClick={() => handleClick(2)}>
                                                            <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                How does your consulting process work?
                                                            </button>
                                                        </h2>
                                                        <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Our consulting
                                                                    process involves four key steps: Discovery, Strategy,
                                                                    Implementation, and Sustainment. We start by understanding your
                                                                    challenges and goals, then craft a customized strategy.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item bordernone">
                                                        <h2 className="accordion-header" onClick={() => handleClick(3)}>
                                                            <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                What industries do you specialize in?
                                                            </button>
                                                        </h2>
                                                        <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Our consulting
                                                                    process involves four key steps: Discovery, Strategy,
                                                                    Implementation, and Sustainment. We start by understanding your
                                                                    challenges and goals, then craft a customized strategy.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item m-0 bordernone">
                                                        <h2 className="accordion-header" onClick={() => handleClick(4)}>
                                                            <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                What sets your consulting firm apart from others?
                                                            </button>
                                                        </h2>
                                                        <div id="collapseFour" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Our consulting
                                                                    process involves four key steps: Discovery, Strategy,
                                                                    Implementation, and Sustainment. We start by understanding your
                                                                    challenges and goals, then craft a customized strategy.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="accordian-area accourbutton">
                                                        <div className="accordion accordian4">
                                                            <div className="accordion-item bordernone">
                                                                <h2 className="accordion-header" onClick={() => handleClick(5)}>
                                                                    <button className={isActive.key == 5 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                                                        What can I expect during an initial consultation?
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseFive" className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className="font-ks font-16 lineh-26 weight-500 color-22 ">Yes, we
                                                                            offer expertise in talent acquisition and team building to
                                                                            your strategies. We understand that a strong team is
                                                                            essential for business success and can provide guidance on
                                                                            hiring the right talent </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item bordernone">
                                                                <h2 className="accordion-header" onClick={() => handleClick(6)}>
                                                                    <button className={isActive.key == 6 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                                        What is the first step in your consulting ?
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseSix" className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Yes, we
                                                                            offer expertise in talent acquisition and team building to
                                                                            your strategies. We understand that a strong team is
                                                                            essential for business success and can provide guidance on
                                                                            hiring the right talent </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item bordernone">
                                                                <h2 className="accordion-header" onClick={() => handleClick(7)}>
                                                                    <button className={isActive.key == 7 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                                        Consulting services help with crisis management?
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseSeven" className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Yes, we
                                                                            offer expertise in talent acquisition and team building to
                                                                            your strategies. We understand that a strong team is
                                                                            essential for business success and can provide guidance on
                                                                            hiring the right talent </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item m-0 bordernone">
                                                                <h2 className="accordion-header" onClick={() => handleClick(8)}>
                                                                    <button className={isActive.key == 8 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                                        Data and analytics play your consulting approach?
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseEight" className={isActive.key == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Yes, we
                                                                            offer expertise in talent acquisition and team building to
                                                                            your strategies. We understand that a strong team is
                                                                            essential for business success and can provide guidance on
                                                                            hiring the right talent </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor25" />
                    </div>
                    {/*===== FAQ END=======*/}
                    {/*===== CTA STARST=======*/}
                    <div className="cta5-section-area section-padding4">
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors72" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta5-auhtor6-area">
                                        <h1 className="font-lora font-48 lineh-52 color weight-600 margin-b text-capitalize">Get expert Law
                                            advice on criminal strategies</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-21">We believe that informed clients make
                                            better Law decisions. As part of our service, we'll provide educational resources and
                                            workshops to help.</p>
                                    </div>
                                </div>
                                <div className="col-lg-2" />
                                <div className="col-lg-4">
                                    <div className="cta5-btn5-sexction">
                                        <Link href="/contact1" className="theme6-btn6 bakgrnd5 font-ks lineh-16 weight-700 color font-16">Get Law Advice
                                            <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                        <Link href="/contact2" className="theme6-btn6 backgrnd6 font-ks lineh-16 weight-700 color-29 font-16">Contact Us
                                            <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors73" />
                    </div>
                </div>

            </Layout>
        </>
    )
}
import React from 'react'
import './style.css'
import { FaInstagram, FaGithub, FaResearchgate } from 'react-icons/fa';

const Footer = () => {
    return (
        <>

            <div className="container-fluid position-fixed bottom-0 end-0">
                <div className="row bg-black">
                    <div className='col-7 col-lg-2 order-1 d-flex justify-content-start justify-content-lg-center align-items-center py-1'>
                        <div className="d-flex justify-content-center align-items-center footer-image">
                            <img src="/images/Rotating Earth's logo.gif" alt="Footer Logo" className='' />
                        </div>
                    </div>

                    <div className='col-12 col-lg-8 order-3 order-lg-2 d-flex justify-content-center align-items-center'>
                        <p className='m-0 text-white px-1 pb-2 pt-1 responsive-text text-center'>
                            Copyright © This website is for personal use & is not assocaited with any institute. </p>
                    </div>

                    <div className='col-5 col-lg-2 my-auto order-2 order-lg-3'>
                        <span className='d-flex justify-content-around align-items-center'>
                            <a href="https://www.instagram.com/darshan1137/" target='_blank' className='px-1'><FaInstagram size={30} color="#405DE6" /></a>
                            <a href="https://github.com/DARSHMALVIYA" target='_blank' className='px-1'><FaGithub size={30} color="#4078c0" /></a>
                            <a href="https://www.researchgate.net/profile/Darshan-Malviya-2?ev=hdr_xprf&_sg=OFh0IyLGLtJIvdPwRpbQNSLyQv0hcteac1X6C2M84cMxHfLB-fsQ9IIylFPLghm4r_80OvZ8nVebNWc1vEicaogM&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6ImhvbWUiLCJwYWdlIjoicHJvZmlsZSIsInByZXZpb3VzUGFnZSI6ImhvbWUiLCJwb3NpdGlvbiI6Imdsb2JhbEhlYWRlciJ9fQ" target='_blank' className='px-1'><FaResearchgate size={30} color="#00ccbb" /></a>
                        </span>
                    </div>
                </div>
            </div >


            {/* <div className="container-fluid position-fixed bottom-0 end-0">
                <div className="row bg-black">
                    <div className="col-12 p-2">
                        <div className='d-flex justify-content-between align-items-end'>
                            <div className="navbar-image">
                                <img src="/images/Rotating Earth's logo.gif" alt="Footer Logo" className='' />
                            </div>

                            <div className=''>
                                <p className='m-0 text-white px-1 py-2 responsive-text text-center'>
                                    Copyright © This website is for personal use & is not assocaited with any institute. </p>
                            </div>

                            <div className="">
                                <span className="">
                                    <a href="https://www.instagram.com/darshan1137/" target='_blank'><FaInstagram size={30} color="#405DE6" /></a>
                                    <a href="https://github.com/DARSHMALVIYA" target='_blank'><FaGithub size={30} color="#4078c0" /></a>
                                    <a href="https://www.researchgate.net/profile/Darshan-Malviya-2?ev=hdr_xprf&_sg=OFh0IyLGLtJIvdPwRpbQNSLyQv0hcteac1X6C2M84cMxHfLB-fsQ9IIylFPLghm4r_80OvZ8nVebNWc1vEicaogM&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6ImhvbWUiLCJwYWdlIjoicHJvZmlsZSIsInByZXZpb3VzUGFnZSI6ImhvbWUiLCJwb3NpdGlvbiI6Imdsb2JhbEhlYWRlciJ9fQ" target='_blank'><FaResearchgate size={30} color="#00ccbb" /></a>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div > */}
        </>
    )
}

export default Footer

import React from 'react';
import { FaInstagram, FaGithub, FaResearchgate } from 'react-icons/fa';
import './style.css';

const Footer = () => {
    return (
        <footer className="footer bg-black">
            <div className="container-fluid">
                <div className="row">
                    <div className='col-8 order-2 order-sm-1 col-sm-4 col-md-3 col-lg-3 d-flex justify-content-start align-items-center py-1'>
                        <div className="d-flex justify-content-center align-items-center footer-image">
                            <img src="/images/Rotating Earth's logo.gif" alt="Footer Logo" className='' />
                        </div>
                    </div>

                    <div className='col-12 order-1 order-sm-2 col-sm-4 col-md-6 col-lg-6 d-flex justify-content-center align-items-center '>
                        <p className='border-bottom m-0 text-white px-1 mb-2 pt-1 fs-5 text-center'>
                            Visitor's Count: xxxxxx
                        </p>
                    </div>

                    <div className='col-4 order-3 order-sm-3 col-sm-4 col-md-3 col-lg-3 my-auto d-flex justify-content-between align-items-center'>
                        <a href="https://www.instagram.com/darshan1137/" target='_blank' className='ps-sm-5 pe-sm-3 pe-md-0 ps-sm-0' ><FaInstagram size={30} color="#405DE6" /></a>
                        <a href="https://github.com/DARSHMALVIYA" target='_blank' className='pe-sm-3 pe-md-0'><FaGithub size={30} color="#4078c0" /></a>
                        <a href="https://www.researchgate.net/profile/Darshan-Malviya-2?ev=hdr_xprf&_sg=OFh0IyLGLtJIvdPwRpbQNSLyQv0hcteac1X6C2M84cMxHfLB-fsQ9IIylFPLghm4r_80OvZ8nVebNWc1vEicaogM&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6ImhvbWUiLCJwYWdlIjoicHJvZmlsZSIsInByZXZpb3VzUGFnZSI6ImhvbWUiLCJwb3NpdGlvbiI6Imdsb2JhbEhlYWRlciJ9fQ" target='_blank' ><FaResearchgate size={30} color="#00ccbb" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

import React from 'react';
import linkedin from '../../assets/icons/linkedin.svg';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
const Footer = () => {
    return (
    <footer className="bg-gray-100 flex flex-col md:flex-row md:justify-between md:items-center gap-20 px-10 md:px-32 py-10 items-center">
        <div className="bg-white rounded-lg p-10 w-full md:w-2/3 grid items-center">
            <h3 style={{fontFamily:'var(--title-font)', color:'var(--dark-purple)'}} className="text-2xl text-center mb-6">Contactez Nous</h3>
            <label style={{fontFamily:'var(--title-font)', color:'var(--dark-purple)'}}>First Name<span className="text-red-500">*</span></label>
            <input type="text" className="border-2 mb-3 border-gray-400 rounded-sm p-1"/>
            <label style={{fontFamily:'var(--title-font)', color:'var(--dark-purple)'}}>Last Name<span className="text-red-500">*</span></label>
            <input type="text" className="border-2 mb-3 border-gray-400 rounded-sm p-1"/>
            <label style={{fontFamily:'var(--title-font)', color:'var(--dark-purple)'}}>Email<span className="text-red-500">*</span></label>
            <input type="text" className="border-2 mb-3 border-gray-400 rounded-sm p-1"/>
            <button className="bg-purple-900 p-2 text-white rounded-sm md:w-1/2 mx-auto w-full" style={{fontFamily:'var(--title-font)'}}>Envoyer</button>
        </div>

        <div className="flex flex-col gap-6 justify-center text-center md:text-left">
            <div>
            <h4 className="text-purple-900" style={{fontFamily:'var(--title-font)'}}>Email:</h4>
            <p className="text-gray-400" style={{fontFamily:'var(--text-font)'}}>team@digitalia.dz</p>
            </div>
            <div>
            <h4 className="text-purple-900" style={{fontFamily:'var(--title-font)'}}>Telephone:</h4>
            <p className="text-gray-400" style={{fontFamily:'var(--text-font)'}}>021 73 59 71</p>
            </div>
            <div className="flex gap-4 items-center justify-center md:justify-start">
            <img className="w-8" src={linkedin} alt="linkedin" />
            <img className="w-8" src={facebook} alt="facebook" />
            <img className="w-8" src={twitter} alt="twitter" />
            </div>
        </div>
    </footer>
    );
};

export default Footer;
import React from "react";
import '../../style/style.css';
import bot from '../../assets/images/AI Shopee Chatbot_ Streamline Customer Service for Sellers! 1.png'

const Accueil = () => {
  return (
    <>
    <div className="flex flex-col lg:flex-row items-center justify-between pt-28 pb-8 px-8   min-h-screen" id="Accueil">
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="slogan">
          Transformer aujourd'hui,<br /> innover pour demain
        </h1>
        <p className="descreption">
          Chez Digitalia, nous croyons que chaque transformation ouvre la voie
          à un avenir meilleur. Grâce à l'innovation, nous construisons les
          solutions de demain, dès aujourd'hui.
        </p>
      </div>

      <div className="relative lg:w-1/2 flex items-center justify-center">
        <img
          src={bot} 
          alt="Illustration robot et laptop"
          className="w-110 rounded-lg "

        />
        <div className="absolute -top-6 left-14 bg-white  p-6 rounded-2xl  ">
        <div className="  rounded-lg top-0 p-4 w-46 h-30" style={{ backgroundColor: 'var(--light-purple)' }}>
          <p className="title">40+</p>
          <p className="sub-title">
            Projets réalisés pour certains de nos clients.
          </p>
        </div>
        </div>

        <div className="absolute -bottom-6 right-14 bg-white  p-6 rounded-2xl  ">
        <div className=" rounded-lg bottom-0 p-4 w-46 h-30" style={{ backgroundColor: 'var(--light-purple)' }}>
          <p className="title">20+</p>
          <p className="sub-title">
            Clients accompagnés dans leurs produits.
          </p>
        </div>
        </div>
      </div>
    </div>
  
    </>
  );
};

export default Accueil;
 
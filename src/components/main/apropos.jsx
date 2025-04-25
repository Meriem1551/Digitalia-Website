import React from 'react';
import backgroundImage from '../../assets/images/background.png'
import '../../style/style.css';

const Apropos = () => {
    return (
     <>
     <section id='Apropos'
className="relative w-full h-screen bg-center bg-no-repeat bg-[length:100%_100%] flex items-center justify-center"
style={{ backgroundImage: `url(${backgroundImage})` }}
>
<div className="backdrop-blur-[3px] bg-black/40 p-12 rounded-3xl max-w-4xl mx-4 text-center ">
    <h2 className="text-3xl  mb-4 text-white " style={{ fontFamily: 'var(--title-font)' }}>Qui Somme nous?</h2>
    <p className="text-sm text-white  leading-relaxed" style={{ fontFamily: 'var(--text-font)' }}>
    Depuis 2015, Digitalia est l'un des principaux partenaires algériens de la transformation numérique des organisations. Nous nous engageons à offrir l'intelligence numérique à chaque entreprise, institution et organisation, avec des services personnalisés, une meilleure expérience client, tout en garantissant un excellent rapport coût-qualité, une sécurité optimale, une maintenance continue et une qualité de service irréprochable. Pour une Algérie plus connectée et performante.

    </p>
  </div>
</section>
     </>
    );
};

export default Apropos;
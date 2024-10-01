import React, { useState,useEffect } from 'react';
import { FaCode, FaTools, FaChalkboardTeacher } from 'react-icons/fa';

function OurServices() {
  const [expandedService, setExpandedService] = useState(null);

  const handleServiceHover = (index) => {
    setExpandedService(index);
  };

  const handleServiceLeave = () => {
    setExpandedService(null);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.querySelector('.services').style.backgroundPositionY = `${scrolled * 0.05}px`; // Adjust speed here
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <div>
      <section className="services">
        <div className="services-content">
          <h2>NOS SERVICES</h2>
          <p>
            Nous disposons d'une structure à taille humaine, ceci nous permet d’établir une relation de proximité, de disponibilité et d’écoute, 
            avec nos clients, nos consultants et nos ingénieurs.
          </p>
        </div>
      </section>
      <section className="services-details">
        {serviceData.map((service, index) => (
          <div 
            key={index} 
            className={`service-item ${expandedService === index ? 'expanded' : ''}`}
            onMouseEnter={() => handleServiceHover(index)}
            onMouseLeave={handleServiceLeave}
          >
            <div className="service-logo">
              {service.logo}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {expandedService === index && <a className="more-info">{service.moreInfo}</a>}
          </div>
        ))}
      </section>
      <section className="services1">
        <div className="services-content">
          
          <p>
          Nous voulons en savoir plus sur vos besoins spécifiques pour vous proposer la solution idéale. Dites-nous ce qu'il vous faut et nous nous efforcerons de vous satisfaire. 
          </p>
        </div>
      </section>
    </div>
  );
}

const serviceData = [
  {
    title: 'Ingénierie Software',
    description: 'Optez pour nos ingénieurs hautement qualifiés et experts confirmés...',
    moreInfo: "Notre méthodologie de développement spécifique consiste en première phase à accompagner le client dans la formulation de ses besoins, étudier la faisabilité de son projet et l’assister dans l’élaboration du cahier des charges. Afin d'aboutir ensemble a une meilleure solution software.",
    logo: <FaCode size={50} color="#007bff" /> 
  },
  {
    title: 'Assistance Technique',
    description: 'Une véritable prestation de services à valeur ajoutée...',
    moreInfo: "Des ingénieurs motivés, compétents et parfaitement adaptés aux spécificités techniques et organisationnelles de votre entreprise. Un ensemble de prestations d'accompagnement (formation, supervision, support et assistance, …)",
    logo: <FaTools size={50} color="#007bff" />
  },
  {
    title: 'Conseil & Accompagnement',
    description: 'Une équipe d’Experts spécialisée dans les études stratégiques...',
    moreInfo: "On a pour mission :  D'assister, de conseiller et d'accompagner les clients sur tous les thèmes en rapport avec l'organisation de systèmes d'information.D'évaluer les systèmes informatiques, réseau et communications.D'élaborer les schémas directeurs informatiques, plans d’actions et assister les clients à leurs mises en œuvre.D'auditer la sécurité informatique selon les normes en vigueur.",
    logo: <FaChalkboardTeacher size={50} color="#007bff" /> 
  }
];

export default OurServices;

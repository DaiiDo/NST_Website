import { useNavigate } from 'react-router-dom';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

AOS.init({
  duration: 1000,
  once: false,
});

function AboutUs() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="AboutUs" data-aos="fade-in" data-aos-offset="100">
        <div className="AboutUs-content">
          <h2>À PROPOS DE NOUS</h2>
        </div>
      </section>
      <section className="AboutUs2" data-aos="fade-up" data-aos-offset="100">
  <div className="AboutUs-content">
    <h3 className="animated-text">Nous proposons des services pour les entreprises, les groupes et les particuliers</h3>
    <p className="animated-text">
      Nous proposons les meilleurs services du marché. Votre satisfaction est notre priorité. C'est notre façon d'être et nous en sommes fiers.
    </p>
  </div>
</section>
      <section className="AboutUs3" data-aos="fade-left" data-aos-offset="100">
        <div className="AboutUs-left">
          <img src="\src\assets\AboutUs1.jpg" alt="About Us" data-aos="zoom-in" />
        </div>
        <div className="AboutUs-right">
          <h3>Qui sommes-nous ?</h3>
          <p>
            Nous aimons notre travail et cela se voit. Une équipe jeune motivée formée principalement par des ingénieurs informatique, nous connaissons ce milieu comme notre poche. Nous sommes prêts à relever tous les défis et nous nous impliquons à 100 % dans tous les projets que nous entreprenons.
          </p>
          <h3>Stratégies et plans</h3>
          <p>
            Chaque client est unique. C'est pourquoi nous personnalisons chacun de nos plans en fonction de vos besoins spécifiques. Stratégie mineure ou effort global… quel que soit l'objectif, nous serons à l'écoute de vos demandes et préparerons un plan personnalisé.
          </p>
          <button onClick={() => navigate('/our-services')} className="voir-services-btn">VOIR NOS SERVICES</button>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;

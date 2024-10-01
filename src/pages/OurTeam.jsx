import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function OurTeam() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.querySelector('.Team').style.backgroundPositionY = `${scrolled * 0.3}px`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="Team" data-aos="fade-in" data-aos-offset="100">
        <div className="Team-content">
          <h1 data-aos="zoom-in" data-aos-delay="200">NOTRE ÉQUIPE</h1>
          <h2 data-aos="slide-up" data-aos-delay="400">Découvrez les experts qui font tourner notre entreprise</h2>
        </div>
      </section>

      {/* Team Section */}
      <section className="Team2" data-aos="fade-up" data-aos-offset="100">
        <div className="Team-content">
          <h3 data-aos="slide-right" data-aos-delay="200">
            NST s’engage à constituer un effectif hétérogène et à créer un environnement de collaboration positif où chacun est valorisé et intégré
          </h3>
          <p data-aos="slide-left" data-aos-delay="400">
            Nous sommes déterminés à améliorer l’expérience de travail de tous nos collaborateurs. Cela implique de leur fournir les outils et la flexibilité nécessaires pour qu’ils puissent faire exprimer tout leur potentiel.
          </p>
        </div>
      </section>
    </div>
  );
}

export default OurTeam;

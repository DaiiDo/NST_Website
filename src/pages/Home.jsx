import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import EventSection from '../components/EventSection'; 
import AddEvent from '../components/AddEvent'; 
import  useAuth  from '../components/useAuth';
function Home() {
  const navigate = useNavigate();
  const  isAdmin  = useAuth();
  console.log('Is Admin:', isAdmin);
  const [events, setEvents] = useState([]); 
  

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.querySelector('.hero').style.backgroundPositionY = `${scrolled * 0.05}px`; 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  // Function to add an event
  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]); // Update the events array with the new event
  };

  // Function to update an event
  const handleUpdateEvent = (index, updatedEvent) => {
    const updatedEvents = events.map((event, i) => (i === index ? updatedEvent : event));
    setEvents(updatedEvents);
  };

  // Function to delete an event
  const handleDeleteEvent = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Vos experts en consultation et services informatiques</h1>
          <p>Fournir des solutions informatiques innovantes et fiables pour votre entreprise.</p>
          <button onClick={() => navigate('/our-services')}>En savoir plus</button>
        </div>
      </section>



      {/* Testimonials */}
      <section className="testimonials">
        <h2>Ce que disent nos clients</h2>
        <div className="testimonial-item">
          <blockquote>
            <p>
              "L'équipe de NST a dépassé nos attentes avec leur service exceptionnel et leurs solutions innovantes.
              Ils ont vraiment compris nos besoins et ont livré des résultats qui ont transformé notre entreprise."
            </p>
            <cite>- Client satisfait</cite>
          </blockquote>
        </div>
        <div className="testimonial-item">
          <blockquote>
            <p>
              "Grâce à NST, notre infrastructure informatique est plus stable et sécurisée que jamais. Leur équipe est réactive et compétente."
            </p>
            <cite>- Client heureux</cite>
          </blockquote>
        </div>
      </section>
{/* Event Section */}
<EventSection 
        events={events} 
        onUpdateEvent={handleUpdateEvent} 
        onDeleteEvent={handleDeleteEvent} 
        isAdmin={isAdmin}
      />

{/* Add Event Section - Ideally, only rendered for admin users */}
{isAdmin && <AddEvent onAddEvent={handleAddEvent} />}
      <div className="BG">
        {/* Contact Prompt */}
        <section className="contact-prompt">
          <div className="contact-content">
            <h2>Contactez-nous</h2>
            <p>
              Prêt à faire passer votre entreprise au niveau supérieur ? <a href="/contact" className="contact-link">Contactez-nous</a> aujourd'hui pour
              discuter de votre projet et voir comment nous pouvons vous aider.
            </p>
          </div>
        </section>
      </div>

      

    
    </div>
  );
}

export default Home;
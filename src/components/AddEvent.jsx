import React, { useState } from 'react';
import axios from 'axios';


function AddEvent({ onAddEvent }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && date) {
      const eventData = {
        title,
        description,
        date
      };

      axios.post('http://localhost:5000/AddEvent', eventData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        const newEvent = { 
          id: response.data.eventId, 
          title, 
          description, 
          date
        };
        onAddEvent(newEvent);
        setTitle('');
        setDescription('');
        setDate('');
        window.location.reload(); 
      })
      .catch((error) => {
        console.error('Error adding event:', error);
      });
    }
  };

  return (
    <section className="event-container">
      <h2>Ajouter un nouvel événement</h2>
      <form className="event-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Titre de l'événement</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">
        Ajouter un événement
        </button>
      </form>
    </section>
  );
}

export default AddEvent;

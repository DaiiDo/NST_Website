import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EventSection({ onUpdateEvent, onDeleteEvent, isAdmin }) {
  const [events, setEvents] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [editData, setEditData] = useState({ title: '', description: '', date: ''});

  const fetchEvents = () => {
    axios.get('http://localhost:5000/events')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  };

  useEffect(() => {
    // Fetch events when the component mounts
    fetchEvents();
  }, []);

  const handleEditClick = (event, index) => {
    setIsEditing(index);
    setEditData({
      title: event.title,
      description: event.description,
      date: event.date,
    });
  };

  const handleUpdate = (index) => {
    // Assuming onUpdateEvent function calls the API to update the event
    axios.put(`http://localhost:5000/events/${events[index].id}`, editData)
      .then(() => {
        onUpdateEvent(index, editData); // Update locally
        setIsEditing(null);
        fetchEvents();
      })
      .catch((error) => {
        console.error('Error updating event:', error);
      });
  };
  

  const handleDelete = (index) => {
    // Assuming onDeleteEvent function calls the API to delete the event
    axios.delete(`http://localhost:5000/events/${events[index].id}`)
      .then(() => {
        onDeleteEvent(index);
        fetchEvents(); // Update locally
      })
      .catch((error) => {
        console.error('Error deleting event:', error);
      });
  };
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toISOString().split('T')[0];
  };

  return (
    <section className="events-list">
      <h3>Événements</h3>
      <ul>
        {events.length > 0 ? (
          events.map((event, index) => (
            <li key={event.id}>
              {isEditing === index ? (
                <>
                  <div className="event-form1">
                    <div className="form-group">
                      <label htmlFor={`title-${index}`}>Titre de l'événement</label>
                      <input
                        type="text"
                        id={`title-${index}`}
                        value={editData.title}
                        onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                        placeholder="Entrez le titre de l'événement"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor={`description-${index}`}>Description</label>
                      <textarea
                        id={`description-${index}`}
                        value={editData.description}
                        onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                        placeholder="Entrez la description de l'événement"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor={`date-${index}`}>Date</label>
                      <input
                        type="date"
                        id={`date-${index}`}
                        value={editData.date}
                        onChange={(e) => setEditData({ ...editData, date: e.target.value })}
                      />
                    </div>
                    
                    <button className="submit-btn1" onClick={() => handleUpdate(index)}>Sauvegarder</button>
                    <button className="submit-btn1 cancel-btn" onClick={() => setIsEditing(null)}>Annuler</button>
                  </div>
                </>
              ) : (
                <>
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                  <p><strong>Date:</strong> {formatDate(event.date)}</p>
                  
                  {isAdmin && (
                    <div className="event-actions">
                      <button className="update-btn" onClick={() => handleEditClick(event, index)}>Modifier</button>
                      <button className="delete-btn" onClick={() => handleDelete(index)}>Supprimer</button>
                    </div>
                  )}
                </>
              )}
            </li>
          ))
        ) : (
          <p>Aucun événement à venir.</p>
        )}
      </ul>
    </section>
  );
}

export default EventSection;

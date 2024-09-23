import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';
import cricketForm from '../assets/cricket-form.png';


const CricketRegistrationForm = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    captainName: '',
    email: '',
    contact: '',
    matchType: '',
    tournament: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.teamName) {
      formErrors.teamName = 'Team Name is required';
    }

    if (!formData.captainName) {
      formErrors.captainName = 'Captain Name is required';
    }

    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
    }

    if (!formData.contact) {
      formErrors.contact = 'Contact number is required';
    } else if (!/^\d{10}$/.test(formData.contact)) {
      formErrors.contact = 'Contact number is invalid';
    }

    if (!formData.matchType) {
      formErrors.matchType = 'Please select match type';
    }

    if (!formData.tournament) {
      formErrors.tournament = 'Please select a tournament';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      // Clear form after submission
      setFormData({
        teamName: '',
        captainName: '',
        email: '',
        contact: '',
        matchType: '',
        tournament: '',
      });
    }
  };

  return (
    <div className={styles.formImageContainer}>
      {/* Image on the left side */}
      <div className={styles.imageContainer}>
        <img
          src={cricketForm}
          alt="Cricket"
          className={styles.cricketImage}
        />
      </div>

      {/* Form on the right side */}
      <form className={styles.registrationForm} onSubmit={handleSubmit}>
        <h2>Register Your Cricket Team</h2>

        <div className={styles.formGroup}>
          <label>Team Name</label>
          <input
            type="text"
            name="teamName"
            value={formData.teamName}
            onChange={handleInputChange}
            className={errors.teamName ? styles.errorInput : ''}
          />
          {errors.teamName && (
            <p className={styles.errorText}>{errors.teamName}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Captain Name</label>
          <input
            type="text"
            name="captainName"
            value={formData.captainName}
            onChange={handleInputChange}
            className={errors.captainName ? styles.errorInput : ''}
          />
          {errors.captainName && (
            <p className={styles.errorText}>{errors.captainName}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? styles.errorInput : ''}
          />
          {errors.email && <p className={styles.errorText}>{errors.email}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>Contact Number</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            className={errors.contact ? styles.errorInput : ''}
          />
          {errors.contact && (
            <p className={styles.errorText}>{errors.contact}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Match Type</label>
          <select
            name="matchType"
            value={formData.matchType}
            onChange={handleInputChange}
            className={errors.matchType ? styles.errorInput : ''}
          >
            <option value="">Select Match Type</option>
            <option value="T20">T20</option>
            <option value="One Day">One Day</option>
            <option value="Test Match">Test Match</option>
          </select>
          {errors.matchType && (
            <p className={styles.errorText}>{errors.matchType}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Tournament</label>
          <select
            name="tournament"
            value={formData.tournament}
            onChange={handleInputChange}
            className={errors.tournament ? styles.errorInput : ''}
          >
            <option value="">Select Tournament</option>
            <option value="World Cup">World Cup</option>
            <option value="IPL">IPL</option>
            <option value="Local Tournament">Local Tournament</option>
          </select>
          {errors.tournament && (
            <p className={styles.errorText}>{errors.tournament}</p>
          )}
        </div>

        <button type="submit" className={styles.submitButton}>
          Register Team
        </button>
      </form>
    </div>
  );
};

export default CricketRegistrationForm;

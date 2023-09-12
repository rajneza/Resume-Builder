// ProgressBarForm.js
import React, { useState } from 'react';

const Websites = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
  });
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Calculate progress based on the number of filled fields
    const filledFields = Object.values(formData).filter(Boolean).length;
    const totalFields = Object.keys(formData).length;
    const newProgress = (filledFields / totalFields) * 100;
    setProgress(newProgress);
  };

  return (
    <div>
      <h2>Fill in the Form</h2>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          {Math.round(progress)}%
        </div>
      </div>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
};

export default Websites;

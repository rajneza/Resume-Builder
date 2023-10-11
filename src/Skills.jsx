import React, { useState } from 'react';

function Skills() {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState({ id: '', name: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  const addItem = () => {
    if (newItem.id && newItem.name) {
      setData([...data, newItem]);
      setNewItem({ id: '', name: '' });
    }
  };

  return (
    <div>
      <h1>List of Items</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.id} - {item.name}</li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          placeholder="ID"
          name="id"
          value={newItem.id}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newItem.name}
          onChange={handleChange}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.id} - {item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;

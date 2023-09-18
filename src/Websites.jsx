import React, { useState } from 'react';

function Websites() {
  const [inputValue, setInputValue] = useState('Default Value');
  const [isEditable, setIsEditable] = useState(false);

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSaveClick = () => {
    setIsEditable(false);
    // You can perform any additional logic here, like submitting the edited value to an API.
  };

  return (
    <div>
      {isEditable ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      ) : (
        <span>{inputValue}</span>
      )}

      {isEditable ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </div>
  );
}

export default Websites;

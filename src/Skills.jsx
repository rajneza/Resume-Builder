import React, { useState } from 'react';

function Skills() {
  const contents = ['Content 1', 'Content 2', 'Content 3'];
  const [activeContent, setActiveContent] = useState(0);

  const handleButtonClick = (index) => {
    setActiveContent(index);
  };

  return (
    <div>
      {contents.map((content, index) => (
        <button key={index} onClick={() => handleButtonClick(index)}>
          Show Content {index + 1}
        </button>
      ))}

      <h1>{contents[activeContent]}</h1>
    </div>
  );
}

export default Skills;

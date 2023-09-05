import React, { useState } from 'react';

function Skills() {
  const [skill, setskill] = useState([]);

  const createskill = () => {
    const newObject = { id: skill.length + 1, input1: '', input2: ''};
    setskill([...skill, newObject]);
  };

  const handleInputskill = (e, objectId, inputName) => {
    const updatedObjects = skill.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setskill(updatedObjects);
  };

  const deleteskill = (objectId) => {
        const updatedObjects = skill.filter((object) => object.id !== objectId);
         setskill(updatedObjects);
       };

  return (
    <div className='emp-div'>
      
      {skill.map((object) => (
        <div key={object.id} style={{display:"flex"}}>
          <div className='emp-main'>
          
          <div style={{display:"flex"}}>
            <div className='wanted'>
            <div>
                <label htmlFor="">Label</label> <br />
                <input
            type="text"
            value={object.input1}
            className='work'
            onChange={(e) => handleInputskill(e, object.id, 'input1')}
          />
            </div>
            </div>
          </div>
          </div>
          <div>
          <button onClick={() => deleteskill(object.id)}>Delete</button>
          </div>
    </div>
      ))}
      <button onClick={createskill}> + Add more skill</button>
      
    </div>
  );
}

export default Skills;

{/* <div>
        <h2>Input Values:</h2>
        {skill.map((object) => (
          <div key={object.id}>
            <p>{object.input1}</p>
            <p>{object.input2}</p>
            <p>{object.input3}</p>
          </div>
        ))}
      </div> */}
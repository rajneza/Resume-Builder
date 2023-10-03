import React, { useState } from 'react';

function Internships() {
  const [five, setfive] = useState([]);

  const createfive = () => {
    const newObject = { id: five.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '' };
    setfive([...five, newObject]);
  };

  const handleInputfive = (e, objectId, inputName) => {
    const updatedObjects = five.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setfive(updatedObjects);
  };

  const replaceWithPresent = (objectId, inputName) => {
    const updatedObjects = five.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: 'Present' };
      }
      return object;
    });
    setfive(updatedObjects);
  };

  const deletefive = (objectId) => {
    const updatedObjects = five.filter((object) => object.id !== objectId);
    setfive(updatedObjects);
  };

  return (
    <div className='emp-div'>
      {five.map((object) => (
        <div key={object.id} style={{ display: 'flex' }}>
          <div className='emp-main'>
            <div style={{ display: 'flex' }}>
              <div className='wanted'>
                <div>
                  <label htmlFor="">Job title</label> <br />
                  <input
                    type="text"
                    value={object.input1}
                    className='work'
                    onChange={(e) => handleInputfive(e, object.id, 'input1')}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="">Employer</label> <br />
                <input
                  type="text"
                  value={object.input2}
                  className='work'
                  onChange={(e) => handleInputfive(e, object.id, 'input2')}
                />
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div className='wanted'>
                <div>
                  <label htmlFor="">Start & End Date</label> <br />
                  <input
                    type='date'
                    value={object.input4}
                    className='work'
                    onChange={(e) => handleInputfive(e, object.id, 'input4')}
                  />
                  <button onClick={() => replaceWithPresent(object.id, 'input4')}>Set Present</button>
                </div>
              </div>
              <div>
                <label htmlFor="">City</label> <br />
                <input
                  type="text"
                  value={object.input3}
                  className='work'
                  onChange={(e) => handleInputfive(e, object.id, 'input3')}
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="">Description</label> <br />
                <textarea
                  name=""
                  id=""
                  cols="90"
                  rows="15"
                  value={object.input5}
                  onChange={(e) => handleInputfive(e, object.id, 'input5')}
                  placeholder='e.g. Created and implemented lesson plans based on child-led interests and curiosities'
                />
              </div>
            </div>
          </div>
          <div>
            <button onClick={() => deletefive(object.id)}>Delete</button>
          </div>
        </div>
      ))}
      <button onClick={createfive}>+ Add one more internship</button>
      <div>
        <h2>Input Values:</h2>
        {five.map((object) => (
          <div key={object.id}>
            <p>{object.input1}</p>
            <p>{object.input2}</p>
            <p>{object.input3}</p>
            <p>{object.input4}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Internships;

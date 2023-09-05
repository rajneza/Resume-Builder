// import React, { useState } from 'react';

// function Table() {
//   const [objects, setObjects] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const createObject = () => {
//     const newObject = { id: objects.length + 1, value: '' };
//     setObjects([...objects, newObject]);
//   };

//   const handleInputChange = (e, objectId, inputName) => {
//     const updatedObjects = objects.map((object) => {
//       if (object.id === objectId) {
//         return { ...object, [inputName]: e.target.value };
//       }
//       return object;
//     });
//     setObjects(updatedObjects);
//   };

//   const deleteObject = (objectId) => {
//     const updatedObjects = objects.filter((object) => object.id !== objectId);
//     setObjects(updatedObjects);
//   };

//   return (
//     <div>
//       <button onClick={createObject}>Create Object</button>
//       {objects.map((object) => (
//         <div key={object.id}>
//           <input
//             type="text"
//             value={object.value}
//             onChange={(e) => handleInputChange(e, object.id)}
//           />
// <input
// type="text"
// value={object.input2}
// onChange={(e) => handleInputChange(e, object.id, 'input2')}
// />
// //           <button onClick={() => deleteObject(object.id)}>Delete</button>
// //         </div>
//       ))}
//       <div>
//         <h2>Input Values:</h2>
//         {objects.map((object) => (
//           <p key={object.id}>{object.value}</p>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Table;


// import React, { useState } from 'react';

// function Table() {
//   const [objects, setObjects] = useState([]);

//   const createObject = () => {
//     const newObject = { id: objects.length + 1, input1: '', input2: '' };
//     setObjects([...objects, newObject]);
//   };

//   const handleInputChange = (e, objectId, inputName) => {
//     const updatedObjects = objects.map((object) => {
//       if (object.id === objectId) {
//         return { ...object, [inputName]: e.target.value };
//       }
//       return object;
//     });
//     setObjects(updatedObjects);
//   };

//   return (
//     <div>
//       <button onClick={createObject}>Create Object</button>
//       {objects.map((object) => (
//         <div key={object.id}>
//           <input
//             type="text"
//             value={object.input1}
//             onChange={(e) => handleInputChange(e, object.id, 'input1')}
//           />
//           <input
//             type="text"
//             value={object.input2}
//             onChange={(e) => handleInputChange(e, object.id, 'input2')}
//           />
//           <div>
//             <h2>Input Values:</h2>
//             <p>{object.input1}</p>
//             <p>{object.input2}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Table;

import React, { useState } from 'react';

function Course() {
  const [course, setcourse] = useState([]);

  const createcourse = () => {
    const newObject = { id: course.length + 1, input1: '', input2: '',input3: '' ,input4: '',input5: ''};
    setcourse([...course, newObject]);
  };

  const handleInputcourse = (e, objectId, inputName) => {
    const updatedObjects = course.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setcourse(updatedObjects);
  };

  const deletecourse = (objectId) => {
        const updatedObjects = course.filter((object) => object.id !== objectId);
         setcourse(updatedObjects);
       };

  return (
    <div className='emp-div'>
      
      {course.map((object) => (
        <div key={object.id} style={{display:"flex"}}>
          <div className='emp-main'>
          
          <div style={{display:"flex"}}>
            <div className='wanted'>
            <div>
                <label htmlFor="">Job title</label> <br />
                <input
            type="text"
            value={object.input1}
            className='work'
            onChange={(e) => handleInputcourse(e, object.id, 'input1')}
          />
            </div>
            </div>
            <div>
              <label htmlFor="">Employer</label> <br />
              <input
            type="text"
            value={object.input2}
            className='work'
            onChange={(e) => handleInputcourse(e, object.id, 'input2')}
          />
            </div>
          </div>
          <div style={{display:"flex"}}>
            <div className='wanted'>
            <div>
              <label htmlFor="">Start & End Date</label> <br />
              <input type='date'
              value={object.input4}
              className='work'
              onChange={(e)=>handleInputcourse(e,object.id,'input4')}
              />
              </div>
              </div>
              
          </div>
          
          
          
          </div>
          <div>
          <button onClick={() => deletecourse(object.id)}>Delete</button>
          </div>
    </div>
      ))}
      <button onClick={createcourse}> + Add one more course</button>
      
    </div>
  );
}

export default Course;

{/* <div>
        <h2>Input Values:</h2>
        {course.map((object) => (
          <div key={object.id}>
            <p>{object.input1}</p>
            <p>{object.input2}</p>
            <p>{object.input3}</p>
          </div>
        ))}
      </div> */}
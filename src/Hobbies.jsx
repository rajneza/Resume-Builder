import React, { useState } from "react";
import { DragDropContext , Droppable , Draggable } from "react-beautiful-dnd"
import { IoIosArrowUp } from 'react-icons/io'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Dropzone from 'react-dropzone';
import { GoPerson } from 'react-icons/go'

const Data = [
  {
    id: "01",
    name:"Employment"
    
  },
  {
    id: "02",
    name:"Education"
  }
]

const item = [{
  id:"01",
  it:[{}]
},
{
  id:"02",
  it:[{}]
}]
//console.log(item[1]);
//console.log(Data[0]);
function Hobbies (){

  const [firstname, setfirstname] = useState('')
  const [name, setname] = useState('')
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [country, setcountry] = useState("")
  const [city, setcity] = useState("")
  const [address, setaddress] = useState('')
  const [post, setpost] = useState('')
  const [editorHtml, setEditorHtml] = useState('')
  const [display, setdisplay] = useState(true)

  const [stores, setStores] = useState(Data)
  const [ite,setite] = useState(item)
  let sourceindex = 0
  let destinationindex = 0

  const handleDragDrop = (results)=>{
    const {source, destination, type} = results

    if(!destination) return
    if(source.droppableId === destination.droppableId && source.index === destination.index) return

    if(type === "group"){
      const reorderedStores = [...stores];
      const reoder = [...ite]

      sourceindex = source.index
       destinationindex = destination.index

      const [removedStore] = reorderedStores.splice(sourceindex, 1)
      const [remove] = reoder.splice(sourceindex, 1)
      reorderedStores.splice(destinationindex, 0 , removedStore)
      reoder.splice(destinationindex,0,remove)
      setite(reoder)
       setStores(reorderedStores)
      console.log(destination.index)
      console.log(destinationindex);
      //  console.log(source.index)
      //  if (source.index === item[0]) {
      //   console.log("hii");
        
      //  }

       return;
      
    }
  }

  const handlechange = (e) => {
    setfirstname(e.target.value)
  }

  const handlechange1 = (e) => {

    setname(e.target.value)


  }
  

  const handlechange2 = (e) => {

    setlastname(e.target.value)

  }

  const handlechange3 = (e) => {

    setemail(e.target.value)

  }

  const handlechange4 = (e) => {

    setphone(e.target.value)

  }
  const handlechange5 = (e) => {

    setcountry(e.target.value)

  }
  const handlechange6 = (e) => {

    setcity(e.target.value)

  }
  const handlechange7 = (e) => {

    setaddress(e.target.value)

  }
  const handlechange8 = (e) => {

    setpost(e.target.value)

  }
  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [showFullView, setShowFullView] = useState(false);

  const handleDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
    setShowFullView(false);
  };

  const handleDelete = () => {
    setSelectedFile(null);
  };

  const handleView = () => {
    if(!showFullView)
    {
        setShowFullView(true)
    }
    else
    {
        setShowFullView(true)
    }
    
  };

  const [objects, setObjects] = useState([]);



  const createObject = () => {
    const newObject = { id: objects.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '' };
    setObjects([...objects, newObject]);
  };

  const handleInputChange = (e, objectId, inputName) => {
    const updatedObjects = objects.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setObjects(updatedObjects);
    ite.map((value)=>{
      
      if (value.id === "01") {
        value.it = updatedObjects
        console.log(value.mob);
        
      }
     })

  };

  const deleteObject = (objectId) => {
    const updatedObjects = objects.filter((object) => object.id !== objectId);
    setObjects(updatedObjects);
    ite.map((value)=>{
      
      if (value.id === "01") {
        value.it = updatedObjects
        console.log(value.mob);
        
      }
     })

  };

  // Code for Education    
  const [education, seteducation] = useState([]);

  const createeducation = () => {
    const newObject = { id: education.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '' };
    seteducation([...education, newObject]);
   
  };

  const handleInputedu = (e, objectId, inputName) => {
    const updatedObjects = education.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    seteducation(updatedObjects);
    ite.map((value)=>{
      
      if (value.id === "02") {
        value.it = updatedObjects
        console.log(value.mob);
        
      }
     })
  };

  const deleteedu = (objectId) => {
    const updatedObjects = education.filter((object) => object.id !== objectId);
    seteducation(updatedObjects);
    ite.map((value)=>{
      
      if (value.id === "02") {
        value.it = updatedObjects
        console.log(value.mob);
        
      }
     })
  };
  // const handledrop = (results)=>{
  //   const {source, destination, type} = results

  //   if(!destination) return
  //   if(source.droppableId === destination.droppableId && source.index === destination.index) return

  //   if(type === "group"){
  //     const reorderedStores = [...stores];

  //     sourceindex = source.index
  //      destinationindex = destination.index

  //     const [removedStore] = reorderedStores.splice(sourceindex, 1)
  //     reorderedStores.splice(destinationindex, 0 , removedStore)
      
  //      setStores(reorderedStores)
  //     console.log(destination.index)
  //     //  console.log(source.index)
  //     //  if (source.index === item[0]) {
  //     //   console.log("hii");
        
  //     //  }

  //      return;
      
  //   }
  // }
  console.log(destinationindex)
  return(
    <div style={{display:"flex"}}>
      <div className="rk">
      <div className="one">
          <h2>Personal Details</h2>
          <div className="job-title">
            <div className="wanted">
              <div className="job">
                <label htmlFor="">Wanted job Title</label> <br />
                <input type="text" value={firstname} onChange={handlechange} className="work" />
              </div>
            </div>
            <div className="photo">
            <div style={{display:"flex"}}>
      
      <Dropzone onDrop={handleDrop} accept="image/*" multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} />
            {selectedFile?
                (
                    <div className='image'>
                  <div className="image-container">
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Uploaded"
                      className="rounded-image"
                      onClick={handleView}
                    />
                    
                  </div>
                  
                  </div>
                 
                
              
            ) : (
              <div style={{display:'flex'}}>
                
                <GoPerson className='icon'></GoPerson>
            
                
              </div>
            )}
          </div>
        )}
      </Dropzone>
      <div className='text'>
        {
          selectedFile?
          (
            <div style={{display:"block"}}>
                <button onClick={handleDelete}>Delete</button>
                  <button onClick={handleView}>Edit Photo</button>
            </div>
          ) :(
            <div>
              <h4>Upload photo</h4>
            </div>
          )
        }
      </div>
    </div>
              

            </div>
          </div>
          <div className="job-title">
            <div className="wanted">
              <div className="job">
                <label htmlFor="">First Name</label> <br />
                <input type="text" className="work" value={name} onChange={handlechange1} />
              </div>
            </div>
            <div className="photo">
              <label htmlFor="">Last Name</label> <br />
              <input type="text" className="work" value={lastname} onChange={handlechange2} />
            </div>

          </div>
          <div className="job-title">
            <div className="wanted">
              <div className="job">
                <label htmlFor="">Email</label> <br />
                <input type="email" className="work" value={email} onChange={handlechange3} />
              </div>
            </div>
            <div className="photo">
              <label htmlFor="">Phone</label> <br />
              <input type="number" className="work" value={phone} onChange={handlechange4} />
            </div>


          </div>
          <div className="job-title">
            <div className="wanted">
              <div className="job">
                <label htmlFor="">Country</label> <br />
                <input type="text" className="work" value={country} onChange={handlechange5} />
              </div>
            </div>
            <div className="photo">
              <label htmlFor="">City</label> <br />
              <input type="text" className="work" value={city} onChange={handlechange6} />
            </div>

          </div>
          <div className={display ? "visble" : "hidden"}>
            <div className="job-title">
              <div className="wanted">
                <div className="job">
                  <label htmlFor="">Address</label> <br />
                  <input type="text" className="work" value={address} onChange={handlechange7} />
                </div>
              </div>
              <div className="photo">
                <label htmlFor="">Postal Code</label> <br />
                <input type="text" className="work" value={post} onChange={handlechange8} />
              </div>

            </div>
            <div className={display ? "visble" : "hidden"}>
              <div className="job-title">
                <div className="wanted">
                  <div className="job">
                    <label htmlFor="">Driving License</label> <br />
                    <input type="text" className="work" />
                  </div>
                </div>
                <div className="photo">
                  <label htmlFor="">Nationality</label> <br />
                  <input type="text" className="work" />
                </div>

              </div>
            </div>
            <div className={display ? "visble" : "hidden"}>
              <div className="job-title">
                <div className="wanted">
                  <div className="job">
                    <label htmlFor="">Place Of Birth</label> <br />
                    <input type="text" className="work" />
                  </div>
                </div>
                <div className="photo">
                  <label htmlFor="">Date of Birth</label> <br />
                  <input type="text" className="work" />
                </div>

              </div>
            </div>

          </div>
          <div className="edit">
            <h5 onClick={() => setdisplay(!display)}>Edit additional details  <IoIosArrowUp /></h5>
          </div>

        </div>
        <div className="summaary">
          <div>
            <div>
              <h2>Professional Summary</h2>
            </div>
            <div>
              <p>Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.</p>
            </div>
            <div>
              <div>
                <ReactQuill
                  theme="snow"
                  value={editorHtml}
                  onChange={handleChange}
                  className='paragh'
                  modules={{
                    toolbar: [
                      ['bold', 'italic', 'underline', 'strike'],
                      [{ 'list': 'ordered' }, { 'list': 'bullet' }],

                      ['link']
                    ]
                  }}
                />
                <div>
                  {/* <h3>Editor Output:</h3>
        <div dangerouslySetInnerHTML={{ __html: editorHtml }} /> */}
                </div>
              </div>

            </div>
            <div>
              <p>Recruiter tip: write 50-200 characters to increase interview chances</p>
            </div>
          </div>
        </div>
        <div>
        <DragDropContext onDragEnd={handleDragDrop}>
      <div className="first">
        <Droppable droppableId="Root" type="group">
        {(provided)=>(
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {stores.map((store,index)=>(
          <Draggable draggableId={store.id} key={store.id} index={index}>
            {(provided)=>(
              <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
              <h3>{store.name}</h3>
              {/* <Storelist {...store}/> */}
              {
                              store.name === "Employment" ? <div>
                                {objects.map((object) => (
                <div key={object.id} style={{ display: "flex" }}>
                  <div className='emp-main'>


                    <div style={{ display: "flex" }}>
                      <div className='wanted'>
                        <div>
                          <label htmlFor="">Job title</label> <br />
                          <input
                            type="text"
                            value={object.input1}
                            className='work'
                            onChange={(e) => handleInputChange(e, object.id, 'input1')}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="">Employer</label> <br />
                        <input
                          type="text"
                          value={object.input2}
                          className='work'
                          onChange={(e) => handleInputChange(e, object.id, 'input2')}
                        />
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div className='wanted'>
                        <div>
                          <label htmlFor="">Start & End Date</label> <br />
                          <input type='date'
                            value={object.input4}
                            className='work'
                            onChange={(e) => handleInputChange(e, object.id, 'input4')}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="">City</label> <br />
                        <input
                          type="text"
                          value={object.input3}
                          className='work'
                          onChange={(e) => handleInputChange(e, object.id, 'input3')}
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Description</label> <br />
                        <textarea name="" id="" cols="90" rows="15" value={object.input5} onChange={(e) => handleInputChange(e, object.id, 'input5')}
                          placeholder='e.g. Graduated with High Honors.' />
                      </div>
                    </div>


                  </div>
                  <div>
                    <button onClick={() => deleteObject(object.id)}>Delete</button>
                  </div>

                </div>
              ))}
              <button onClick={createObject}> + Add Employment</button>
                              </div> : <span></span>
                            }
                            {
                            store.name === "Education" ? <div>
                              {education.map((object) => (
                <div key={object.id} style={{ display: "flex" }}>
                  <div className='emp-main'>

                    <div style={{ display: "flex" }}>
                      <div className='wanted'>
                        <div>
                          <label htmlFor="">School</label> <br />
                          <input
                            type="text"
                            value={object.input1}
                            className='work'
                            onChange={(e) => handleInputedu(e, object.id, 'input1')}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="">Degree</label> <br />
                        <input
                          type="text"
                          value={object.input2}
                          className='work'
                          onChange={(e) => handleInputedu(e, object.id, 'input2')}
                        />
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div className='wanted'>
                        <div>
                          <label htmlFor="">Start & End Date</label> <br />
                          <input type='date'
                            value={object.input4}
                            className='work'
                            onChange={(e) => handleInputedu(e, object.id, 'input4')}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="">City</label> <br />
                        <input
                          type="text"
                          value={object.input3}
                          className='work'
                          onChange={(e) => handleInputedu(e, object.id, 'input3')}
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Description</label> <br />
                        <textarea name="" id="" cols="90" rows="15" value={object.input5} onChange={(e) => handleInputedu(e, object.id, 'input5')}
                          placeholder='e.g. Graduated with High Honors.' />
                      </div>
                    </div>


                  </div>
                  <div>
                    <button onClick={() => deleteedu(object.id)}>Delete</button>
                  </div>
                </div>
              ))}
              <button onClick={createeducation}> + Add education</button>
                  
                            </div> : <span></span>
                          }

            </div>
            )}
            
          </Draggable>
        ))}
          </div>
        )}
        </Droppable>
      </div>
      </DragDropContext>
        </div>

      </div>
    <div className="full">
      <div className="main-fulll">
        <div className="main-rightt">
          <div>
          <div style={{display:"flex"}} className="cont-1">
                      <div className="profile-pic">
                  <Dropzone onDrop={handleDrop} accept="image/*" multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <div className="dropzone" id="drop" {...getRootProps()}>
            <input {...getInputProps()} />
            {selectedFile?
                (
                    <div className='image'>
                  <div className="image-container">
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Uploaded"
                      className="rounded-image"
                      onClick={handleView}
                    />
                    
                  </div>
                  
                  </div>
                 
                
              
            ) : (
              <div style={{display:'flex'}}>
                
               
                
              </div>
            )}
          </div>
        )}
      </Dropzone>
      </div>
      <div>
        <div style={{display:"flex"}}>
          <h3 className="name1">{name}</h3>
          <h3 className="name2">{lastname}</h3>
        </div>
        <div>
          <h6 className="name">{firstname}</h6>
        </div>
      </div>
      </div>
      <div className="summary">
{
editorHtml === "" ? <span></span> : <h3 className="prof">Profile</h3>
}
<div className="mess" dangerouslySetInnerHTML={{ __html: editorHtml }} />
</div>
          </div>

        </div>
      </div>
      
      <DragDropContext onDragEnd={handleDragDrop}>
      <div className="movement">
        <Droppable droppableId="Root" type="group">
        {(provided)=>(
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {ite.map((store,index)=>(
          <Draggable draggableId={store.id} key={store.id} index={index}>
            {(provided)=>(
              <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
              {/* <h3>{store.name}</h3> */}
              <Storelist {...store}/>
              
            </div>
            )}
            
          </Draggable>
        ))}
          </div>
        )}
        </Droppable>
      </div>
      </DragDropContext>
     
      
    </div>
    </div>
  )
}

function Storelist({name, it, id}){
  return(
    <div>
      <div>
      {/* <h3>{name}</h3> */}
      </div>
      <div>
        {it.map((item,index) => (
          <div className="store">
            <h4>{`${item.input1},${item.input2},${item.input3}`}</h4>
            <p>{item.input4}</p>
            <p>{item.input5}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hobbies
import React, { useState } from "react";
import { DragDropContext , Droppable , Draggable } from "react-beautiful-dnd"
import { IoIosArrowUp } from 'react-icons/io'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Dropzone from 'react-dropzone';
import { GoPerson } from 'react-icons/go'
import { MdOutlineDelete } from 'react-icons/md'
import { Scrollbars } from "react-custom-scrollbars"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom"
import { AiOutlineEdit } from "react-icons/ai"
import "./Second.css"
import "./Project/React.css"



const Data = [
  {
    id: "01",
    name:"Employment",
    description:"Show your relevent experince (last 10 years). use bullet points to note your achievements, if possible use numbers/facts(Achieved X, measured by Y, by doing Z)"
  },
  {
    id: "02",
    name:"Education",
    description:"A varied education on your resume sums up the value that your learnings and background will bring to job"
  },
  {
    id: "03",
    name: "Extra-curricular activites"
  },
  {
    id: "04",
    name: "Course"
  },{
    id: "05",
    name: "Internships"
  },
  {
    id:"06",
    name:"Refrence"
  },
  {
    id:"07",
    name:"Project"
  }
]

const item = [{
  id:"01",
  it:[{}]
},
{
  id:"02",
  it:[{}]
}
,{
  id:"03",
  it:[{}]
},
{
  id:"04",
  it:[{}]
},
{
  id:"05",
  it:[{}]
},
{
  id:"06",
  it:[{}]
}
]
//console.log(item[1]);
//console.log(Data[0]);
function Hobbies (){

  const [job, setjob] = useState('')
  const [name, setname] = useState('')
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [country, setcountry] = useState("")
  const [city, setcity] = useState("")
  const [address, setaddress] = useState('')
  const [post, setpost] = useState('')
  const [licence, setlicense] = useState('')
  const [nation, setnation] = useState('')
  const [place, setplace] = useState('')
  const [birth, setbirth] = useState('')
  const [editorHtml, setEditorHtml] = useState('')
  const [display, setdisplay] = useState(true)
  const [emp, setemp] = useState(true)
  const [oction, setoction] = useState(true)


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
    setjob(e.target.value)
    if (job === "") {
      setbar(bar+10)
      return
    }
  }

  const handlechange1 = (e) => {

    setname(e.target.value)
    if (name === "") {
      setbar(bar+10)
      return
    }

  }
  

  const handlechange2 = (e) => {

    setlastname(e.target.value)
    if (lastname === "") {
      setbar(bar+10)
      return
    }
  }

  const handlechange3 = (e) => {

    setemail(e.target.value)
    if (email === "") {
      setbar(bar+10)
      return
    }
  }

  const handlechange4 = (e) => {

    setphone(e.target.value)
    if (phone === "") {
      setbar(bar+10)
      return
    }
  }
  const handlechange5 = (e) => {

    setcountry(e.target.value)
    if (country === "") {
      setbar(bar-10)
      return
    }
  }
  const handlechange6 = (e) => {

    setcity(e.target.value)
    if (city === "") {
      setbar(bar+10)
      return
    }
  }
  const handlechange7 = (e) => {

    setaddress(e.target.value)

  }
  const handlechange8 = (e) => {

    setpost(e.target.value)
    if (post === "") {
      setbar(bar+10)
      return
    }
  }
  const handlechange9 = (e) => {

    setlicense(e.target.value)

  }
  const handlechange10 = (e) => {

    setnation(e.target.value)

  }
  const handlechange11 = (e) => {

    setplace(e.target.value)

  }
  const handlechange12 = (e) => {

    setbirth(e.target.value)

  }
  const handleChange = (html) => {
    setEditorHtml(html);
    if (editorHtml === "") {
      setbar(bar+10)
      return
    }
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [showFullView, setShowFullView] = useState(false);

  const handleDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
    setShowFullView(false);
    if (selectedFile === null) {
      setbar(bar+10)
      return
    }
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
  // PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    // doc.text('', 5, 5);
    // doc.text('Page 1 Content', 10, 10);

    // // Now let's add enough content to overflow to a new page
    // const longText = "This is a long piece of text that will span multiple pages. ";
    // for (let i = 0; i < 50; i++) {
    //   doc.text(longText, 10, doc.autoTable.previous.finalY + 10); // Adding content until it overflows
    // }



    //  doc.addPage();
     doc.text('', 10, 10);

    const content = document.getElementById('pdf-content');

    html2canvas(content)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 10, 20);
        doc.save('sample.pdf');
      });
  };
  const [objects, setObjects] = useState([]);



  const createObject = () => {
    const newObject = { id: objects.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '',input6:"" };
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
    const newObject = { id: education.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '',input6:"" };
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

  //code for extra-curricular

  const [four, setfour] = useState([]);

  const createfour = () => {
    const newObject = { id: four.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '',input6:"" };
    setfour([...four, newObject]);
  };

  const handleInputfour = (e, objectId, inputName) => {
    const updatedObjects = four.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setfour(updatedObjects);
    ite.map((value)=>{
      
      if (value.id === "03") {
        value.it = updatedObjects
        console.log(value.mob);
        
      }
     })
  };

  const deletefour = (objectId) => {
    const updatedObjects = four.filter((object) => object.id !== objectId);
    setfour(updatedObjects);
    ite.map((value)=>{
      
      if (value.id === "03") {
        value.it = updatedObjects
        console.log(value.mob);
        
      }
     })
  };
   
  //code for Project

  const [project, setproject] = useState([]);

  const createproject = () => {
    const newObject = { id: four.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '',input6:"" };
    setfour([...four, newObject]);
  };

  const handleInputproject = (e, objectId, inputName) => {
    const updatedObjects = four.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setfour(updatedObjects);
    ite.map((value)=>{
      
      if (value.id === "07") {
        value.it = updatedObjects
        console.log(value.mob);
        
      }
     })
  };

  const deleteproject = (objectId) => {
    const updatedObjects = four.filter((object) => object.id !== objectId);
    setfour(updatedObjects);
    ite.map((value)=>{
      
      if (value.id === "07") {
        value.it = updatedObjects
        console.log(value.mob);
        
      }
     })
  };


  //code for course

  const [course, setcourse] = useState([]);

  const createcourse = () => {
    const newObject = { id: course.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '',input6:'' };
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
    ite.map((value)=>{
      
      if (value.id === "04") {
        value.it = updatedObjects
        console.log(value.mob);
        
      }
     })
  };

  const deletecourse = (objectId) => {
    const updatedObjects = course.filter((object) => object.id !== objectId);
    setcourse(updatedObjects);
    ite.map((value)=>{
      
      if (value.id === "04") {
        value.it = updatedObjects
        console.log(value.mob);
        
      }
     })
  };

  // code for internship

  const [five, setfive] = useState([]);

  const createfive = () => {
    const newObject = { id: five.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '',input6:"" };
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
    ite.map((value)=>{
      
      if (value.id === "05") {
        value.it = updatedObjects
        console.log(value.mob);
        
      }
     })
  };

  const deletefive = (objectId) => {
    const updatedObjects = five.filter((object) => object.id !== objectId);
    setfive(updatedObjects);
    ite.map((value)=>{
      
      if (value.id === "05") {
        value.it = updatedObjects
        console.log(value.mob);
        
      }
     })
  };

  // code for reference

  const [three, setthree] = useState([]);

  const createthree = () => {
    const newObject = { id: three.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '',input6:"" };
    setthree([...three, newObject]);
  };

  const handleInputthree = (e, objectId, inputName) => {
    const updatedObjects = three.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setthree(updatedObjects);
    ite.map((value)=>{
      
      if (value.id === "06") {
        value.it = updatedObjects
        console.log(value.mob);
        
      }
     })
  };

  const deletethree = (objectId) => {
    const updatedObjects = three.filter((object) => object.id !== objectId);
    setthree(updatedObjects);
    ite.map((value)=>{
      
      if (value.id === "06") {
        value.it = updatedObjects
        console.log(value.mob);
        
      }
     })
  };
  //code for website

  const [website, setwebsite] = useState([]);
  const [web,setweb] = useState("")

  const createweb = () => {
    const newObject = { id: website.length + 1, input1: '', input2: '' };
    setwebsite([...website, newObject]);
    setweb("hi")
  };

  const handleInputweb = (e, objectId, inputName) => {
    const updatedObjects = website.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setwebsite(updatedObjects);
  };

  const deleteweb = (objectId) => {
    const updatedObjects = website.filter((object) => object.id !== objectId);
    setwebsite(updatedObjects);
    setweb("")
  };
 //code for skill

 const [skill, setskill] = useState([]);
 const [ill,setill] = useState("")

 const createskill = () => {
   const newObject = { id: skill.length + 1, input1: '', input2: '' };
   setskill([...skill, newObject]);
   setill("hi")
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
   setill("")
 };

 //code for Hobbies

 const [six, setsix] = useState([]);
 const [hob,sethob] = useState("")

 const createsix = () => {
   const newObject = { id: six.length + 1, input1: '', input2: '' };
   setsix([...six, newObject]);
   sethob("hi")
 };

 const handleInputsix = (e, objectId, inputName) => {
   const updatedObjects = six.map((object) => {
     if (object.id === objectId) {
       return { ...object, [inputName]: e.target.value };
     }
     return object;
   });
   setsix(updatedObjects);
 };

 const deletesix = (objectId) => {
   const updatedObjects = six.filter((object) => object.id !== objectId);
   setsix(updatedObjects);
   sethob("")
 };
  // code for language

  const [seven, setseven] = useState([]);
  const [lan,setlan] = useState("")

  const createseven = () => {
    const newObject = { id: seven.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '' };
    setseven([...seven, newObject]);
    setlan("hi")
  };

  const handleInputseven = (e, objectId, inputName) => {
    const updatedObjects = seven.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setseven(updatedObjects);
  };

  const deleteseven = (objectId) => {
    const updatedObjects = seven.filter((object) => object.id !== objectId);
    setseven(updatedObjects);
    setlan("")
  };
  

  const [bar ,setbar] = useState(0)

  const handleprogress = () =>{

  }
  return(
    <div style={{display:"flex"}}>
      <div className="rk">
        {/* <div>
          <h4>{bar}% is Completed</h4>
        <ProgressBar completed={bar} onChange={handleprogress}/>
        </div> */}
      <div>
          <h2>Personal Details</h2>
          <div className="job-title">
            <div className="wanted">
              <div className="job">
                <label htmlFor="">Role</label> <br />
                <input type="text" value={job} onChange={handlechange} className="work" />
              </div>
            </div>
            <div className="photo">
              {/* <PhotoUpload></PhotoUpload> */}

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
                <div>
                <button onClick={handleDelete} className="ed"><MdOutlineDelete/></button>
                </div>
                  <div>
                  <button onClick={handleView} className="ed"><AiOutlineEdit/></button>
                  </div>
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
                <label htmlFor="">Ankitha</label> <br />
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
              <label htmlFor="">Contact</label> <br />
              <input type="number" className="work" value={phone} onChange={handlechange4} />
            </div>


          </div>
          <div className="job-title">
            <div className="wanted">
              <div className="job">
                <label htmlFor="">Country Name sai</label> <br />
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
                <label htmlFor="">Postal code </label> <br />
                <input type="text" className="work" value={post} onChange={handlechange8} />
              </div>

            </div>
            <div className={display ? "visble" : "hidden"}>
              <div className="job-title">
                <div className="wanted">
                  <div className="job">
                  <label>Driving Licence</label><br />
                  <input type="text" className="work" value={licence} onChange={handlechange9}/>
                  </div>
                </div>
                <div className="photo">
                   <label>Nation</label><br />
                  <input type="text" className="work" value={nation} onChange={handlechange10}/>
                </div>

              </div>
            </div>
            <div className={display ? "visble" : "hidden"}>
              <div className="job-title">
                <div className="wanted">
                  <div className="job">
                        <label htmlFor="">Place of Birth</label> <br />
                    <input type="text" className="work" value={place} onChange={handlechange11}/>
                  </div>
                </div>
                <div className="photo">
                  <label htmlFor="">Date of Birth</label> <br />
                  <input type="text" className="work" value={birth} onChange={handlechange12}/>
                </div>

              </div>
            </div>

          </div>
          <div className="edit">
            <h5 onClick={() => setdisplay(!display)}>Edit additional details  <IoIosArrowUp /></h5>
          </div>

        </div>
        <div className="summary">
          <div>
            <div>
              <h2>Professional </h2>
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
              <p className="des">{store.description}</p>
              {/* <Storelist {...store}/> */}
              {
                              store.name === "Employment" ? <div>
                                {objects.map((object) => (
                <div key={object.id}>
                  <div style={{display:"flex"}} className="flex">
                   
                    {object.input1}
                    <h5 onClick={() => setemp(!emp)} style={{cursor:"pointer"}} className="arrow"><IoIosArrowUp /></h5>
                  </div>
                  <div className={emp ? "visible" : "hidden"}>
                    <div  style={{ display: "flex" }} >
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
                                className='workk'
                                onChange={(e) => handleInputChange(e, object.id, 'input4')}
                              />
                              <input type='date'
                                value={object.input5}
                                className='workk'
                                onChange={(e) => handleInputChange(e, object.id, 'input5')}
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
                        <textarea name="" id="" cols="90" rows="15" value={object.input6} onChange={(e) => handleInputChange(e, object.id, 'input6')}
                          placeholder='e.g. Graduated with High Honors.' />
                      </div>
                    </div>


                  </div>
                  <div>
                    <button onClick={() => deleteObject(object.id)} className="delete"><MdOutlineDelete/></button>
                  </div>
                  </div>
                  </div>
                  

                </div>
              ))}
              <button onClick={createObject} className="add"> + Add Employment</button>
                              </div> : <span></span>
                            }
                            {
                            store.name === "Education" ? <div>
                              {education.map((object) => (
                <div key={object.id}>
                  <div style={{display:"flex"}} className="flex">
                   
                   {object.input1}
                   <h5 onClick={() => setoction(!oction)} style={{cursor:"pointer"}} className="arrow"><IoIosArrowUp /></h5>
                 </div>
                 <div className={oction ? "visible" : "hidden"}>
                  <div  style={{ display: "flex" }}>
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
                                className='workk'
                                onChange={(e) => handleInputedu(e, object.id, 'input4')}
                              />
                              <input type='date'
                                value={object.input5}
                                className='workk'
                                onChange={(e) => handleInputedu(e, object.id, 'input5')}
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
                        <textarea name="" id="" cols="90" rows="15" value={object.input6} onChange={(e) => handleInputedu(e, object.id, 'input6')}
                          placeholder='e.g. Graduated with High Honors.' />
                      </div>
                    </div>


                  </div>
                  <div>
                    <button onClick={() => deleteedu(object.id)} className="delete"><MdOutlineDelete/></button>
                  </div>
                  </div>
                  </div>
                  
                </div>
              ))}
              <button onClick={createeducation} className="add"> + Add education</button>
                  
                            </div> : <span></span>
                          }
                          {
                                store.name === "Extra-curricular activites" ? <div>
                                  <div className='emp-div'>

{four.map((object) => (
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
              onChange={(e) => handleInputfour(e, object.id, 'input1')}
            />
          </div>
        </div>
        <div>
          <label htmlFor="">Employer</label> <br />
          <input
            type="text"
            value={object.input2}
            className='work'
            onChange={(e) => handleInputfour(e, object.id, 'input2')}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className='wanted'>
          <div>
            <label htmlFor="">Start & End Date</label> <br />
            <input type='date'
                                value={object.input4}
                                className='workk'
                                onChange={(e) => handleInputfour(e, object.id, 'input4')}
                              />
                              <input type='date'
                                value={object.input5}
                                className='workk'
                                onChange={(e) => handleInputfour(e, object.id, 'input5')}
                              />
          </div>
        </div>
        <div>
          <label htmlFor="">City</label> <br />
          <input
            type="text"
            value={object.input3}
            className='work'
            onChange={(e) => handleInputfour(e, object.id, 'input3')}
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="">Description</label> <br />
          <textarea name="" id="" cols="90" rows="15" value={object.input6} onChange={(e) => handleInputfour(e, object.id, 'input6')}
            placeholder='e.g. Created and implemented lesson plans based on child-led
interests and curiosities'/>
        </div>
      </div>


    </div>
    <div>
      <button onClick={() => deletefour(object.id)} className="delete">Delete</button>
    </div>
  </div>
))}
<button onClick={createfour} className="add"> + Add Employment</button>

</div>
{/* <button onClick={delete7}>delete</button> */}
                                </div> : <span></span>
                              }
                          {
                                store.name === "Course" ? <div>
                                  <div className='emp-div'>

{course.map((object) => (
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
      <div style={{ display: "flex" }}>
        <div className='wanted'>
          <div>
            <label htmlFor="">Start & End Date</label> <br />
            <input type='date'
                                value={object.input4}
                                className='workk'
                                onChange={(e) => handleInputcourse(e, object.id, 'input4')}
                              />
                              <input type='date'
                                value={object.input5}
                                className='workk'
                                onChange={(e) => handleInputcourse(e, object.id, 'input5')}
                              />
          </div>
        </div>

      </div>



    </div>
    <div>
      <button onClick={() => deletecourse(object.id)} className="delete"><MdOutlineDelete/></button>
    </div>
  </div>
))}
<button onClick={createcourse} className="add"> + Add one more course</button>

</div>
{/* <button onClick={delete2}>delete</button> */}
                                </div> : <span></span>
                              }
                          {
                                store.name === "Internships" ? <div>
                                  <div className='emp-div'>

{five.map((object) => (
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
              onChange={(e) => handleInputfive(e, object.id, 'input1')}
            />
          </div>
        </div>
        <div>
          <label htmlFor="">Emp</label> <br />
          <input
            type="text"
            value={object.input2}
            className='work'
            onChange={(e) => handleInputfive(e, object.id, 'input2')}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className='wanted'>
          <div>
            <label htmlFor="">Start & End Date</label> <br />
            <input type='date'
                                value={object.input4}
                                className='workk'
                                onChange={(e) => handleInputfive(e, object.id, 'input4')}
                              />
                              <input type='date'
                                value={object.input5}
                                className='workk'
                                onChange={(e) => handleInputfive(e, object.id, 'input5')}
                              />
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
          
        </div>
      </div>


    </div>
    <div>
      <button onClick={() => deletefive(object.id)} className="delete"><MdOutlineDelete/></button>
    </div>
  </div>
))}
<button onClick={createfive} className="add"> + Add one more internship</button>

</div>
{/* <button onClick={delete4}>delete</button> */}
                                </div> : <span></span>
                              }
                              {
                                store.name === "Refrence" ? <div>
                                  <div className='emp-div'>

{three.map((object) => (
  <div key={object.id} style={{ display: "flex" }}>
    <div className='emp-main'>

      <div style={{ display: "flex" }}>
        <div className='wanted'>
          <div>
            <label htmlFor="">Name</label> <br />
            <input
              type="text"
              value={object.input1}
              className='work'
              onChange={(e) => handleInputthree(e, object.id, 'input1')}
            />
          </div>
        </div>
        <div>
          <label htmlFor="">Employer</label> <br />
          <input
            type="text"
            value={object.input2}
            className='work'
            onChange={(e) => handleInputthree(e, object.id, 'input2')}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className='wanted'>
          <div>
            <label htmlFor="">Phone</label> <br />
            <input type='text'
              value={object.input4}
              className='work'
              onChange={(e) => handleInputthree(e, object.id, 'input4')}
            />
          </div>
        </div>
        <div className="wanted">
              <div>
              <label htmlFor="">Email</label> <br />
            <input type='text'
              value={object.input5}
              className='work'
              onChange={(e) => handleInputthree(e, object.id, 'input5')}
            />
              </div>
            </div>

      </div>



    </div>
    <div>
      <button onClick={() => deletethree(object.id)}  className="delete"><MdOutlineDelete/></button>
    </div>
  </div>
))}
<button onClick={createthree} className="add"> + Add one more reference</button>

</div>
{/* <button onClick={delete3}>delete</button> */}
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
      <div>
          <div>
            <h2> Websites & Social Links</h2>
          </div>
          <div>
            <p>You can add links to websites you want hiring managers to see! Perhaps it will be
              a link to your portfolio,LinkedIn profile or personal website</p>
          </div>
          <div>
            {/* <Websites></Websites> */}
            <div className='emp-div'>

              {website.map((object) => (
                <div key={object.id} style={{ display: "flex" }}>
                  <div className='emp-main'>

                    <div style={{ display: "flex" }}>
                      <div className='wanted'>
                        <div>
                          <label htmlFor="">Instagram</label> <br />
                          <input
                            type="text"
                            value={object.input1}
                            className='work'
                            onChange={(e) => handleInputweb(e, object.id, 'input1')}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="">Link</label> <br />
                        <input
                          type="text"
                          value={object.input2}
                          className='work'
                          onChange={(e) => handleInputweb(e, object.id, 'input2')}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button onClick={() => deleteweb(object.id)} className="delete"><MdOutlineDelete/></button>
                  </div>
                </div>
              ))}
              <button onClick={createweb} className="add"> + Add Link</button>

            </div>

          </div>
        </div>
        <div>
          <div>
            <h2> Skills</h2>
          </div>
          <div>
            <p>
              Choose 5 important skills that show you fit the position. Make sure they match
              the key skills mentioned in the job listing(especially when applying via an online system)
            </p>
          </div>
          <div>
            {/* <Skills></Skills> */}
            <div className='emp-div'>

              {skill.map((object) => (
                <div key={object.id} style={{ display: "flex" }}>
                  <div className='emp-main'>

                    <div style={{ display: "flex" }}>
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
                      <div>
                          <label htmlFor="">Level</label> <br />
                          <select name="" id="" value={object.input2} onChange={(e) => handleInputskill(e, object.id, 'input2')} className="work">
                            <option value="1">Level 1</option>
                            <option value="2">Level 2</option>
                            <option value="3">Level 3</option>
                            <option value="4">Level 4</option>
                            <option value="5">Level 5</option>
                          </select>
                        </div>
                    </div>
                  </div>
                  <div>
                    <button onClick={() => deleteskill(object.id)} className="delete"><MdOutlineDelete/></button>
                  </div>
                </div>
              ))}
              <button onClick={createskill} className="add"> + Add more skill</button>

            </div>
          </div>
          {
              <div>
                <div>
                <h2>Hobbies</h2>
                </div>
                <div className='emp-div'>

                  {six.map((object) => (
                    <div key={object.id} style={{ display: "flex" }}>
                      <div className='emp-main'>

                        <div style={{ display: "flex" }}>
                          <div className='wanted'>
                            <div>
                              <label htmlFor="">Label</label> <br />
                              <input
                                type="text"
                                value={object.input1}
                                className='work'
                                onChange={(e) => handleInputsix(e, object.id, 'input1')}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button onClick={() => deletesix(object.id)} className="delete"><MdOutlineDelete/></button>
                      </div>
                    </div>
                  ))}
                  <button onClick={createsix} className="add"> + Add more Hobbie</button>

                </div>
                {/* <button onClick={delete6}>delete</button> */}
                </div>
            }
          <div>
            {
               <div>
                <div>
                <h2>Langugages</h2>
                </div>
                <div className='emp-div'>

                  {seven.map((object) => (
                    <div key={object.id} style={{ display: "flex" }}>
                      <div className='emp-main'>

                        <div style={{ display: "flex" }}>
                          <div className='wanted'>
                            <div>
                              <label htmlFor="">Language</label> <br />
                              <input
                                type="text"
                                value={object.input1}
                                className='work'
                                onChange={(e) => handleInputseven(e, object.id, 'input1')}
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="">Level</label> <br />
                            {/* <input
                              type="text"
                              value={object.input2}
                              className='work'
                              onChange={(e) => handleInputseven(e, object.id, 'input2')}
                            /> */}
                            <select name="" id="" value={object.input2} onChange={(e) => handleInputseven(e, object.id, 'input2')} className="work">
                              <option value="">--Select--</option>
                            <option value="1">Level 1</option>
                            <option value="2">Level 2</option>
                            <option value="3">Level 3</option>
                            <option value="4">Level 4</option>
                            <option value="5">Level 5</option>
                          </select>
                          </div>
                        </div>


                      </div>
                      <div>
                        <button onClick={() => deleteseven(object.id)} className="delete"><MdOutlineDelete/></button>
                      </div>
                    </div>
                  ))}
                  <button onClick={createseven} className="add"> + Add one more languages</button>

                </div>
                {/* <button onClick={delete5}>delete</button> */}
                </div>
            }
          </div>
        </div>
        </div>

      </div>
    <div className="full">
      <button onClick={generatePDF}>Generate PDF</button>
      <Scrollbars>
      <div className="main-full" id="pdf-content">
        
        <div className="main-right">
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
          <h6 className="name">{job}</h6>
        </div>
      </div>
      </div>
      <div className="summry">
{
editorHtml === "" ? <span></span> : <h2 className="prof">Profile</h2>
}
<div className="mess" dangerouslySetInnerHTML={{ __html: editorHtml }} />
</div>
          </div>

       
      <div>
      
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
      <div className="main-left">
        <div className="pincode">
        <div className="details">
                      {
                        address === "" ? <span></span> : <h4 className="heading">Details</h4>
                      }

                      <div>
                        <p className="cont">{address}</p>
                      </div>
                      <div>
                        <p className="cit">{`${city},${post}`}</p>
                      </div>
                      <div>
                        <p className="cit">{country}</p>
                      </div>


                    </div>
                    <div>
                      {
                        email  === "" ? <span></span> : <h4 className="heading">Contact</h4>
                      }
                      <div>
                        <p className="cit">{phone}</p>
                      </div>
                      <div>
                        <p className="conte">{email}</p>
                      </div>
                    </div>
                    <div>
                      {
                         licence === "" ? <span></span> : <h4 className="heading1">Driving License</h4>
                      }
                      <div>
                        <p className="cit">{licence}</p>
                      </div>
                    </div>
                    <div>
                      {
                        nation === "" ? <span></span> : <h4 className="heading1">Nationality</h4>
                      }
                      <div>
                        <p className="cit">{nation}</p>
                      </div>
                    </div>
                    <div>
                      {
                        place && birth !== "" ? <h4 className="heading1">Place/Date of Birth</h4> : place !== "" ? <h4 className="heading1">Place of Birth</h4> : birth !== "" ? <h4 className="heading1">Date of Birth</h4> : <span></span>
                      }
                      <div>
                        <p className="cit">{birth}</p>
                        <p className="cit">{place}</p>
                      </div>
                    </div>
                    <div className="top">
                    {
                        ill === "" ? <span></span> : <h4 className="heading">Skills</h4>
                    }
                    {skill.map((object) => (
          <div key={object.id} className="ill">
            
            
            <p className="cit" id="cit">{`${object.input1}`}</p>
            <div className="ski1">
              {
                object.input2 === "" ? <span></span> : <p className="ski">{`${object.input2}/5`}</p>
              }
              
            
           
            
            </div>
            


          </div>
        ))}
                    </div>
                    <div className="top">
                    {
                        web === "" ? <span></span> : <h4 className="heading">Links</h4>
                    }
                    {website.map((object) => (
          <div key={object.id}>
            
            {/* <p className="cit">{`${object.input1}`}</p> */}
            <Link to={object.input2} className="cit" id="link">{object.input1}</Link>
            


          </div>
        ))}
                    </div>
                    <div className="top">
                      {
                        hob === "" ? <span></span> : <h4 className="heading">Hobbies</h4>
                      }
                      <div>
                      {six.map((object) => (
          <div key={object.id} className="ill">
            
            
            <p className="cit">{`${object.input1}`}</p>
          </div>
        ))}

                      </div>
                    </div>
                    <div className="top">
                      {
                        lan === "" ? <span></span> : <h4 className="heading">Languages</h4>
                      }
                      <div>
                      {seven.map((object) => (
          <div key={object.id} className="ill">
            
            
            <p className="cit"  id="cit">{`${object.input1}`}</p>
            <div className="ski1">
            <p className="ski">{`${object.input2}/5`}</p>
            </div>
          </div>
        ))}

                      </div>
                    </div>

        </div>

      </div>
      </div>
      </Scrollbars>
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
        {
          id === "06" ? <div>
            {it.map((item,index) => (
          <div className="store">
            {
              item.input1 === undefined ? <span></span> : <div>
                    {/* <h4 className="fon">{`${item.input1},${item.input2},${item.input3}`}</h4>
            <p className="fontt">{`${item.input4}/${item.input5}`}</p>
            <p className="fonttt">{item.input6}</p> */}
            <h2 className="head">References</h2>
            <p className="fontt">{`${item.input1} from ${item.input2}`}</p>
            <p className="fontt">{`${item.input4} | ${item.input5}`}</p>
              </div>
            }
            
          </div>
        ))}
          </div> : <span></span>
        }
        {
          id === "01" ? <div>
             <h2 className="head">Employment</h2>
            {it.map((item,index) => (
          <div className="store">
           
            {
              item.input1 === undefined ? <span></span> : <div className="store">
                
              {
                item.input1 === undefined ? <span></span> : <div>
                      <h4 className="fon">{`${item.input1},${item.input2},${item.input3}`}</h4>
              <p className="fontt">{`${item.input4}/${item.input5}`}</p>
              <p className="fonttt">{item.input6}</p>
                </div>
              }
              
            </div>
            }
            
          </div>
        ))}
          </div> : <span></span>
        }

{
          id === "02" ? <div>
            {it.map((item,index) => (
          <div className="store">
            {
              item.input1 === undefined ? <span></span> : <div className="store">
                <h2 className="head">Education</h2>
              {
                item.input1 === undefined ? <span></span> : <div>
                      <h4 className="fon">{`${item.input1},${item.input2},${item.input3}`}</h4>
              <p className="fontt">{`${item.input4}/${item.input5}`}</p>
              <p className="fonttt">{item.input6}</p>
                </div>
              }
              
            </div>
            }
            
          </div>
        ))}
          </div> : <span></span>
        }
         {
          id === "03" ? <div>
            {it.map((item,index) => (
          <div className="store">
            {
              item.input1 === undefined ? <span></span> : <div className="store">
                <h2 className="head">Extra-curricular activites</h2>
              {
                item.input1 === undefined ? <span></span> : <div>
                      <h4 className="fon">{`${item.input1},${item.input2},${item.input3}`}</h4>
              <p className="fontt">{`${item.input4}/${item.input5}`}</p>
              <p className="fonttt">{item.input6}</p>
                </div>
              }
              
            </div>
            }
            
          </div>
        ))}
          </div> : <span></span>
        }
        {
          id === "04" ? <div>
            {it.map((item,index) => (
          <div className="store">
            {
              item.input1 === undefined ? <span></span> : <div className="store">
                <h2 className="head">Course</h2>
              {
                item.input1 === undefined ? <span></span> : <div>
                      <h4 className="fon">{`${item.input1},${item.input2},${item.input3}`}</h4>
              <p className="fontt">{`${item.input4}/${item.input5}`}</p>
              <p className="fonttt">{item.input6}</p>
                </div>
              }
              
            </div>
            }
            
          </div>
        ))}
          </div> : <span></span>
        }
        {
          id === "05" ? <div>
            {it.map((item,index) => (
          <div className="store">
            {
              item.input1 === undefined ? <span></span> : <div className="store">
                <h2 className="head">Internships</h2>
              {
                item.input1 === undefined ? <span></span> : <div>
                      <h4 className="fon">{`${item.input1},${item.input2},${item.input3}`}</h4>
              <p className="fontt">{`${item.input4}/${item.input5}`}</p>
              <p className="fonttt">{item.input6}</p>
                </div>
              }
              
            </div>
            }
            
          </div>
        ))}
          </div> : <span></span>
        }
        

        {/* {it.map((item,index) => (
          <div className="store">
            {
              item.input1 === undefined ? <span></span> : <div>
                    <h4 className="fon">{`${item.input1},${item.input2},${item.input3}`}</h4>
            <p className="fontt">{`${item.input4}/${item.input5}`}</p>
            <p className="fonttt">{item.input6}</p>
              </div>
            }
            
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default Hobbies
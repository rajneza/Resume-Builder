import React, { useState } from "react";
import PhotoUpload from "./Second";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { IoIosArrowUp } from 'react-icons/io'
import { PDFExport } from '@progress/kendo-react-pdf';
import { Scrollbars } from "react-custom-scrollbars"
import { useRef } from "react";

import Dropzone from 'react-dropzone';
import { GoPerson } from 'react-icons/go'
import { MdOutlineDelete } from 'react-icons/md'





const Resume = () => {

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
  const [place, setplace] = useState('')
  const [birth, setbirth] = useState('')
  const [nation, setnation] = useState('')
  const [editorHtml, setEditorHtml] = useState('')
  const [editorHtml1, setEditorHtml1] = useState('')
  const [editorHtml2, setEditorHtml2] = useState('')
  const [editorHtml3, setEditorHtml3] = useState('')
  const [editorHtml4, setEditorHtml4] = useState('')
  const [display, setdisplay] = useState(true)
  const [specific, setspecific] = useState(true)
  const [coursee, setcoursee] = useState(true)
  const [reference, setreference] = useState(true);
  const [langu, setlangu] = useState(true)
  const [curricular, setcurricular] = useState(true)
  const [ship, setship] = useState(true)
  const [hobbie, sethobbie] = useState(true)
  const [selectedFile, setSelectedFile] = useState(null);
  const [showFullView, setShowFullView] = useState(false);
  
 

  const ddData = [
    { text: "A4", value: "size-a4" },
    { text: "Letter", value: "size-letter" },
    { text: "Executive", value: "size-executive" },
  ];
  
  const [layoutSelection, setLayoutSelection] = useState({
    text: "A4",
    value: "size-a4",
  });
  
  const updatePageLayout = (event) => {
    setLayoutSelection(event.target.value);
  };
  
  const pdfExportComponent = useRef(null);
  
  const downloadPDF = (event) => {
    pdfExportComponent.current.save();
  };

  //Profile pic

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


  let tension = () => {
    setspecific(false)

  }

  const certi = () => {
    setcoursee(false)

  }

  const refer = () => {
    setreference(false)

  }

  const lang = () => {
    setlangu(false)

  }

  const extra = () => {
    setcurricular(false)

  }

  const intern = () => {
    setship(false)

  }

  const delete1 = () => {
    setspecific(true)
  }

  const delete2 = () => {
    setcoursee(true)
  }

  const delete3 = () => {
    setreference(true)
  }

  const delete4 = () => {
    setship(true)
  }

  const delete5 = () => {
    setlangu(true)
  }

  const delete6 = () => {
    sethobbie(true)
  }

  const delete7 = () => {
    setcurricular(true)
  }

  const hobbi = () => {
    sethobbie(false)

  }

  const handlechange = (e) => {
    setjob(e.target.value)


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
  };
  const handleChange21 = (html) => {
    setEditorHtml1(html);
  };
  const handleChange22 = (html) => {
    setEditorHtml2(html);
  };
  const handleChange23 = (html) => {
    setEditorHtml3(html);
  };
  const handleChange24 = (html) => {
    setEditorHtml4(html);
  };




  const changeedit = () => {
    setdisplay("visible")
  }

  //

 

  //Code for Employment 

  const [objects, setObjects] = useState([]);
  const [obj,setobj] = useState("")


  const createObject = () => {
    const newObject = { id: objects.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '',input6:'' };
    setObjects([...objects, newObject]);
    setobj("hi")
  };

  const handleInputChange = (e, objectId, inputName) => {
    const updatedObjects = objects.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setObjects(updatedObjects);


  };

  const deleteObject = (objectId) => {
    const updatedObjects = objects.filter((object) => object.id !== objectId);
    setObjects(updatedObjects);
    setobj("")
  };
  // Code for Education    
  const [education, seteducation] = useState([]);
  const [edu,setedu]= useState("")

  const createeducation = () => {
    const newObject = { id: education.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '',input6:'' };
    seteducation([...education, newObject]);
    setedu("hi")
  };

  const handleInputedu = (e, objectId, inputName) => {
    const updatedObjects = education.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    seteducation(updatedObjects);
  };

  const deleteedu = (objectId) => {
    const updatedObjects = education.filter((object) => object.id !== objectId);
    seteducation(updatedObjects);
    setedu("")
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

  //code for custom

  const [cust, setcust] = useState([]);

  const createcust = () => {
    const newObject = { id: cust.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '' };
    setcust([...cust, newObject]);
  };

  const handleInputcust = (e, objectId, inputName) => {
    const updatedObjects = cust.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setcust(updatedObjects);
  };

  const deletecust = (objectId) => {
    const updatedObjects = cust.filter((object) => object.id !== objectId);
    setcust(updatedObjects);
  };

  //code for course

  const [course, setcourse] = useState([]);
  const [use,setuse] = useState("")

  const createcourse = () => {
    const newObject = { id: course.length + 1, input1: '', input2: '', input4: '', input5: '' };
    setcourse([...course, newObject]);
    setuse("hi")
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
    setuse("")
  };

  //code for reference

  const [three, setthree] = useState([]);
  const [the,setthe] = useState("")

  const createthree = () => {
    const newObject = { id: three.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '' };
    setthree([...three, newObject]);
    setthe("hi")
  };

  const handleInputthree = (e, objectId, inputName) => {
    const updatedObjects = three.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setthree(updatedObjects);
  };

  const deletethree = (objectId) => {
    const updatedObjects = three.filter((object) => object.id !== objectId);
    setthree(updatedObjects);
    setthe("")
  };

  //code for Extra-curricular

  const [four, setfour] = useState([]);
  const [ec ,setec] = useState("")

  const createfour = () => {
    const newObject = { id: four.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '' };
    setfour([...four, newObject]);
    setec("hi")
  };

  const handleInputfour = (e, objectId, inputName) => {
    const updatedObjects = four.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setfour(updatedObjects);
  };

  const deletefour = (objectId) => {
    const updatedObjects = four.filter((object) => object.id !== objectId);
    setfour(updatedObjects);
    setec("")
  };

  //code for Intern

  const [five, setfive] = useState([]);
  const [fi,setfi] = useState("")

  const createfive = () => {
    const newObject = { id: five.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '' };
    setfive([...five, newObject]);
    setfi("hi")
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

  const deletefive = (objectId) => {
    const updatedObjects = five.filter((object) => object.id !== objectId);
    setfive(updatedObjects);
    setfi("")
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

  //code for language

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

  //code for PDf Coverter

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.text('', 5, 5);
    // doc.text('Page 1 Content', 10, 10);

    // // Now let's add enough content to overflow to a new page
    // const longText = "This is a long piece of text that will span multiple pages. ";
    // for (let i = 0; i < 50; i++) {
    //   doc.text(longText, 10, doc.autoTable.previous.finalY + 10); // Adding content until it overflows
    // }



     doc.addPage();
     doc.text('', 10, 10);

    const content = document.getElementById('pdf-content');

    html2canvas(content)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 10, 20);
        doc.save('sample.pdf');
      });
  };



  return (
    <div style={{ display: "flex" }}>
      
      <div className="one">
        <div>
          <h2>Personal Details</h2>
          <div className="job-title">
            <div className="wanted">
              <div className="job">
                <label htmlFor="">Wanted job Title</label> <br />
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
                    <input type="text" className="work" value={licence} onChange={handlechange9}/>
                  </div>
                </div>
                <div className="photo">
                  <label htmlFor="">Nationality</label> <br />
                  <input type="text" className="work" value={nation} onChange={handlechange10}/>
                </div>

              </div>
            </div>
            <div className={display ? "visble" : "hidden"}>
              <div className="job-title">
                <div className="wanted">
                  <div className="job">
                    <label htmlFor="">Place Of Birth</label> <br />
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
        <div>
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
          
              </div>

            </div>
            <div>
              <p>Recruiter tip: write 50-200 characters to increase interview chances</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>Employment History</h2>
          </div>
          <div>
            <p>Show your relevent experince (last 10 years). use bullet points to note your achievements, if possible- <br /> use numbers/facts(Achieved X, measured by Y, by doing Z)</p>
          </div>
          <div>

            <div className='emp-div'>

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
                        {/* <ReactQuill
                  theme="snow"
                  value={editorHtml1}
                  onChange={handleChange21}
                  className='paragh'
                  modules={{
                    toolbar: [
                      ['bold', 'italic', 'underline', 'strike'],
                      [{ 'list': 'ordered' }, { 'list': 'bullet' }],

                      ['link']
                    ]
                  }}
                /> */}
                <textarea name="" id="" cols="92" rows="10" value={object.input6} onChange={(e) => handleInputChange(e, object.id, 'input6')}
                              placeholder='e.g. Created and implemented lesson plans based on child-led
               interests and curiosities'/>
                        
                      </div>
                    </div>


                  </div>
                  <div>
                    <button onClick={() => deleteObject(object.id)} className="delete"> <MdOutlineDelete></MdOutlineDelete></button>
                  </div>

                </div>
              ))}
              <button onClick={createObject} className="add"> + Add Employment</button>



            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>Education</h2>
          </div>
          <div>
            <p>A varied education on your resume sums up the value that
              your learnings and background will bring to job
            </p>
          </div>
          <div>
            {/* <Regi2></Regi2> */}
            <div className='emp-div'>

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
                        {/* <ReactQuill
                  theme="snow"
                  value={editorHtml2}
                  onChange={handleChange22}
                  className='paragh'
                  modules={{
                    toolbar: [
                      ['bold', 'italic', 'underline', 'strike'],
                      [{ 'list': 'ordered' }, { 'list': 'bullet' }],

                      ['link']
                    ]
                  }}
                /> */} <textarea name="" id="" cols="92" rows="10" value={object.input6} onChange={(e) => handleInputedu(e, object.id, 'input6')}
                placeholder='e.g. Created and implemented lesson plans based on child-led
                interests and curiosities'/>
                      </div>
                    </div>


                  </div>
                  <div>
                    <button onClick={() => deleteedu(object.id)} className="delete"><MdOutlineDelete/></button>
                  </div>
                </div>
              ))}
              <button onClick={createeducation} className="add"> + Add education</button>

            </div>
          </div>
        </div>
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
        </div>
        <div>
          <div>
            {
              specific ? <span></span> : <div>
                <div className='emp-div'>

                  {cust.map((object) => (
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
                                onChange={(e) => handleInputcust(e, object.id, 'input1')}
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="">Employer</label> <br />
                            <input
                              type="text"
                              value={object.input2}
                              className='work'
                              onChange={(e) => handleInputcust(e, object.id, 'input2')}
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
                                onChange={(e) => handleInputcust(e, object.id, 'input4')}
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <label htmlFor="">Description</label> <br />
                            <textarea name="" id="" cols="90" rows="15" value={object.input5} onChange={(e) => handleInputcust(e, object.id, 'input5')}
                              placeholder='e.g. Created and implemented lesson plans based on child-led
               interests and curiosities'/>
                          </div>
                        </div>


                      </div>
                      <div>
                        <button onClick={() => deletecust(object.id)} className="delete"><MdOutlineDelete/></button>
                      </div>
                    </div>
                  ))}
                  <button onClick={createcust} className="add"> + Add one more item</button>

                </div>
                <button onClick={delete1}>delete</button></div>
            }
          </div>
          <div>
            {
              coursee ? <span></span> : <div>
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
                <button onClick={delete2}>delete</button></div>
            }
          </div>
          <div>
            {
              reference ? <span></span> : <div>
                <div className='emp-div'>

                  {three.map((object) => (
                    <div key={object.id} style={{ display: "flex" }}>
                      <div className='emp-main'>

                        <div style={{ display: "flex" }}>
                          <div className='wanted'>
                            <div>
                              <label htmlFor="">Referent's Full Name</label> <br />
                              <input
                                type="text"
                                value={object.input1}
                                className='work'
                                onChange={(e) => handleInputthree(e, object.id, 'input1')}
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="">Company</label> <br />
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
                          <div className='wanted'>
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
                        <button onClick={() => deletethree(object.id)} className="delete"><MdOutlineDelete/></button>
                      </div>
                    </div>
                  ))}
                  <button onClick={createthree} className="add"> + Add one more course</button>

                </div>
                <button onClick={delete3}>delete</button></div>
            }
          </div>
          <div>
            {
              ship ? <span></span> : <div>
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
                            <label htmlFor="">Employer</label> <br />
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
                            {/* <ReactQuill
                  theme="snow"
                  value={editorHtml4}
                  onChange={handleChange24}
                  className='paragh'
                  modules={{
                    toolbar: [
                      ['bold', 'italic', 'underline', 'strike'],
                      [{ 'list': 'ordered' }, { 'list': 'bullet' }],

                      ['link']
                    ]
                  }}
                /> */}
                 <textarea name="" id="" cols="92" rows="10" value={object.input6} onChange={(e) => handleInputfive(e, object.id, 'input6')}
                              placeholder='e.g. Created and implemented lesson plans based on child-led
               interests and curiosities'/>
                            
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
                <button onClick={delete4}>delete</button></div>
            }
          </div>
          <div>
            {
              langu ? <span></span> : <div>
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
                <button onClick={delete5}>delete</button></div>
            }
          </div>
          <div>
            {
              hobbie ? <span></span> : <div>
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
                <button onClick={delete6}>delete</button></div>
            }
          </div>
          <div>
            {
              curricular ? <span></span> : <div>
                <div className='emp-div'>

                  {four.map((object) => (
                    <div key={object.id} style={{ display: "flex" }}>
                      <div className='emp-main'>

                        <div style={{ display: "flex" }}>
                          <div className='wanted'>
                            <div>
                              <label htmlFor="">Function title</label> <br />
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
                            {/* <ReactQuill
                  theme="snow"
                  value={editorHtml3}
                  onChange={handleChange23}
                  className='paragh'
                  modules={{
                    toolbar: [
                      ['bold', 'italic', 'underline', 'strike'],
                      [{ 'list': 'ordered' }, { 'list': 'bullet' }],

                      ['link']
                    ]
                  }}
                /> */}
                 <textarea name="" id="" cols="92" rows="10" value={object.input6} onChange={(e) => handleInputfour(e, object.id, 'input6')}
                              placeholder='e.g. Created and implemented lesson plans based on child-led
               interests and curiosities'/>
                          </div>
                        </div>


                      </div>
                      <div>
                        <button onClick={() => deletefour(object.id)} className="delete"><MdOutlineDelete/></button>
                      </div>
                    </div>
                  ))}
                  <button onClick={createfour} className="add"> + Add Employment</button>

                </div>
                <button onClick={delete7}>delete</button></div>
            }
          </div>

        </div>
        <div>
          <div>
            <h2>Add Section</h2>
          </div>
          <div>
            <button onClick={tension}> <img src="https://icons-for-free.com/iconfiles/png/512/customize+levels+settings+icon-1320085880730884001.png" alt="" className="icons" /> Custom Section</button>
            <button onClick={certi}> <img src="https://p7.hiclipart.com/preview/522/461/307/computer-icons-academic-certificate-certification-diploma-training-course.jpg" alt="" className="icons" /> Courses</button>
          </div>
          <div>
            <button onClick={extra}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkWdMzuZ9a2FgYPotBkT9ELxs_Y1EUQMZXg&usqp=CAU" alt="" className="icons" /> Extra-curricular Activities</button>
            <button onClick={intern}> <img src="https://cdn-icons-png.flaticon.com/512/1945/1945648.png" alt="" className="icons" /> Internships</button>
          </div>
          <div>
            <button onClick={hobbi}> <img src="https://static.thenounproject.com/png/3654397-200.png" alt="" className="icons" /> Hobbies</button>
            <button onClick={lang}> <img src="https://cdn-icons-png.flaticon.com/512/484/484633.png" alt="" className="icons" /> Languages</button>
          </div>
          <div>
            <button onClick={refer}> <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX41086475.jpg" alt="" className="icons" /> References</button>
          </div>
        </div>
      </div>
      <div className="two">
        <button onClick={downloadPDF}>Generate PDF</button>
         <Scrollbars>
        
          
          <PDFExport
                scale={1.1}
                paperSize="A4"
                margin="2cm"
                ref={pdfExportComponent}
                className="pdf"
                keepTogether="p"
                margin={{ top: 20, left: 1, right: 1, bottom: 20 }}
              >
                <div className="main-full">
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
<div className="subj">
  {
    obj === "" ? <span></span> : <h3 className="head">Employment</h3>
  }
  <div>
  <div>
        {objects.map((object) => (
          <div key={object.id}>
            <h6 className="fon">{`${object.input1},${object.input2},${object.input3}`}</h6>
            <p className="fontt">{`${object.input4}/${object.input5}`}</p>
            <p className="fonttt">{object.input6}</p>
            

{/* <div className="sum" dangerouslySetInnerHTML={{ __html: editorHtml1 }} /> */}

          </div>
        ))}
      </div> 
  </div>
  

</div>
<div className="subj">
{
    edu === "" ? <span></span> : <h3 className="head">Education</h3>
  }
<div>
  <div>
        {education.map((object) => (
          <div key={object.id}>
            <h6 className="fon">{`${object.input1},${object.input2},${object.input3}`}</h6>
            {
              object.input4 === "" ? <span></span> : <p className="fontt">{`${object.input4}/${object.input5}`}</p>
            }
            <p className="fonttt">{object.input6}</p>
            
            

{/* <div className="sum" dangerouslySetInnerHTML={{ __html: editorHtml2 }} /> */}

          </div>
        ))}
      </div> 
  </div>
</div>
<div className="subj">
{
    use === "" ? <span></span> : <h3 className="head">Course</h3>
  }
<div>
  <div>
        {course.map((object) => (
          <div key={object.id}>
            <h6 className="fon">{`${object.input1},${object.input2}`}</h6>
            <p className="fontt">{`${object.input4}/${object.input5}`}</p>

          </div>
        ))}
      </div> 
  </div>
</div>
<div className="subj">
{
    fi === "" ? <span></span> : <h3 className="head">Internship</h3>
  }
<div>
  <div>
        {five.map((object) => (
          <div key={object.id}>
            <h6 className="fon">{`${object.input1},${object.input2},${object.input3}`}</h6>
            <p className="fontt">{`${object.input4}/${object.input5}`}</p>
            <p className="fonttt">{object.input6}</p>
            
            

{/* <div className="sum" dangerouslySetInnerHTML={{ __html: editorHtml4 }} /> */}

          </div>
        ))}
      </div> 
  </div>
</div>
<div className="subj">
{
    the === "" ? <span></span> : <h3 className="head">Reference</h3>
  }
<div>
  <div>
        {three.map((object) => (
          <div key={object.id}>
            <h6 className="fon">{`${object.input1} from ${object.input2}`}</h6>
            <p className="fontt">{`${object.input4} | ${object.input5}`}</p>
            


          </div>
        ))}
      </div> 
  </div>
</div>

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
                    
                    <div>
                    {
                        web === "" ? <span></span> : <h4 className="heading">Links</h4>
                    }
                    {website.map((object) => (
          <div key={object.id}>
            
            <p className="cit">{`${object.input1}`}</p>
            


          </div>
        ))}
                    </div>
                    <div>
                    {
                        ill === "" ? <span></span> : <h4 className="heading">Skills</h4>
                    }
                    {skill.map((object) => (
          <div key={object.id} className="ill">
            
            
            <p className="cit" id="cit">{`${object.input1}`}</p>
            <div className="ski1">
            <p className="ski">{`${object.input2}/5`}</p>
            </div>
            


          </div>
        ))}
                    </div>
                    <div>
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
                    <div>
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
                
                </PDFExport>
         
        
        </Scrollbars>

      </div>
      

    </div>
  )
}

export default Resume
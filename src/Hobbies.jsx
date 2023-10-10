import React, { useState, useRef, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";
import { GoPerson } from "react-icons/go";
import { MdOutlineDelete, MdOutlineDragIndicator, MdDragIndicator } from "react-icons/md";
import { Scrollbars } from "react-custom-scrollbars";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from "@ramonak/react-progress-bar";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { GiSaveArrow } from "react-icons/gi";
import "./Second.css";
import "./Sai.css";
import "./Project/React.css";
import Switch from "react-switch";
import { render } from 'react-dom';
import { useReactToPrint } from 'react-to-print';
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from "./Components/images/custom-extra.svg";
import image1 from "./Components/images/custom-course.svg";
import image2 from "./Components/images/custom-internship.svg";
import image3 from "./Components/images/custom-references.svg";
import image4 from "./Components/images/custom-section.svg";
import image5 from "./Components/images/cutsom-projects.png";
import image6 from "./Components/images/custom-links.jpg";
import image7 from "./Components/images/custom-skills.webp";
import image8 from "./Components/images/custom-hobbies.svg";
import image9 from "./Components/images/custom-languages.svg";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import { AiFillQuestionCircle, AiFillCloseCircle } from "react-icons/ai"
import mrssai from "./images/mrssai.avif";
import ushamadam from "./images/ushamadam.avif";
import rajeshsir from "./images/rajeshsir.avif";




const Data = [
  {
    id: "01",
    name: "Employment",
    description:
      "Show your relevent experince (last 10 years). use bullet points to note your achievements, if possible use numbers/facts(Achieved X, measured by Y, by doing Z)",
  },
  {
    id: "02",
    name: "Education",
    description:
      "A varied education on your resume sums up the value that your learnings and background will bring to job",
  },
  {
    id: "03",
    name: "Extra-curricular activites",
  },
  {
    id: "04",
    name: "Course",
  },
  {
    id: "05",
    name: "Internships",
  },
  {
    id: "06",
    name: "Referance",
  },
  {
    id: "07",
    name: "Projects",
  },
  {
    id: "08",
    name: "Custom",
  },
];

const item = [
  {
    id: "01",
    it: [{}],
  },
  {
    id: "02",
    it: [{}],
  },
  {
    id: "03",
    it: [{}],
  },
  {
    id: "04",
    it: [{}],
  },
  {
    id: "05",
    it: [{}],
  },
  {
    id: "06",
    it: [{}],
  },
  {
    id: "07",
    it: [{}],
  },
  {
    id: "08",
    head: "Custom",
    it: [{}],
  },
];


function Hobbies(props) {
  const [job, setjob] = useState("");
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [country, setcountry] = useState("");
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");
  const [post, setpost] = useState("");
  const [licence, setlicense] = useState("");
  const [nation, setnation] = useState("");
  const [place, setplace] = useState("");
  const [birth, setbirth] = useState("");
  const [editorHtml, setEditorHtml] = useState("");
  const [display, setdisplay] = useState(true);
  const [emp, setemp] = useState(true);
  const [oction, setoction] = useState(true);
  const [ext, setext] = useState(true);
  const [cou, setcou] = useState(true);
  const [inter, setinter] = useState(true);
  const [pro, setpro] = useState(true);
  const [ref, setref] = useState(true);
  const [cus, setcus] = useState(true);
  const [site, setsite] = useState(true);
  const [level, setlevel] = useState(true);
  const [hobbie, sethobbie] = useState(true);
  const [language, setlanguage] = useState(true);
  const [curricular, setcurricular] = useState(true);
  const [cour, setcour] = useState(true);
  const [intern, setintern] = useState(true);
  const [reference, setreference] = useState(true);
  const [secetion, setsecetion] = useState(true);
  const [proj, setproj] = useState(true);
  const [link, setlink] = useState(true);
  const [label, setlabel] = useState(true);
  const [hobb, sethobb] = useState(true);
  const [lang, setlangu] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState("");
  const contentDivRef = useRef(null); const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [editingTitle, setEditingTitle] = useState(false);
  const [editingFname, setEditingFname] = useState(false);
  const [editing, setEditing] = useState(false);
  const editingRef = useRef(editing);
  const [heading, setHeading] = useState("Personal Details");
  const [fname, setFname] = useState("File Name");
  // const [name, setname] = useState("");
  const [showtemplate, setshowTeemplate] = useState(true)
  const [lastName, setLastName] = useState("");
  const [selectedColor, setSelectedColor] = useState('#0f3871');
  const [selectedColor1, setSelectedColor1] = useState('#084C41');
  const [isColor1Active, setIsColor1Active] = useState(true);
  const [skillsProgressBars, setSkillsProgressBars] = useState({});
  const [studentSkills, setStudentSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedStage, setSelectedStage] = useState('Fresher');
  const [stages, setStages] = useState(['Fresher', 'Experience', 'Export', 'Pro']);
  // const [recentlyAddedSkill, setRecentlyAddedSkill] = useState(null);
  const [recentlyAddedSkill, setRecentlyAddedSkill] = useState([]);
  const [isPrinting, setIsPrinting] = useState(false);
  const { template, additionalProp } = props;
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const handleClick = () => {
    setSelectedTemplate(template);
  };


  const [percentage, setpercentage] = useState(false)

  const createSecondProgressBar = (skill) => {
    const initialProgress = {
      Fresher: 25,
      Experience: 0,
      Export: 0,
      Pro: 0,
    };

    setSkillsProgressBars((prevState) => ({
      ...prevState,
      [skill]: {
        progress: initialProgress,
      },
    }));
  };
  const formatSkillName = (skillName) => {
    // Convert skillName to camelCase
    return skillName
      .split(' ')
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');
  };

  const handleSkillSelectChange = (event) => {
    const selectedSkill = event.target.value;
    setSelectedSkill(selectedSkill);

    if (selectedSkill === 'add_skill') {
      const newSkills = [];

      while (true) {
        const newSkillInput = prompt('Enter a new skill (or click "Cancel" to stop adding skills):');

        if (newSkillInput === null) {
          // User clicked "Cancel" or closed the prompt
          break;
        }

        if (newSkillInput.trim() === '') {
          // Handle empty input if needed
          // toast.error('Skill name cannot be empty.');
        } else {
          // Format and add the skill to the list
          const formattedSkill = formatSkillName(newSkillInput);
          newSkills.push(formattedSkill);
        }
      }

      if (newSkills.length > 0) {
        // Add the new skills to the state
        setStudentSkills([...studentSkills, ...newSkills]);

        // Create progress bars for the new skills
        newSkills.forEach((newSkill) => createSecondProgressBar(newSkill));

        // Set the recently added skills
        setRecentlyAddedSkill(newSkills);

        // Display a confirmation message for the last added skill
        // toast.success(`Skill added successfully: ${newSkills[newSkills.length - 1]}`);
      }
    }
  };

  useEffect(() => {
    // Display a single toast message for all recently added skills
    if (recentlyAddedSkill.length > 0) {
      toast.info(`Please select the following skills: ${recentlyAddedSkill.join(', ')} from the dropdown`, {
        position: toast.POSITION.TOP_CENTER, // Set the position to top center
      });
      setRecentlyAddedSkill([]); // Clear the recently added skills
    }
  }, [recentlyAddedSkill]);




  const deleteSkill = (index, skill) => {
    const updatedSkills = [...studentSkills];
    updatedSkills.splice(index, 1);
    setStudentSkills(updatedSkills);

    setSkillsProgressBars((prevState) => {
      const newSkillsProgressBars = { ...prevState };
      delete newSkillsProgressBars[skill];
      return newSkillsProgressBars;
    });
  };

  const renderSecondProgressBar = (skill) => {
    const progress = skillsProgressBars[skill]?.progress || {};
    return (
      <div className="progress-bar">
        <div
          className="inner-progress stage-fresher"
          style={{ width: `${progress.Fresher}%`, backgroundColor: getRandomColor() }}
        ></div>
        <div
          className="inner-progress stage-experience"
          style={{ width: `${progress.Experience}%`, backgroundColor: getRandomColor() }}
        ></div>
        <div
          className="inner-progress stage-export"
          style={{ width: `${progress.Export}%`, backgroundColor: getRandomColor() }}
        ></div>
        <div
          className="inner-progress stage-pro"
          style={{ width: `${progress.Pro}%`, backgroundColor: getRandomColor() }}
        ></div>
      </div>
    );
  };

  const handleStageClick = (index) => {
    const selectedStage = stages[index];
    setSelectedStage(selectedStage);

    if (selectedSkill && selectedSkill !== 'add_skill') {
      updateSecondProgressBar(selectedSkill, selectedStage);
    }
  };

  const updateSecondProgressBar = (skill, stage) => {
    setSkillsProgressBars((prevState) => {
      const updatedSkillsProgressBars = { ...prevState };

      let progressPercentage = 0;
      if (stage === 'Fresher') {
        progressPercentage = 25;
      } else if (stage === 'Experience') {
        progressPercentage = 50;
      } else if (stage === 'Export') {
        progressPercentage = 75;
      } else if (stage === 'Pro') {
        progressPercentage = 100;
      }

      updatedSkillsProgressBars[skill].progress = {
        Fresher: stage === 'Fresher' ? progressPercentage : 0,
        Experience: stage === 'Experience' ? progressPercentage : 0,
        Export: stage === 'Export' ? progressPercentage : 0,
        Pro: stage === 'Pro' ? progressPercentage : 0,
      };

      return updatedSkillsProgressBars;
    });
  };

  const getRandomColor = () => {
    const colors = ['white'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  useEffect(() => {
    // Set the default color based on the active template
    const defaultColor = isColor1Active ? selectedColor1 : selectedColor;
    document.getElementById('color-picker').value = defaultColor;
  }, [isColor1Active, selectedColor, selectedColor1]);

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    isColor1Active ? setSelectedColor1(newColor) : setSelectedColor(newColor);
  };

  const handleColorButtonClick = () => {
    const colorPicker = document.getElementById('color-picker');
    colorPicker.click();
  };



  const handleTemplateChange = () => {
    setIsColor1Active((prev) => !prev);
  };
  const generateName = (inputValue, addSpace) => {
    const cleanedName = inputValue.replace(/\s+/g, " ").trim();
    const fullName = cleanedName
      .split(" ")
      .map((word, index) => {
        // Convert the first word to lowercase and the rest to title case
        if (index === 0) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

      })
      .join(' ');

    const camelCaseName = fullName.charAt(0).toUpperCase() + fullName.slice(1);
    return addSpace ? camelCaseName : camelCaseName.replace(/\s+/g, "");
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  let handleEditClick = () => {
    setEditingTitle(true);
  };

  let handleFnameClick = () => {
    setEditingFname(true);
  };

  const handleHeadingChange = (event) => {
    setHeading(event.target.value);
  };

  const handleFnameChange = (event) => {
    setFname(event.target.value);
  };

  const handleHeadingBlur = () => {
    editingRef.current = false;
    setEditingTitle(false);
  };

  const handleFnameBlur = () => {
    editingRef.current = false;
    setEditingFname(false);
  };

  let toggleDetails = () => {
    setEditing(!editing);
  };



  function setField(value, type) {
    switch (type) {
      case "name":
        setname(value);
        break;

      case "email":
        setemail(value);
        break;

      case "place":
        setplace(value);
        break;

      case "birth":
        setbirth(value);
        break;

      case "post":
        setpost(value);
        break;

      case "country":
        setcountry(value);
        break;

      case "city":
        setcity(value);
        break;

      case "address":
        setaddress(value);
        break;

      case "nation":
        setnation(value);
        break;

      case "job":
        setjob(value);
        break;

      case "editorHtml":
        setEditorHtml(value);
        break;

      default:
        console.log("Inside switch default case");
    }
  }

  function progress(value, typevalue, type, score) {
    if (value.trim() !== "") {
      setField(value, type);

      if (typevalue == "") {
        setCompletionPercentage(
          (completionPercentage) => completionPercentage + score
        );
      }
    } else {
      setField(value, type);
      setCompletionPercentage(
        (completionPercentage) => completionPercentage - score
      );
    }
  }

  const phoneChange = (value, selectedCountryData) => {
    setphone(value);
    setSelectedCountry(selectedCountryData.name);
  };

  const [stores, setStores] = useState(Data);
  const [ite, setite] = useState(item);
  let sourceindex = 0;
  let destinationindex = 0;

  const handleDragDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedStores = [...stores];
      const reoder = [...ite];

      sourceindex = source.index;
      destinationindex = destination.index;

      const [removedStore] = reorderedStores.splice(sourceindex, 1);
      const [remove] = reoder.splice(sourceindex, 1);
      reorderedStores.splice(destinationindex, 0, removedStore);
      reoder.splice(destinationindex, 0, remove);
      setite(reoder);
      setStores(reorderedStores);
      console.log(destination.index);
      console.log(destinationindex);

      return;
    }
  };
  const handlePrint = useReactToPrint({
    content: () => contentDivRef.current, // Reference to the content div
  });


  // Handle the switch's change event
  const handleSwitchChange = (checked) => {
    setIsChecked(checked);
  };


  const handleChange = (html) => {
    setEditorHtml(html);
    if (editorHtml === "") {
      setbar(bar + 10);
      return;
    }
  };

  const handlecurricular = () => {
    setcurricular(false);
  };
  const delete7 = () => {
    setcurricular(true);
  };
  const handlecourse = () => {
    setcour(false);
  };
  const delete2 = () => {
    setcour(true);
  };
  const handlereference = () => {
    setreference(false);
  };
  const delete3 = () => {
    setreference(true);
  };
  const handleinternship = () => {
    setintern(false);
  };
  const delete4 = () => {
    setintern(true);
  };
  const handlesection = () => {
    setsecetion(false);
  };
  const delete1 = () => {
    setsecetion(true);
  };
  const handleproject = () => {
    setproj(false);
  };
  const delete8 = () => {
    setproj(true);
  };
  const handlelink = () => {
    setlink(false);
  };
  const delete9 = () => {
    setlink(true);
  };
  const handleskill = () => {
    setlabel(false);
  };
  const delete10 = () => {
    setlabel(true);
  };
  const handlehobbie = () => {
    sethobb(false);
  };
  const delete5 = () => {
    sethobb(true);
  };
  const handlelanguage = () => {
    setlangu(false);
  };
  const delete6 = () => {
    setlangu(true);
  };

  // Show Template

  const showTemplate = () => {
    setshowTeemplate(false)
  }

  const [selectedFile, setSelectedFile] = useState(null);
  const [showFullView, setShowFullView] = useState(false);

  const handleDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
    setShowFullView(false);
    if (selectedFile === null) {
      setbar(bar + 10);
      return;
    }
  };

  const handleDelete = () => {
    setSelectedFile(null);
  };

  const handleView = () => {
    if (!showFullView) {
      setShowFullView(true);
    } else {
      setShowFullView(true);
    }
  };

  const [objects, setObjects] = useState([])


  const createObject = () => {
    const newObject = {
      id: objects.length + 1,
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
    };
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
    ite.map((value) => {
      if (value.id === "01") {
        value.it = updatedObjects;
        console.log(value.mob);
      }
    });
  };

  const replaceWithPresent = (objectId, inputName) => {
    const updatedObjects = objects.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: 'Present' };
      }
      return object;
    });
    setObjects(updatedObjects);
    ite.map((value) => {
      if (value.id === "01") {
        value.it = updatedObjects;
        console.log(value.mob);
      }
    });
  };

  const deleteObject = (objectId) => {
    const updatedObjects = objects.filter((object) => object.id !== objectId);
    setObjects(updatedObjects);

    ite.map((value) => {
      if (value.id === "01") {
        value.it = updatedObjects;
        console.log(value.mob);
      }
    });
  };

  // Code for Education
  const [education, seteducation] = useState([]);


  const createeducation = () => {
    const newObject = {
      id: education.length + 1,
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
    };
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
    ite.map((value) => {
      if (value.id === "02") {
        value.it = updatedObjects;
        console.log(value.mob);
      }
    });
  };

  const deleteedu = (objectId) => {
    const updatedObjects = education.filter((object) => object.id !== objectId);
    seteducation(updatedObjects);
    ite.map((value) => {
      if (value.id === "02") {
        value.it = updatedObjects;
        console.log(value.mob);
      }
    });
  };

  //code for extra-curricular

  const [four, setfour] = useState([]);


  const createfour = () => {
    const newObject = {
      id: four.length + 1,
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
    };
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
    ite.map((value) => {
      if (value.id === "03") {
        value.it = updatedObjects;
        console.log(value.mob);
      }
    });
  };

  const deletefour = (objectId) => {
    const updatedObjects = four.filter((object) => object.id !== objectId);
    setfour(updatedObjects);
    ite.map((value) => {
      if (value.id === "03") {
        value.it = updatedObjects;
        console.log(value.mob);
      }
    });
  };

  //code for Project

  const [project, setproject] = useState([]);



  const createproject = () => {
    const newObject = {
      id: project.length + 1,
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      input7: "",
      input8: "",

    };
    setproject([...project, newObject]);

  };

  const handleInputproject = (e, objectId, inputName) => {
    const updatedObjects = project.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setproject(updatedObjects);
    ite.map((value) => {
      if (value.id === "07") {
        value.it = updatedObjects;
        console.log(value.mob);
      }
    });
  };

  const deleteproject = (objectId) => {
    const updatedObjects = project.filter((object) => object.id !== objectId);
    setproject(updatedObjects);
    ite.map((value) => {
      if (value.id === "07") {
        value.it = updatedObjects;
        console.log(value.mob);
      }
    });
  };

  //code for custom

  const [cust, setcust] = useState([]);
  const [custom, setcustom] = useState("");


  const [deefault, setdefault] = useState("Custom");
  const [def, setdef] = useState(true);

  const handlecustumch = () => {
    if (def === true) {
      setdef(false);
    }
    if (def === false) {
      setdef(true);
    }
  };

  const handlecustom = (e) => {
    setdefault(e.target.value);
    const value1 = e.target.value;
    ite.map((value) => {
      if (value.id === "08") {
        value.head = value1;
      }
    });
  };

  const createcust = () => {
    const newObject = {
      id: cust.length + 1,
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
    };
    setcust([...cust, newObject]);
    setcustom("hi");

  };

  const handleInputcust = (e, objectId, inputName) => {
    const updatedObjects = cust.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setcust(updatedObjects);
    ite.map((value) => {
      if (value.id === "08") {
        value.it = updatedObjects;
        console.log(value.mob);
      }
    });
  };

  const deletecust = (objectId) => {
    const updatedObjects = cust.filter((object) => object.id !== objectId);
    setcust(updatedObjects);
    ite.map((value) => {
      if (value.id === "08") {
        value.it = updatedObjects;
        console.log(value.mob);
      }
    });
    if (createcust === "") {
      setcustom("");
    }
  };

  //code for course

  const [course, setcourse] = useState([]);


  const createcourse = () => {
    const newObject = {
      id: course.length + 1,
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
    };
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
    ite.map((value) => {
      if (value.id === "04") {
        value.it = updatedObjects;
        console.log(value.mob);
      }
    });
  };
  const replacePresent = (objectId, inputName) => {
    const updatedObjects = course.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: 'Present' };
      }
      return object;
    });
    setcourse(updatedObjects);
    ite.map((value) => {
      if (value.id === "04") {
        value.it = updatedObjects;
        console.log(value.mob);
      }
    });
  };

  const deletecourse = (objectId) => {
    const updatedObjects = course.filter((object) => object.id !== objectId);
    setcourse(updatedObjects);
    ite.map((value) => {
      if (value.id === "04") {
        value.it = updatedObjects;
        console.log(value.mob);
      }
    });
  };

  // code for internship

  const [five, setfive] = useState([]);


  const createfive = () => {
    const newObject = {
      id: five.length + 1,
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
    };
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
    ite.map((value) => {
      if (value.id === "05") {
        value.it = updatedObjects;
        console.log(value.mob);
      }
    });
  };

  const replacedate = (objectId, inputName) => {
    const updatedObjects = five.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: 'Present' };
      }
      return object;
    });
    setfive(updatedObjects);
    ite.map((value) => {
      if (value.id === "05") {
        value.it = updatedObjects;
        console.log(value.mob);
      }
    });
  };


  const deletefive = (objectId) => {
    const updatedObjects = five.filter((object) => object.id !== objectId);
    setfive(updatedObjects);
    ite.map((value) => {
      if (value.id === "05") {
        value.it = updatedObjects;
        console.log(value.mob);
      }
    });
  };

  // code for reference

  const [three, setthree] = useState([]);


  const createthree = () => {
    const newObject = {
      id: three.length + 1,
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
    };
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
    ite.map((value) => {
      if (value.id === "06") {
        value.it = updatedObjects;
        console.log(value.mob);
      }
    });
  };

  const deletethree = (objectId) => {
    const updatedObjects = three.filter((object) => object.id !== objectId);
    setthree(updatedObjects);
    ite.map((value) => {
      if (value.id === "06") {
        value.it = updatedObjects;
        console.log(value.mob);
      }
    });
  };
  //code for website

  const [website, setwebsite] = useState([]);


  const createweb = () => {
    const newObject = { id: website.length + 1, input1: "", input2: "" };
    setwebsite([...website, newObject]);

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

  };
  //code for skill

  const [skill, setskill] = useState([]);


  const createskill = () => {
    const newObject = { id: skill.length + 1, input1: "", input2: "" };
    setskill([...skill, newObject]);

  };



  const deleteskill = (objectId) => {
    const updatedObjects = skill.filter((object) => object.id !== objectId);
    setskill(updatedObjects);

  };

  //code for Hobbies

  const [six, setsix] = useState([]);


  const createsix = () => {
    const newObject = { id: six.length + 1, input1: "", input2: "" };
    setsix([...six, newObject]);

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

  };
  // code for language

  const [seven, setseven] = useState([]);


  const createseven = () => {
    const newObject = {
      id: seven.length + 1,
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
    };
    setseven([...seven, newObject]);

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

  };

  const [bar, setbar] = useState(0);

  return (
    <div className="resume-body">
      <div className="resume-container">
        <div className="resume-left">
          <div>
            <div className="resume-left-content">
              <div className="resume-title">
                <div className="title-content">
                  <div className="content-box">

                  </div>
                </div>
              </div>

              <div className="score-body">
                <div className="score-content">
                  <div className="score-left-body">
                    {/* <div className="progress-score">{completionPercentage}%</div> */}
                    <p className="resume-para">Completion Score</p>
                  </div>
                  <div className="resume-profile-body">
                    <div className="resume-profile-content">
                      <div>
                        <div className="profile-body">
                          <button onClick={() => setpercentage(!percentage)}>

                            {
                              percentage ? <AiFillCloseCircle className="question-icon" /> : <AiFillQuestionCircle className="question-icon" />
                            }
                          </button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="resume-hr-body">
                  {<ProgressBar completed={completionPercentage}
                  />}
                  <div className={percentage ? "visible" : "hidden"}>
                    <div className="competion">
                      {
                        job === "" ? <h5 className="percentage">5% Role</h5> : <span></span>
                      }
                      {
                        name === "" ? <h5 className="percentage">5% Name</h5> : <span></span>
                      }
                      {
                        email === "" ? <h5 className="percentage">5% Email</h5> : <span></span>
                      }
                      {
                        phone === "" ? <h5 className="percentage">5% Phone</h5> : <span></span>
                      }
                      {
                        country === "" ? <h5 className="percentage">5% Country</h5> : <span></span>
                      }
                      {
                        place === "" ? <h5 className="percentage">5% Place of Birth</h5> : <span></span>
                      }
                      {
                        birth === "" ? <h5 className="percentage">5% Date of Birth</h5> : <span></span>
                      }
                      {
                        editorHtml === "" ? <h5 className="percentage">15% Summary</h5> : <span></span>
                      }
                      {
                        skill.length === 0 ? <h5 className="percentage">25% Skills</h5> : <span></span>
                      }
                      {
                        education.length === 0 ? <h5 className="percentage">25% Education</h5> : <span></span>
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="left-pdetails-container">
                <div className="details-heading-content">
                  <div className="header-label">
                    {editingTitle ? (
                      <div>
                        <input
                          type="text"
                          id="personal-details"
                          value={heading}
                          onChange={handleHeadingChange}
                          onBlur={handleHeadingBlur}
                          className="handle-input"
                        />
                      </div>
                    ) : (
                      <div className="handle-heading">
                        <h2 className="main-heading">{heading}</h2>
                        <button onClick={handleEditClick}>
                          <EditIcon />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="job-title">
                  <div className="wanted">
                    <div className="job">
                      <label htmlFor="">Role<span style={{ color: "red" }}>*</span></label> <br />
                      <input
                        type="text"
                        value={job}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          progress(e.target.value, job, "job", 5);
                          const name1Element = document.querySelector('.name1');

                          // Check if input value is not empty
                          if (inputValue.trim() !== '') {
                            // If not empty, add the class to apply the styles
                            name1Element.classList.add('active');
                          } else {
                            // If empty, remove the class
                            name1Element.classList.remove('active');
                          }
                        }}
                        className="work"
                      />
                    </div>
                  </div>
                  <div className="photo">


                    <div className="select-photo-container">
                      <Dropzone
                        onDrop={handleDrop}
                        accept="image/*" f
                        multiple={false}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div className="dropzone" {...getRootProps()}>
                            <input {...getInputProps()} />
                            {selectedFile ? (
                              <div className="image">
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
                              <div className="select-image">
                                <div className="person-icon">
                                  <GoPerson className="icon"></GoPerson>
                                </div>
                                <div className="photo-heading">
                                  <h4>Upload photo</h4>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </Dropzone>
                      <div className="text">
                        {selectedFile ? (
                          <div className="photo-edit-container">
                            <div className="photo-delete">
                              <button onClick={handleDelete} className="ed">
                                <MdOutlineDelete className="photo-icon" />
                              </button>
                            </div>
                            <div className="photo-edit">
                              <button onClick={handleView} className="ed">
                                <AiOutlineEdit className="photo-icon" />
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="job-title">
                  <div className="wanted">
                    <div className="job">
                      <label htmlFor="">First Name<span style={{ color: "red" }}>*</span></label> <br />
                      <input
                        type="text"
                        className="work"
                        // value={name}
                        onChange={(e) => {
                          progress(e.target.value, name, "name", 5);
                        }}
                        value={name}
                      // onChange={(e) => setname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="photo">
                    <label htmlFor="">Last Name<span style={{ color: "red" }}>*</span></label> <br />
                    <input
                      type="text"
                      className="work"
                      // value={lastname}
                      // onChange={(e) => {
                      //   setlastname(e.target.value);
                      // }}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="job-title">
                  <div className="wanted">
                    <div className="job">
                      <label htmlFor="">Email<span style={{ color: "red" }}>*</span></label> <br />
                      <input
                        type="email"
                        className="work"
                        value={email}
                        onChange={(e) => {
                          progress(e.target.value, email, "email", 5);
                        }}
                      />
                    </div>
                  </div>
                  <div className="photo">
                    <label htmlFor="">Phone<span style={{ color: "red" }}>*</span></label> <br />
                    <PhoneInput
                      country={"in"}
                      className="work"
                      value={phone}
                      onChange={phoneChange}
                    />
                  </div>
                </div>
                <div className="job-title">
                  <div className="wanted">
                    <div className="job">
                      <label htmlFor="">Country<span style={{ color: "red" }}>*</span></label> <br />
                      <input
                        type="text"
                        className="work"
                        value={country}
                        onChange={(e) => {
                          progress(e.target.value, country, "country", 5);
                        }}
                      // value={country}
                      // onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="photo">
                    <label htmlFor="">City</label> <br />
                    <input
                      type="text"
                      className="work"
                      value={city}
                      onChange={(e) => {
                        progress(e.target.value, city, "city", 5);
                      }}
                    // value={city}
                    // onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
                {editing ? (
                  <div>
                    <div className="job-title">
                      <div className="wanted">
                        <div className="job">
                          <label htmlFor="">Address</label> <br />
                          <input
                            type="text"
                            className="work"
                            value={address}
                            onChange={(e) => {
                              progress(e.target.value, address, "address", 5);
                            }}
                          />
                        </div>
                      </div>
                      <div className="photo">
                        <label htmlFor="">Postal code</label> <br />
                        <input
                          type="text"
                          className="work"
                          value={post}
                          onChange={(e) => {
                            progress(e.target.value, post, "post", 5);
                          }}
                        />
                      </div>
                    </div>

                    <div className="job-title">
                      <div className="wanted">
                        <div className="job">
                          <label htmlFor="">Gender</label> <br />
                          {/* <input
                            type="text"
                            className="work"
                            value={licence}
                            onChange={(e) => {
                              setlicense(e.target.value);
                            }}
                          /> */}
                          <div className="main-gender">
                            <label className="gender">
                              <input type="radio" name="gender" value="Male"
                                onChange={(e) => {
                                  setlicense(e.target.value);
                                }} />
                              Male
                            </label>
                            <label className="gender">
                              <input type="radio" name="gender" value="Female"
                                onChange={(e) => {
                                  setlicense(e.target.value);
                                }} />
                              Female
                            </label>
                            <label className="gender">
                              <input type="radio" name="gender" value="Other"
                                onChange={(e) => {
                                  setlicense(e.target.value);
                                }} />
                              Other
                            </label>
                            <label className="gender">
                              <input type="radio" name="gender" value=""
                                onChange={(e) => {
                                  setlicense(e.target.value);
                                }} />
                              Do Not Display
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="photo">
                        <label>Nation</label>
                        <br />
                        <input
                          type="text"
                          className="work"
                          value={nation}
                          onChange={(e) => {
                            progress(e.target.value, nation, "nation", 5);
                          }}
                        // value={nation}
                        // onChange={(e) => setNation(e.target.value)}
                        />
                      </div>
                    </div>


                    <div className="job-title">
                      <div className="wanted">
                        <div className="job">
                          <label htmlFor="">Place of Birth<span style={{ color: "red" }}>*</span></label> <br />
                          <input
                            type="text"
                            className="work"
                            value={place}
                            onChange={(e) => {
                              progress(e.target.value, place, "place", 5);
                            }}
                          // value={placeOfBirth}
                          // onChange={(e) => setPlaceOfBirth(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="photo">
                        <label htmlFor="">Date of Birth<span style={{ color: "red" }}>*</span></label> <br />
                        <input
                          type="text"
                          className="work"
                          placeholder="dd/mm/yyyy"
                          value={birth}
                          onChange={(e) => {
                            progress(e.target.value, birth, "birth", 5);
                          }}
                        />
                      </div>
                    </div>
                    <div className="input-section">
                      <button onClick={toggleDetails} className="edit-button">
                        <div className="edit-details">
                          <span>Hide additional details</span>
                          <KeyboardArrowUpIcon />
                        </div>
                      </button>
                    </div>
                  </div>
                ) : (
                  <button onClick={toggleDetails} className="edit-button">
                    <div className="edit-details">
                      <span>Edit additional details</span>
                      <ExpandMoreIcon />
                    </div>
                  </button>
                )}
              </div>
              <div className="summary">
                <div>
                  <div>

                    {/* <h2>Summary<span style={{color:"red"}}>*</span></h2> */}

                    <h2 className="main-heading">Summary<span style={{ color: "red", fontSize: "16px" }}>*</span></h2>

                  </div>
                  <div>
                    <p>
                      Write 2-4 short & energetic sentences to interest the
                      reader! Mention your role, experience & most importantly -
                      your biggest achievements, best qualities and skills.
                    </p>
                  </div>
                  <div>
                    <div>
                      <ReactQuill style={{ width: "100%" }}
                        theme="snow"
                        value={editorHtml}
                        onChange={(value) =>
                          progress(value, editorHtml, "editorHtml", 50)
                        }
                        className="paragh"
                        modules={{
                          toolbar: [
                            ["bold", "italic", "underline", "strike"],
                            [{ list: "ordered" }, { list: "bullet" }],

                            ["link"],
                          ],
                        }}
                      />
                      <div>
                        {/* <h3>Editor Output:</h3>
        <div dangerouslySetInnerHTML={{ __html: editorHtml }} /> */}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>
                      Recruiter tip: write 50-200 characters to increase
                      interview chances
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <DragDropContext onDragEnd={handleDragDrop}>
                  <div className="first">
                    <Droppable droppableId="Root" type="group">
                      {(provided) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {stores.map((store, index) => (
                            <Draggable
                              draggableId={store.id}
                              key={store.id}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  {...provided.dragHandleProps}
                                  {...provided.draggableProps}
                                  ref={provided.innerRef}
                                >
                                  {store.name === "Custom" ? (
                                    <div
                                      style={{ display: "flex" }}
                                      id="main-cust"
                                    >
                                      {def ? (
                                        <h3
                                          className={
                                            secetion ? "hidden" : "visible"
                                          }
                                        >
                                          <MdDragIndicator className="drag drop" /> {deefault}
                                        </h3>
                                      ) : (
                                        <h3
                                          className={
                                            secetion ? "hidden" : "visible"
                                          }
                                        ><MdDragIndicator className="drag drop" />
                                          <input
                                            type="text"
                                            value={deefault}
                                            onChange={handlecustom}
                                            id="custom"
                                          />
                                        </h3>
                                      )}
                                      <button
                                        onClick={handlecustumch}
                                        id="cust"
                                        className={
                                          secetion ? "hidden" : "visible"
                                        }
                                      >
                                        {def ? (
                                          <AiOutlineEdit />
                                        ) : (
                                          <GiSaveArrow></GiSaveArrow>
                                        )}
                                      </button>
                                    </div>
                                  ) : (
                                    <span></span>
                                  )}

                                  {/* <p className="des">{store.description}</p> */}
                                  {/* <Storelist {...store}/> */}
                                  {store.name === "Employment" ? (
                                    <div className="add-section-container">
                                      <h3 className="main-heading"><a data-tooltip-id="my-tooltip" data-tooltip-content="Drag and Drop"><MdDragIndicator className="drag" /></a>
                                        <Tooltip id="my-tooltip" />
                                        {store.name}</h3>
                                      <p className="des">{store.description}</p>
                                      {objects.map((object) => (
                                        <div key={object.id}>
                                          <div
                                            className="flex"
                                          >
                                            <div style={{ display: "flex" }}>
                                              <div>
                                                {object.input1}
                                                <div>
                                                  {
                                                    object.input4 === "" ? <span></span> : <p>{`(${object.input4} to ${object.input5})`}</p>
                                                  }
                                                </div>

                                              </div>
                                              {
                                                emp ? <div className="emp-delete-btn" id="emp-delete">
                                                  <button
                                                    onClick={() =>
                                                      deleteObject(object.id)
                                                    }
                                                    className="delete"
                                                  >
                                                    <MdOutlineDelete />
                                                  </button>
                                                </div> : <span></span>
                                              }


                                            </div>


                                            <h5
                                              onClick={() => setemp(!emp)}
                                              style={{ cursor: "pointer" }}
                                              className="arrow"
                                            >
                                              {
                                                emp ? <IoIosArrowUp /> : <IoIosArrowDown />
                                              }
                                            </h5>

                                            <div
                                              className={
                                                emp ? "visible" : "hidden"
                                              }
                                            >
                                              <div className="emp-container">
                                                <div className="emp-main">
                                                  <div
                                                    style={{ display: "flex" }}
                                                  >
                                                    <div className="wanted">
                                                      <div>
                                                        <label htmlFor="" className="data-label">
                                                          Job title
                                                        </label>{" "}
                                                        <br />
                                                        <input
                                                          type="text"
                                                          value={object.input1}
                                                          className="work"
                                                          onChange={(e) =>
                                                            handleInputChange(
                                                              e,
                                                              object.id,
                                                              "input1"
                                                            )
                                                          }
                                                        />
                                                      </div>
                                                    </div>
                                                    <div>
                                                      <label htmlFor="">
                                                        Employer
                                                      </label>{" "}
                                                      <br />
                                                      <input
                                                        type="text"
                                                        value={object.input2}
                                                        className="work"
                                                        onChange={(e) =>
                                                          handleInputChange(
                                                            e,
                                                            object.id,
                                                            "input2"
                                                          )
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                  <div
                                                    style={{ display: "flex" }}
                                                  >
                                                    <div className="wanted">
                                                      <div>
                                                        <label htmlFor="">
                                                          Start & End Date
                                                        </label>{" "}
                                                        <br />
                                                        <input
                                                          type="date"
                                                          value={object.input4}
                                                          className="workk"
                                                          onChange={(e) =>
                                                            handleInputChange(
                                                              e,
                                                              object.id,
                                                              "input4"
                                                            )
                                                          }
                                                        />
                                                        <input
                                                          type="date"
                                                          value={object.input5}
                                                          className="workk"
                                                          onChange={(e) =>
                                                            handleInputChange(
                                                              e,
                                                              object.id,
                                                              "input5"
                                                            )
                                                          }
                                                        />
                                                        <div style={{ display: "flex" }} className="present-date">
                                                          <input type="checkbox" name="" id="" value="Present" onClick={() => replaceWithPresent(object.id, 'input5')} /> <h5 className="present-cont">Present</h5>


                                                        </div>
                                                        {/* <button onClick={() => replaceWithPresent(object.id, 'input5')} className="present-date">Set Present</button> */}
                                                      </div>
                                                    </div>
                                                    <div>
                                                      <label htmlFor="">
                                                        City
                                                      </label>{" "}
                                                      <br />
                                                      <input
                                                        type="text"
                                                        value={object.input3}
                                                        className="work"
                                                        onChange={(e) =>
                                                          handleInputChange(
                                                            e,
                                                            object.id,
                                                            "input3"
                                                          )
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                  <div>
                                                    <div>
                                                      <label htmlFor="">
                                                        Description
                                                      </label>{" "}
                                                      <br />
                                                      <textarea
                                                        name=""
                                                        id=""
                                                        cols="90"
                                                        rows="15"
                                                        value={object.input6}
                                                        onChange={(e) =>
                                                          handleInputChange(
                                                            e,
                                                            object.id,
                                                            "input6"
                                                          )
                                                        }
                                                        placeholder="e.g. Graduated with High Honors."
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                                {/* <div className="emp-delete-btn">
                                                <button
                                                  onClick={() =>
                                                    deleteObject(object.id)
                                                  }
                                                  className="delete"
                                                >
                                                  <MdOutlineDelete />
                                                </button>
                                              </div> */}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                      <button
                                        onClick={createObject}
                                        className="add"
                                      >
                                        {" "}
                                        + Add Employment
                                      </button>
                                    </div>
                                  ) : (
                                    <span></span>
                                  )}
                                  {store.name === "Education" ? (
                                    <div className="education-container">

                                      {/* <h3><MdDragIndicator className="drag" />{store.name}<span style={{color:"red"}}>*</span></h3> */}

                                      <h3 className="main-heading"><a data-tooltip-id="my-tooltip" data-tooltip-content="Drag and Drop"><MdDragIndicator className="drag" /></a>
                                        <Tooltip id="my-tooltip" />
                                        {store.name}<span style={{ color: "red", fontSize: "17px" }}>*</span></h3>

                                      <p className="des">{store.description}</p>
                                      {education.map((object) => (
                                        <div key={object.id}>
                                          <div
                                            className="flex"
                                          >
                                            {object.input1}
                                            <div>
                                              {/* {
                                                object.input4 === "" ? <span></span> : <p>{`(${object.input4} to ${object.input5})`}</p>
                                              } */}

                                              {
                                                object.input4 === "" ? <span></span> : object.input5 === "" ? <p className="fontt">{`${object.input4} to Present`}</p> : <p className="fontt">{`${object.input4} to ${object.input5}`}</p>
                                              }


                                            </div>
                                            <h5
                                              onClick={() => setoction(!oction)}
                                              style={{ cursor: "pointer" }}
                                              className="arrow"
                                            >
                                              {
                                                oction ? <IoIosArrowUp /> : <IoIosArrowDown />
                                              }
                                            </h5>

                                            <div
                                              className={
                                                oction ? "visible" : "hidden"
                                              }
                                            >
                                              <div style={{ display: "flex" }}>
                                                <div className="emp-main">
                                                  <div
                                                    style={{ display: "flex" }}
                                                  >
                                                    <div className="wanted">
                                                      <div>
                                                        <label htmlFor="">
                                                          School
                                                        </label>{" "}
                                                        <br />
                                                        <input
                                                          type="text"
                                                          value={object.input1}
                                                          className="work"
                                                          onChange={(e) =>
                                                            handleInputedu(
                                                              e,
                                                              object.id,
                                                              "input1"
                                                            )
                                                          }
                                                        />
                                                      </div>
                                                    </div>
                                                    <div>
                                                      <label htmlFor="">
                                                        Degree
                                                      </label>{" "}
                                                      <br />
                                                      <input
                                                        type="text"
                                                        value={object.input2}
                                                        className="work"
                                                        onChange={(e) =>
                                                          handleInputedu(
                                                            e,
                                                            object.id,
                                                            "input2"
                                                          )
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                  <div
                                                    style={{ display: "flex" }}
                                                  >
                                                    <div className="wanted">
                                                      <div>
                                                        <label htmlFor="">
                                                          Start & End Date
                                                        </label>{" "}
                                                        <br />
                                                        <input
                                                          type="date"
                                                          value={object.input4}
                                                          className="workk"
                                                          onChange={(e) =>
                                                            handleInputedu(
                                                              e,
                                                              object.id,
                                                              "input4"
                                                            )
                                                          }
                                                        />
                                                        <input
                                                          type="date"
                                                          value={object.input5}
                                                          className="workk"
                                                          onChange={(e) =>
                                                            handleInputedu(
                                                              e,
                                                              object.id,
                                                              "input5"
                                                            )
                                                          }
                                                        />
                                                        {/* <button onClick={() => replaceWithPresent(object.id, 'input5')} className="present-date">Set Present</button> */}
                                                      </div>
                                                    </div>
                                                    <div>
                                                      <label htmlFor="">
                                                        City
                                                      </label>{" "}
                                                      <br />
                                                      <input
                                                        type="text"
                                                        value={object.input3}
                                                        className="work"
                                                        onChange={(e) =>
                                                          handleInputedu(
                                                            e,
                                                            object.id,
                                                            "input3"
                                                          )
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                  <div>
                                                    <div>
                                                      <label htmlFor="">
                                                        Description
                                                      </label>{" "}
                                                      <br />
                                                      <textarea
                                                        name=""
                                                        id=""
                                                        cols="85"
                                                        rows="8"
                                                        value={object.input6}
                                                        onChange={(e) =>
                                                          handleInputedu(
                                                            e,
                                                            object.id,
                                                            "input6"
                                                          )
                                                        }
                                                        placeholder="e.g. Graduated with High Honors."
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="emp-delete-btn">
                                                  <button
                                                    onClick={() =>
                                                      deleteedu(object.id)
                                                    }
                                                    className="delete"
                                                  >
                                                    <MdOutlineDelete />
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                      <button
                                        onClick={createeducation}
                                        className="add"
                                      >
                                        {" "}
                                        + Add education
                                      </button>
                                    </div>
                                  ) : (
                                    <span></span>
                                  )}
                                  {store.name ===
                                    "Extra-curricular activites" ? (
                                    <div className="add_section_box">
                                      <div
                                        className={
                                          curricular ? "hidden" : "visible"
                                        }
                                      >


                                        <h3 className="main-heading">
                                          <a data-tooltip-id="my-tooltip" data-tooltip-content="Drag and Drop"><MdDragIndicator className="drag" /></a>
                                          <Tooltip id="my-tooltip" />
                                          {store.name}</h3>
                                        <p className="des">{store.description}</p>
                                        <div className="emp-div">
                                          {four.map((object) => (
                                            <div key={object.id}>
                                              <div
                                                className="flexx"
                                              >
                                                {object.input1}
                                                <h5
                                                  onClick={() => setext(!ext)}
                                                  style={{ cursor: "pointer" }}
                                                  className="arrow"
                                                >
                                                  {ext ? (
                                                    <IoIosArrowUp />
                                                  ) : (
                                                    <IoIosArrowDown />
                                                  )}
                                                </h5>
                                                <div
                                                  className={
                                                    ext ? "visible" : "hidden"
                                                  }
                                                >
                                                  <div style={{ display: "flex" }}>
                                                    <div className="emp-main">
                                                      <div
                                                        style={{ display: "flex" }}
                                                      >
                                                        <div className="wanted">
                                                          <div>
                                                            <label htmlFor="">
                                                              Job title
                                                            </label>{" "}
                                                            <br />
                                                            <input
                                                              type="text"
                                                              value={object.input1}
                                                              className="work"
                                                              onChange={(e) =>
                                                                handleInputfour(
                                                                  e,
                                                                  object.id,
                                                                  "input1"
                                                                )
                                                              }
                                                            />
                                                          </div>
                                                        </div>
                                                        <div>
                                                          <label htmlFor="">
                                                            Employer
                                                          </label>{" "}
                                                          <br />
                                                          <input
                                                            type="text"
                                                            value={object.input2}
                                                            className="work"
                                                            onChange={(e) =>
                                                              handleInputfour(
                                                                e,
                                                                object.id,
                                                                "input2"
                                                              )
                                                            }
                                                          />
                                                        </div>
                                                      </div>
                                                      <div
                                                        style={{ display: "flex" }}
                                                      >
                                                        <div className="wanted">
                                                          <div>
                                                            <label htmlFor="">
                                                              Start & End Date
                                                            </label>{" "}
                                                            <br />
                                                            <input
                                                              type="date"
                                                              value={object.input4}
                                                              className="workk"
                                                              onChange={(e) =>
                                                                handleInputfour(
                                                                  e,
                                                                  object.id,
                                                                  "input4"
                                                                )
                                                              }
                                                            />
                                                            <input
                                                              type="date"
                                                              value={object.input5}
                                                              className="workk"
                                                              onChange={(e) =>
                                                                handleInputfour(
                                                                  e,
                                                                  object.id,
                                                                  "input5"
                                                                )
                                                              }
                                                            />
                                                          </div>
                                                        </div>
                                                        <div>
                                                          <label htmlFor="">
                                                            City
                                                          </label>{" "}
                                                          <br />
                                                          <input
                                                            type="text"
                                                            value={object.input3}
                                                            className="work"
                                                            onChange={(e) =>
                                                              handleInputfour(
                                                                e,
                                                                object.id,
                                                                "input3"
                                                              )
                                                            }
                                                          />
                                                        </div>
                                                      </div>
                                                      <div>
                                                        <div>
                                                          <label htmlFor="">
                                                            Description
                                                          </label>{" "}
                                                          <br />
                                                          <textarea
                                                            name=""
                                                            id=""
                                                            cols="90"
                                                            rows="15"
                                                            value={object.input6}
                                                            onChange={(e) =>
                                                              handleInputfour(
                                                                e,
                                                                object.id,
                                                                "input6"
                                                              )
                                                            }
                                                            placeholder="e.g. Created and implemented lesson plans based on child-led
interests and curiosities"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="emp-delete-btn">
                                                      <button
                                                        onClick={() =>
                                                          deletefour(object.id)
                                                        }
                                                        className="delete"
                                                      >
                                                        <MdOutlineDelete />
                                                      </button>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                          <button
                                            onClick={createfour}
                                            className="add"
                                          >
                                            {" "}
                                            + Add Extra-Curricular Acvtivity
                                          </button>
                                        </div>

                                        <button onClick={delete7} className="custom-delete btn btn-primary ">Delete</button>

                                      </div>
                                    </div>
                                  ) : (
                                    <span></span>
                                  )}
                                  {store.name === "Course" ? (
                                    <div className="add_section_box">
                                      <div
                                        className={cour ? "hidden" : "visible"}
                                      >
                                        <h3 className="main-heading"><a data-tooltip-id="my-tooltip" data-tooltip-content="Drag and Drop"><MdDragIndicator className="drag" /></a>
                                          <Tooltip id="my-tooltip" />
                                          {store.name}</h3>
                                        <p className="des">{store.description}</p>
                                        <div className="emp-div">
                                          {course.map((object) => (
                                            <div key={object.id}>
                                              <div
                                                className="flexx"
                                              >
                                                {object.input1}
                                                <h5
                                                  onClick={() => setcou(!cou)}
                                                  style={{ cursor: "pointer" }}
                                                  className="arrow"
                                                >
                                                  {cou ? (
                                                    <IoIosArrowUp />
                                                  ) : (
                                                    <IoIosArrowDown />
                                                  )}
                                                </h5>
                                                <div
                                                  className={
                                                    cou ? "visible" : "hidden"
                                                  }
                                                >
                                                  <div style={{ display: "flex" }}>
                                                    <div className="emp-main">
                                                      <div
                                                        style={{ display: "flex" }}
                                                      >
                                                        <div className="wanted">
                                                          <div>
                                                            <label htmlFor="">
                                                              Course
                                                            </label>{" "}
                                                            <br />
                                                            <input
                                                              type="text"
                                                              value={object.input1}
                                                              className="work"
                                                              onChange={(e) =>
                                                                handleInputcourse(
                                                                  e,
                                                                  object.id,
                                                                  "input1"
                                                                )
                                                              }
                                                            />
                                                          </div>
                                                        </div>
                                                        <div>
                                                          <label htmlFor="">
                                                            Institution
                                                          </label>{" "}
                                                          <br />
                                                          <input
                                                            type="text"
                                                            value={object.input2}
                                                            className="work"
                                                            onChange={(e) =>
                                                              handleInputcourse(
                                                                e,
                                                                object.id,
                                                                "input2"
                                                              )
                                                            }
                                                          />
                                                        </div>
                                                      </div>
                                                      <div
                                                        style={{ display: "flex" }}
                                                      >
                                                        <div className="wanted">
                                                          <div>
                                                            <label htmlFor="">
                                                              Start & End Date
                                                            </label>{" "}
                                                            <br />
                                                            <input
                                                              type="date"
                                                              value={object.input4}
                                                              className="workk"
                                                              onChange={(e) =>
                                                                handleInputcourse(
                                                                  e,
                                                                  object.id,
                                                                  "input4"
                                                                )
                                                              }
                                                            />
                                                            <input
                                                              type="date"
                                                              value={object.input5}
                                                              className="workk"
                                                              onChange={(e) =>
                                                                handleInputcourse(
                                                                  e,
                                                                  object.id,
                                                                  "input5"
                                                                )
                                                              }
                                                            />
                                                            <button onClick={() => replacePresent(object.id, 'input5')}>Set Present</button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="emp-delete-btn">
                                                      <button
                                                        onClick={() =>
                                                          deletecourse(object.id)
                                                        }
                                                        className="delete"
                                                      >
                                                        <MdOutlineDelete />
                                                      </button>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                          <button
                                            onClick={createcourse}
                                            className="add"
                                          >
                                            {" "}
                                            + Add one more course
                                          </button>
                                        </div>
                                        <button onClick={delete2} className="custom-delete btn btn-primary">Delete</button>
                                      </div>
                                    </div>
                                  ) : (
                                    <span></span>
                                  )}
                                  {store.name === "Internships" ? (
                                    <div className="add_section_box">
                                      <div
                                        className={intern ? "hidden" : "visible"}
                                      >
                                        <h3 className="main-heading"><a data-tooltip-id="my-tooltip" data-tooltip-content="Drag and Drop"><MdDragIndicator className="drag" /></a>
                                          <Tooltip id="my-tooltip" />
                                          {store.name}</h3>
                                        <div className="emp-div">
                                          {five.map((object) => (
                                            <div key={object.id}>
                                              <div
                                                className="flexx"
                                              >
                                                {object.input1}
                                                <h5
                                                  onClick={() => setinter(!inter)}
                                                  style={{ cursor: "pointer" }}
                                                  className="arrow"
                                                >
                                                  {inter ? (
                                                    <IoIosArrowUp />
                                                  ) : (
                                                    <IoIosArrowDown />
                                                  )}
                                                </h5>

                                                <div
                                                  className={
                                                    inter ? "visible" : "hidden"
                                                  }
                                                >
                                                  <div className="intern-job-emp">
                                                    <div className="emp-main">
                                                      <div className="intern-job-emp" >
                                                        <div className="wanted">
                                                          <div>
                                                            <label htmlFor="">
                                                              Job title
                                                            </label>{" "}
                                                            <br />
                                                            <input
                                                              type="text"
                                                              value={object.input1}
                                                              className="work"
                                                              onChange={(e) =>
                                                                handleInputfive(
                                                                  e,
                                                                  object.id,
                                                                  "input1"
                                                                )
                                                              }
                                                            />
                                                          </div>
                                                        </div>
                                                        <div>
                                                          <label htmlFor="">
                                                            Emp
                                                          </label>{" "}
                                                          <br />
                                                          <input
                                                            type="text"
                                                            value={object.input2}
                                                            className="work"
                                                            onChange={(e) =>
                                                              handleInputfive(
                                                                e,
                                                                object.id,
                                                                "input2"
                                                              )
                                                            }
                                                          />
                                                        </div>
                                                      </div>
                                                      <div
                                                        style={{ display: "flex" }}
                                                      >
                                                        <div className="wanted">
                                                          <div>
                                                            <label htmlFor="">
                                                              Start & End Date
                                                            </label>{" "}
                                                            <br />
                                                            <input
                                                              type="date"
                                                              value={object.input4}
                                                              className="workk"
                                                              onChange={(e) =>
                                                                handleInputfive(
                                                                  e,
                                                                  object.id,
                                                                  "input4"
                                                                )
                                                              }
                                                            />
                                                            <input
                                                              type="date"
                                                              value={object.input5}
                                                              className="workk"
                                                              onChange={(e) =>
                                                                handleInputfive(
                                                                  e,
                                                                  object.id,
                                                                  "input5"
                                                                )
                                                              }
                                                            />
                                                            <button onClick={() => replacedate(object.id, 'input5')}>Set Present</button>
                                                          </div>
                                                        </div>
                                                        <div>
                                                          <label htmlFor="">
                                                            City
                                                          </label>{" "}
                                                          <br />
                                                          <input
                                                            type="text"
                                                            value={object.input3}
                                                            className="work"
                                                            onChange={(e) =>
                                                              handleInputfive(
                                                                e,
                                                                object.id,
                                                                "input3"
                                                              )
                                                            }
                                                          />
                                                        </div>
                                                      </div>
                                                      <div>
                                                        <div>
                                                          <label htmlFor="">
                                                            Description
                                                          </label>{" "}
                                                          <br />
                                                          <textarea
                                                            name=""
                                                            id=""
                                                            cols="90"
                                                            rows="15"
                                                            value={object.input6}
                                                            onChange={(e) =>
                                                              handleInputfive(
                                                                e,
                                                                object.id,
                                                                "input6"
                                                              )
                                                            }
                                                            placeholder="e.g. Created and implemented lesson plans based on child-led
interests and curiosities"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="emp-delete-btn">
                                                      <button
                                                        onClick={() =>
                                                          deletefive(object.id)
                                                        }
                                                        className="delete"
                                                      >
                                                        <MdOutlineDelete />
                                                      </button>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                          <button
                                            onClick={createfive}
                                            className="add"
                                          >
                                            {" "}
                                            + Add one more internship
                                          </button>
                                        </div>
                                        <button onClick={delete4} className="custom-delete btn btn-primary">Delete</button>
                                      </div>
                                    </div>
                                  ) : (
                                    <span></span>
                                  )}
                                  {store.name === "Projects" ? (
                                    <div className="add_section_box">
                                      <div
                                        className={proj ? "hidden" : "visible"}
                                      >
                                        <h3 className="main-heading"><a data-tooltip-id="my-tooltip" data-tooltip-content="Drag and Drop"><MdDragIndicator className="drag" /></a>
                                          <Tooltip id="my-tooltip" />
                                          {store.name}</h3>
                                        <div className="emp-div">
                                          {project.map((object) => (
                                            <div key={object.id}>
                                              <div
                                                className="flexx"
                                              >
                                                {object.input1}
                                                <h5
                                                  onClick={() => setpro(!pro)}
                                                  style={{ cursor: "pointer" }}
                                                  className="arrow"
                                                >
                                                  {pro ? (
                                                    <IoIosArrowUp />
                                                  ) : (
                                                    <IoIosArrowDown />
                                                  )}
                                                </h5>
                                                <div
                                                  className={
                                                    pro ? "visible" : "hidden"
                                                  }
                                                >
                                                  <div style={{ display: "flex" }}>
                                                    <div className="emp-main">
                                                      <div
                                                        style={{ display: "flex" }}
                                                      >
                                                        <div className="wanted">
                                                          <div>
                                                            <label htmlFor="">
                                                              Project title
                                                            </label>{" "}
                                                            <br />
                                                            <input
                                                              type="text"
                                                              value={object.input1}
                                                              className="work"
                                                              onChange={(e) =>
                                                                handleInputproject(
                                                                  e,
                                                                  object.id,
                                                                  "input1"
                                                                )
                                                              }
                                                            />
                                                          </div>
                                                        </div>
                                                        <div>
                                                          <label htmlFor="">
                                                            Client
                                                          </label>{" "}
                                                          <br />
                                                          <input
                                                            type="text"
                                                            value={object.input2}
                                                            className="work"
                                                            onChange={(e) =>
                                                              handleInputproject(
                                                                e,
                                                                object.id,
                                                                "input2"
                                                              )
                                                            }
                                                          />
                                                        </div>
                                                      </div>
                                                      <div
                                                        style={{ display: "flex" }}
                                                      >
                                                        <div className="wanted">
                                                          <div>
                                                            <label htmlFor="">
                                                              Role
                                                            </label>{" "}
                                                            <br />
                                                            <input
                                                              type="text"
                                                              value={object.input7}
                                                              className="work"
                                                              onChange={(e) =>
                                                                handleInputproject(
                                                                  e,
                                                                  object.id,
                                                                  "input7"
                                                                )
                                                              }
                                                            />
                                                          </div>
                                                        </div>
                                                        <div>
                                                          <label htmlFor="">
                                                            Skills
                                                          </label>{" "}
                                                          <br />
                                                          <input
                                                            type="text"
                                                            value={object.input8}
                                                            className="work"
                                                            onChange={(e) =>
                                                              handleInputproject(
                                                                e,
                                                                object.id,
                                                                "input8"
                                                              )
                                                            }
                                                          />
                                                        </div>
                                                      </div>
                                                      <div
                                                        style={{ display: "flex" }}
                                                      >
                                                        <div className="wanted">
                                                          <div>
                                                            <label htmlFor="">
                                                              Start & End Date
                                                            </label>{" "}
                                                            <br />
                                                            <input
                                                              type="date"
                                                              value={object.input4}
                                                              className="workk"
                                                              onChange={(e) =>
                                                                handleInputproject(
                                                                  e,
                                                                  object.id,
                                                                  "input4"
                                                                )
                                                              }
                                                            />
                                                            <input
                                                              type="date"
                                                              value={object.input5}
                                                              className="workk"
                                                              onChange={(e) =>
                                                                handleInputproject(
                                                                  e,
                                                                  object.id,
                                                                  "input5"
                                                                )
                                                              }
                                                            />
                                                          </div>
                                                        </div>
                                                        <div>
                                                          <label htmlFor="">
                                                            City
                                                          </label>{" "}
                                                          <br />
                                                          <input
                                                            type="text"
                                                            value={object.input3}
                                                            className="work"
                                                            onChange={(e) =>
                                                              handleInputproject(
                                                                e,
                                                                object.id,
                                                                "input3"
                                                              )
                                                            }
                                                          />
                                                        </div>
                                                      </div>
                                                      <div>
                                                        <div>
                                                          <label htmlFor="">
                                                            Project Summary
                                                          </label>{" "}
                                                          <br />
                                                          <textarea
                                                            name=""
                                                            id=""
                                                            cols="90"
                                                            rows="15"
                                                            value={object.input6}
                                                            onChange={(e) =>
                                                              handleInputproject(
                                                                e,
                                                                object.id,
                                                                "input6"
                                                              )
                                                            }
                                                            placeholder="e.g. Created and implemented lesson plans based on child-led
interests and curiosities"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="emp-delete-btn">
                                                      <button
                                                        onClick={() =>
                                                          deleteproject(object.id)
                                                        }
                                                        className="delete"
                                                      >
                                                        <MdOutlineDelete />
                                                      </button>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                          <button
                                            onClick={createproject}
                                            className="add"
                                          >
                                            {" "}
                                            + Add Project
                                          </button>
                                        </div>
                                        <button onClick={delete8} className="custom-delete btn btn-primary">Delete</button>
                                      </div>
                                    </div>
                                  ) : (
                                    <span></span>
                                  )}
                                  {store.name === "Referance" ? (
                                    <div className="add_section_box">
                                      <div
                                        className={
                                          reference ? "hidden" : "visible"
                                        }
                                      >
                                        <h3 className="main-heading"><a data-tooltip-id="my-tooltip" data-tooltip-content="Drag and Drop"><MdDragIndicator className="drag" /></a>
                                          <Tooltip id="my-tooltip" />
                                          {store.name}</h3>
                                        <div className="emp-div">
                                          {three.map((object) => (
                                            <div key={object.id}>
                                              <div
                                                className="flexx"
                                              >
                                                {object.input1}
                                                <h5
                                                  onClick={() => setref(!ref)}
                                                  style={{ cursor: "pointer" }}
                                                  className="arrow"
                                                >
                                                  {ref ? (
                                                    <IoIosArrowUp />
                                                  ) : (
                                                    <IoIosArrowDown />
                                                  )}
                                                </h5>
                                                <div
                                                  className={
                                                    ref ? "visible" : "hidden"
                                                  }
                                                >
                                                  <div style={{ display: "flex" }}>
                                                    <div className="emp-main">
                                                      <div
                                                        style={{ display: "flex" }}
                                                      >
                                                        <div className="wanted">
                                                          <div>
                                                            <label htmlFor="">
                                                              Name
                                                            </label>{" "}
                                                            <br />
                                                            <input
                                                              type="text"
                                                              value={object.input1}
                                                              className="work"
                                                              onChange={(e) =>
                                                                handleInputthree(
                                                                  e,
                                                                  object.id,
                                                                  "input1"
                                                                )
                                                              }
                                                            />
                                                          </div>
                                                        </div>
                                                        <div>
                                                          <label htmlFor="">
                                                            Employer
                                                          </label>{" "}
                                                          <br />
                                                          <input
                                                            type="text"
                                                            value={object.input2}
                                                            className="work"
                                                            onChange={(e) =>
                                                              handleInputthree(
                                                                e,
                                                                object.id,
                                                                "input2"
                                                              )
                                                            }
                                                          />
                                                        </div>
                                                      </div>
                                                      <div
                                                        style={{ display: "flex" }}
                                                      >
                                                        <div className="wanted">
                                                          <div>
                                                            <label htmlFor="">
                                                              Phone
                                                            </label>{" "}
                                                            <br />
                                                            <input
                                                              type="text"
                                                              value={object.input4}
                                                              className="work"
                                                              onChange={(e) =>
                                                                handleInputthree(
                                                                  e,
                                                                  object.id,
                                                                  "input4"
                                                                )
                                                              }
                                                            />
                                                          </div>
                                                        </div>
                                                        <div className="wanted">
                                                          <div>
                                                            <label htmlFor="">
                                                              Email
                                                            </label>{" "}
                                                            <br />
                                                            <input
                                                              type="text"
                                                              value={object.input5}
                                                              className="work"
                                                              onChange={(e) =>
                                                                handleInputthree(
                                                                  e,
                                                                  object.id,
                                                                  "input5"
                                                                )
                                                              }
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="emp-delete-btn">
                                                      <button
                                                        onClick={() =>
                                                          deletethree(object.id)
                                                        }
                                                        className="delete"
                                                      >
                                                        <MdOutlineDelete />
                                                      </button>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                          <button
                                            onClick={createthree}
                                            className="add"
                                          >
                                            {" "}
                                            + Add one more reference
                                          </button>
                                        </div>
                                        <button onClick={delete3} className="custom-delete btn btn-primary">Delete</button>
                                      </div>
                                    </div>
                                  ) : (
                                    <span></span>
                                  )}
                                  {store.name === "Custom" ? (
                                    <div className="add_section_box">
                                      <div
                                        className={
                                          secetion ? "hidden" : "visible"
                                        }
                                      >
                                        <div className="emp-div">
                                          {cust.map((object) => (
                                            <div key={object.id}>
                                              <div
                                                className="flexx"
                                              >
                                                {object.input1}
                                                <h5
                                                  onClick={() => setcus(!cus)}
                                                  style={{ cursor: "pointer" }}
                                                  className="arrow"
                                                >
                                                  {cus ? (
                                                    <IoIosArrowUp />
                                                  ) : (
                                                    <IoIosArrowDown />
                                                  )}
                                                </h5>
                                                <div
                                                  className={
                                                    cus ? "visible" : "hidden"
                                                  }
                                                >
                                                  <div style={{ display: "flex" }}>
                                                    <div className="emp-main">
                                                      <div
                                                        style={{ display: "flex" }}
                                                      >
                                                        <div className="wanted">
                                                          <div>
                                                            <label htmlFor="">
                                                              Activity name,job title,book title etc.
                                                            </label>{" "}
                                                            <br />
                                                            <input
                                                              type="text"
                                                              value={object.input1}
                                                              className="work"
                                                              onChange={(e) =>
                                                                handleInputcust(
                                                                  e,
                                                                  object.id,
                                                                  "input1"
                                                                )
                                                              }
                                                            />
                                                          </div>
                                                        </div>
                                                        <div>
                                                          <label htmlFor="">
                                                            City
                                                          </label>{" "}
                                                          <br />
                                                          <input
                                                            type="text"
                                                            value={object.input2}
                                                            className="work"
                                                            onChange={(e) =>
                                                              handleInputcust(
                                                                e,
                                                                object.id,
                                                                "input2"
                                                              )
                                                            }
                                                          />
                                                        </div>
                                                      </div>
                                                      <div
                                                        style={{ display: "flex" }}
                                                      >
                                                        <div className="wanted">
                                                          <div>
                                                            <label htmlFor="">
                                                              Start & End Date
                                                            </label>{" "}
                                                            <br />
                                                            <input
                                                              type="date"
                                                              value={object.input4}
                                                              className="workk"
                                                              onChange={(e) =>
                                                                handleInputcust(
                                                                  e,
                                                                  object.id,
                                                                  "input4"
                                                                )
                                                              }
                                                            />
                                                            <input
                                                              type="date"
                                                              value={object.input4}
                                                              className="workk"
                                                              onChange={(e) =>
                                                                handleInputcust(
                                                                  e,
                                                                  object.id,
                                                                  "input6"
                                                                )
                                                              }
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div>
                                                        <div>
                                                          <label htmlFor="">
                                                            Description
                                                          </label>{" "}
                                                          <br />
                                                          <textarea
                                                            name=""
                                                            id=""
                                                            cols="90"
                                                            rows="15"
                                                            value={object.input5}
                                                            onChange={(e) =>
                                                              handleInputcust(
                                                                e,
                                                                object.id,
                                                                "input5"
                                                              )
                                                            }
                                                            placeholder="e.g. Created and implemented lesson plans based on child-led
                               interests and curiosities"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="emp-delete-btn">
                                                      <button
                                                        onClick={() =>
                                                          deletecust(object.id)
                                                        }
                                                        className="delete"
                                                      >
                                                        <MdOutlineDelete />
                                                      </button>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                          <button
                                            onClick={createcust}
                                            className="add"
                                          >
                                            {" "}
                                            + Add one more item
                                          </button>
                                        </div>
                                        <button onClick={delete1} className="custom-delete btn btn-primary">Delete</button>
                                      </div>
                                    </div>
                                  ) : (
                                    <span></span>
                                  )}
                                </div>
                              )}
                            </Draggable>
                          ))}
                        </div>
                      )}
                    </Droppable>
                  </div>
                </DragDropContext>
                <div className="main-div">
                  <div className={link ? "hidden" : "visible"}>
                    <div>

                      <h2 className="main-heading"> Websites & Social Links</h2>
                    </div>
                    <div>
                      <p>
                        You can add links to websites you want hiring managers
                        to see! Perhaps it will be a link to your
                        portfolio,LinkedIn profile or personal website
                      </p>
                    </div>
                    <div className="div1">
                      {/* <Websites></Websites> */}
                      <div className="emp-div">
                        {website.map((object) => (
                          <div key={object.id} className="div-in">
                            <div className="flexxx">
                              {object.input1}
                              <h5
                                onClick={() => setsite(!site)}
                                style={{ cursor: "pointer" }}
                                className="arrow"
                              >
                                {site ? <IoIosArrowUp /> : <IoIosArrowDown />}
                              </h5>
                              <div className={site ? "visible" : "hidden"}>
                                <div style={{ display: "flex" }}>
                                  <div className="emp-main">
                                    <div style={{ display: "flex" }}>
                                      <div className="wanted">
                                        <div>
                                          <label htmlFor="">Website Name</label>{" "}
                                          <br />
                                          <input
                                            type="text"
                                            value={object.input1}
                                            className="work"
                                            onChange={(e) =>
                                              handleInputweb(
                                                e,
                                                object.id,
                                                "input1"
                                              )
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div>
                                        <label htmlFor="">Link</label> <br />
                                        <input
                                          type="text"
                                          value={object.input2}
                                          className="work"
                                          onChange={(e) =>
                                            handleInputweb(e, object.id, "input2")
                                          }
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="emp-delete-btn">
                                    <button
                                      onClick={() => deleteweb(object.id)}
                                      className="delete"
                                    >
                                      <MdOutlineDelete />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        <button onClick={createweb} className="add">
                          {" "}
                          + Add Link
                        </button>
                      </div>
                    </div>
                    <button onClick={delete9} className="custom-delete btn btn-primary">Delete</button>
                  </div>
                </div>
                <div >
                  <div className="add_section_box">
                    <div className={label ? "hidden" : "visible"}>
                      <div>

                        {/* <h2> Skills<span style={{color:"red"}}>*</span></h2> */}

                        <h2 className="main-heading"> Skills<span style={{ color: "red", fontSize: "17px" }}>*</span></h2>

                      </div>
                      <div>
                        <p>
                          Choose 5 important skills that show you fit the
                          position. Make sure they match the key skills
                          mentioned in the job listing(especially when applying
                          via an online system)
                        </p>
                      </div>
                      <div>
                        <label htmlFor="">
                          {" "}
                          Show level
                        </label>
                      </div>
                      <div>
                        {/* <Skills></Skills> */}
                        <div className="emp-div">
                          {skill.map((object) => (
                            <div key={object.id}>
                              <div
                                className="flexxx"
                              >
                                {object.input1}
                                <h5
                                  onClick={() => setlevel(!level)}
                                  style={{ cursor: "pointer" }}
                                  className="arrow"
                                >
                                  {level ? (
                                    <IoIosArrowUp />
                                  ) : (
                                    <IoIosArrowDown />
                                  )}
                                </h5>
                                <div className={level ? "visible" : "hidden"}>
                                  <div style={{ display: "flex" }}>
                                    <div className="emp-main">
                                      <div style={{ display: "flex" }}>
                                        <div className="wanted">
                                          <div>
                                            <label htmlFor="">Skill</label> <br />
                                            {/* <input
                                              type="text"
                                              value={object.input1}
                                              className="work"
                                              onChange={(e) =>
                                                handleInputskill(
                                                  e,
                                                  object.id,
                                                  "input1"
                                                )
                                              }
                                            /> */}
                                            <div className="main-skillls">
                                              <div className="col-12 col-md-9">

                                                <select
                                                  id="skills-select-box"
                                                  className="form-select"
                                                  value={selectedSkill}
                                                  onChange={handleSkillSelectChange}
                                                >
                                                  <option>Select Skills</option>

                                                  <option value="add_skill">Add Skill</option>
                                                  {studentSkills.map((skill, index) => (
                                                    <option key={index} value={skill}>
                                                      {skill}
                                                    </option>
                                                  ))}
                                                </select>
                                                <p id="skillsError" className="text-danger"></p>
                                                <div id="skillsContainer">
                                                  {studentSkills.map((skill, index) => (
                                                    <button
                                                      key={index}
                                                      className="btn btn-sm btn-primary px-3 rounded rounded-pill"
                                                      type="button"
                                                    >
                                                      <span>{skill}</span>
                                                      <i
                                                        className="fas fa-times-circle ms-2"
                                                        onClick={() => deleteSkill(index, skill)}
                                                      ></i>
                                                    </button>
                                                  ))}
                                                </div>
                                              </div>

                                              {/* <label htmlFor="">Level</label>  */}
                                              <div className="col-12 col-md-6">
                                                <div className="progress-text">{selectedStage}</div>
                                                <div className="progress-bar-container">
                                                  <div className="progress" id="myProgressBar">
                                                    {stages.map((stage, index) => (
                                                      <button
                                                        key={index}
                                                        className={`progress-stage ${stage.toLowerCase()}`}
                                                        data-stage={stage}
                                                        onClick={() => handleStageClick(index)}
                                                      >
                                                        {stage}
                                                      </button>
                                                    ))}
                                                    {/* <div className="progress-text">{selectedStage}</div> */}
                                                  </div>
                                                </div>
                                              </div>

                                            </div>
                                          </div>
                                          <div>

                                            {/* <select
                                            name=""
                                            id=""
                                            value={object.input2}
                                            onChange={(e) =>
                                              handleInputskill(
                                                e,
                                                object.id,
                                                "input2"
                                              )
                                            }
                                            className="work"
                                          >
                                            <option value="1">Level 1</option>
                                            <option value="2">Level 2</option>
                                            <option value="3">Level 3</option>
                                            <option value="4">Level 4</option>
                                            <option value="5">Level 5</option>
                                          </select> */}


                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="emp-delete-btn">
                                      <button
                                        onClick={() => deleteskill(object.id)}
                                        className="delete"
                                      >
                                        <MdOutlineDelete />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                          <button onClick={createskill} className="add">
                            {" "}
                            + Add more skill
                          </button>
                        </div>
                        <button onClick={delete10} className="custom-delete btn btn-primary">Delete</button>
                      </div>
                    </div>
                  </div>
                  {
                    <div className="add_section_box">
                      <div className={hobb ? "hidden" : "visible"}>
                        <div>
                          <h2 className="main-heading">Hobbies</h2>
                        </div>
                        <div className="emp-div">
                          {six.map((object) => (
                            <div key={object.id}>
                              <div className="flexx">
                                {object.input1}
                                <h5
                                  onClick={() => sethobbie(!hobbie)}
                                  className="arrow"
                                  style={{ cursor: "pointer" }}
                                >
                                  {hobbie ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </h5>
                                <div className={hobbie ? "visible" : "hidden"}>
                                  <div style={{ display: "flex" }}>
                                    <div className="emp-main">
                                      <label htmlFor="">What do you like?</label> <br />
                                      <textarea
                                        type="text"
                                        placeholder="e.g. Skipping, Skydiving, Painting"
                                        value={object.input1}
                                        className="work"
                                        onChange={(e) =>
                                          handleInputsix(
                                            e,
                                            object.id,
                                            "input1"
                                          )
                                        }
                                      />
                                    </div>
                                    <div className="emp-delete-btn">
                                      <button
                                        onClick={() => deletesix(object.id)}
                                        className="delete"
                                      >
                                        <MdOutlineDelete />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          ))}
                          <button onClick={createsix} className="add">
                            {" "}
                            + Add more Hobbie
                          </button>
                        </div>
                        <button onClick={delete5} className="custom-delete btn btn-primary">Delete</button>
                      </div>
                    </div>
                  }
                  <div>
                    {
                      <div className="add_section_box">
                        <div className={lang ? "hidden" : "visible"}>
                          <div>
                            <h2 className="main-heading">Langugages</h2>
                          </div>
                          <div className="emp-div">
                            {seven.map((object) => (
                              <div key={object.id}>
                                <div
                                  className="flexxx"
                                >
                                  {object.input1}
                                  <h5
                                    onClick={() => setlanguage(!language)}
                                    className="arrow"
                                    style={{ cursor: "pointer" }}
                                  >
                                    {language ? (
                                      <IoIosArrowUp />
                                    ) : (
                                      <IoIosArrowDown></IoIosArrowDown>
                                    )}
                                  </h5>
                                  <div className={language ? "visible" : "hidden"}>
                                    <div style={{ display: "flex" }}>
                                      <div className="emp-main">
                                        <div style={{ display: "flex" }}>
                                          <div className="wanted">
                                            <div>
                                              <label htmlFor="">Language</label>{" "}
                                              <br />
                                              <input
                                                type="text"
                                                value={object.input1}
                                                className="work"
                                                onChange={(e) =>
                                                  handleInputseven(
                                                    e,
                                                    object.id,
                                                    "input1"
                                                  )
                                                }
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
                                            <select
                                              name=""
                                              id=""
                                              value={object.input2}
                                              onChange={(e) =>
                                                handleInputseven(
                                                  e,
                                                  object.id,
                                                  "input2"
                                                )
                                              }
                                              className="work"
                                            >
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
                                      <div className="emp-delete-btn">
                                        <button
                                          onClick={() => deleteseven(object.id)}
                                          className="delete"
                                        >
                                          <MdOutlineDelete />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                            <button onClick={createseven} className="add">
                              {" "}
                              + Add one more languages
                            </button>
                          </div>
                          <button onClick={delete6} className="custom-delete btn btn-primary">Delete</button>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>
              <div className="add-section-container">
                <h3 className="add-section-head main-heading">Add Section</h3>
                <div className="add-section-box">
                  <div className="custom-section">
                    <button className="custom-btn" onClick={handlecurricular}>
                      <img
                        src={image}
                        alt="custom-extra"
                        className="custom-pic"
                      />
                      <p>Extra curricular activity</p>

                    </button>
                  </div>
                  <div className="custom-section">
                    <button className="custom-btn" onClick={handlecourse}>
                      <img
                        src={image1}
                        alt="custom-course"
                        className="custom-pic"
                      />
                      <p>Course</p>

                    </button>
                  </div>
                  <div className="custom-section">
                    <button className="custom-btn" onClick={handleinternship}>
                      <img
                        src={image2}
                        alt="custom-intern"
                        className="custom-pic"
                      />
                      <p>Internship</p>

                    </button>
                  </div>
                  <div className="custom-section">
                    <button className="custom-btn" onClick={handlereference}>
                      <img
                        src={image3}
                        alt="custom-intern"
                        className="custom-pic"
                      />
                      <p>Referance</p>

                    </button>
                  </div>
                  <div className="custom-section">
                    <button className="custom-btn" onClick={handlesection}>
                      <img
                        src={image4}
                        alt="custom-intern"
                        className="custom-pic"
                      />
                      <p>Custom Section</p>

                    </button>
                  </div>
                  <div className="custom-section">
                    <button className="custom-btn" onClick={handleproject}>
                      <img
                        src={image5}
                        alt="custom-project"
                        className="custom-pic"
                      />
                      <p>Projects</p>
                    </button>
                  </div>
                  <div className="custom-section">
                    <button className="custom-btn" onClick={handlelink}>
                      <img
                        src={image6}
                        alt="custom-links"
                        className="custom-pic"
                      />
                      <p>Social Links</p>
                      <div className="color-button"></div>
                    </button>
                  </div>
                  <div className="custom-section">
                    <button className="custom-btn" onClick={handleskill}>
                      <img
                        src={image7}
                        alt="custom-skills"
                        className="custom-pic"
                      />
                      <p>Skill</p>
                      <div className="color-button"></div>
                    </button>
                  </div>
                  <div className="custom-section">
                    <button className="custom-btn" onClick={handlehobbie}>
                      <img
                        src={image8}
                        alt="custom-hobbie"
                        className="custom-pic"
                      />
                      <p>Hobbies</p>
                      <div className="color-button"></div>
                    </button>
                  </div>
                  <div className="custom-section">
                    <button className="custom-btn" onClick={handlelanguage}>
                      <img
                        src={image9}
                        alt="custom-lang"
                        className="custom-pic"
                      />
                      <p>Languages</p>
                      <div className="color-button"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-right">
          <div className="generate">
            <div>
              <button onClick={showTemplate}>Select Template</button>
            </div>
            <div className="coll">
              <input
                id="color-picker"
                type="color"
                value={isColor1Active ? selectedColor1 : selectedColor}
                onChange={handleColorChange}
                style={{ display: 'none' }}
              />
              <button onClick={handleColorButtonClick} className="text-white">
                {/* Open Color Picker */}
                <div
                  id="color-picker"
                  style={{ backgroundColor: isColor1Active ? selectedColor1 : selectedColor }}
                >
                  Click
                </div>
              </button>
              <button onClick={handleTemplateChange}>Switch Template</button>
            </div>


            {editingFname ? (
              <div>
                <input
                  type="text"
                  id="file_name"
                  value={fname}
                  onChange={handleFnameChange}
                  onBlur={handleFnameBlur}
                  className="handle-input"
                />
              </div>
            ) : (
              <div className="handle-heading">
                <h3 style={{ color: "white" }}>{fname}</h3>
                <button onClick={handleFnameClick}>
                  <EditIcon />
                </button>
              </div>
            )}
            <button onClick={handlePrint} className="btn btn-primary ">Generate PDF</button>
          </div>
          {
            showtemplate === false ?
              <Scrollbars>
                <div style={{ display: "flex" }} className="main-temp">
                  <img src={rajeshsir} alt="" className="temp-image"/>
                  <img src={mrssai} alt="" className="temp-image" />
                </div>
                <div style={{ display: "flex" }} className="main-temp">
                  <img src={ushamadam} alt="" className="temp-image" />
                  <img src={mrssai} alt="" className="temp-image" />
                </div>
              </Scrollbars>

              :
              <Scrollbars>
                {template === 'template1' && (
                  <div className="template1">

                    {/* <p>{`Additional Prop: ${additionalProp}`}</p> */}
                    <div className="main-full" id="pdf-content" ref={contentDivRef}
                      contentEditable={false}
                      style={{
                        // border: '1px solid #ccc',
                        // minHeight: '200px',
                        // padding: '10px',
                        // marginBottom: '20px',
                        width: "97%"
                      }}>

                      <div className="main-right">
                        <div>
                          <div style={{ display: "flex" }} className="cont-1">
                            <div className="profile-pic">
                              <Dropzone
                                onDrop={handleDrop}
                                accept="image/*"
                                multiple={false}
                              >
                                {({ getRootProps, getInputProps }) => (
                                  <div
                                    className="dropzone"
                                    id="drop"
                                    {...getRootProps()}
                                  >
                                    <input {...getInputProps()} />
                                    {selectedFile ? (
                                      <div className="image">
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
                                      <div style={{ display: "flex" }}></div>
                                    )}
                                  </div>
                                )}
                              </Dropzone>
                            </div>
                            <div>
                              <div style={{ display: "flex" }}>
                                <h3 className="name1">{generateName(name, true) + " " + generateName(lastName, true)}</h3>
                                {/* <h3 className="name1">{name}</h3>
                        <h3 className="name2">{lastname}</h3> */}
                              </div>
                              <div>
                                <h6 className="name">{job}</h6>
                              </div>
                            </div>
                          </div>
                          <div className={`summry ${editorHtml === "" ? "hidden" : ""}`}>
                            {editorHtml === "" ? (
                              <span></span>
                            ) : (
                              <h2 className="prof">Summary</h2>
                            )}
                            <div
                              className="mess"
                              dangerouslySetInnerHTML={{ __html: editorHtml }}
                            />
                          </div>
                        </div>

                        <div>
                          <DragDropContext onDragEnd={handleDragDrop}>
                            <div className="movement">
                              <Droppable droppableId="Root" type="group">
                                {(provided) => (
                                  <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                  >
                                    {ite.map((store, index) => (
                                      <Draggable
                                        draggableId={store.id}
                                        key={store.id}
                                        index={index}
                                      >
                                        {(provided) => (
                                          <div
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                            ref={provided.innerRef}
                                          >
                                            {/* <h3>{store.name}</h3> */}
                                            {/* <Storelist {...store} /> */}
                                            <div>
                                              <div>{/* <h3>{name}</h3> */}</div>
                                              <div>
                                                {store.id === "06" ? (
                                                  <div>
                                                    {
                                                      three.length === 0 ? <span></span> : <h2 className="head">References</h2>
                                                    }
                                                    {store.it.map((item, index) => (
                                                      <div className="store">
                                                        {item.input1 === undefined ? (
                                                          <span></span>
                                                        ) : (
                                                          <div>
                                                            {/* <h4 className="fon">{`${item.input1},${item.input2},${item.input3}`}</h4>
            <p className="fontt">{`${item.input4}/${item.input5}`}</p>
            <p className="fonttt">{item.input6}</p> */}

                                                            <p className="fontt">{`${item.input1} from ${item.input2}`}</p>
                                                            <p className="fontt">{`${item.input4} | ${item.input5}`}</p>
                                                          </div>
                                                        )}
                                                      </div>
                                                    ))}
                                                  </div>
                                                ) : (
                                                  <span></span>
                                                )}
                                                {store.id === "01" ? (
                                                  <div>
                                                    {
                                                      objects.length === 0 ? <span></span> : <h2 className="head">Employment</h2>
                                                    }
                                                    {store.it.map((item, index) => (
                                                      <div className="store">
                                                        {item.input1 === undefined ? (
                                                          <span></span>
                                                        ) : (
                                                          <div className="store">
                                                            {item.input1 === undefined ? (
                                                              <span></span>
                                                            ) : (
                                                              <div>
                                                                <h4 className="fon">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>

                                                                <p className="fontt">{`${item.input4} to ${item.input5}`}</p>
                                                                <p className="fonttt">{item.input6}</p>
                                                              </div>
                                                            )}
                                                          </div>
                                                        )}
                                                      </div>
                                                    ))}
                                                  </div>
                                                ) : (
                                                  <span></span>
                                                )}

                                                {store.id === "02" ? (
                                                  <div>
                                                    {
                                                      education.length === 0 ? <span></span> : <h2 className="head">Education</h2>
                                                    }
                                                    {store.it.map((item, index) => (
                                                      <div className="store">
                                                        {item.input1 === undefined ? (
                                                          <span></span>
                                                        ) : (
                                                          <div className="store">

                                                            {item.input1 === undefined ? (
                                                              <span></span>
                                                            ) : (
                                                              <div>
                                                                <h4 className="fon">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                                {
                                                                  item.input4 === "" ? <span></span> : item.input5 === "" ? <p className="fontt">{`${item.input4} to Present`}</p> : <p className="fontt">{`${item.input4} to ${item.input5}`}</p>
                                                                }
                                                                {/* <p className="fontt">{`${item.input4} to ${item.input5}`}</p> */}
                                                                <p className="fonttt">{item.input6}</p>
                                                              </div>
                                                            )}
                                                          </div>
                                                        )}
                                                      </div>
                                                    ))}
                                                  </div>
                                                ) : (
                                                  <span></span>
                                                )}
                                                {store.id === "03" ? (
                                                  <div>
                                                    {
                                                      four.length === 0 ? <span></span> : <h2 className="head">Extra-curricular activites</h2>
                                                    }
                                                    {store.it.map((item, index) => (
                                                      <div className="store">
                                                        {item.input1 === undefined ? (
                                                          <span></span>
                                                        ) : (
                                                          <div>
                                                            <div className="store">

                                                              {item.input1 === undefined ? (
                                                                <span></span>
                                                              ) : (
                                                                <div>
                                                                  <h4 className="fon">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                                  {
                                                                    item.image4 === "" ? <span></span> : item.input5 === "" ? <span></span> : <p className="fontt">{`${item.input4} to ${item.input5}`}</p>
                                                                  }
                                                                  <p className="fonttt">{item.input6}</p>
                                                                </div>
                                                              )}
                                                            </div>
                                                          </div>
                                                        )}
                                                      </div>
                                                    ))}
                                                  </div>
                                                ) : (
                                                  <span></span>
                                                )}
                                                {store.id === "04" ? (
                                                  <div>
                                                    {
                                                      course.length === 0 ? <span></span> : <h2 className="head">Course</h2>
                                                    }
                                                    {store.it.map((item, index) => (
                                                      <div className="store">
                                                        {item.input1 === undefined ? (
                                                          <span></span>
                                                        ) : (
                                                          <div className="store">

                                                            {item.input1 === undefined ? (
                                                              <span></span>
                                                            ) : (
                                                              <div>
                                                                <h4 className="fon">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                                <p className="fontt">{`${item.input4} to ${item.input5}`}</p>
                                                                <p className="fonttt">{item.input6}</p>
                                                              </div>
                                                            )}
                                                          </div>
                                                        )}
                                                      </div>
                                                    ))}
                                                  </div>
                                                ) : (
                                                  <span></span>
                                                )}
                                                {store.id === "05" ? (
                                                  <div>
                                                    {
                                                      five.length === 0 ? <span></span> : <h2 className="head">Internships</h2>
                                                    }
                                                    {store.it.map((item, index) => (
                                                      <div className="store">
                                                        {item.input1 === undefined ? (
                                                          <span></span>
                                                        ) : (
                                                          <div className="store">

                                                            {item.input1 === undefined ? (
                                                              <span></span>
                                                            ) : (
                                                              <div>
                                                                <h4 className="fon">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                                <p className="fontt">{`${item.input4} to ${item.input5}`}</p>
                                                                <p className="fonttt">{item.input6}</p>
                                                              </div>
                                                            )}
                                                          </div>
                                                        )}
                                                      </div>
                                                    ))}
                                                  </div>
                                                ) : (
                                                  <span></span>
                                                )}
                                                {store.id === "07" ? (
                                                  <div>
                                                    {
                                                      project.length === 0 ? <span></span> : <h2 className="head">Projects</h2>
                                                    }
                                                    {store.it.map((item, index) => (
                                                      <div className="store">
                                                        {item.input1 === undefined ? (
                                                          <span></span>
                                                        ) : (
                                                          <div className="store">

                                                            {item.input1 === undefined ? (
                                                              <span></span>
                                                            ) : (
                                                              <div>
                                                                <h4 className="fon">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                                {
                                                                  item.image4 === "" ? <span></span> : item.input5 === "" ? <span></span> : <p className="fontt">{`${item.input4} to ${item.input5}`}</p>
                                                                }

                                                                {
                                                                  item.input7 === "" ? <span></span> : <p className="fontt">{`My Role : ${item.input7}`}</p>
                                                                }
                                                                {
                                                                  item.input8 === "" ? <span></span> : <p className="fontt">{`Skills Used In This  Project : ${item.input8}`}</p>
                                                                }

                                                                <p className="fonttt">{item.input6}</p>
                                                              </div>
                                                            )}
                                                          </div>
                                                        )}
                                                      </div>
                                                    ))}
                                                  </div>
                                                ) : (
                                                  <span></span>
                                                )}
                                                {store.id === "08" ? (
                                                  <div>
                                                    {
                                                      cust.length === 0 ? <span></span> : <h2 className="head">{store.head}</h2>
                                                    }
                                                    {store.it.map((item, index) => (
                                                      <div className="store">
                                                        {item.input1 === undefined ? (
                                                          <span></span>
                                                        ) : (
                                                          <div className="store">
                                                            {item.input1 === undefined ? (
                                                              <span></span>
                                                            ) : (
                                                              <div>
                                                                <h4 className="fon">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                                <p className="fontt">{`${item.input4}`}</p>
                                                                <p className="fonttt">{item.input5}</p>
                                                              </div>
                                                            )}
                                                          </div>
                                                        )}
                                                      </div>
                                                    ))}
                                                  </div>
                                                ) : (
                                                  <span></span>
                                                )}
                                              </div>
                                            </div>
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
                      <div className="main-left1" style={{ backgroundColor: selectedColor }}>
                        <div className="pincode">
                          <div className="details">
                            {email === "" ? (
                              <span></span>
                            ) : (
                              <h4 className="heading div-heading">Contact</h4>
                            )}
                            <div>
                              {
                                phone === "" ? <span></span> : <p className="cit">{`+${phone}`}</p>
                              }

                            </div>
                            <div>
                              <p className="conte">{email}</p>
                            </div>
                          </div>
                          <div>
                            {address === "" ? (
                              <span></span>
                            ) : (
                              <h4 className="heading div-heading">Address</h4>
                            )}

                            <div>
                              <p className="cont">{address}</p>
                            </div>
                            <div>
                              {
                                post === "" ? <p className="cit">{`${city}`}</p> : <p className="cit">{`${city} , ${post}`}</p>
                              }
                              {/* <p className="cit">{`${city} , ${post}`}</p> */}
                            </div>
                            <div>
                              <p className="cit">{country}</p>
                            </div>
                          </div>

                          <div>
                            {licence === "" ? (
                              <span></span>
                            ) : (
                              <h4 className="heading1">Gender</h4>
                            )}
                            <div>
                              <p className="cit">{licence}</p>
                            </div>
                          </div>
                          <div>
                            {nation === "" ? (
                              <span></span>
                            ) : (
                              <h4 className="heading1">Nationality</h4>
                            )}
                            <div>
                              <p className="cit">{nation}</p>
                            </div>
                          </div>
                          <div>
                            {place && birth !== "" ? (
                              <h4 className="heading1">Place/Date of Birth</h4>
                            ) : place !== "" ? (
                              <h4 className="heading1">Place of Birth</h4>
                            ) : birth !== "" ? (
                              <h4 className="heading1">Date of Birth</h4>
                            ) : (
                              <span></span>
                            )}
                            <div>
                              <p className="cit">{birth}</p>
                              <p className="cit">{place}</p>
                            </div>
                          </div>
                          <div className="top">
                            {skill.length === 0 ? (
                              <span></span>
                            ) : (
                              <h4 className="heading div-heading">Skills</h4>
                            )}
                            {skill.map((object) => (

                              <div key={object.id} className="ill">
                                <div className="progress-bar-container" id="secondProgressBarContainer">
                                  {studentSkills.map((skill, index) => (
                                    <div key={index} className="progress-bar-container">
                                      <div className="skill-name">{skill}</div>
                                      {renderSecondProgressBar(skill)}
                                    </div>
                                  ))}
                                </div>
                                <ToastContainer className="custom-toast" />

                                <p className="cit" id="cit">{`${object.input1}`}</p>

                                <div className="ski1">

                                  {isChecked ? (
                                    <div>
                                      {object.input2 === "" ? (
                                        <span></span>
                                      ) : (
                                        <p className="ski">{`${object.input2}/5`}</p>
                                      )}
                                    </div>
                                  ) : (
                                    <span></span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="top">
                            {website.length === 0 ? (
                              <span></span>
                            ) : (
                              <h4 className="heading div-heading">Links</h4>
                            )}
                            {website.map((object) => (
                              <div key={object.id}>
                                {/* <p className="cit">{`${object.input1}`}</p> */}
                                <Link to={object.input2} className="cit" id="link">
                                  {object.input1}
                                </Link>
                              </div>
                            ))}
                          </div>
                          <div className="top">
                            {six.length === 0 ? (
                              <span></span>
                            ) : (
                              <h4 className="heading div-heading">Hobbies</h4>
                            )}
                            <div>
                              {six.map((object) => (
                                <div key={object.id} className="ill">
                                  <p className="cit">{`${object.input1}`}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="top">
                            {seven.length === 0 ? (
                              <span></span>
                            ) : (
                              <h4 className="heading div-heading">Languages</h4>
                            )}
                            <div>
                              {seven.map((object) => (
                                <div key={object.id} className="ill">
                                  <p className="cit" id="cit">{`${object.input1}`}</p>
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




                  </div>
                )}

                {template === 'template2' && (

                  
                  <div className="template2" onClick={handleClick}>
                    <div className="main-full" id="pdf-content" ref={contentDivRef}
                      contentEditable={false}
                      style={{
                        // border: '1px solid #ccc',
                        // minHeight: '200px',
                        // padding: '10px',
                        // marginBottom: '20px',
                        width: "97%"
                      }}>

                      <div className="main-left" style={{ backgroundColor: selectedColor1 }}>
                        <div className="main-sai">
                        <div class="preview-image">



                          <Dropzone
                            onDrop={handleDrop}
                            accept="image/*"
                            multiple={false}
                          >
                            {({ getRootProps, getInputProps }) => (
                              <div
                                className="dropzone"
                                id="drop"
                                {...getRootProps()}
                              >
                                <input {...getInputProps()} />
                                {selectedFile ? (
                                  <div className="image">
                                    <div className="image-container">
                                      <img
                                        src={URL.createObjectURL(selectedFile)}
                                        alt="Uploaded"
                                        className={`rounded-image ${isPrinting ? 'print-preview-image' : ''}`}
                                        onClick={handleView}
                                        style={{ borderRadius: "50%" }}
                                      />
                                    </div>
                                  </div>
                                ) : (
                                  <div style={{ display: "flex" }}></div>
                                )}
                              </div>
                            )}
                          </Dropzone></div><br />
                        <div>
                          <div style={{ display: "flex" }} className="fullname_dsp">
                            <h3 className="name11">{generateName(name, true) + " " + generateName(lastName, true)}</h3>
                            {/* <h3 className="name1">{name}</h3>
                          <h3 className="name2">{lastname}</h3>  */}
                          </div>
                          <div className="name1"></div>
                          <h6 className="namee text-uppercase">{job}</h6>

                        </div>
                        <div className="pincode">
                          <div className="details">
                            {email === "" ? (
                              <span></span>
                            ) : (
                              <div className="preview-blk-title"><h4 className="headingg div-heading">Contact</h4></div>
                            )}
                            <div>
                              {
                                phone === "" ? <span></span> : <p className="cit">{`+${phone}`}</p>
                              }

                            </div>
                            <div>
                              <p className="conte">{email}</p>
                            </div>
                          </div>
                          <div>
                            {address === "" ? (
                              <span></span>
                            ) : (
                              <div className="preview-blk-title"><h4 className="headingg div-heading">Address</h4></div>
                            )}

                            <div>
                              <p className="cont">{address}</p>
                            </div>
                            <div>
                              {
                                post === "" ? <p className="cit">{`${city}`}</p> : <p className="cit">{`${city} , ${post}`}</p>
                              }
                              {/* <p className="cit">{`${city} , ${post}`}</p> */}
                            </div>
                            <div>
                              <p className="cit">{country}</p>
                            </div>
                          </div>

                          <div>
                            {licence === "" ? (
                              <span></span>
                            ) : (
                              <div className="preview-blk-title"><h4 className="heading11">Gender</h4></div>
                            )}
                            <div>
                              <p className="cit">{licence}</p>
                            </div>
                          </div>
                          <div>
                            {nation === "" ? (
                              <span></span>
                            ) : (
                              <div className="preview-blk-title"><h4 className="heading11">Nationality</h4></div>
                            )}
                            <div>
                              <p className="cit">{nation}</p>
                            </div>
                          </div>
                          <div>
                            {place && birth !== "" ? (
                             <div className="preview-blk-title"><h4 className="heading11">Place/Date of Birth</h4></div>
                            ) : place !== "" ? (
                              <h4 className="heading1">Place of Birth</h4>
                            ) : birth !== "" ? (
                              <div className="preview-blk-title"><h4 className="heading11">Date of Birth</h4></div>
                            ) : (
                              <span></span>
                            )}
                            <div>
                              <p className="cit">{birth}</p>
                              <p className="cit">{place}</p>
                            </div>
                          </div>
                          <div className="top">
                            {skill.length === 0 ? (
                              <span></span>
                            ) : (
                              <div className="preview-blk-title"><h4 className="headingg div-heading">Skills</h4></div>
                            )}
                            {skill.map((object) => (

                              <div key={object.id} className="ill">
                                <div className="progress-bar-container" id="secondProgressBarContainer">
                                  {studentSkills.map((skill, index) => (
                                    <div key={index} className="progress-bar-container">
                                      <div className="skill-name">{skill}</div>
                                      {renderSecondProgressBar(skill)}
                                    </div>
                                  ))}
                                </div>
                                <ToastContainer className="custom-toast" />

                                <p className="cit" id="cit">{`${object.input1}`}</p>

                                <div className="ski1">

                                  {isChecked ? (
                                    <div>
                                      {object.input2 === "" ? (
                                        <span></span>
                                      ) : (
                                        <p className="ski">{`${object.input2}/5`}</p>
                                      )}
                                    </div>
                                  ) : (
                                    <span></span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="top">
                            {website.length === 0 ? (
                              <span></span>
                            ) : (
                              <div className="preview-blk-title"><h4 className="headingg div-heading">Links</h4></div>
                            )}
                            {website.map((object) => (
                              <div key={object.id}>
                                {/* <p className="cit">{`${object.input1}`}</p> */}
                                <Link to={object.input2} className="cit" id="link">
                                  {object.input1}
                                </Link>
                              </div>
                            ))}
                          </div>
                          <div className="top">
                            {six.length === 0 ? (
                              <span></span>
                            ) : (
                              <div className="preview-blk-title"><h4 className="headingg div-heading">Hobbies</h4></div>
                            )}
                            <div>
                              {six.map((object) => (
                                <div key={object.id} className="ill">
                                  <p className="cit">{`${object.input1}`}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="top">
                            {seven.length === 0 ? (
                              <span></span>
                            ) : (
                              <div className="preview-blk-title"><h4 className="headingg div-heading">Languages</h4></div>
                            )}
                            <div>
                              {seven.map((object) => (
                                <div key={object.id} className="ill">
                                  <p className="cit" id="cit">{`${object.input1}`}</p>
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
                      <div className="main-right">
                        <div id="cont">
                          <div >
                            <div style={{ display: "flex" }} className="cont-1">
                              <div className="profile-pic">
                               
                              </div>
                            
                            </div>
                            <div className="summry">
                              {editorHtml === "" ? (
                                <span></span>
                              ) : (
                                <div className="preview-blk-title">
                                <h2 className="proff">Summary</h2></div>
                              )}
                              <div
                                className="mess"
                                dangerouslySetInnerHTML={{ __html: editorHtml }}
                              />
                            </div>
                          </div>

                          <div>
                            <DragDropContext onDragEnd={handleDragDrop}>
                              <div className="movement">
                                <Droppable droppableId="Root" type="group">
                                  {(provided) => (
                                    <div
                                      {...provided.droppableProps}
                                      ref={provided.innerRef}
                                    >
                                      {ite.map((store, index) => (
                                        <Draggable
                                          draggableId={store.id}
                                          key={store.id}
                                          index={index}
                                        >
                                          {(provided) => (
                                            <div
                                              {...provided.dragHandleProps}
                                              {...provided.draggableProps}
                                              ref={provided.innerRef}
                                            >
                                              {/* <h3>{store.name}</h3> */}
                                              {/* <Storelist {...store} /> */}
                                              <div>
                                                <div>{/* <h3>{name}</h3> */}</div>
                                                <div>
                                                  {store.id === "06" ? (
                                                    <div>
                                                      {
                                                        three.length === 0 ? <span></span> : <div className="preview-blk-title"><h2 className="headd">References</h2></div>
                                                      }
                                                      {store.it.map((item, index) => (
                                                        <div className="store">
                                                          {item.input1 === undefined ? (
                                                            <span></span>
                                                          ) : (
                                                            <div>
                                                              {/* <h4 className="fon">{`${item.input1},${item.input2},${item.input3}`}</h4>
              <p className="fontt">{`${item.input4}/${item.input5}`}</p>
              <p className="fonttt">{item.input6}</p> */}

                                                              <p className="fontttee">{`${item.input1} from ${item.input2}`}</p>
                                                              <p className="fontt1">{`${item.input4} | ${item.input5}`}</p>
                                                            </div>
                                                          )}
                                                        </div>
                                                      ))}
                                                    </div>
                                                  ) : (
                                                    <span></span>
                                                  )}
                                                  {store.id === "01" ? (
                                                    <div>
                                                      {
                                                        objects.length === 0 ? <span></span> :<div className="preview-blk-title"> <h2 className="headd">Employment</h2></div>
                                                      }
                                                      {store.it.map((item, index) => (
                                                        <div className="store">
                                                          {item.input1 === undefined ? (
                                                            <span></span>
                                                          ) : (
                                                            <div className="store">
                                                              {item.input1 === undefined ? (
                                                                <span></span>
                                                              ) : (
                                                                <div>
                                                                  <h4 className="fonn">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>

                                                                  <p className="fonttw">{`${item.input4} to ${item.input5}`}</p>
                                                                  <p className="fonttt">{item.input6}</p>
                                                                </div>
                                                              )}
                                                            </div>
                                                          )}
                                                        </div>
                                                      ))}
                                                    </div>
                                                  ) : (
                                                    <span></span>
                                                  )}

                                                  {store.id === "02" ? (
                                                    <div>
                                                      {
                                                        education.length === 0 ? <span></span> : <div className="preview-blk-title"><h2 className="headd">Education</h2></div>
                                                      }
                                                      {store.it.map((item, index) => (
                                                        <div className="store">
                                                          {item.input1 === undefined ? (
                                                            <span></span>
                                                          ) : (
                                                            <div className="store">

                                                              {item.input1 === undefined ? (
                                                                <span></span>
                                                              ) : (
                                                                <div>
                                                                  <h4 className="fonn">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                                  {
                                                                    item.input4 === "" ? <span></span> : item.input5 === "" ? <p className="fonttw">{`${item.input4} to Present`}</p> : <p className="fontt">{`${item.input4} to ${item.input5}`}</p>
                                                                  }
                                                                  {/* <p className="fontt">{`${item.input4} to ${item.input5}`}</p> */}
                                                                  <p className="fonttt">{item.input6}</p>
                                                                </div>
                                                              )}
                                                            </div>
                                                          )}
                                                        </div>
                                                      ))}
                                                    </div>
                                                  ) : (
                                                    <span></span>
                                                  )}
                                                  {store.id === "03" ? (
                                                    <div>
                                                      {
                                                        four.length === 0 ? <span></span> : <div className="preview-blk-title"><h2 className="headd">Extra-curricular activites</h2></div>
                                                      }
                                                      {store.it.map((item, index) => (
                                                        <div className="store">
                                                          {item.input1 === undefined ? (
                                                            <span></span>
                                                          ) : (
                                                            <div>
                                                              <div className="store">

                                                                {item.input1 === undefined ? (
                                                                  <span></span>
                                                                ) : (
                                                                  <div>
                                                                    <h4 className="fonn">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                                    {
                                                                      item.image4 === "" ? <span></span> : item.input5 === "" ? <span></span> : <p className="fonttw">{`${item.input4} to ${item.input5}`}</p>
                                                                    }
                                                                    <p className="fonttt">{item.input6}</p>
                                                                  </div>
                                                                )}
                                                              </div>
                                                            </div>
                                                          )}
                                                        </div>
                                                      ))}
                                                    </div>
                                                  ) : (
                                                    <span></span>
                                                  )}
                                                  {store.id === "04" ? (
                                                    <div>
                                                      {
                                                        course.length === 0 ? <span></span> : <div className="preview-blk-title"><h2 className="headd">Course</h2></div>
                                                      }
                                                      {store.it.map((item, index) => (
                                                        <div className="store">
                                                          {item.input1 === undefined ? (
                                                            <span></span>
                                                          ) : (
                                                            <div className="store">

                                                              {item.input1 === undefined ? (
                                                                <span></span>
                                                              ) : (
                                                                <div>
                                                                  <h4 className="fonn">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                                  <p className="fonttw">{`${item.input4} to ${item.input5}`}</p>
                                                                  <p className="fonttt">{item.input6}</p>
                                                                </div>
                                                              )}
                                                            </div>
                                                          )}
                                                        </div>
                                                      ))}
                                                    </div>
                                                  ) : (
                                                    <span></span>
                                                  )}
                                                  {store.id === "05" ? (
                                                    <div>
                                                      {
                                                        five.length === 0 ? <span></span> : <div className="preview-blk-title"><h2 className="headd">Internships</h2></div>
                                                      }
                                                      {store.it.map((item, index) => (
                                                        <div className="store">
                                                          {item.input1 === undefined ? (
                                                            <span></span>
                                                          ) : (
                                                            <div className="store">

                                                              {item.input1 === undefined ? (
                                                                <span></span>
                                                              ) : (
                                                                <div>
                                                                  <h4 className="fonn">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                                  <p className="fonttw">{`${item.input4} to ${item.input5}`}</p>
                                                                  <p className="fonttt">{item.input6}</p>
                                                                </div>
                                                              )}
                                                            </div>
                                                          )}
                                                        </div>
                                                      ))}
                                                    </div>
                                                  ) : (
                                                    <span></span>
                                                  )}
                                                  {store.id === "07" ? (
                                                    <div>
                                                      {
                                                        project.length === 0 ? <span></span> : <div className="preview-blk-title"><h2 className="headd">Projects</h2></div>
                                                      }
                                                      {store.it.map((item, index) => (
                                                        <div className="store">
                                                          {item.input1 === undefined ? (
                                                            <span></span>
                                                          ) : (
                                                            <div className="store">

                                                              {item.input1 === undefined ? (
                                                                <span></span>
                                                              ) : (
                                                                <div>
                                                                  <h4 className="fon">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                                  {
                                                                    item.image4 === "" ? <span></span> : item.input5 === "" ? <span></span> : <p className="fonttw">{`${item.input4} to ${item.input5}`}</p>
                                                                  }

                                                                  {
                                                                    item.input7 === "" ? <span></span> : <p className="fontt1">{`My Role : ${item.input7}`}</p>
                                                                  }
                                                                  {
                                                                    item.input8 === "" ? <span></span> : <p className="fontt1">{`Skills Used In This  Project : ${item.input8}`}</p>
                                                                  }

                                                                  <p className="fonttt">{item.input6}</p>
                                                                </div>
                                                              )}
                                                            </div>
                                                          )}
                                                        </div>
                                                      ))}
                                                    </div>
                                                  ) : (
                                                    <span></span>
                                                  )}
                                                  {store.id === "08" ? (
                                                    <div>
                                                      {
                                                        cust.length === 0 ? <span></span> : <div className="preview-blk-title"><h2 className="headd">{store.head}</h2></div>
                                                      }
                                                      {store.it.map((item, index) => (
                                                        <div className="store">
                                                          {item.input1 === undefined ? (
                                                            <span></span>
                                                          ) : (
                                                            <div className="store">
                                                              {item.input1 === undefined ? (
                                                                <span></span>
                                                              ) : (
                                                                <div>
                                                                  <h4 className="fonn">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                                  <p className="fonttw">{`${item.input4}`}</p>
                                                                  <p className="fonttt">{item.input5}</p>
                                                                </div>
                                                              )}
                                                            </div>
                                                          )}
                                                        </div>
                                                      ))}
                                                    </div>
                                                  ) : (
                                                    <span></span>
                                                  )}
                                                </div>
                                              </div>
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
                      </div>
                    </div>
                  </div>
                )}

                {template === 'template3' && (
                  <div className="template3">
                    <div className="main-full" id="pdf-content" ref={contentDivRef}
                      contentEditable={false}
                      style={{
                        // border: '1px solid #ccc',
                        // minHeight: '200px',
                        // padding: '10px',
                        // marginBottom: '20px',
                        width: "97%"
                      }}>

                      <div className="main-left bg-green text-white" style={{ backgroundColor: selectedColor1 }}>
                        <div className="pincode">
                          <div className="details">
                            {email === "" ? (
                              <span></span>
                            ) : (
                              <h4 className="heading div-heading">Contact</h4>
                            )}
                            <div>
                              {
                                phone === "" ? <span></span> : <p className="cit">{`+${phone}`}</p>
                              }

                            </div>
                            <div>
                              <p className="conte">{email}</p>
                            </div>
                          </div>
                          <div>
                            {address === "" ? (
                              <span></span>
                            ) : (
                              <h4 className="heading div-heading">Address</h4>
                            )}

                            <div>
                              <p className="cont">{address}</p>
                            </div>
                            <div>
                              {
                                post === "" ? <p className="cit">{`${city}`}</p> : <p className="cit">{`${city} , ${post}`}</p>
                              }
                              {/* <p className="cit">{`${city} , ${post}`}</p> */}
                            </div>
                            <div>
                              <p className="cit">{country}</p>
                            </div>
                          </div>

                          <div>
                            {licence === "" ? (
                              <span></span>
                            ) : (
                              <h4 className="heading1">Gender</h4>
                            )}
                            <div>
                              <p className="cit">{licence}</p>
                            </div>
                          </div>
                          <div>
                            {nation === "" ? (
                              <span></span>
                            ) : (
                              <h4 className="heading1">Nationality</h4>
                            )}
                            <div>
                              <p className="cit">{nation}</p>
                            </div>
                          </div>
                          <div>
                            {place && birth !== "" ? (
                              <h4 className="heading1">Place/Date of Birth</h4>
                            ) : place !== "" ? (
                              <h4 className="heading1">Place of Birth</h4>
                            ) : birth !== "" ? (
                              <h4 className="heading1">Date of Birth</h4>
                            ) : (
                              <span></span>
                            )}
                            <div>
                              <p className="cit">{birth}</p>
                              <p className="cit">{place}</p>
                            </div>
                          </div>
                          <div className="top">
                            {skill.length === 0 ? (
                              <span></span>
                            ) : (
                              <h4 className="heading div-heading">Skills</h4>
                            )}
                            {skill.map((object) => (

                              <div key={object.id} className="ill">
                                <div className="progress-bar-container" id="secondProgressBarContainer">
                                  {studentSkills.map((skill, index) => (
                                    <div key={index} className="progress-bar-container">
                                      <div className="skill-name">{skill}</div>
                                      {renderSecondProgressBar(skill)}
                                    </div>
                                  ))}
                                </div>
                                <ToastContainer className="custom-toast" />

                                <p className="cit" id="cit">{`${object.input1}`}</p>

                                <div className="ski1">

                                  {isChecked ? (
                                    <div>
                                      {object.input2 === "" ? (
                                        <span></span>
                                      ) : (
                                        <p className="ski">{`${object.input2}/5`}</p>
                                      )}
                                    </div>
                                  ) : (
                                    <span></span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="top">
                            {website.length === 0 ? (
                              <span></span>
                            ) : (
                              <h4 className="heading div-heading">Links</h4>
                            )}
                            {website.map((object) => (
                              <div key={object.id}>
                                {/* <p className="cit">{`${object.input1}`}</p> */}
                                <Link to={object.input2} className="cit" id="link">
                                  {object.input1}
                                </Link>
                              </div>
                            ))}
                          </div>
                          <div className="top">
                            {six.length === 0 ? (
                              <span></span>
                            ) : (
                              <h4 className="heading div-heading">Hobbies</h4>
                            )}
                            <div>
                              {six.map((object) => (
                                <div key={object.id} className="ill">
                                  <p className="cit">{`${object.input1}`}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="top">
                            {seven.length === 0 ? (
                              <span></span>
                            ) : (
                              <h4 className="heading div-heading">Languages</h4>
                            )}
                            <div>
                              {seven.map((object) => (
                                <div key={object.id} className="ill">
                                  <p className="cit" id="cit">{`${object.input1}`}</p>
                                  <div className="ski1">
                                    <p className="ski">{`${object.input2}/5`}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="main-right">
                        <div>
                          <div style={{ display: "flex" }} className="cont-1">
                            <div className="profile-pic">
                              <Dropzone
                                onDrop={handleDrop}
                                accept="image/*"
                                multiple={false}
                              >
                                {({ getRootProps, getInputProps }) => (
                                  <div
                                    className="dropzone"
                                    id="drop"
                                    {...getRootProps()}
                                  >
                                    <input {...getInputProps()} />
                                    {selectedFile ? (
                                      <div className="image">
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
                                      <div style={{ display: "flex" }}></div>
                                    )}
                                  </div>
                                )}
                              </Dropzone>
                            </div>
                            <div>
                              <div style={{ display: "flex" }}>
                                <h3 className="name1">{generateName(name, true) + " " + generateName(lastName, true)}</h3>
                                
                              </div>
                              <div>
                                <h6 className="name">{job}</h6>
                              </div>
                            </div>
                          </div>
                          <div className="summry">
                            {editorHtml === "" ? (
                              <span></span>
                            ) : (
                              <h2 className="prof">Summary</h2>
                            )}
                            <div
                              className="mess"
                              dangerouslySetInnerHTML={{ __html: editorHtml }}
                            />
                          </div>
                        </div>

                        <div>
                          <DragDropContext onDragEnd={handleDragDrop}>
                            <div className="movement">
                              <Droppable droppableId="Root" type="group">
                                {(provided) => (
                                  <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                  >
                                    {ite.map((store, index) => (
                                      <Draggable
                                        draggableId={store.id}
                                        key={store.id}
                                        index={index}
                                      >
                                        {(provided) => (
                                          <div
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                            ref={provided.innerRef}
                                          >
                                            {/* <h3>{store.name}</h3> */}
                                            {/* <Storelist {...store} /> */}
                                            <div>
                                              <div>{/* <h3>{name}</h3> */}</div>
                                              <div>
                                                {store.id === "06" ? (
                                                  <div>
                                                    {
                                                      three.length === 0 ? <span></span> : <h2 className="head">References</h2>
                                                    }
                                                    {store.it.map((item, index) => (
                                                      <div className="store">
                                                        {item.input1 === undefined ? (
                                                          <span></span>
                                                        ) : (
                                                          <div>
                                                            {/* <h4 className="fon">{`${item.input1},${item.input2},${item.input3}`}</h4>
            <p className="fontt">{`${item.input4}/${item.input5}`}</p>
            <p className="fonttt">{item.input6}</p> */}

                                                            <p className="fontt">{`${item.input1} from ${item.input2}`}</p>
                                                            <p className="fontt">{`${item.input4} | ${item.input5}`}</p>
                                                          </div>
                                                        )}
                                                      </div>
                                                    ))}
                                                  </div>
                                                ) : (
                                                  <span></span>
                                                )}
                                                {store.id === "01" ? (
                                                  <div>
                                                    {
                                                      objects.length === 0 ? <span></span> : <h2 className="head">Employment</h2>
                                                    }
                                                    {store.it.map((item, index) => (
                                                      <div className="store">
                                                        {item.input1 === undefined ? (
                                                          <span></span>
                                                        ) : (
                                                          <div className="store">
                                                            {item.input1 === undefined ? (
                                                              <span></span>
                                                            ) : (
                                                              <div>
                                                                <h4 className="fon">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>

                                                                <p className="fontt">{`${item.input4} to ${item.input5}`}</p>
                                                                <p className="fonttt">{item.input6}</p>
                                                              </div>
                                                            )}
                                                          </div>
                                                        )}
                                                      </div>
                                                    ))}
                                                  </div>
                                                ) : (
                                                  <span></span>
                                                )}

                                                {store.id === "02" ? (
                                                  <div>
                                                    {
                                                      education.length === 0 ? <span></span> : <h2 className="head">Education</h2>
                                                    }
                                                    {store.it.map((item, index) => (
                                                      <div className="store">
                                                        {item.input1 === undefined ? (
                                                          <span></span>
                                                        ) : (
                                                          <div className="store">

                                                            {item.input1 === undefined ? (
                                                              <span></span>
                                                            ) : (
                                                              <div>
                                                                <h4 className="fon">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                                {
                                                                  item.input4 === "" ? <span></span> : item.input5 === "" ? <p className="fontt">{`${item.input4} to Present`}</p> : <p className="fontt">{`${item.input4} to ${item.input5}`}</p>
                                                                }
                                                                {/* <p className="fontt">{`${item.input4} to ${item.input5}`}</p> */}
                                                                <p className="fonttt">{item.input6}</p>
                                                              </div>
                                                            )}
                                                          </div>
                                                        )}
                                                      </div>
                                                    ))}
                                                  </div>
                                                ) : (
                                                  <span></span>
                                                )}
                                                {store.id === "03" ? (
                                                  <div>
                                                    {
                                                      four.length === 0 ? <span></span> : <h2 className="head">Extra-curricular activites</h2>
                                                    }
                                                    {store.it.map((item, index) => (
                                                      <div className="store">
                                                        {item.input1 === undefined ? (
                                                          <span></span>
                                                        ) : (
                                                          <div>
                                                            <div className="store">

                                                              {item.input1 === undefined ? (
                                                                <span></span>
                                                              ) : (
                                                                <div>
                                                                  <h4 className="fon">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                                  {
                                                                    item.image4 === "" ? <span></span> : item.input5 === "" ? <span></span> : <p className="fontt">{`${item.input4} to ${item.input5}`}</p>
                                                                  }
                                                                  <p className="fonttt">{item.input6}</p>
                                                                </div>
                                                              )}
                                                            </div>
                                                          </div>
                                                        )}
                                                      </div>
                                                    ))}
                                                  </div>
                                                ) : (
                                                  <span></span>
                                                )}
                                                {store.id === "04" ? (
                                                  <div>
                                                    {
                                                      course.length === 0 ? <span></span> : <h2 className="head">Course</h2>
                                                    }
                                                    {store.it.map((item, index) => (
                                                      <div className="store">
                                                        {item.input1 === undefined ? (
                                                          <span></span>
                                                        ) : (
                                                          <div className="store">

                                                            {item.input1 === undefined ? (
                                                              <span></span>
                                                            ) : (
                                                              <div>
                                                                <h4 className="fon">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                                <p className="fontt">{`${item.input4} to ${item.input5}`}</p>
                                                                <p className="fonttt">{item.input6}</p>
                                                              </div>
                                                            )}
                                                          </div>
                                                        )}
                                                      </div>
                                                    ))}
                                                  </div>
                                                ) : (
                                                  <span></span>
                                                )}
                                                {store.id === "05" ? (
                                                  <div>
                                                    {
                                                      five.length === 0 ? <span></span> : <h2 className="head">Internships</h2>
                                                    }
                                                    {store.it.map((item, index) => (
                                                      <div className="store">
                                                        {item.input1 === undefined ? (
                                                          <span></span>
                                                        ) : (
                                                          <div className="store">

                                                            {item.input1 === undefined ? (
                                                              <span></span>
                                                            ) : (
                                                              <div>
                                                                <h4 className="fon">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                                <p className="fontt">{`${item.input4} to ${item.input5}`}</p>
                                                                <p className="fonttt">{item.input6}</p>
                                                              </div>
                                                            )}
                                                          </div>
                                                        )}
                                                      </div>
                                                    ))}
                                                  </div>
                                                ) : (
                                                  <span></span>
                                                )}
                                                {store.id === "07" ? (
                                                  <div>
                                                    {
                                                      project.length === 0 ? <span></span> : <h2 className="head">Projects</h2>
                                                    }
                                                    {store.it.map((item, index) => (
                                                      <div className="store">
                                                        {item.input1 === undefined ? (
                                                          <span></span>
                                                        ) : (
                                                          <div className="store">

                                                            {item.input1 === undefined ? (
                                                              <span></span>
                                                            ) : (
                                                              <div>
                                                                <h4 className="fon">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                                {
                                                                  item.image4 === "" ? <span></span> : item.input5 === "" ? <span></span> : <p className="fontt">{`${item.input4} to ${item.input5}`}</p>
                                                                }

                                                                {
                                                                  item.input7 === "" ? <span></span> : <p className="fontt">{`My Role : ${item.input7}`}</p>
                                                                }
                                                                {
                                                                  item.input8 === "" ? <span></span> : <p className="fontt">{`Skills Used In This  Project : ${item.input8}`}</p>
                                                                }

                                                                <p className="fonttt">{item.input6}</p>
                                                              </div>
                                                            )}
                                                          </div>
                                                        )}
                                                      </div>
                                                    ))}
                                                  </div>
                                                ) : (
                                                  <span></span>
                                                )}
                                                {store.id === "08" ? (
                                                  <div>
                                                    {
                                                      cust.length === 0 ? <span></span> : <h2 className="head">{store.head}</h2>
                                                    }
                                                    {store.it.map((item, index) => (
                                                      <div className="store">
                                                        {item.input1 === undefined ? (
                                                          <span></span>
                                                        ) : (
                                                          <div className="store">
                                                            {item.input1 === undefined ? (
                                                              <span></span>
                                                            ) : (
                                                              <div>
                                                                <h4 className="fon">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                                <p className="fontt">{`${item.input4}`}</p>
                                                                <p className="fonttt">{item.input5}</p>
                                                              </div>
                                                            )}
                                                          </div>
                                                        )}
                                                      </div>
                                                    ))}
                                                  </div>
                                                ) : (
                                                  <span></span>
                                                )}
                                              </div>
                                            </div>
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
                    </div>
                  </div>
                )}

                {template === 'template4' && (
                 <div className="template3">
                 <div className="main-fulll" id="pdf-content" ref={contentDivRef}
                   contentEditable={false}
                   style={{
                     // border: '1px solid #ccc',
                     // minHeight: '200px',
                     // padding: '10px',
                     // marginBottom: '20px',
                     width: "97%"
                   }}>

                   <div className="main-top">
                    <div>
                    <div className="profile-pic">
                          
                          
                    <Dropzone
                             onDrop={handleDrop}
                             accept="image/*"
                             multiple={false}
                           >
                             {({ getRootProps, getInputProps }) => (
                               <div
                                 className="dropzone"
                                 id="drop"
                                 {...getRootProps()}
                               >
                                 <input {...getInputProps()} />
                                 {selectedFile ? (
                                   <div className="image">
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
                                   <div style={{ display: "flex" }}></div>
                                 )}
                               </div>
                             )}
                           </Dropzone>
                           </div>
                           <div>
                           <div className="NameA">
                             <h6 className="nameA">{job}</h6>
                           </div>
                           <div className="detailsA">
                         {/* {email === "" ? (
                           <span></span>
                         ) : (
                           <h4 className="heading div-heading headingA">Contact</h4>
                         )} */}
                         <div>
                           {
                             phone === "" ? <span></span> : <p className="cit">{`+${phone}`}</p>
                           }

                         </div>
                         <div>
                           <p className="conte">{email}</p>
                         </div>
                       </div>
                       <div>
                         {/* {address === "" ? (
                           <span></span>
                         ) : (
                           <h4 className="heading div-heading">Address</h4>
                         )} */}

                         <div>
                           <p className="cont">{address}</p>
                         </div>
                         <div>
                           {
                             post === "" ? <p className="cit">{`${city}`}</p> : <p className="cit">{`${city} , ${post}`}</p>
                           }
                           {/* <p className="cit">{`${city} , ${post}`}</p> */}
                         </div>
                         <div>
                           <p className="cit">{country}</p>
                         </div>
                       </div>
                       <div>
                         {/* {licence === "" ? (
                           <span></span>
                         ) : (
                           <h4 className="heading1">Gender</h4>
                         )} */}
                         <div>
                           <p className="cit">{licence}</p>
                         </div>
                       </div>
                       <div>
                         {/* {nation === "" ? (
                           <span></span>
                         ) : (
                           <h4 className="heading1">Nationality</h4>
                         )} */}
                         <div>
                           <p className="cit">{nation}</p>
                         </div>
                       </div>
                       <div>
                         {/* {place && birth !== "" ? (
                           <h4 className="heading1">Place/Date of Birth</h4>
                         ) : place !== "" ? (
                           <h4 className="heading1">Place of Birth</h4>
                         ) : birth !== "" ? (
                           <h4 className="heading1">Date of Birth</h4>
                         ) : (
                           <span></span>
                         )} */}
                         <div>
                           <p className="cit">{birth}</p>
                           <p className="cit">{place}</p>
                         </div>
                       </div>

                           </div>

                    </div>
                    <div className="top-right">
                    <div style={{ display: "flex" }}>
                                <h3 className="name1 nameAA">{generateName(name, true) + " " + generateName(lastName, true)}</h3>
                                
                              </div>
                              <div className="summryA" id="summryA">
                                {
                                  editorHtml === "" ? <span></span> : <h4>Summary</h4>
                                }
                                <div dangerouslySetInnerHTML={{ __html: editorHtml }}/>
                       </div>

                    </div>

                   </div>
                   <div className="second-full">
                   <div className="main-right">
                     <div>
                       <div style={{ display: "flex" }} className="cont-1">
                       </div>
                       
                     </div>

                     <div>
                       <DragDropContext onDragEnd={handleDragDrop}>
                         <div className="movement">
                           <Droppable droppableId="Root" type="group">
                             {(provided) => (
                               <div
                                 {...provided.droppableProps}
                                 ref={provided.innerRef}
                               >
                                 {ite.map((store, index) => (
                                   <Draggable
                                     draggableId={store.id}
                                     key={store.id}
                                     index={index}
                                   >
                                     {(provided) => (
                                       <div
                                         {...provided.dragHandleProps}
                                         {...provided.draggableProps}
                                         ref={provided.innerRef}
                                       >
                                         {/* <h3>{store.name}</h3> */}
                                         {/* <Storelist {...store} /> */}
                                         <div>
                                           <div>{/* <h3>{name}</h3> */}</div>
                                           <div>
                                             {store.id === "06" ? (
                                               <div>
                                                 {
                                                   three.length === 0 ? <span></span> : <h2 className="head">References</h2>
                                                 }
                                                 {store.it.map((item, index) => (
                                                   <div className="store">
                                                     {item.input1 === undefined ? (
                                                       <span></span>
                                                     ) : (
                                                       <div>
                                                         {/* <h4 className="fon">{`${item.input1},${item.input2},${item.input3}`}</h4>
         <p className="fontt">{`${item.input4}/${item.input5}`}</p>
         <p className="fonttt">{item.input6}</p> */}

                                                         <p className="fontt">{`${item.input1} from ${item.input2}`}</p>
                                                         <p className="fontt">{`${item.input4} | ${item.input5}`}</p>
                                                       </div>
                                                     )}
                                                   </div>
                                                 ))}
                                               </div>
                                             ) : (
                                               <span></span>
                                             )}
                                             {store.id === "01" ? (
                                               <div>
                                                 {
                                                   objects.length === 0 ? <span></span> : <h2 className="head">Employment</h2>
                                                 }
                                                 {store.it.map((item, index) => (
                                                   <div className="store">
                                                     {item.input1 === undefined ? (
                                                       <span></span>
                                                     ) : (
                                                       <div className="store">
                                                         {item.input1 === undefined ? (
                                                           <span></span>
                                                         ) : (
                                                           <div>
                                                             <h4 className="fon">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>

                                                             <p className="fontt">{`${item.input4} to ${item.input5}`}</p>
                                                             <p className="fonttt">{item.input6}</p>
                                                           </div>
                                                         )}
                                                       </div>
                                                     )}
                                                   </div>
                                                 ))}
                                               </div>
                                             ) : (
                                               <span></span>
                                             )}

                                             {store.id === "02" ? (
                                               <div>
                                                 {
                                                   education.length === 0 ? <span></span> : <h2 className="head">Education</h2>
                                                 }
                                                 {store.it.map((item, index) => (
                                                   <div className="store">
                                                     {item.input1 === undefined ? (
                                                       <span></span>
                                                     ) : (
                                                       <div className="store">

                                                         {item.input1 === undefined ? (
                                                           <span></span>
                                                         ) : (
                                                           <div>
                                                             <h4 className="fon">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                             {
                                                               item.input4 === "" ? <span></span> : item.input5 === "" ? <p className="fontt">{`${item.input4} to Present`}</p> : <p className="fontt">{`${item.input4} to ${item.input5}`}</p>
                                                             }
                                                             {/* <p className="fontt">{`${item.input4} to ${item.input5}`}</p> */}
                                                             <p className="fonttt">{item.input6}</p>
                                                           </div>
                                                         )}
                                                       </div>
                                                     )}
                                                   </div>
                                                 ))}
                                               </div>
                                             ) : (
                                               <span></span>
                                             )}
                                             {store.id === "03" ? (
                                               <div>
                                                 {
                                                   four.length === 0 ? <span></span> : <h2 className="head">Extra-curricular activites</h2>
                                                 }
                                                 {store.it.map((item, index) => (
                                                   <div className="store">
                                                     {item.input1 === undefined ? (
                                                       <span></span>
                                                     ) : (
                                                       <div>
                                                         <div className="store">

                                                           {item.input1 === undefined ? (
                                                             <span></span>
                                                           ) : (
                                                             <div>
                                                               <h4 className="fon">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                               {
                                                                 item.image4 === "" ? <span></span> : item.input5 === "" ? <span></span> : <p className="fontt">{`${item.input4} to ${item.input5}`}</p>
                                                               }
                                                               <p className="fonttt">{item.input6}</p>
                                                             </div>
                                                           )}
                                                         </div>
                                                       </div>
                                                     )}
                                                   </div>
                                                 ))}
                                               </div>
                                             ) : (
                                               <span></span>
                                             )}
                                             {store.id === "04" ? (
                                               <div>
                                                 {
                                                   course.length === 0 ? <span></span> : <h2 className="head">Course</h2>
                                                 }
                                                 {store.it.map((item, index) => (
                                                   <div className="store">
                                                     {item.input1 === undefined ? (
                                                       <span></span>
                                                     ) : (
                                                       <div className="store">

                                                         {item.input1 === undefined ? (
                                                           <span></span>
                                                         ) : (
                                                           <div>
                                                             <h4 className="fon">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                             <p className="fontt">{`${item.input4} to ${item.input5}`}</p>
                                                             <p className="fonttt">{item.input6}</p>
                                                           </div>
                                                         )}
                                                       </div>
                                                     )}
                                                   </div>
                                                 ))}
                                               </div>
                                             ) : (
                                               <span></span>
                                             )}
                                             {store.id === "05" ? (
                                               <div>
                                                 {
                                                   five.length === 0 ? <span></span> : <h2 className="head">Internships</h2>
                                                 }
                                                 {store.it.map((item, index) => (
                                                   <div className="store">
                                                     {item.input1 === undefined ? (
                                                       <span></span>
                                                     ) : (
                                                       <div className="store">

                                                         {item.input1 === undefined ? (
                                                           <span></span>
                                                         ) : (
                                                           <div>
                                                             <h4 className="fon">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                             <p className="fontt">{`${item.input4} to ${item.input5}`}</p>
                                                             <p className="fonttt">{item.input6}</p>
                                                           </div>
                                                         )}
                                                       </div>
                                                     )}
                                                   </div>
                                                 ))}
                                               </div>
                                             ) : (
                                               <span></span>
                                             )}
                                             {store.id === "07" ? (
                                               <div>
                                                 {
                                                   project.length === 0 ? <span></span> : <h2 className="head">Projects</h2>
                                                 }
                                                 {store.it.map((item, index) => (
                                                   <div className="store">
                                                     {item.input1 === undefined ? (
                                                       <span></span>
                                                     ) : (
                                                       <div className="store">

                                                         {item.input1 === undefined ? (
                                                           <span></span>
                                                         ) : (
                                                           <div>
                                                             <h4 className="fon">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                             {
                                                               item.image4 === "" ? <span></span> : item.input5 === "" ? <span></span> : <p className="fontt">{`${item.input4} to ${item.input5}`}</p>
                                                             }

                                                             {
                                                               item.input7 === "" ? <span></span> : <p className="fontt">{`My Role : ${item.input7}`}</p>
                                                             }
                                                             {
                                                               item.input8 === "" ? <span></span> : <p className="fontt">{`Skills Used In This  Project : ${item.input8}`}</p>
                                                             }

                                                             <p className="fonttt">{item.input6}</p>
                                                           </div>
                                                         )}
                                                       </div>
                                                     )}
                                                   </div>
                                                 ))}
                                               </div>
                                             ) : (
                                               <span></span>
                                             )}
                                             {store.id === "08" ? (
                                               <div>
                                                 {
                                                   cust.length === 0 ? <span></span> : <h2 className="head">{store.head}</h2>
                                                 }
                                                 {store.it.map((item, index) => (
                                                   <div className="store">
                                                     {item.input1 === undefined ? (
                                                       <span></span>
                                                     ) : (
                                                       <div className="store">
                                                         {item.input1 === undefined ? (
                                                           <span></span>
                                                         ) : (
                                                           <div>
                                                             <h4 className="fon">{`${item.input1}, ${item.input2}, ${item.input3}`}</h4>
                                                             <p className="fontt">{`${item.input4}`}</p>
                                                             <p className="fonttt">{item.input5}</p>
                                                           </div>
                                                         )}
                                                       </div>
                                                     )}
                                                   </div>
                                                 ))}
                                               </div>
                                             ) : (
                                               <span></span>
                                             )}
                                           </div>
                                         </div>
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
                   <div className="main-left bg-green text-white" style={{ backgroundColor: selectedColor1 }}>
                     <div className="pincode">
                       <div className="top">
                         {skill.length === 0 ? (
                           <span></span>
                         ) : (
                           <h4 className="heading div-heading">Skills</h4>
                         )}
                         {skill.map((object) => (

                           <div key={object.id} className="ill">
                             <div className="progress-bar-container" id="secondProgressBarContainer">
                               {studentSkills.map((skill, index) => (
                                 <div key={index} className="progress-bar-container">
                                   <div className="skill-name">{skill}</div>
                                   {renderSecondProgressBar(skill)}
                                 </div>
                               ))}
                             </div>
                             <ToastContainer className="custom-toast" />

                             <p className="cit" id="cit">{`${object.input1}`}</p>

                             <div className="ski1">

                               {isChecked ? (
                                 <div>
                                   {object.input2 === "" ? (
                                     <span></span>
                                   ) : (
                                     <p className="ski">{`${object.input2}/5`}</p>
                                   )}
                                 </div>
                               ) : (
                                 <span></span>
                               )}
                             </div>
                           </div>
                         ))}
                       </div>
                       <div className="top">
                         {website.length === 0 ? (
                           <span></span>
                         ) : (
                           <h4 className="heading div-heading">Links</h4>
                         )}
                         {website.map((object) => (
                           <div key={object.id}>
                             {/* <p className="cit">{`${object.input1}`}</p> */}
                             <Link to={object.input2} className="cit" id="link">
                               {object.input1}
                             </Link>
                           </div>
                         ))}
                       </div>
                       <div className="top">
                         {six.length === 0 ? (
                           <span></span>
                         ) : (
                           <h4 className="heading div-heading">Hobbies</h4>
                         )}
                         <div>
                           {six.map((object) => (
                             <div key={object.id} className="ill">
                               <p className="cit">{`${object.input1}`}</p>
                             </div>
                           ))}
                         </div>
                       </div>
                       <div className="top">
                         {seven.length === 0 ? (
                           <span></span>
                         ) : (
                           <h4 className="heading div-heading">Languages</h4>
                         )}
                         <div>
                           {seven.map((object) => (
                             <div key={object.id} className="ill">
                               <p className="cit" id="cit">{`${object.input1}`}</p>
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
               </div>
               </div>
                )}
              </Scrollbars>
          }
        </div>
      </div>
    </div>
  );


}


export default Hobbies;
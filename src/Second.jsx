import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { GoPerson } from 'react-icons/go'

const PhotoUpload = () => {
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

  return (
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
  );
};

export default PhotoUpload;

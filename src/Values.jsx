import React   from 'react';
import jsPDF from 'jspdf';
const Values = () => {

  const generatePDF = () =>{
    const doc = new jsPDF();
  const contentHeight = 100; // Set the desired height of the content in millimeters

  // Add content to the PDF
  doc.text('Hello, World!', 10, 10);

  // Set the height of the content
  doc.setPageHeight(contentHeight);

  // Save the PDF
  doc.save('example.pdf');

  }
  return (
    <div>
      <button onClick={generatePDF}>Convert to PDF</button>
    </div>
  )
  
}



export default Values
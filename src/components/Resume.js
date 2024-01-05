
import React from 'react';

const ResumeDownloadButton = () => {
  const handleDownload = () => {
    const fileName = 'Renuka Devi A-Web Developer.pdf';
    const filePath = process.env.PUBLIC_URL + '/public/Renuka Devi A-Web Developer.pdf' + fileName;

    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.click();
  };

  return (
    <div className="resume">
      <h2>For More Info Download Resume</h2>
      <button type="button" className="btn btn-dark" onClick={handleDownload}>
        Resume
      </button>
    </div>
  );
};

export default ResumeDownloadButton;


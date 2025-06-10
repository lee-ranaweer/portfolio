import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="resume-download">
      <a
        href="/Nelith_Ranaweera_Resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
        aria-label="Download Resume"
      >
        <FaDownload size={16} />
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
 
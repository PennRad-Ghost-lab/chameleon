import CSV from './myCsv';
import DownloadData from "./DownloadData.jsx";
import WaitlistSignup from "./WaitListSignup.jsx";

const About = (props) => {
    const dataAvailable = false
  return (
    <div className='about-section'>
      <div className="about">
        <h1>About</h1>
        <p>
            The Chameleon project uses advanced large language models (LLMs), such as GPT-4, to generate synthetic
            radiology reports that replicate the linguistic and clinical complexity of real-world radiology
            documentation. These reports, covering multiple organ systems and imaging modalities, are rigorously
            validated by clinical experts to ensure accuracy and utility. Designed for academic and clinical research,
            Chameleon dataset aims to support the development and evaluation of natural language processing tools and AI models,
            providing a robust and ethical platform for innovation in radiology informatics.
        </p>
      </div>
        {dataAvailable ?
            (<DownloadData handleShow={props.handleShow}/>)
            :
            (<WaitlistSignup />)
        }
    </div>
  );
}


export default About;
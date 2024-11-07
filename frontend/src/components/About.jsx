import CSV from './myCsv';

const About = (props) => {
  return (
    <div className='about-section'>
      <div className="about">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="paper-link">
        <h1>Read the Paper</h1>
        <a>Link</a>
        <section id="download">
          <CSV handleShow={props.handleShow} />
        </section>
      </div>
    </div>
  );
}


export default About;
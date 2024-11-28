import CSV from "./myCsv.jsx";

const DownloadData = (props) => {
    return (
        <div className="paper-link">
            <h1>Read the Paper</h1>
            <a className='download-loc'>Link</a>
            <section className='download-section'>
                <CSV handleShow={props.handleShow}/>
            </section>
        </div>
    )
}

export default DownloadData;
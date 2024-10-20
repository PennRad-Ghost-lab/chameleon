//bootstrap button
import Button from 'react-bootstrap/Button';

const CSV = ({data, handleDownload}) => {
  return (
    <ul className="csv-list">
      {data.map(csv=> 
        <li className = "csv" key={csv.id}>
          
          <Button className = "download-button" variant="primary" onClick={() => handleDownload(csv.id)}>{csv.metadata.fileName}</Button>
        </li>)}
    </ul>
  )
}

export default CSV;
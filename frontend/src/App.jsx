import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/myNavbar';
import MyHeader from './components/myHeader';
import csvService from './services/csvService';
import CSV from './components/myCsv';
import { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("Fetching data");
    csvService.getAll().then(fetchedData => {
      setData(fetchedData);
      console.log("Data fetched:", fetchedData); // Log fetched data here
    });
  }, []);


  const handleDownload = async (id) => {
    console.log('Initiating download from:', `${id}/download`);

    try {
      const { content, filename } = await csvService.downloadById(id);

      console.log(content, filename);

      // Create a blob and download link
      const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');

      // Create downloadable link
      if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename);
      } else {
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download file. Please try again.');
    }
  };


  return (
    <>
      <MyNavbar />
      <MyHeader />
      <section id="data-section" className="data-container">
        <CSV data={data} handleDownload={handleDownload} />
      </section>
    </>
  );
}

export default App;
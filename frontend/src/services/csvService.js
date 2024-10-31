import axios from 'axios';
const baseUrl = '/api/data';

const getAll = () => {
  return axios.get(baseUrl).then(response => response.data);
}

const getOne = (id) => {
  return axios.get(`${baseUrl}/${id}`).then(response => response.data);
}

// const downloadById = (id) => { 
//     return axios.get(`${baseUrl}/${id}/download`, { responseType: 'blob' });
// }

const downloadById = (id) => {
  return axios.get(`${baseUrl}/${id}/download`, {
    responseType: 'blob',  // This is correct
    timeout: 30000  // This is optional
  }).then(response => {
    // Extract filename from Content-Disposition header
    const contentDisposition = response.headers['content-disposition'];
    const filename = contentDisposition
      ? contentDisposition.split('filename=')[1].replace(/['"]/g, '')
      : `download-${id}.csv`;

    console.log("Got the Data");

    return {
      content: response.data,  // This will be the blob
      filename: filename
    };
  });
};

const downloadAll = () => {
  console.log('Initiating download from csvService.js', `${baseUrl}/download-all`);
  return axios.get(`${baseUrl}/download-all`, {
    responseType: 'blob',
    timeout: 30000
  }).then(response => {
    const contentDisposition = response.headers['content-disposition'];
    const filename = contentDisposition
      ? contentDisposition.split('filename=')[1].replace(/['"]/g, '')
      : 'all-data.zip';

    console.log("Got the ZIP File");

    return {
      content: response.data,
      filename: filename
    };
  });
}

export default { getAll, getOne, downloadById, downloadAll };

import axios from 'axios';
const baseUrl = '/api/data';

const getAll = () => {
  console.log("fetching all data");
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
    console.log('Response:', response);
    // Extract filename from Content-Disposition header
    const contentDisposition = response.headers['content-disposition'];
    const filename = contentDisposition
      ? contentDisposition.split('filename=')[1].replace(/['"]/g, '')
      : `download-${id}.csv`;

    console.log("RESPONSE DATA", response.data);
    console.log("FILENAME", filename);
    console.log("contentDisposition", contentDisposition);

    return {
      content: response.data,  // This will be the blob
      filename: filename
    };
  });
};

export default { getAll, getOne, downloadById };

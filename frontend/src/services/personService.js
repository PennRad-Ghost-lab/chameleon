import axios from 'axios';
const baseUrl = '/api/persons';

const getAll = () => {
  console.log("fetching all data");
  return axios.get(baseUrl).then(response => response.data);
}

const getOne = (id) => {
  return axios.get(`${baseUrl}/${id}`).then(response => response.data);
}

const create = (newObject) => {
  return axios.post(baseUrl, newObject).then(response => response.data);
}

export default { getAll, getOne, create };
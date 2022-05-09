const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/songs/list-artist-top-tracks',
  params: {id: '40008598', locale: 'en-US'},
  headers: {
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
    'X-RapidAPI-Key': 'a589348e7emsh5b6ef4b6467231bp155252jsn0c698d6ef0df'
  }
};

let resData = axios.request(options);

module.exports = resData;
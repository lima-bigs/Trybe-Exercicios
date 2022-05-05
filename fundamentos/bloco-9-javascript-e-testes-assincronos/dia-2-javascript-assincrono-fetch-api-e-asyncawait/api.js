// const fetch = require("node-fetch");

// apiScript.js

const fetchCoin = async () => {
    const API_URL = `https://api.coincap.io/v2/assets`;
  await fetch(API_URL)
    .then(response => response.json())
    .then(data => console.log(data));
};

fetchCoin();
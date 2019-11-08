const axios = require('axios');
const API_URL = 'https://opentdb.com/api.php?amount=10';

async function getQuizData() {
  try {
    const response = await axios.get(API_URL);
    const results = response.data.results;
    console.log('クイズデータ：', results);
  } catch (err) {
    console.log(err);
  }
}

getQuizData();

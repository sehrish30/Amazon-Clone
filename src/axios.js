import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5001/clone-ca7da/us-central1/api'
    // "http://localhost:5001/challenge-4b2b2/us-central1/api",
});

export default instance;

// import axios from "axios";

// const instance = axios.create({
//   // THE API (cloud function) URL
//   baseURL: 'https://us-central1-challenge-4b2b2.cloudfunctions.net/api'
//     // "http://localhost:5001/challenge-4b2b2/us-central1/api",
// });

// export default instance;

// http://localhost:5001/clone-ca7da/us-central1/api
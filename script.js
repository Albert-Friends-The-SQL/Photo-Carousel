import http from 'k6/http';
import { sleep } from 'k6';




export let options = {
  vus: 500,
  duration: '5s',

}

export default function () {
  const before = new Date().getTime();
  const T = 1; // time needed to complete a VU iteration
  // Replace this with normal requests w/o a for-loop
  http.get('http://localhost:8000/api/Products');
  const after = new Date().getTime();
  const diff = (after - before) / 1000;
  const remainder = T - diff;
  if (remainder > 0) {
    sleep(remainder);
  } else {
    console.warn(`Timer exhausted! The execution time of the test took longer than ${T} seconds`);
  }
}

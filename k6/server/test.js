import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 500, // virtual users
  duration: '30s', // run the test for 30 seconds
};

export default function () {

  const res = http.get('http://localhost:3000/helloTestAsync');

  // Check if the response status is 200 and the response time is less than 200ms
  check(res, {
    'status was 200': (r) => r.status === 200,
    'response time was < 200ms': (r) => r.timings.duration < 200,
  });

  // Wait for 100ms between requests
  sleep(0.1); 
}

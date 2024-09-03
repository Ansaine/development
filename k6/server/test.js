import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 1000, // virtual users
  duration: '1m', // run the test for 30 seconds
};

export default function () {

  const res = http.get('https://www.zyntek.in');

  // Check if the response status is 200 and the response time is less than 200ms
  check(res, {
    'status was 200': (r) => r.status === 200,
    'response time was < 200ms': (r) => r.timings.duration < 200,
  });

  // Wait for 10ms between requests
  sleep(0.05); // 50ms
}

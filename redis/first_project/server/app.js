import express from "express"
import { Redis } from "ioredis";
import routes from "./routes.js";

const app = express();
const port = 3001;

app.use('/',routes)

app.listen(port, ()=>{
  console.log(`App listening at http://localhost:${port}`);
});

//Redis Client - using angshuman-free-db
export const redis = new Redis({
  port: 13795, 
  host: 'redis-13795.c212.ap-south-1-1.ec2.redns.redis-cloud.com', 
  password: 'BX9xXXH22Pv17AiRwQUb3scPGDTcsB5H',
});

// Event listener for connection status
redis.on('connect', () => {
console.log('Redis client connected successfully.');
}).on('error', (err) => {
console.error('Redis client connection error:', err);
});

routes.get('/', (req, res) => {
res.send('Hello World!');
});


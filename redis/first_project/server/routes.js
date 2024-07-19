import { Router } from "express";
import { redis } from "./app.js";
const routes = Router();

routes.get('/products', async (req, res) => {

  if( await redis.exists("products")){
    const products = await redis.get("products")
    res.send(JSON.parse(products))          // in redis, it is stored as a string so we parse to json

  }else{

    // product object which needs to be converted to json
    const products = [{
    id: 1,
    name: "First Product",
    price: 500
    }];

    await redis.set("products", JSON.stringify(products))   
    setTimeout(() => {
        res.send(products); // res.send automatically sends it as json is the variable is an object
      }, 2000);
  }
});

export default routes;

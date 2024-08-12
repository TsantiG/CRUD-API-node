import express from 'express';
import router from './Routes/route.js';
import cors from 'cors';

const App = express();

App.use(cors());
App.use(express.json());
App.use(router)



const port = 8000;

App.listen(port,() =>{
    console.log(`http://localhost:${port})`);
});
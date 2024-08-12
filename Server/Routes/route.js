import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.json({"content" : "Hello, world!"});

})

router.get('/home/:name', (req, res) => {
    const nombre = req.params.name;
    res.send(`Home ${nombre}`);

})


router.get('/products/nombre', (req, res) => {
    const id = req.query.producto;
    res.send(`producto ${id}`);

})


router.post('/products', (req, res) => {
    const {nombre, precio} = req.body;
    res.send(`Producto ${nombre} Craedo con precio ${precio}`);

})


export default router;

import express from 'express';
const router = express.Router();
import { getItems, addItem } from "./model";

router.get('/getItems', async (req, res) => {
        const items = getItems();
        res.send(items);
});

router.post('/addItem', async (req, res) => {
    const { item } = req.body;
    addItem(item);
    res.send('OK');
});


module.exports = router;
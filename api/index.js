import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    // this is an API call so we will send a JSON response by sending an object here
    res.send({ data: [] });
});

export default router;
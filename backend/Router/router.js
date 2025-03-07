const express = require('express');
const router = express.Router();
const {
    getAllData,
    createData,
    getData
} = require('../controller/UserController');

// router.get('/getdata', getAllData)
//     .post('/create', createData)

router.route('/getdata').get(getAllData).post(createData)
router.route('/getdata/:id').get(getData)


module.exports = router
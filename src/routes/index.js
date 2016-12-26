/*
* @Author: Y.J
* @Date:   2016-12-26 14:56:25
* @Last Modified by:   Y.J
* @Last Modified time: 2016-12-26 15:17:42
*/

'use strict';
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.html')
})

export default router
  

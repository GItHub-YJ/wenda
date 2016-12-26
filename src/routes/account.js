/*
* @Author: Y.J
* @Date:   2016-12-26 14:56:42
* @Last Modified by:   Y.J
* @Last Modified time: 2016-12-26 15:18:38
*/

'use strict';
const express = require("express");

const router = express.Router();

router.get('/register', (req, res) => {
  res.render('register.html')
});

router.get('/login', (req, res) => {
  res.render('login.html')
});

export default router

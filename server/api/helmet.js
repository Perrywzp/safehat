/**
 * Created by wangzhipei on 2017/7/26.
 */
var express = require('express');
var router = express.Router();


router.get('/list', function (req, res, next) {
  res.json(require("../mock/overview/" + item + ".json"));
});
module.exports = router;

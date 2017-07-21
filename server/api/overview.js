/**
 * Created by wangzhipei on 2017/7/21.
 */
var express = require('express');
var router = express.Router();

['overview',
  'unusual',
  'event',
  'hatNum',
  'putHatRank',
  'putHatRate'].forEach((item) => {
  router.get('/' + item, function (req, res, next) {
    res.json(require("../mock/overview/" + item + ".json"));
  });
})

module.exports = router;

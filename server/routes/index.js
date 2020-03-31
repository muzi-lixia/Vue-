let express = require('express');
let router = express.Router();


/*文章信息接口*/
router.use("/article",require('./article/index'));

module.exports = router;

const express = require('express');
const article = require('../../db/article');
const articleInfo = require('../../db/articleInfo');

let router = express.Router();

/*获取文章Info*/
router.post('/getInfo',(req,res)=>{
  articleInfo.findOne({},{_id:0,__v:0})
    .then(data=>{
      res.send({
        code: 0,
        mag: '请求成功',
        data
      })
    })
    .catch(()=>{
      res.send({
        code: 4,
        msg: '服务器错误',
        data: null
      })
    })
});

/*获取文章列表*/
/*router.post('/getList',(req,res)=>{

});*/

/*获取热门文章*/
router.post('/getHot',(req,res)=>{
  article.find({},{__v:0},{sort:{pv:-1},skip:0,limit:8})
    .then(data=>{
      /*console.log(data);*/
      res.send({
        code : 0,
        data
      });
    })
    .catch(()=>{
      res.send({
        code : 4,
        msg : "服务器错误",
        data : null
      });
    })
});

/*获取文章展示内容*/
router.post('/getShow',(req,res)=>{
  /*前端传过来的数据，解构*/
  let {skip,limit,tag} = req.body;
    article.find({tag},{__v:0},{skip,limit})
      .then((data)=>{
        console.log(data);
          res.send({
            code: 0,
            data,
          })
      })
      .catch(()=>{
        res.send({
          code: 4,
          msg: '服务器错误',
          data: null,
        })
      })
});

/*导出*/
module.exports = router;
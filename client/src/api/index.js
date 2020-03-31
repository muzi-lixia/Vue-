import axios from 'axios';

//配置默认参数
axios.defaults.baseURL = 'http://localhost:3000';//默认访问地址
//跨域允许携带cookie
axios.defaults.withCredentials = true;
//设置post请求格式
axios.defaults.headers.post["Content-Type"] = 'application/x-www-from-urlencoded';

export default {
  /*请求文章*/
  getArticleInfo(){
    return axios.post('/article/getInfo')
  },
  /*请求热门文章*/
  getArticleHot(){
    return axios.post('/article/getHot')
  },
  /*文章内容展示请求*/
  getArticleShow:(function(){
    //定义从哪篇文章开始加载
    let skip = 0;
    //每次加载多少篇
    let limit = 5;
    return function(index=0){
      let tag = ["","HTML5&CSS3","Javascript","NodeJs","Vue&React","Other"][index];
      //将data传到后端
      let data = {skip,limit,tag};
      skip += limit;
      return axios.post('/article/getShow',data);
    };
  })(),
};

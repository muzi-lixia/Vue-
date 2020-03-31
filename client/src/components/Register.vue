<!--注册组件-->
<template>
  <el-form ref="form" :model="form" label-width="80px" class="Register" :rules="rules">
    <el-form-item label="用户名" prop="user">
      <el-input v-model="form.user"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="psw">
      <el-input v-model="form.psw" show-password></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPsw">
      <el-input v-model="form.checkPsw" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="success" @click="submitForm('ruleForm')">立即注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: "Register",
    data(){
      return{
        form: {
          user: "",
          psw: "",
          checkPsw: ""
        },
        rules: {
          /*验证用户名*/
          user: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            {
              /*数据类型*/
              type: 'string',
              /*正则规则*/
              pattern: /^[\w\u4e00-\u9fa5]{3,8}$/,
              message: '3-8位数字、字母、_、中文',
              trigger: 'blur'
            }
          ],
          /*验证密码*/
          psw: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {
              type: 'string',
              pattern: /^[\w.?!*<>{},;'"^\/\\\[\]]{6,12}$/,
              message: '6-12位，数字、字母、_.?!*<>{},;^/\'\\[]',
              trigger: ['blur', 'change']
            }
          ],
          /*再次验证密码*/
          checkPsw: [
            {required: true, message: '请再次输入密码', trigger: 'blur'},
            {
              /*validator(){} this指向validator  函数最后返回pattern*/
              validator: (rule,value,cb)=>{
                /*this指向实例*/
                if(this.form.psw === value){
                  cb();
                }else{
                  cb(new Error("两次密码输入不一致"));
                }
              },
              trigger: 'blur'
            }
          ]
        }
      }
    },
    methods:{
      /*注册ajax请求*/
      submitForm(){

      }
    }
  }
</script>

<style scoped lang="less">
  .Register {
    padding-right: 30px;
  }
</style>
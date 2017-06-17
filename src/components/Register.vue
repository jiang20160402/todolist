<template>
    <el-row class="content">
        <el-row>
            <el-col :xs="24">
                <span class="title">欢迎注册</span>
            </el-col>
        </el-row>
        <el-row>
            <el-col :xs="12">
                <el-input
                    v-model="account"
                    placeholder="请输入账号"
                    type="text"
                    @blur="checkUsername">
                </el-input>
            </el-col>
            <el-col :xs="12">
                <span v-if="usrerrshow" class="alert">该用户名已被注册</span>                
            </el-col>
        </el-row>
        <el-row>
            <el-col :xs="12">
                <el-input
                    v-model="password"
                    placeholder="请输入密码"
                    type="password">
                </el-input>
            </el-col>
            <el-col :xs="12">
                <span v-if="pwderrshow" class="alert">密码应至少6位且包含数字和字母</span>
            </el-col>
        </el-row>
        <el-row>
            <el-col :xs="12">
                <el-input
                    v-model="cfmpassword"
                    placeholder="请重复密码"
                    type="password">
                </el-input>
            </el-col>
            <el-col :xs="12">
                <span v-if="cfmerrshow" class="alert">两次密码不一致</span>
            </el-col>
        </el-row>
        <el-row>
            <el-col :xs="24">
                <el-button type="primary" @click="registerUser">注册</el-button>
            </el-col>
        </el-row>
    </el-row>
</template>

<script>
    export default {
      data () {
        return {
          account: '',
          password: '',
          cfmpassword: '',
          usrerrshow: false
        }
      },
      computed: {
        pwderrshow: function () {
          let reg = new RegExp(/^(?=\d{0,5}[a-zA-Z])(?=[a-zA-Z]{0,5}\d)[a-zA-Z0-9]{6}$/)

          if (this.password !== '') {
            if (!reg.test(this.password)) {
              return true
            } else {
              return false
            }
          } else {
            return false
          }
        },
        cfmerrshow: function () {
          if (this.cfmpassword !== '') {
            if (this.password !== this.cfmpassword) {
              return true
            } else {
              return false
            }
          } else {
            return false
          }
        }
      },
      methods: {
        checkUsername () {
          let obj = {
            name: this.account
          }

          this.$http.post('/auth/checkusername', obj)
            .then((res) => {
              if (res.data.result) {
                this.usrerrshow = true
              } else {
                this.usrerrshow = false
              }
            })
        },
        registerUser () {
          let obj = {
            name: this.account,
            password: this.password
          }

          this.$http.post('/auth/register', obj)
            .then((res) => {
              if (res.data.result) {
                this.$message({
                  type: 'success',
                  message: res.data.message
                })
                this.$router.push('/login')
              } else {
                this.$message.error(res.data.message)
              }
            })
        }
      }
    }

</script>

<style lang="stylus">
    
</style>

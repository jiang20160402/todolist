<template>
    <el-row class="content">
        <el-col :xs="24" :sm="{span: 6,offset: 9}">
            <span class="title">
                欢迎登录
            </span>
            <el-row>
                <el-input
                    v-model="account"
                    placeholder="账号"
                    type="text">
                </el-input>
                <el-input
                    v-model="password"
                    placeholder="密码"
                    type="password"
                    @keyup.enter.native="loginToDo">
                </el-input>
                <router-link to="/register">
                    <el-button type="secondary">注册</el-button>
                </router-link>
                <el-button type="primary" @click="loginToDo">登录</el-button>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    export default {
      data () {
        return {
          account: '',
          password: ''
        }
      },
      methods: {
        loginToDo () {
          let obj = {
            name: this.account,
            password: this.password
          }
          this.$http.post('/auth/user', obj)
            .then((res) => {
              if (res.data.success) {
                sessionStorage.setItem('inventory-token', res.data.token)
                this.$message({
                  type: 'success',
                  message: '登录成功！'
                })
                this.$router.push('/todolist/' + this.account + '/' + res.data.id)
              } else {
                this.$message.error(res.data.info)
                sessionStorage.setItem('inventory-token', null)
              }
            }, (err) => {
              this.$message.error(`请求错误！${err}`)
              sessionStorage.setItem('inventory-token', null)
            })
        }

      }

    }

</script>

<style lang="stylus">
    .el-row .content
        padding 16px
    .title
        font-size 28px
    .el-input
        margin 12px 0
    .el-button
        width 100%
        margin-top 12px
</style>

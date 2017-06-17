import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import onerror from 'koa-onerror'
import json from 'koa-json'
import routes from './routes'
import convert from 'koa-convert'
import path from 'path'
import serve from 'koa-static'
import historyApiFallback from 'koa2-history-api-fallback'

const app = new Koa()

onerror(app)

app.use(convert(bodyParser()))
app.use(json())
app.use(logger())

app.use(async (ctx, next) => {
    let start = new Date()
    await next()
    let ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(async (ctx, next) => {
    try {
        await next()
    } catch (err) {
        if ( 401 === err.status) {
            ctx.status = 401
            ctx.body = {
                success: false,
                token: null,
                info: 'Protected resource, use Authorization header to get access'
            }
        } else {
            throw err
        }
    }
})

app.on('error', (error, ctx) => {
    console.log('Error Occoured ' + JSON.stringify(ctx.onerror))
    console.log('server error:' + error)
})

app
    .use(routes.routes())
    .use(routes.allowedMethods())

app.use(historyApiFallback())    

app.use(serve(path.join(__dirname, '..', 'dist')))

app.listen(3000)

console.log('server is running at 3000...')

export default app
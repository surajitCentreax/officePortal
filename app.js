const app = require('express')()
const bodyParser = require('body-parser')
const auth_router = require('./routes/emp-routes')
const emp_router = require('./routes/emp-routes')
// const router = require('./routes/user-routes')

// middleware - body-perser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// url middlewares
// app.use('/auth', auth_router)
app.use('/emp', emp_router)
// app.use('/admin', admin_router)

module.exports = app;
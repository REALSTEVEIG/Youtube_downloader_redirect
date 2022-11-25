const express = require('express')
const app = express()
const port = 5000
const searchRouter = require('./routes/search')
const {engine} = require('express-handlebars')
const path = require('path')

app.use('/public', express.static(path.join(__dirname, 'public')))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/', searchRouter)

app.listen(port, () => console.log(`Server is listening on port ${port}`))
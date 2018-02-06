const express = require('express')
const app = express()
const path = require('path')
const pug = require('pug')

app.set('views', path.join(__dirname, 'views'))
app.use('/static', express.static(path.join(__dirname, 'views')))
app.engine('html', require('pug').renderFile)

app.get('/test', (req, res) => {
	res.render('test.html')
})

app.get('/', (req, res) => {
	res.render('index.html')
})

app.listen(3000)
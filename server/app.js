const fs = require('fs')
const express = require('express')
const cors = require('cors')
const { getRandomName } = require('./helpers.js')
const dodajIme = require('./routes/dodajIme.js')

const app = express()

app.use(cors())
app.use(express.urlencoded());
app.use(express.json());

/* RUTE */

app.get('/', function(req, res) {
	res.send('Dobrodosli na Random Name API.')
})

app.get('/sva-imena', (req, res) => {
	const sadrzaj = fs.readFileSync('imena.txt', 'utf8')
	const imena = sadrzaj.split(", ")
	res.send(sadrzaj)
})

app.get('/random', (req, res) => {
	const sadrzaj = fs.readFileSync('imena.txt', 'utf8')
	const imena = sadrzaj.split(", ")
	res.send(getRandomName(imena))
})

app.post('/dodaj-ime', dodajIme)

/* SERVER */

app.listen(8080, function() {
	console.log('Server je krenuo.')
})

const fs = require('fs')

const dodajIme = (req, res) => {
	const sadrzaj = fs.readFileSync('imena.txt', 'utf8')
	const imena = sadrzaj.split(", ")
	const newName = req.body.ime
	if (imena.includes(newName)) {
		res.send('Hvala ali ime vec postoji.')
	} else {
		fs.appendFile('imena.txt', ', ' + newName, () => {
			res.send('Hvala na azuriranju baze imena.')	
		})
	}
}

module.exports = dodajIme

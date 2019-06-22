export default (name) => {

	if(name.length > 2 && (/^[a-z]+$/i.test(name))) {
		name = name.charAt(0).toUpperCase() + name.slice(1);
		return fetch('http://localhost:8080/dodaj-ime', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				ime: name
			}),
		})
		.then((response) => response.text())
	}else {
		response = "Ime ne može biti kraće od dva karaktera i može sadržati samo slova...";
		return response
	}

}

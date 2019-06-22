const data = (link,templateName) => {
	return fetch('http://localhost:8080/' + link)
	.then(response => {
		return response.text();
  })
}

export { data };

export default {
	start(data) {
		return `
			<div class='w3-animate-zoom' style='text-align:center;padding:15px;color:#403075; background-color: lightblue;margin:10px;'>
				<h3>${data}</h3>
			</div>
		`
	},
	allNames(data) {
		return `
			<div class='col-md-offset-1'>
				<div class='col-md-3 w3-animate-zoom' style='padding:10px;background-color:#fff;color:green; margin:10px;text-align:center;'>
					<div style=''>
						<img src='/assets/img/anon.png'>
					</div>
					<div style='background-color:#403075;color:#fff;padding:15px;margin-top:10px;'>
					<h3>${data}</h3>
					</div>
				</div>
			</div>
	`
	},
	randomName(data) {
		return `
			<div>
				<div class='col-md-3 col-md-push-4 w3-animate-zoom' style='padding:10px;background-color:lightblue;color:green; margin:10px;text-align:center;'>
					<div style=''>
						<img src='/assets/img/anon.png'>
					</div>
					<div style='background-color:#fff;padding:15px;margin-top:10px;color:#403075'>
					<h3>${data}</h3>
					</div>
				</div>
			</div>
	`
	}
}

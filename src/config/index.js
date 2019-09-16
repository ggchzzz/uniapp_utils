module.exports = {
	root: function() {
		const env = "dev";
		let url;
		switch (env) {
			case "product":
			url = "..."
			break;
			default:
			url="localhost"
				break;
		}
		return url;
	}()
}

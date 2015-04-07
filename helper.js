var urlBase = function(url) {
	var pos = url.indexOf('?');

	if (pos != -1) {
		url = url.substring(0,pos);
	}

	return url;
}

module.exports = {
	urlBase: urlBase,
}
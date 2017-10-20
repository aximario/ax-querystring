var escape = require('./escape');

function parseVal(val) {
	if (typeof val === 'object' || typeof val === 'function') {
		val = '';
	}
	return val;
}

module.exports = function (obj, sep, eq, options) {
	var sep = sep || '&';
	var eq = eq || '=';
	var encode = (options && options.encodeURIComponent) || escape;

	var keys = Object.keys(obj);
	var resArr = [];

	keys.forEach(function(key) {
		var item = obj[key];

		if (Array.isArray(item)) {
			item.forEach(function(val) {
				resArr.push(key + eq + encode(parseVal(val)));
			});
		} else {
			resArr.push(key + eq + encode(parseVal(item)));
		}
	});

	return resArr.join(sep);
}
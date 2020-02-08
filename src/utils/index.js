export function priceFormat(num = '') {
  return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
}

export function get (keys, object, defaultValue) {
	return keys.reduce((xs, x) => (xs && xs[x] !== undefined) ? xs[x] : defaultValue !== undefined ? defaultValue : undefined, object);
}
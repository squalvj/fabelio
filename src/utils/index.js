export function priceFormat(num = '') {
  return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
}
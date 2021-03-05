module.exports = function toReadable (number) {
  let res = '';
  let uniA = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let dozA = [,, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hun = Math.floor(number / 100);
  if(hun != 0) {
    res += uniA[hun] + ' hundred';
    if(number % 100 === 0) return res;
    res += ' ';
  }
  let doz = Math.floor((number % 100)/10);
  if(doz < 2) {
    res += uniA[number % 100];
  } else {
    res += dozA[doz]; 
    if(number % 10 === 0) return res;
    res += ' ' + uniA[number % 10];
  }
  return res;
}

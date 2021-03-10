module.exports = function reverse (n) {
  let rezult = [];
  let split = String(n).split('');  
  split.forEach(element => {
    if (!isNaN(element)) {
      rezult.push(element);
    }
  });

  return rezult.reverse('').join('');
}

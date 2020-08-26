module.exports = number => {
  if (typeof number !== 'number') {
    throw new Error('Parameter type of number');
  }
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

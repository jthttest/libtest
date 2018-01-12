function iota(len, offset = 0) {
  return [...Array(len).keys()].map( n => n + offset);
}

export {
  iota,
};

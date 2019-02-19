/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

  let b, c;
  let count = 0;
  
  preferences.forEach (function(a, i)
  {
    b= preferences[a-1];
    c= preferences[b-1];

      if (c===i+1 && a!=i && a>c && i<b-1)
          count++;  

  });
  return count;
};

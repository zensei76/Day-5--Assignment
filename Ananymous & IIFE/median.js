/*Day 5 - Functions*/

//Task

//1(f)Return median of two sorted arrays of the same size

var ar1 = [1, 6, 9];
var ar2 = [2, 7, 11];

var n1 = ar1.length;
var n2 = ar2.length;
    
 // Ananymous function
var getMedian = function (ar1, ar2, n) {
    var i = 0
    var j = 0
    var count
    var m1 = -1,
      m2 = -1
  
    for (count = 0; count <= n; count++) {
      if (i == n) {
        m1 = m2
        m2 = ar2[0]
        break ;
      } else if (j == n) {
        m1 = m2
        m2 = ar1[0]
        break ;
      }
  
      if (ar1[i] <= ar2[j]) {
        m1 = m2
        m2 = ar1[i]
        i++
      } else {
        m1 = m2
        m2 = ar2[j]
        j++
      }
    }
  
    return (m1 + m2) / 2 ;
  }
  


  if (n1 == n2){
  console.log('Median using Ananymous function is ' + getMedian(ar1, ar2, n1));
  } 
  else{
   console.log("Doesn't work for arrays of unequal size");
}
  

//IIFE

/*Day 5 - Functions*/

//Task

//1(f)Return median of two sorted arrays of the same size

var ar1 = [1, 6, 9];
var ar2 = [2, 7, 11];

var n1 = ar1.length
var n2 = ar2.length


var getMedian2 = function (ar1, ar2, n) {
    var i = 0
    var j = 0
    var count
    var m1 = -1,
        m2 = -1
  
    for (count = 0; count <= n; count++) {
        if (i == n) {
            m1 = m2
            m2 = ar2[0]
            break;
        } else if (j == n) {
            m1 = m2
            m2 = ar1[0]
            break;
        }
  
        if (ar1[i] <= ar2[j]) {
            m1 = m2
            m2 = ar1[i]
            i++
        } else {
            m1 = m2
            m2 = ar2[j]
            j++
        }
    }
  
    return (m1 + m2) / 2;
}(ar1, ar2, n1);
  

 
  if (n1 == n2){
  console.log('Median using IIFE is ' + getMedian2);
  } 
  else{
   console.log("Doesn't work for arrays of unequal size");
  }

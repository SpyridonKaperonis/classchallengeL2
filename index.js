const  calcstudents = (students, positions) => {
    return students / positions;
  }
  

  document.querySelector('#submit').addEventListener('click',  () => {
  var i = parseInt(document.getElementById('#Students').value)
  var j = parseInt(document.getElementById('#Position').value)
  var ans = calcstudents(i,j)
  document.getElementById('#display').innerHTML = ans
  });

 
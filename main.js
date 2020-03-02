const  calcstudents = (students, positions) => {
    return students / positions;
  }
  

  document.querySelector('#submit').addEventListener('click',  () => {
  const i = parseInt(document.getElementById('#Students').value)
  const j = parseInt(document.getElementById('#Position').value)
  const ans = `${s}, Students per position is ${calcstudents(i, j)}.`
  document.getElementById('#display').innerHTML = calcstudents(i,j)
  });

 
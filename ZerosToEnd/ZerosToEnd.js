var arr=[]; 
var op=[]; 
var result =[];
var n =parseInt(prompt("Enter the total number of number"));
alert(`Enter ${n} numbers one by one`
           )
for (let i = 0; i < n; i++){
   var b= parseInt(prompt(""));
  if (b==0){
    op.push(b)
  }
  else{
    arr.push(b)
    
  }
}
for (let i of arr) {
  result.push(i);
}
for (let i of op) {
  result.push(i);
  
}
alert(`The resultant array is ${result}`)


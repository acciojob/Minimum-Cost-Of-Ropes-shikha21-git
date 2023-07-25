function compare(a,b){
  if(a<b){
    return -1;
  }
 else if(a>b){
    return 1;
  }
 else{
    return 0;
  }
}
function calculateMinCost() {
  //your code here
  let str = document.getElementById("rope-lengths").value.split(",");
  let arr = str.map((str) => parseInt(str));

  let total = 0;
  arr = arr.sort(compare);
  while(arr.length>=2)
 {
   let sum = arr[0] + arr[1];
   let rem = [];
   rem.push(sum);
   for(let j=2; j<arr.length; j++)
   {
    rem.push(arr[j]);
   }
   rem.sort(compare);
   arr = [...rem]; //spread operator
   total = total+sum;
 }  
 console.log(total);
 let result = document.getElementById("result");
 result.innerHTML = total;
}  

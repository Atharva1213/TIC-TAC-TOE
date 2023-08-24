var ele="x";
function shree(index) 
{  
    var a=document.getElementById(index);  
    if(!checkcomplete())
    {
     if(a.innerHTML==="") 
     {  
      a.innerHTML=ele; 
      ele==='x' ? ele='0':ele='x';   
     }  
     if(checkWin())
     {  
         document.getElementById("demo").innerHTML="Won Match";  
         document.getElementById("board").innerHTML=" "; 
         refresh(); 
         count=0;
     }
    }
    else 
    { 
      document.getElementById("demo").innerHTML="Better Luck Next Time";  
      document.getElementById("board").innerHTML=" "; 
    }
} 
function checkcomplete() 
{   var count=0;
    for(var i=1;i<10;i++)
    {
        var a=document.getElementById(i); 
        if(a.innerHTML==="") 
        {
           count=count+1; 
        }
    } 
   console.log(count); 
   if(count===0)
   {
    return true; 
   }
   else
   {
    return false; 
   }
} 
function checkWin() 
{
  for (let i = 0; i < winCombinations.length; i++) {
    let combination = winCombinations[i];
    let cell1 = document.getElementById( combination[0]).innerHTML;
    let cell2 = document.getElementById( combination[1]).innerHTML;
    let cell3 = document.getElementById( combination[2]).innerHTML;
    if (cell1 === cell2 && cell2 === cell3 && cell1 !== "") {
      return true;
    }

  }
  return false;
}
const winCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]; 
function refresh() 
{
     for(var i=1;i<10;i++)
     {
         document.getElementById(i).innerHTML=""; 
     }
}
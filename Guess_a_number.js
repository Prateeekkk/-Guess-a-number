let n = 22
let Mynum ;
let chances = 0
 while(Mynum != n){
     Mynum = prompt("enter a number")
     if(Mynum == n){
         alert("You did it")
         break
     }
     else if (Mynum > n){
         alert("Try lower")
         chances++
 }
else if(Mynum < n){
    alert("Try higher")
    chances++
}
 }
console.log("your gussed answer is ", n)
console.log("your score is", 100-chances)
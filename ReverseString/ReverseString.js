
function revStr(){
    let result = document.getElementById("result");
    var string=document.getElementById("text").value;
    
    let strRev=string.split("").reverse().join("");
     result.innerHTML= "The reversed string is:  "+ strRev;
}



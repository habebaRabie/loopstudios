const $btn = document.querySelector("#btn");
const $btn2 = document.querySelector('#btnx');

let check = 0;
$btn.addEventListener("click", ()=>{
    if (check %2 == 0){
        document.getElementById('btn').style.display = "none";
        document.getElementById('btnx').style.display = "block";
        document.getElementById('list').style.display = "block";
        document.getElementById('Navbar').style.backgroundColor = "black";

        return check++; 
    }
    
});

$btn2.addEventListener("click", ()=>{
    if (check %2 != 0){
        document.getElementById('list').style.display = "none";
        document.getElementById('btnx').style.display = "none";
        document.getElementById('btn').style.display = "block";
        document.getElementById('Navbar').style.backgroundColor = "transparent";
        return check++;
    }
})



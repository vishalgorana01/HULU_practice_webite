let login_btn = document.getElementById("login");

let modal = document.createElement('div');
let modal_conatiner = document.getElementsByClassName("modal_box");

let search = true;
login_btn.addEventListener("click" , function(){
    if(search){
    document.getElementById("modal_part").style.display = "block";
    console.log("hi")
    search = false;
    }
    else{
        search = true;
        document.getElementById("modal_part").style.display = "none";
    }
})

let close = document.getElementById("close");

close.addEventListener("click" , function(){
    if(!search){
        document.getElementById("modal_part").style.display = "none";
        search = true;
    }
});


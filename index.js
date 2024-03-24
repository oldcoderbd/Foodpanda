let def = 0;
function cart(){
    def = def+1;
    document.getElementById("sup1").innerHTML = def;
}
let butt = document.querySelector(".but");
butt.addEventListener("click", cart);

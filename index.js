let def = 0;
function cart(){
    def = def+1;
    document.getElementById("sup1").innerHTML = def;
}
document.querySelector(".but").addEventListener("click", cart);

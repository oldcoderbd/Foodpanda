let def = 0;
function cart(){
    def = def+1;
    document.getElementById("sup1").innerHTML = def;
}
document.getElementById("but").addEventListener("click", cart);

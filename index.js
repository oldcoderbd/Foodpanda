let def = 0;
function fanc(){
    def = def+1;
    document.getElementById("sup1").innerHTML = def;
}
document.getElementById("but").addEventListener("click", fanc);

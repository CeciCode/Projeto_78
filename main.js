var imgs= ["bruno blox.jpg", "helo xd.jpg", "cicitoys blox.jpg"];
var names= ["Bruno", "Heloisa", "Cecilia"];
function proximo(){
    var i= 0;
    i++;
    var no= 2
    if (i > no){
        i= 0
    }
    var up= imgs[i];
    var date= names[i];
    document.getElementById("img_da_familia").src= up;
    document.getElementById("nome_da_pessoa").innerHTML= date;
}
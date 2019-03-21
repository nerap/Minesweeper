let niveau = document.getElementById("niveaux");
let choix = 9;
let plateau = [];




let essai = niveau.addEventListener("change", function (event) {
   choix =  event.target.value;
   console.log(choix);
});

//***********Création plateau jeu *******************************

document.getElementById("start").addEventListener("click", function () {
   console.log(choix);

   map = [];
   start();
   init_bomb(choix, 10);

    document.getElementById("start").innerText="Reset";

   document.getElementById("plateau").innerHTML="";

   let tableElt = document.createElement("table");
   tableElt.id="table";

   for (let i=0; i<parseInt(choix); i++){
       let trElt = document.createElement("tr");
       plateau[i]=[];
       for (let j=0; j<parseInt(choix); j++){
           let tdElt = document.createElement("td");
           tdElt.innerHTML = '<img src="../img/images/normal.png">';
           tdElt.dataset.row=""+i;

           tdElt.dataset.collumn=""+j;
           trElt.appendChild(tdElt);
           plateau[i][j]=tdElt;
       }
       tableElt.appendChild(trElt);
   }
   document.getElementById("plateau").appendChild(tableElt);
});

//*****************************

document.getElementById("plateau").addEventListener('contextmenu', function(evt) {
    evt.preventDefault();
}, false);


document.getElementById("plateau").addEventListener("mouseup",function (e) {
    var y = e.target.dataset.row;
    var x = e.target.dataset.collumn;
    console.log(y);
    console.log(x);

    if (e.button === 0){
       console.log("bouton Gauche");
       discover_surrond(map, Number(y), Number(x));
       plateau[y][x].innerHTML='<img src="../img/images/empty.png">';

    }
   else if (e.button===2){
       console.log("bouton droit :)");
       plateau[y][x].innerHTML='<img src="../img/images/flag.png">';
   }
});

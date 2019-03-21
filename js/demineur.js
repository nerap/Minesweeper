let niveau = document.getElementById("niveaux");
let choix;
let plateau = [];




let essai = niveau.addEventListener("change", function (event) {
   choix =  event.target.value;
   console.log(choix);
});

//***********Création plateau jeu *******************************

document.getElementById("start").addEventListener("click", function () {
   console.log(choix);

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
document.getElementById("plateau").addEventListener("mouseup",function (e) {
   if (e.button===0){
       console.log("bouton Gauche");
       plateau[e.target.dataset.row][e.target.dataset.collumn].innerHTML='<img src="../img/images/empty.png">';
   }

   if (e.button===2){
       console.log("bouton droit :)");
       console.log(e.target.dataset.row);
       console.log(e.target.dataset.collumn);
       plateau[e.target.dataset.row][e.target.dataset.collumn].innerHTML='<img src="../img/images/flag.png">';
   }
});

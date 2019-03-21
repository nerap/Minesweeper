var map = [];


function init_map(size){
    for (var y = 0; y < size; y++){
        temp = [];
        for (var x = 0; x < size; x++){
            temp.push('?');
        }
        map.push(temp);
    }
}


function init_bomb(size, bombs){
    init_map(size);
    for (var i = 0; i < bombs; i++){
        var x = Math.floor(Math.random() * size);
        var y = Math.floor(Math.random() * size);
        map[y][x] = 'B';
    }
}


function updateDisplay(){
    for (let i=0; i<map.length; i++){

        for (let j=0 ; j<map.length; j++) {
            /*if (map[i][j]==="B"){
                plateau[i][j].innerHTML = '<img src="../img/images/bomb.png">';
            }*/
            switch (map[i][j]) {
                
                case "E" :
                    plateau[i][j].innerHTML = '<img src="../img/images/empty.png">';
                    break;
                case "?" :
                    plateau[i][j].innerHTML = '<img src="../img/images/normal.png">';
                    break;
                case 1 :
                    plateau[i][j].innerHTML = '<img src="../img/images/1.png">';
                    break;
                case 2 :
                    plateau[i][j].innerHTML = '<img src="../img/images/2.png">';
                    break;
                case 3 :
                    plateau[i][j].innerHTML = '<img src="../img/images/3.png">';
                    break;
                case 4 :
                    plateau[i][j].innerHTML = '<img src="../img/images/4.png">';
                    break;
                case 5 :
                    plateau[i][j].innerHTML = '<img src="../img/images/5.png">';
                    break;
                case 6 :
                    plateau[i][j].innerHTML = '<img src="../img/images/6.png">';
                    break;
                case 7 :
                    plateau[i][j].innerHTML = '<img src="../img/images/7.png">';
                    break;
                case 8 :
                    plateau[i][j].innerHTML = '<img src="../img/images/8.png">';
                    break;
            }
        }
    }


}


function counting_neighboor(grid, y, x){


        /*
            _____________
            | 1 | 2 | 3 |
            -------------
            | 4 | n | 5 |				n = current cell
            -------------
            | 6 | 7 | 8 |			The numbers in cells is associated to function right
            _____________						just below

        */


        var result = 0;												//Stocking the number of neigbhoor here
        //adding 1 to result each time a neighboor is found


        if (y + 1 < choix && x + 1 < choix){

            if (grid[y + 1][x + 1] === "B"){			//1.

                result++;
            }
        }

        if (y - 1 >= 0){

            if (grid[y - 1][x] === "B"){				//2.

                result++;
            }
        }

        console.log(y + 1);
        if (y + 1 < choix && x - 1 >= 0){
            if (grid[y + 1][x - 1] === "B"){			//3.
                result++;
            }
        }

        if (x - 1 >= 0){

            if (grid[y][x - 1] === "B"){				//4.

                result++;
            }
        }

        if (x + 1 < choix){

            if (grid[y][x + 1] === "B"){				//5.

                result++;
            }
        }

        if (y - 1 >= 0 && x + 1 < choix){

            if (grid[y - 1][x + 1] === "B"){			//6.

                result++;
            }
        }

        if (y + 1 < choix){

            if (grid[y + 1][x] === "B"){				//7.

                result++;
            }
        }

        if (y - 1 >= 0 && x - 1 >= 0){

            if (grid[y - 1][x - 1] === "B"){			//8.

                result++;
            }
        }

        return result;    //return the sum of all neighboor
}

function discover_surrond(grid, y, x){
    var count = counting_neighboor(grid, y, x);
    if (count === 0){
        map[y][x] = "E";
        if (y + 1 < choix && x + 1 < choix && map[y + 1][x + 1] === "?"){
            count = counting_neighboor(grid, y + 1, x + 1);
            map[y + 1][x + 1] = count;
            if (count === 0){
                discover_surrond(map, y + 1, x + 1);
            }
        }
        if (y - 1 >= 0 && map[y - 1][x] === "?"){
            count = counting_neighboor(grid, y - 1, x);
            map[y - 1][x] = count;
            if (count === 0){
                discover_surrond(map, y - 1, x);
            }
        }

        if (y + 1 < choix && x - 1 >= 0 && map[y + 1][x - 1] === "?"){
            count = counting_neighboor(grid, y + 1, x - 1);
            map[y + 1][x - 1] = count;
            if (count === 0){
                discover_surrond(map, y + 1, x - 1);
            }
        }

        if (x - 1 >= 0 && map[y][x - 1] === "?"){
            count = counting_neighboor(grid, y, x - 1);
            map[y][x - 1] = count;
            if (count === 0){
                discover_surrond(map, y, x - 1);
            }
        }

        if (x + 1 < choix && map[y][x + 1] === "?"){
            count = counting_neighboor(grid, y, x + 1);
            map[y][x + 1] = count;
            if (count === 0){
                discover_surrond(map, y, x + 1);
            }
        }

        if (y - 1 >= 0 && x + 1 < choix && map[y - 1][x + 1] === "?"){
            count =  counting_neighboor(grid, y - 1, x + 1);
            map[y - 1][x + 1] = count;
            if (count === 0){
                discover_surrond(map, y - 1, x + 1);
            }
        }

        if (y + 1 < choix && map[y + 1][x] === "?"){
            count = counting_neighboor(grid, y + 1, x);
            map[y + 1][x] = count;
            if (count === 0){
                discover_surrond(map, y + 1, x);
            }
        }

        if (y - 1 >= 0 && x - 1 >= 0 && map[y - 1][x - 1] === "?"){
            count = counting_neighboor(grid, y - 1, x - 1);
            map[y - 1][x - 1] = count;
            if (count === 0){
                discover_surrond(map, y - 1, x - 1);
            }
        }
    }
    else {
        map[y][x] = count;
    }
}
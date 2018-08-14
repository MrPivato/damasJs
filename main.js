//
//<div class="cel" onclick="check(event)" id="xy00"></div>
//
var x = 8;
var y = 8;

var isBoardCreated = false;
var isOrganized = false;
var isOption = false;

pintaBoard();

function pintaBoard() 
{

    if (isBoardCreated == false) {

        board = [
          [0, '@', 0, '@', 0, '@', 0, '@'],
          ['@', 0, '@', 0, '@', 0, '@', 0],
          [0, '@', 0, '@', 0, '@', 0, '@'],
          [ 0,  0,  0,  0,  0,  0,  0,  0],
          [ 0,  0,  0,  0,  0,  0,  0,  0],
          ['*', 0, '*', 0, '*', 0, '*', 0],
          [0, '*', 0, '*', 0, '*', 0, '*'],
          ['*', 0, '*', 0, '*', 0, '*', 0]
        ];

        isBoardCreated = true;
    }

    for (var k = 0; k <= 7; k++){

        for (var i = 0; i <= 7; i++) {

            var xyStg = k.toString() + i.toString();
            var xyInt = k + y;

            if (k%2 == i%2) {
			    document.getElementById('xy' + xyStg).style.borderRadius = '2px';
                document.getElementById('xy' + xyStg).style.backgroundColor = '#FFFFFF';
	            document.getElementById('xy' + xyStg).style.backgroundImage = "none";
            } else {
                document.getElementById('xy' + xyStg).style.backgroundColor = '#BC002D';
			    document.getElementById('xy' + xyStg).style.borderRadius = '2px';
	            document.getElementById('xy' + xyStg).style.backgroundImage = "none";
            }
			
			if (typeof board != 'undefined') {
				if (board[k][i] != 0) {
					document.getElementById('xy' + xyStg).style.borderRadius = '100%';
					if (board[k][i] == '@'){
						document.getElementById('xy' + xyStg).style.backgroundColor = '#00FF00';
						document.getElementById('xy' + xyStg).style.backgroundImage = "url('1.png')";
					} else if (board[k][i] == '*'){
						document.getElementById('xy' + xyStg).style.backgroundColor = '#FF9999';
						document.getElementById('xy' + xyStg).style.backgroundImage = "url('2.png')";
					} else {
                        if (k%2 == i%2) {
                            document.getElementById('xy' + xyStg).style.backgroundColor = '#FFFFFF';
                        } else {
                            document.getElementById('xy' + xyStg).style.backgroundColor = '#BC002D';
                        }
                        
                    }
				}
            }

        }

    }
    
}

function check(event) 
{
    
    var x = event.target.id.substring(2,3);
    var y = event.target.id.substring(3,4);

    console.log(x, y);

    if (board[x][y] == ""){
        move(x, y); 
    } else {
        showOptions(x, y);
    }
}

function showOptions(x, y)
{
  pintaBoard();

  var xyPosition = x.toString() + y.toString();
  h = x;
  l = y;
  
  if (board[x][y] == '*') {
        
	document.getElementById('xy' + xyPosition).style.backgroundColor = '#2269bb';
    x--; 
	y--;

	 if (board[x][y] == "")	{
        var xyPosition = x.toString() + y.toString();
	    document.getElementById('xy' + xyPosition).style.backgroundColor = 'lightblue';	

    }

    if (board[x][y] == "@"){
       x--;
       y--;
       var xyPosition = x.toString() + y.toString();
       document.getElementById('xy' + xyPosition).style.backgroundColor = 'lightblue';


    }

    y += 2; 

    if (board[x][y] == "@"){
       x--; 
       y++;

       var xyPosition = x.toString() + y.toString();
       document.getElementById('xy' + xyPosition).style.backgroundColor = 'lightblue';	

    }
	  
	if (board[x][y] == "")	{
        var xyPosition = x.toString() + y.toString();
	    document.getElementById('xy' + xyPosition).style.backgroundColor = 'lightblue';

    }

  } else if (board[x][y] == '@'){
	  document.getElementById('xy' + xyPosition).style.backgroundColor = '#3380cc';
 
	  // -1-1 p/ os quadrados

	  x++; y++;

	  var xyPosition = x.toString() + y.toString();
	  document.getElementById('xy' + xyPosition).style.backgroundColor = 'lightblue';


	  // -1+1

	  y -= 2;

	  var xyPosition = x.toString() + y.toString();
	  document.getElementById('xy' + xyPosition).style.backgroundColor = 'lightblue';

  }

}

function drag(x, y, xyPosition) 
{

    if (board[x][y] == ""){

        board[x][y] = board[h][l];
        board[h][l] = "";

        console.log(board);

        pintaBoard();
    }

    console.log();

}

function move(x, y, xyPosition, peca) 
{

    var xyPosition = x.toString() + y.toString();
    var hlPosition = h.toString() + y.toString();

    if (document.getElementById('xy' + xyPosition).style.backgroundColor == 'lightblue') {
        drag(x, y, xyPosition);
    }

    console.log(x, y, isOrganized, xyPosition, "nn eh pegadinha");
  
}


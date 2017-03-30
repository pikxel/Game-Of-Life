var neighbors=0;
var run;


var runWasClicked=false;
function Start(){
if(runWasClicked===false){
   runWasClicked=true;
   run= setInterval(checkBoardLogic,interval);
    }
}

function checkBoardLogic () {
    logicArrayCopy=JSON.parse(JSON.stringify(logicArray)); //We need a copy of the original array, so when changing elements in the for loop, it won't change immedietly
   for(var i=0;i<height1;i++)
   {
       for (var k=0;k<width1;k++)
       {
           LogicOfTheGame(i,k);
       }
   }
   logicArray=logicArrayCopy.slice('');
   setUp();
   generations++;   
   document.getElementById("counter").innerHTML="Generations:"+ generations; 
}
function LogicOfTheGame(x,y){
   neighbors=0;
//Lets Check it Indside (excluded the last rows and the corners)
if(x!==0 && x!==height1-1 && y!==width1-1 && y!==0)
{
    if(logicArray[x][y-1]==="1"){
        neighbors++;
    }
    if(logicArray[x+1][y-1]==="1"){
        neighbors++;
    }
   
    if(logicArray[x+1][y]==="1"){
        neighbors++;
    }
  
 
    if(logicArray[x+1][y+1]==="1"){
        neighbors++;
    } 
    
    if(logicArray[x][y+1]==="1"){
        neighbors++;
    }
   
    if(logicArray[x-1][y+1]==="1"){
        neighbors++;
    }

    if(logicArray[x-1][y]==="1"){
        neighbors++
    }
   
    if(logicArray[x-1][y-1]==="1"){
        neighbors++;
    }
}
//Lets check the outline and the borders: this is the complicated task

     LogicOfTheGameExceptions(x,y);

//neighbors counted now lets apply the game rules and decide who will survive and who will die

    if(logicArray[x][y]==="0" && neighbors===3){
        logicArrayCopy[x][y]="1";
    }
    else{
        if(neighbors===3 && neighbors===2)
        {

        }
        else if(neighbors<2){
            logicArrayCopy[x][y]="0"; 
        }
        else if(neighbors>3){
            logicArrayCopy[x][y]="0";
        }
    }
}
function LogicOfTheGameExceptions(x,y){
 
 //Top Left Corner
if(x===0 && y===0){
       if(logicArray[height1-1][width1-1]==="1") {
           neighbors++;
       }
       if(logicArray[0][width1-1]==="1"){
          neighbors++;
      }
      if(logicArray[1][width1-1]==="1"){
          neighbors++;
      }
      if(logicArray[height1-1][0]==="1"){
          neighbors++;
      }
      if(logicArray[height1-1][1]==="1"){
          neighbors++;
      }
      if(logicArray[0][1]==="1"){
          neighbors++;
      }
      if(logicArray[1][1]==="1"){
          neighbors++;
      }
      if(logicArray[1][0]==="1"){
          neighbors++;
      }
   }
   
 //Bottom Left Corner
 else  if(x===height1-1 && y===0){
      if(logicArray[0][width1-1]==="1"){
          neighbors++;
      }
      if(logicArray[height1-2][width1-1]==="1"){
          neighbors++;
      }
      if(logicArray[height1-1][width1-1]==="1"){
          neighbors++;
      }
      if(logicArray[0][0]==="1"){
          neighbors++;
      }
      if(logicArray[0][1]==="1"){
          neighbors++;
      }
      if(logicArray[height1-1][1]==="1"){
          neighbors++;
      }
      if(logicArray[height1-2][1]==="1"){
          neighbors++;
      }
      if(logicArray[height1-2][0]==="1"){
          neighbors++;
      }
   }

     //Bottom Right Corner
  else if(x===height1-1 && y===width1-1){
       if(logicArray[0][0]==="1"){
           neighbors++;
       }
       if(logicArray[0][width1-2]==="1"){
           neighbors++;
       }
       if(logicArray[0][width1-1]==="1"){
           neighbors++;
       }
       if(logicArray[height1-1][0]==="1"){
           neighbors++;
       }
       if(logicArray[height1-2][0]==="1"){
           neighbors++;
       }
       if(logicArray[height1-1][width1-2]==="1"){
           neighbors++;
       }
       if(logicArray[height1-2][width1-2]==="1"){
           neighbors++;
       }
       if(logicArray[height1-2][width1-1==="1"]){
           neighbors++;
       }
   }
     //Top Right Corner
  else if(x===0 && y===width1-1){
       if(logicArray[height1-1][0]==="1"){
           neighbors++;
       }
       if(logicArray[0][0]==="1"){
           neighbors++;
       }
       if(logicArray[1][0]==="1"){
           neighbors++;
       }
       if(logicArray[height1-1][width1-1]==="1"){
           neighbors++;
       }
       if(logicArray[height1-1][width1-2]==="1"){
           neighbors++;
       }
       if(logicArray[0][width1-2]==="1"){
           neighbors++;
       }
       if(logicArray[1][width1-2]==="1"){
           neighbors++;
       }
       if(logicArray[1][width1-1]==="1"){
           neighbors++;
       }
   }
   else {
//We need to check every single opption in every case !!!
    //Top Row corners excluded
    if(x===0){
       if(logicArray[height1-1][y]==="1"){
           neighbors++;
       }
       if(logicArray[height1-1][y-1]==="1"){
           neighbors++;
       }
       if(logicArray[height1-1][y+1]==='1'){
           neighbors++
       }
       if(logicArray[0][y+1]==="1"){
           neighbors++;
       }
       if(logicArray[0][y-1]==="1"){
           neighbors++;
       }
       if(logicArray[1][y-1]==="1"){
           neighbors++;
       }
       if(logicArray[1][y]==="1"){
           neighbors++;
       }
       if(logicArray[1][y+1]==="1"){
           neighbors++;
       }
   }
   //Bottom row Borders excluded
   else if(x===height1-1){
       if(logicArray[0][y]==='1'){
           neighbors++;
       }
       if(logicArray[0][y+1]==="1"){
           neighbors++;
       }
       if(logicArray[0][y-1]==="1"){
           neighbors++;
       }
       if(logicArray[height1-1][y+1]==="1"){
           neighbors++;
       }
       if(logicArray[height1-1][y-1]==="1"){
           neighbors++;
       }
       if(logicArray[height1-2][y]==="1"){
           neighbors++;
       }
       if(logicArray[height1-2][y+1]==="1"){
           neighbors++;
       }
       if(logicArray[height1-2][y-1]==="1"){
           neighbors++;
       }
   }
   //Left side row corners excluded
   if(y===0){
       if(logicArray[x][width1-1]==="1"){
           neighbors++;
       }
       if(logicArray[x-1][width1-1]==="1"){
           neighbors++;
       }
       if(logicArray[x+1][width1-1]==="1"){
           neighbors++;
       }
       if(logicArray[x+1][0]==="1"){
           neighbors++;
       }
       if(logicArray[x-1][0]==="1"){
           neighbors++;
       }
       if(logicArray[x][1]==="1"){
           neighbors++;
       }
       if(logicArray[x-1][1]==="1"){
           neighbors++;
       }
       if(logicArray[x+1][1]==='1'){
           neighbors++;
       }
   }
   //right side row borders excluded
   if(y===width1-1){
       if(logicArray[x][0]==="1"){
           neighbors++;
       }
       if(logicArray[x+1][0]==="1"){
           neighbors++;
       }
       if(logicArray[x-1][0]==="1"){
           neighbors++;
       }
       if(logicArray[x-1][width1-1]==="1"){
           neighbors++;
       }
       if(logicArray[x+1][width1-1]==="1"){
           neighbors++;
       }
       if(logicArray[x][width1-2]==="1"){
           neighbors++;
       }
       if(logicArray[x-1][width1-2]==="1"){
           neighbors++;
       }
       if(logicArray[x+1][width1-2]==="1"){
           neighbors++;
       }
   }
   }
  
}

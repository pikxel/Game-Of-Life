var interval=800;   //Default interval
var width1=0; 
var height1=0;
var logicArray=[];
var logicArrayCopy=[]; //We have to use a copy of the array, becaue if we edit the real array when checking we will get uncorrect results
var logicArrayChild=[];
var generations=0;
$( document ).ready(function() {
   for(var i=0;i<height1;i++)
   {
       for(var k=0;k<width1;k++)
       {
         var luck = Math.random() < 0.8;
         if(luck===true){
         logicArrayChild.push("0");
         }
         else 
         logicArrayChild.push("1");
       }
    logicArray.push(logicArrayChild);
    logicArrayCopy.push(logicArrayChild);
    logicArrayChild=[];
   }
   
   for(var i=0;i<height1;i++)
   {
       for(var k=0;k<width1;k++)
       {
          if(logicArray[i][k]==="1")
          {
              $("#"+i+"S"+k).addClass('alive');
          }
       }
   }
});

function setUp(){
     for(var i=0;i<height1;i++)
   {
       for(var k=0;k<width1;k++)
       {
          if(logicArray[i][k]==="1")
          {
          
          $("#"+i+"S"+k).addClass('alive');
          }
          if(logicArray[i][k]==="0")
          {
            $("#"+i+"S"+k).removeClass('alive');
          }
       }
   }
}

function setUpBoardLogic(){
logicArray=[];
 for(var i=0;i<height1;i++)
   {
       for(var k=0;k<width1;k++)
       {
         var luck = Math.random() < 0.8;
         if(luck===true){
         logicArrayChild.push("0");
         }
         else 
         logicArrayChild.push("1");
       }
    logicArray.push(logicArrayChild);
    logicArrayCopy.push(logicArrayChild);
    logicArrayChild=[];
   }
}


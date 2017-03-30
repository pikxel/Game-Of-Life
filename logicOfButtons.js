function Pause () {
   clearInterval(run);
   runWasClicked=false;
}
function Clear () {
    clearInterval(run);
    runWasClicked=false;
    logicArrayChild=[];
    logicArrayCopy=[];
    logicArray=[];
    generations=0;
    for(var i=0;i<height1;i++)
   {
       for(var k=0;k<width1;k++)
       {
         logicArrayChild.push("0");
       }
    logicArray.push(logicArrayChild);
    logicArrayCopy.push(logicArrayChild);
    logicArrayChild=[];
   }
    for(var i=0;i<height1;i++){
        for(var k=0;k<width1;k++){
             $("#"+i+"S"+k).removeClass('alive');
        }
    }

}

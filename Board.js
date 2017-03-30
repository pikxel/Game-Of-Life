var React = require('react');
var ReactDom = require('react-dom');
var BottomMenu = require('./bottomMenu.js')

var array1=[];
var array2=[];
var Board = React.createClass({
  getInitialState: function (){
      width1=50; //This variable is used in the logic to generate the array 
      height1=30;
      return ({width:50 , height:30, sideDiv:"col-sm-30", mainDiv:"col-sm-140",generations:0})
  },
  UpdateMainDiv: function (k){
      var d="col-sm-"+k;
      this.setState({mainDiv:d});
  },
  UpdateSideDiv: function (k){
      var d="col-sm-"+k;
      this.setState({sideDiv:d});
  },
  UpdateHeight: function (k){
      height1=k;
      this.setState({height:k});
  },
  UpdateWidth: function (k){
      width1=k;
      this.setState({width:k});
      setUpBoardLogic();
      setUp(); //if not his, the classes are not removed if you change the board
  },
  changeCell: function (k) {
     var d=k.target.id;
     d=d.split('S');
     var x=d[0];
     var y=d[1];
     logicArray[x][y] == "0" ? logicArray[x][y]="1" : logicArray[x][y]="0";
     setUp();
  },
  updateGenerations: function () {
      console.log("indse");
  },
    render: function () {      
        array1.length=0; //When changing the map size the old one has to be removed before rendering the new one
        array2.length=0;
        //Making uniqe id's so after we can access it easily  
        for(var i=0;i<this.state.height;i++)
        {
            for(var k=0;k<this.state.width;k++)
            {
            array1.push(<div key ={"row"+i+"colum"+k} className="colum col-xs-5ths" id={i+"S"+k} onClick={this.changeCell}></div>)
            }
        array2.push( <div key={"row"+k} className="row">{array1}</div>);
        }        
        return (
            <div>
            <div className={this.state.sideDiv}></div>
            <div id="realBoard" className={this.state.mainDiv}>
                <div className="row">{array1}</div>
            </div>
            <div className={this.state.sideDiv}></div>
            <BottomMenu  UpdateWidth={this.UpdateWidth} UpdateSideDiv={this.UpdateSideDiv} UpdateHeight={this.UpdateHeight} UpdateMainDiv={this.UpdateMainDiv}/>
            </div>
            
        )
    }
})

ReactDom.render(<Board />,document.getElementById("board"));

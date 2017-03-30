var React = require('react');
var ReactDOM = require('react-dom');


var BottomMenu = React.createClass({
    changeBoardSize1: function ()
    {
      Clear();
      $(".col-xs-5ths").css("width","2%");
      $(".col-xs-5ths").css("height","19px");
      this.props.UpdateMainDiv(140);
      this.props.UpdateSideDiv(30);
      this.props.UpdateHeight(30);
      this.props.UpdateWidth(50);

    },
    changeBoardSize2: function ()
    {
      Clear();
      $(".col-xs-5ths").css("width","1.25%");
      $(".col-xs-5ths").css("height","13px");
      this.props.UpdateMainDiv(150);
      this.props.UpdateSideDiv(25);
      this.props.UpdateHeight(50);
      this.props.UpdateWidth(80);
   
    },
    changeBoardSize3: function ()
    {
      Clear();
      $(".col-xs-5ths").css("width","1.00%");
      $(".col-xs-5ths").css("height","13px");
      this.props.UpdateMainDiv(180);
      this.props.UpdateSideDiv(10);
      this.props.UpdateHeight(80);
      this.props.UpdateWidth(100);

    },
    setInterval: function (k){
       interval=k;
       runWasClicked=false;
       console.log(interval);
       clearInterval(run);
       Start();
    },
    render: function (){
        return (
            <div className="row">
               <div className="col-sm-50"></div>
               <div className="col-sm-100 bottomMenuJS">
                   <div className="row  ">
                      <div className="col-sm-80 text-center">
                         <h4>Board Size</h4>
                      </div>
                      <div className="col-sm-40">
                         <button onClick={this.changeBoardSize1} className=" TopMenuButtonsAdjust btn btn-default" id="bottomMenuButton" type="button">50X30</button>
                      </div>
                      <div className="col-sm-40">
                         <button onClick={this.changeBoardSize2} className=" TopMenuButtonsAdjust btn btn-default" id="bottomMenuButton" type="button">80X50</button>
                      </div>
                      <div className="col-sm-40">
                         <button onClick={this.changeBoardSize3} className=" TopMenuButtonsAdjust btn btn-default" id="bottomMenuButton" type="button">100X60</button>
                      </div>
                   </div>
                   <div className="row secondRowBottomMenu">
                       <div className="col-sm-80 text-center" >
                            <h4>Speed</h4>
                       </div>
                       <div className="col-sm-40">
                           <button onClick={() => this.setInterval(800)} type="button"  className="  TopMenuButtonsAdjust btn btn-default  " id="bottomMenuButton">Slow</button>
                       </div>
                       <div className="col-sm-40">
                           <button onClick={() => this.setInterval(300)} type="button" className="  TopMenuButtonsAdjust btn btn-default " id="bottomMenuButton">Medium</button>
                       </div>
                       <div className="col-sm-40">
                           <button onClick={() => this.setInterval(100)}type="button" className=" TopMenuButtonsAdjust btn btn-default" id="bottomMenuButton">Fast</button>
                       </div>
                   </div>
               </div>
               <div className="col-sm-50"></div>
            </div>
        )
    }
});

module.exports=BottomMenu;

var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./Board');
var BottomMenu = require('./bottomMenu.js')

  var Main = React.createClass({
    
    render: function(){
      return(
       <div className="row">
          <br /> <br /> <br />
          <div className="col-sm-50"></div>
          <div className="col-sm-100" id="TopMenu">
           <div className="row">
               <div className="col-sm-40">
                  <button onClick={Start} className=" TopMenuButtonsAdjust btn btn-default Run " type="button">Run</button>
               </div>
               <div className="col-sm-40">
                  <button onClick={Pause} className="TopMenuButtonsAdjust btn btn-default Pause" type="button">Pause</button>
               </div>
               <div className="col-sm-40">
                  <button onClick={Clear} className="TopMenuButtonsAdjust btn btn-default Clear" type="button">Clear</button>
               </div>
               <div className="col-sm-80">
                  <h4 id="counter" >Generations: 0</h4>
               </div>
           </div>
          </div>
          <div className="col-sm-50"></div>
       </div>         
      )
    }
  });

  ReactDOM.render(<Main />, document.getElementById('headerMenu'))

  

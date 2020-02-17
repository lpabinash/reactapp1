import React,{ Component } from 'react';
import classes from'./counter.module.css';
// import Box from './VideoCardComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faheartbeat } from '@fortawesome/free-solid-svg-icons'


class CounterCount extends Component{
  // constructor(props) {
  //   super(props);
    state= {
      
      clock: 300,
      heart: 0,
        redband: 0,
        blueband: 0,
        blackband: 0,
        purpleband: 0
      
    
    }
   


    gettingTime = setInterval(() => {
     var a=new Date().getHours();
     var b=new Date().getMinutes();
     var c=new Date().getSeconds();
     if(c<10){
       c="0"+c;
     }
     if(b<10){
      b="0"+b;
    }
    if(a<10){
      a="0"+a;
    }
           this.setState({time:a +":" + b + ":" + c})
      // console.log(new Date().getHours() +":" + new Date().getMinutes() + ":" + new Date().getSeconds());
  }, 1000);
  // this.setState();
  // };
//   state={
//     clicked: true
//   }
// onRedclick = () =>{
//   this.setState({index:2000})
// }
// onblueclick = () =>{
//   this.setState({index:2000})
//   this.setState({rst:100})
// }




 
  onRedclick=()=>{
    this.setState({redband: 200});
    this.setState({blueband: 0});
    this.setState({blackband: 0});
    this.setState({purpleband: 0});
  }
  onblueclick=()=>{
    this.setState({redband: 0});
    this.setState({blueband: 200});
    this.setState({blackband: 0});
    this.setState({purpleband: 0});
    
  
}
onblackclick=()=>{
  this.setState({redband: 0});
  this.setState({blueband: 0});
  this.setState({blackband: 200});
  this.setState({purpleband: 0});
  

}
onpurpleclick=()=>{
  this.setState({redband: 0});
  this.setState({blueband: 0});
  this.setState({blackband: 0});
  this.setState({purpleband: 200});
  

}

timebtnClick=()=>{
  this.setState({clock: 300});
  this.setState({heart: 0});
}
heartrateClick=()=>{
  this.setState({clock: 0});
  this.setState({heart: 300});
}




    // const videoCard= mArr.map((elem)=>{
      render() {
        
        // const classNam = this.state.clicked ? 'click-state' : 'base-state';

        return(
        
          
          <div className={classes.maindiv}>
            {/* <script src="https://kit.fontawesome.com/35c398e458.js" crossorigin="anonymous"></script> */}
            <div className={classes.topbar}>
              <img className={classes.amazon} src="https://i.imgur.com/oxzU1bk.png"/>
              {/* <div className = {classes.fullWidth}></div> */}
              
            </div>
        <div style={{zIndex:this.state.clock}} className={classes.time1}><h1>{this.state.time}</h1>
            </div>
            <div style={{zIndex:this.state.heart}} className={classes.heart}><p className={classes.beats}>73</p>
            <i className={classes.iconwrapper} className="fas fa-heartbeat fa-5x"></i>
              {/* <FontAwesomeIcon className={classes.iconwrapper} icon="faheartbeat" /> */}
              
            </div>
            <section className={classes.all}>
            <div className={classes.watch}>
            <img className={classes.red} style={{zIndex:this.state.redband}} src="https://i.imgur.com/PTgQlim.png"/>
            <img className={classes.blue} style={{zIndex:this.state.blackband}} src="https://i.imgur.com/iOeUBV7.png"/>
            <img className={classes.black} style={{zIndex:this.state.purpleband}} src="https://i.imgur.com/xSIK4M8.png"/>
            <img className={classes.purple} style={{zIndex:this.state.blueband}} src="https://i.imgur.com/Mplj1YR.png"/>
            </div>
            <div className={classes.details}>
            <h1>FitBit 19 - The Smartest Watch</h1>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <br/>
            <h1>Select Color</h1>
            <div className={classes.colors}>
              <div className={classes.redband} onClick={this.onRedclick}></div>
              <div className={classes.blueband} onClick={this.onblueclick}></div>
              <div className={classes.blackband} onClick={this.onblackclick}></div>
              <div className={classes.purpleband} onClick={this.onpurpleclick}></div>
              </div>
            <h2>Features</h2>
              <div className={classes.features}>
                <div className={classes.timebtn} onClick={this.timebtnClick}>Time</div>
                <div className={classes.heartrate} onClick={this.heartrateClick}>Heart Rate</div>
              </div>
              <button className={classes.btn}>BUY NOW</button>
            
            </div>
            </section>
          </div>
          
  
          
        );
      }
      

    }  


export default CounterCount;




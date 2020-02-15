import React,{ Component } from 'react';
import classes from'./counter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faheartbeat } from '@fortawesome/free-solid-svg-icons'


class CounterCount extends Component{
  constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the date time
      date: '',
    };
  }
  
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.setState(),
      1000
    );
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    this.setState({
      //Setting the value of the date time
      date:hours + ':' + min + ':' + sec,
    });
  };
  state={
    clicked: true
  }
  onRedclick=()=>{
    // this.setState({count:this.state.count+1})
    classes.red.style.zIndex="100";
    classes.blue.style.zIndex="10";
    classes.black.style.zIndex="11";
    classes.purple.style.zIndex="12";
    // this.setState(/{clicked: true});
    // this.state.count++;
    // console.log(this.state.count)
  }
  onblueclick=()=>{
    this.setState({clicked: true});
    
  
}
onblackclick=()=>{
  this.setState({clicked: true});
  

}
onpurpleclick=()=>{
  this.setState({clicked: true});
  

}



    // const videoCard= mArr.map((elem)=>{
      render=()=>{
        
        const classNam = this.state.clicked ? 'click-state' : 'base-state';

        return(
        
          
          <div className={classes.maindiv}>
            {/* <script src="https://kit.fontawesome.com/35c398e458.js" crossorigin="anonymous"></script> */}
            <div className={classes.topbar}>
              <img className={classes.amazon} src="https://i.imgur.com/oxzU1bk.png"/>
              {/* <div className = {classes.fullWidth}></div> */}
              
            </div>
        <div className={classes.time1}><h1>{this.state.date}</h1>
            </div>
            {/* <div className={classes.heart}><p className={classes.beats}>73</p>
              <FontAwesomeIcon className={classes.iconwrapper} icon="faheartbeat" />
              
            </div> */}
            <section className={classes.all}>
            <div className={classes.watch}>
            <img className={classes.red} src="https://i.imgur.com/PTgQlim.png"/>
            <img className={classes.blue} src="https://i.imgur.com/iOeUBV7.png"/>
            <img className={classes.black + ' ' + classNam} src="https://i.imgur.com/xSIK4M8.png"/>
            <img className={classes.purple + ' ' + classNam} src="https://i.imgur.com/Mplj1YR.png"/>
            </div>
            <div className={classes.details}>
            <h1>FitBit 19 - The Smartest Watch</h1>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <br/>
            <h1>Select Color</h1>
            <div className={classes.colors}>
              <div className={classes.redband} onclick={this.onRedclick}></div>
              <div className={classes.blueband} onclick={this.onblueclick}></div>
              <div className={classes.blackband} onclick={this.onblackclick}></div>
              <div className={classes.purpleband} onclick={this.onpurpleclick}></div>
              </div>
            <h2>Features</h2>
              <div className={classes.features}>
                <div className={classes.timebtn}>Time</div>
                <div className={classes.heartrate}>Heart Rate</div>
              </div>
              <button className={classes.btn}>BUY NOW</button>
            
            </div>
            </section>
          </div>
          
  
          
        );
      }
      

    
}

export default CounterCount;




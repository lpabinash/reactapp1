import React,{ Component } from 'react';
import Axios from 'axios';
class Card extends Component{
    state={

    }
    componentDidMount(){
        Axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist')
        .then(response=>{
            console.log(response.data);
        })
    }
      render=()=>{
          return(
              <div> </div>
          )
      }
      }
      export default Card;
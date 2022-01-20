import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

let money = 150;
let cards = Array(53).fill(0);

const Status = () =>{
    let bet = 0;
    let unit = 15;

    return(
        <div style={{width: "94vw", height:"300px", textAlign: "center", margin: "3rem" }}>
            Money ${money}
            <br/>
            Bet ${bet}
            <br/>
            <button>+</button>
            <button>-</button>
            <br/>
            <button style={{float:"left"}}>+</button>
            <br/>
            <div style={{float:"left", margin: "0", position: "relative", left: "-25px"}}> Unit ${unit}</div>
            <br/>
            <button style={{float: "left"}}>-</button>
        </div>
    );

}

const Dealer = () =>{

}

const Player = () =>{


}

const Game = () =>{

    return(
        <div>
            <Status/>
            {/*<Dealer/>*/}
            {/*<Player/>*/}
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <Game />
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

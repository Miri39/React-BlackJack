import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

let money = 150;
const sympol = ["spades", "clubs", "hearts", "diamonds"];
//let cards = Array(53).fill(0);

const DrawCard = () =>{
    return Math.floor((Math.random() * 100) % 52)
}

const Status = () =>{
   let [bet, setBet] = useState(0);
   let [unit, setUnit] = useState(15);

   const addBet = () =>{
       console.log("addBet");
       if((bet + unit) > money)
       {

           setBet(money);
       }
       else
       {
           setBet(bet + unit);
       }
   }

    const subtractBet = () =>{
        console.log("subtractBet");
        if((bet - unit) < 0)
        {
            setBet(0);
        }
        else
        {
            setBet(bet - unit);
        }
    }

    const subtractUnit = () => {
        console.log("subtractUnit");
        if((unit - 5) <= 0)
        {
            setUnit(5);
        }
        else
        {
            setUnit(unit - 5);
        }
    }
    const addUnit = () =>{
       setUnit(unit + 5);
    }

    return(
        <div style={{width: "94vw", height:"300px", textAlign: "center", margin: "3rem" }}>
            Money ${money}
            <br/>
            Bet ${bet}
            <br/>
            <button onClick={addBet}>+</button>
            <button onClick={subtractBet}>-</button>
            <br/>
            <button style={{float:"left"}} onClick={addUnit}>+</button>
            <br/>
            <div style={{float:"left", margin: "0", position: "relative", left: "-25px"}}> Unit ${unit}</div>
            <br/>
            <button style={{float: "left"}} onClick={subtractUnit} >-</button>
        </div>
    );

}

const Dealer = () =>{
    let d = [DrawCard()];
    let [dealerCards, setDealerCards] = useState(d);



    return(
        <div className={"cards"}>
            {dealerCards.map(x => <div key={x} className={"card"}>{sympol[x % 4]}  {1 + Math.floor(x / 4)} {sympol[x % 4]}</div>)}
            <div className={"turnedCard"}>B</div>
        </div>
    )
    ;
}

const Player = () =>{

    let [playerCards, setPlayerCards] = useState([DrawCard(), DrawCard()]);
    let d = playerCards;
    const hit = () => {
      d.push(DrawCard());
      setPlayerCards([...d]);
      console.log(playerCards);

    }
    const finish = () =>{

    }

    return(
        <div>
        <div className={"cards"}>
            {playerCards.map(x => <div key={x*DrawCard()} className={"card"}>{sympol[x % 4]}  {1 + Math.floor(x / 4)} {sympol[x % 4]}</div>)}

        </div>
            <div className={"cards"}>
            <button onClick={hit}>Hit</button>
            <button>Finish</button>
            </div>
        </div>
    )
        ;

}

const Game = () =>{

    return(
        <div>
            <Status/>
            <Dealer/>
            <Player/>
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
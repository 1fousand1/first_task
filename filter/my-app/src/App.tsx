import React, {useState} from 'react';
import './App.css';
import { MouseEvent } from 'react';
import NewComponent from "./NewComponent";



function App() {
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])


/*    const[filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money
    if (filter === 'ruble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "ruble");
    }

    if (filter === 'dollar') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "dollar");
    }


    const onClickFilterHandler=(nameButton:FilterType)=>{
        setFilter(nameButton)
    }*/

    return (
        <>
            <NewComponent money={money}/>
{/*            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>&nbsp;
                            <span>{objFromMoneyArr.nominal}</span>&nbsp;
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickFilterHandler('all')}>all</button>
                <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickFilterHandler('ruble')}>rubles
                </button>
                <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickFilterHandler('dollar')}>dollars
                </button>
            </div>*/}
        </>

    );
}

export default App;

import {useState} from "react";
import { MouseEvent } from 'react';


type FilterType = 'ALL'|'Dollars'|'RUBLS'

type NewComponentType ={
    money: MoneyType[]
}
type MoneyType = {
    banknots :string,
    value: number,
    number: string;
}

const NewComponent = (props:NewComponentType) =>
{
    const [filter, setFilter] = useState<FilterType>('ALL')

    let currentMoney = props.money
    if (filter === 'RUBLS') {
        currentMoney = props.money.filter((filteredMoney) => filteredMoney.banknots === "RUBLS");
    }

    if (filter === 'Dollars') {
        currentMoney = props.money.filter((filteredMoney) => filteredMoney.banknots === "Dollars");
    }

    const onClickFilterHandler=(nameButton:FilterType)=>{
        setFilter(nameButton)
    }
    return (
        <div>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>&nbsp;
                            <span>{objFromMoneyArr.value}</span>&nbsp;
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft:'35px'}}>
                <button onClick={(event:MouseEvent<HTMLButtonElement> ) =>onClickFilterHandler('ALL')}>all</button>
                <button onClick={(event:MouseEvent<HTMLButtonElement> ) =>onClickFilterHandler('RUBLS')}>RUBLS</button>
                <button onClick={(event:MouseEvent<HTMLButtonElement> ) =>onClickFilterHandler('Dollars')}>dollars</button>
            </div>
        </div>
    );
};

export default NewComponent;
import React, {MouseEvent, useState} from 'react';

type FilterType = 'all'|'dollar'|'ruble'

type NewComponentType ={
    money: MoneyType[]
}
type MoneyType = {
    banknote:string,
    nominal: number,
    number: string;
}

const NewComponent = (props:NewComponentType) =>
{
    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = props.money
    if (filter === 'ruble') {
        currentMoney = props.money.filter((filteredMoney) => filteredMoney.banknote === "ruble");
    }

    if (filter === 'dollar') {
        currentMoney = props.money.filter((filteredMoney) => filteredMoney.banknote === "dollar");
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
                            <span>{objFromMoneyArr.banknote}</span>&nbsp;
                            <span>{objFromMoneyArr.nominal}</span>&nbsp;
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft:'35px'}}>
                <button onClick={(event:MouseEvent<HTMLButtonElement> ) =>onClickFilterHandler('all')}>all</button>
                <button onClick={(event:MouseEvent<HTMLButtonElement> ) =>onClickFilterHandler('ruble')}>rubles</button>
                <button onClick={(event:MouseEvent<HTMLButtonElement> ) =>onClickFilterHandler('dollar')}>dollars</button>
            </div>
        </div>
    );
};

export default NewComponent;
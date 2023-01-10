import React from 'react';


type NewComponentType = {
    //topCars: Array<TopCarsType>
    topCars: TopCarsType[] //тождествнные записи с верхней
}

type TopCarsType = {
    manufacturer: string,
    model: string

}

const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.topCars.map((objectFromTopCarsArray, index) => {
                return (
                    <table key={index}>
                        <tr>{++index}&nbsp;{objectFromTopCarsArray.manufacturer}
                            <th>{objectFromTopCarsArray.model}</th>
                        </tr>
                    </table>
                )
            })}
        </ul>

    );
};

export default NewComponent;
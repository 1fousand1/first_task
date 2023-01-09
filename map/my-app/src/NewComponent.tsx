import React from 'react';
import newComponent from "./NewComponent";

type NewComponentType={
    /*students: Array<StudentType>*/
    students:StudentType[]
}

type StudentType ={
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props:NewComponentType) => {
    return (
        <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
        </ul>
    );
};

export default NewComponent;

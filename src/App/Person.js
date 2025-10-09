// Person.js
import React from "react";
import classNames from 'classnames';

function Person(props) {
    const personClasses = classNames('person', { 'erwachsen': props.age >= 18 });
    return (
        <div className="card">
            <h2 className="card-header">{props.name}</h2>
            <div className="card-body">
                <p>Alter: {props.age}</p>
                <p>Beruf: {props.occupation}</p>
            </div>
        </div>
    );
}
export default Person;

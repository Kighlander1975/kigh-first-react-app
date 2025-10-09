// MyComponent.js
import React from 'react';

function MyComponent(props) {
    const { name, age, gender } = props;
    
    let greeting;
    let realTalk;
    
    if (name) {
        let compliment = "";
        if (gender === "m") {
            compliment = ", du strammer Bursche.";
        } else {
            compliment = ", du hübsches Ding.";
        }
        
        greeting = <h2>Hallo {name}{compliment}</h2>;
        realTalk = <p>Wie alt bist du schon? {age}?? Wow, wie die Zeit vergeht...</p>;
    } else {
        greeting = <h2>Hey, Unbekannter!</h2>;
        realTalk = <p>Nächstes Mal stellst Du dich gefälligst vor!</p>;
    }
    
    return (
        <div>
            {greeting}
            {realTalk}
        </div>
    );
}

export default MyComponent;
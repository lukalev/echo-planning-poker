import React from 'react';

export default function StoriesListItem(props) {
    const {item} = props;
    const fibonacci = [1, 2, 3, 5, 8, 13, 20, 40, 100];
    let avgText;
    if (item.values.length>0)
    {
        if (item.values.find(e => e === -1))
            avgText = 'i';
        else if (item.values.find(e => e === -2))
            avgText = 'u';
        else
        {
            let sum = item.values.reduce(function(a, b) { return a + b; }, 0)/item.values.length;
            let avg = fibonacci.find(e => e >= sum);
            avgText = avg;
        }
        avgText=<span>{avgText}</span>
    }
    return (
        <li key={item.id} className="todo-item ui-state-default">
            <div className="story">
                {item.text} 
                {avgText}
            </div>
        </li>
    );
}

import React from 'react';

const convertToJSX = (insert) => {
    /*if (insert.type === 'h2') {
        return <h2>{insert.content}</h2>
    } else {
        return <p>{insert.content}</p>
    }*/
    let JSX;
    switch (insert.type) {
        case 'h1':
            JSX = <h1>{insert.content}</h1>;
        break;
        case 'h2':
            JSX = <h2>{insert.content}</h2>;
        break;
        case 'h3':
            JSX = <h3>{insert.content}</h3>;
        break;
        case 'h4':
            JSX = <h4>{insert.content}</h4>;
        break;
        case 'p':
            JSX = <p>{insert.content}</p>;
        break;
        case 'li':
            JSX = <p className="listItem">{insert.content}</p>;
        break;
        default:
            JSX = <p>{insert.content}</p>;
        break;
    }
    if(JSX) return JSX
    else return 'error';
}
export default convertToJSX;
const checkIfCorrectNumberType = (someArgument) => {
    if(isNaN(someArgument) || someArgument === "" || typeof someArgument === "object")
        return false;

    return true;
}

const convertStringToNumber = () => {
    let input = prompt(`Provide number: `)
    while(!checkIfCorrectNumberType(input)){
        input = prompt(`Incorrect "${input}" number, try again: `)
    }
    return parseInt(Math.round(input));
}

const checkNumber = (number) => {
    if(number % 2 === 0)
        return even(number);
    return odd(number)
}

const even = (number) => {
    return number;
}

const odd = (number) => {
    return number * 2;
}

const sendResponseToConsole = (number, response) => {
    console.log(`Given Number: ${number}`);
    console.log(`Response: ${response}`)
}

const sendResponseToHTML = (number, response) => {
    document.body.innerHTML = `        
        <p>Given Number: ${number}</p>
        <p>Response: ${response}</p>
    `;
};

const main = () => {
    const number = convertStringToNumber();
    const response = checkNumber(number);

    sendResponseToConsole(number, response);
    sendResponseToHTML(number, response);
}

main();
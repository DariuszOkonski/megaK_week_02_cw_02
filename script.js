const checkIfCorrectNumberType = (someArgument) => {
    if(isNaN(someArgument) || someArgument === "" || typeof someArgument === "object")
        return false;

    return true;
}

console.log("hello world");
let min  = (val1, val2) =>{
    return val1 < val2 ? val1 : val2;
}

console.log(min(2,32))


let isEven = (num) => {
    if(num==0){
        return "even"
    }
    else if (num == 1 ) {
        return "odd"
    }
    else {
        return isEven(num - 2)
    }
}

//console.log(isEven(21))

let countB = (str) => {
    count = 0;
    for(letter of str){
        if (letter == "B"){
            count ++;
        }
    }
    return count;
}

//console.log(countB("BBBbbbBBB"))

let countChar  = (str, char) =>{

    count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] == char){
            count ++
        }
    }

    return count;
}
//console.log(countChar("BBBbbbBBB","b"))




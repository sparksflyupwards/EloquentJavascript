let range = (start, end, step)=>{
    let ary = [];

    for(let i= start; i<=end; i+=step){
        ary.push(i)
    }
    return ary;
}

let sum = (ary)=>{
    count = 0;
    for(let i =0; i<ary.length; i++){
        count += ary[i]
    }

    return count;
}

//console.log(sum(range(1,10,1)))


let reverseArray = (ary) =>{

    let reveresedAry = [];
    for(let i = ary.length-1; i>=0; i--){
        reveresedAry.push(ary[i])
    }
    return reveresedAry;

}

let reverseInPlaceWorker = (ary, i,j) =>{
    
    if (i >= j ){
        return ary;
    } 
    else {
        let bucket = ary[i];
        ary[i] = ary[j];
        ary[j] = bucket;
        i += 1;
        j -= 1;
        return reverseInPlaceWorker(ary, i, j)
    }
}

let reverseAryInPlace = (ary) =>{
    
    console.log(reverseInPlaceWorker(ary,0,ary.length-1));
    return ary
}

//console.log(reverseArray([1,2,3,4]))
//console.log(reverseAryInPlace([1,2,3]))

let arrayToList = (ary) =>{
    let list = {value: undefined, rest: undefined};
    if(ary.length>=1){
       
        for(let i = 0; i < ary.length; i++){
            list.value = ary.splice(0, 1)[0];
            list.rest = (ary.length>=0) ? arrayToList(ary) : null
        }
    }
    
    return list
}

let listToArray = (list) => {
    let ary = [];

    while(list.rest != null){
        ary.push(list.value)
        list = list.rest;
    }

    return ary;
}

let prependWorker = (list, val, n, i) =>{
    console.log(i +" "+n)
    if(i>=n || list == undefined){
        newList = {value: val, rest: list}
        list = newList;
        return list;
    }
    return {value:list.value, rest:prependWorker(list.rest, val, n, i+1)}

}
let prepend = (list, value, n) =>{
    return prependWorker(list,value,n,0)
}
//console.log(listToArray(arrayToList([0,1,2,3])))
//console.log(listToArray(prepend(arrayToList([0,1,2,3]), 55, 2)))
let deepEqual = (x, y) =>{

    if(x === y){
        return true;
    }
    else if(typeof x == "object" && x != "null" && typeof y == "object" && y != "null") {
        xKeys = Object.keys(x)
        yKeys = Object.keys(y)

        if(xKeys.length != yKeys.length){
            return false;
        }
        
        for(property in x){
            if(y.hasOwnProperty(property)){
                if(! deepEqual(x[property], y[property])){
                    return false;
                }
            }
            else {
                return false;
            }
        }
        return true
        
    }
    else {
        return true;
    }
}
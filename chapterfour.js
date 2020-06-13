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
            list.rest = (ary.length>0) ? arrayToList(ary) : null
        }
    }
    
    return list
}

console.log(arrayToList([0,1,2,3]))
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

console.log(sum(range(1,10,1)))
var arr = [1,2,undefined,undefined,undefined,3];
arr.forEach((item,index)=>{
    if(item === undefined){
        console.log(index)
        arr.splice(index,1)
        index++
    }
})
console.log(arr)
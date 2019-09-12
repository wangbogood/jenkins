
let arr = [1,2,3,3,4,5,6,6,7,8,9,10];
function qq (arr){
    let res = [];
    arr.forEach((item,index)=>{
        arr.forEach((v,i)=>{
            if(index !== i){
                if(item+v === 10){
                    res.push({item,v,index,i})             
                }
            }
        })
    })
    return res.slice(res.length/2)
}

console.log(qq(arr))
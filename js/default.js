// function add(first, second){
//     console.log(first, second)
//     if(second === undefined){
//         second = 0 ;
//     }
//     const total = first + second ;
//     return total ;
// }

function add(first, second = 36){
    const total = first + second;
    return total ;
}
const result = add(10,) ;
console.log(result) ;

function fullname( first , last){
    const name = first + ' ' + last ;
    return name ;
}
const name = fullname('bappy', 'mahmud')
console.log(name) ;
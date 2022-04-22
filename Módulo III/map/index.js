// const maca = {
//     value: 2,
// }
//
// const laranja = {
//     value: 3,
// }
//
// function mapComThies(arr, thisArg) {
//     return arr.map(function(item){
//         return item * this.value;
//     }, thisArg)
// }
//
// const nums = [1, 2]
//
// console.log('this => maçã', mapComThies(nums, maca))
// console.log('this => laranja', mapComThies(nums, laranja))

function mapSemThis (arr) {
    return arr.map(function(item) {
        return item * 2
    })
}

const nums = [2, 4, 6, 8, 10]

console.log(mapSemThis(nums))

console.log(nums)
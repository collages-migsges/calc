const input1 = document.getElementById('in1')
const input2 = document.getElementById('in2')
const plus = document.getElementById('in3')
const res = document.getElementById('in4')
const min = document.getElementById('in5')
const vic = document.getElementById('in6')
let fun
plus.onclick = function() {
    fun = '+'
}
min.onclick = function() {
    fun = '-'
}
vic.onclick = function () {
if (fun == '+') {
    const sum = Number(input1.value) + Number(input2.value)
    res.textContent = sum
}
else {
    const minus = Number(input1.value) - Number(input2.value)
    res.textContent = minus
}
}



















// if (but.onclick) {but.onclick = function () {
// let res1 = Number(input1.value) + Number(input2.value)
// } }
// else(min.onclick) 
// {
// min.onclick = function () {
// let res1 = Number(input1.value) - Number(input2.value)
// } }
// let res2 = Number(res1)
// vichis.onclick = function() {
//     console.log(res1)
//     res.textContent = res2
// }

// but.onclick = function () {
//     const sum = Number(input1.value) + Number(input2.value)
//     console.log(sum)
//     res.textContent = sum
// }
// min.onclick = function () {
//     const minus = Number(input1.value) * Number(input2.value)
//     res.textContent = minus
// }


let clearbtn = document.getElementById("clear")
let equal = document.getElementById("equal")
let result = document.getElementById("result")
let delet = document.getElementById("delete")
let clearbtn_history = document.getElementById("button_c")
let history = document.getElementById("button_h")
let sin = document.getElementById("sin")
let cos = document.getElementById("cos")
let tan = document.getElementById("tan")
let seq = document.getElementById("sq")
let sqrt = document.getElementById("sqrt")
let inv = document.getElementById("inv")
let ln = document.getElementById("ln")


//Clear Function
function clear() {
    result.value = ''
}
clearbtn.addEventListener('click', clear)

// Answer Function
function result_ans() {
    if (result.value == '0/0') {
        result.value = 'Result is undefined'
    }
    else {
        history_ans();
        let result_final = eval(result.value)
        result.value = result_final
        result_final = null
        history_ans();
    }
}

//History Function
function history_ans() {
    let history = document.createElement("div")
    history.setAttribute('id', 'history_list')
    history.innerHTML = result.value.toString()
    document.getElementById("history").appendChild(history)
}
// equal.addEventListener('click', history_ans)
equal.addEventListener('click', result_ans)

//Delete Function
function dele() {
    let len_array = Array.from(result.value)
    let array_pop = len_array.pop()
    len_array = len_array.toString()
    for (let index = 0; index <= len_array.length; index++) {
        len_array = len_array.replace(',', '')
    }
    result.value = len_array
}
delet.addEventListener('click', dele)


//History Clear
function history_clear() {
    while (document.getElementById("history").firstChild) {
        document.getElementById("history").removeChild(document.getElementById("history").firstChild);
    }
}
clearbtn_history.addEventListener('click', history_clear)


//Histoy Show/Hide
function S_H() {
    let toggle = document.querySelector(".history")
    if (toggle.style.display === 'block') {
        toggle.style.display = 'none'
    }
    else {
        toggle.style.display = 'block'
    }
}
history.addEventListener('click', S_H)

sin.addEventListener('click', function () {
    history_ans();
    let val = Math.sin(result.value)
    result.value = val.toFixed(3)
    history_ans();
})

cos.addEventListener('click', function () {
    history_ans();
    let val = Math.cos(result.value)
    result.value = val.toFixed(3)
    history_ans();
})

tan.addEventListener('click', function () {
    history_ans();
    let val = Math.tan(result.value)
    result.value = val.toFixed(3)
    history_ans();
})

sqrt.addEventListener('click', function () {
    history_ans();
    let val = Math.sqrt(result.value)
    result.value = val.toFixed(2)
    history_ans();
})

inv.addEventListener('click', function () {
    history_ans();
    let val = 1 / result.value
    result.value = val.toFixed(2)
    history_ans();
})

ln.addEventListener('click', function () {
    history_ans();
    let val = Math.log(result.value)
    result.value = val.toFixed(4)
    history_ans();
})

seq.addEventListener('click', function () {
    history_ans();
    let val = result.value * result.value
    result.value = val.toFixed(1)
    history_ans();
})

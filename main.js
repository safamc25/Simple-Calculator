function display(num){
    // id.value=to get value
    output.value+=num;
}

function clearAll(){
    output.value=''
}

function evaluateExp(){
    output.value=eval(output.value)
}

function removeLast(){
    currentExp=output.value
    output.value=currentExp.slice(0,-1)
}
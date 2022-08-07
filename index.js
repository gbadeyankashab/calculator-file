let val;
let sign;
let val3;
let val1,val2,answer;
function vallue(number) {
    document.getElementById('show').innerHTML+=number
    let val3=Number(document.getElementById('show').innerHTML)
    if (sign) {
        val2=val3
    }
    else{
        val1=val3
    }
    
}
let input1;
let input2
function operator(operatorr) {
if (val1 && sign ) {
   

    equal()
    
    document.getElementById('show2').innerHTML=''
    document.getElementById('show').innerHTML=(answer)
 
    console.log(answer);
}
    sign=operatorr
    input1=Number(document.getElementById('show').innerHTML)
    document.getElementById('show2').innerHTML+=(input1+sign)



    input2=Number(document.getElementById('show2').innerHTML)
    if (operatorr){
        document.getElementById('show').innerHTML=''
    }
}



function equal(calculate) {

    
    let input=Number(document.getElementById('show').innerHTML)

    document.getElementById('show2').innerHTML+=(input+calculate)

    if (sign=='+'){
        answer=val1+val2
       Number( document.getElementById('show').innerHTML=answer)
  
    }
    else if (sign=='-'){
        answer=val1-val2
        document.getElementById('show').innerHTML=(answer)
    }
   else if (sign=='*'){
        answer=val1*val2
        document.getElementById('show').innerHTML=(answer)
    }
    else if (sign=='/'){
        answer=val1/val2
        document.getElementById('show').innerHTML=(answer)
    }

}


function remove() {
    val1=''
    val2=''
    answer=''
    sign=''
   document.getElementById('show').innerHTML=''
   document.getElementById('show2').innerHTML=''
   

}
function remove2() {
   document.getElementById('show').innerHTML=''
}

function del() {
    display=document.getElementById('show').innerHTML
   let delet=display.slice(0,-1)
    document.getElementById('show').innerHTML=delet
    // console.log(stri);
}

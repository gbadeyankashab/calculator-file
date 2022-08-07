let val;
let sign;
let val3;
let input1;
let input2;
let val1,val2,answer;

function displaynumbers(number) {
    document.getElementById('UI2').innerHTML+=number;
    let val3=Number(document.getElementById('UI2').innerHTML);
    if (sign) {
        val2=val3;
    }
    else{
        val1=val3;
    }
    
}
function operator(operatorr) {
if (val1 && sign ) {
    equal()
    document.getElementById('UI1').innerHTML='';
    document.getElementById('UI2').innerHTML=(answer);
    console.log(answer);
}
    sign=operatorr
    input1=Number(document.getElementById('UI2').innerHTML);
    document.getElementById('UI1').innerHTML+=(input1+sign);

    input2=Number(document.getElementById('UI1').innerHTML);
    if (operatorr){
        document.getElementById('UI2').innerHTML='';
    }
}



function calculateResults(calculate) {
    let input=Number(document.getElementById('UI2').innerHTML);
    document.getElementById('UI1').innerHTML+=(input+calculate);

    if (sign=='+'){
        answer=val1+val2
       Number( document.getElementById('UI2').innerHTML=answer);
  
    }
    else if (sign=='-'){
        answer=val1-val2
        document.getElementById('UI2').innerHTML=(answer);
    }
   else if (sign=='*'){
        answer=val1*val2
        document.getElementById('UI2').innerHTML=(answer);
    }
    else if (sign=='/'){
        answer=val1/val2
        document.getElementById('UI2').innerHTML=(answer);
    }

}

//the C button
function clearall() {
    val1=''
    val2=''
    answer=''
    sign=''
   document.getElementById('UI2').innerHTML='';
   document.getElementById('UI1').innerHTML='';
   

}

// the CE button
function cleardisplay() {
   document.getElementById('UI2').innerHTML='';
}

//fa fa-delete button
function deletebutton() {
    display=document.getElementById('UI2').innerHTML;
   let edit=display.slice(0,-1)
    document.getElementById('UI2').innerHTML=edit;
}

let sign;
let input;
let input1;
let input2;
let displays;
//display represents the number that is being displayed
let display,display1,display2,answer;

function displaynumbers(number) {
    document.getElementById('mainDisplay').innerHTML+=number;
    display=Number(document.getElementById('mainDisplay').innerHTML);
    if (sign) {
        display2=display;
    }
    else{
        display1=display;
    }
    
}
function operator(operatorr) {
if (display1 && sign ) {
    equal()
    document.getElementById('secondaryDisplay').innerHTML='';
    document.getElementById('mainDisplay').innerHTML=(answer);
    console.log(answer);
}
    sign=operatorr
    input1=Number(document.getElementById('mainDisplay').innerHTML);
    document.getElementById('secondaryDisplay').innerHTML+=(input1+sign);

    input2=Number(document.getElementById('secondaryDisplay').innerHTML);
    if (operatorr){
        document.getElementById('mainDisplay').innerHTML='';
    }
}



function calculateResults(calculate) {
    input=Number(document.getElementById('mainDisplay').innerHTML);
    document.getElementById('UI1').innerHTML+=(input+calculate);

    if (sign=='+'){
        answer=display1+display2
       Number( document.getElementById('mainDisplay').innerHTML=answer);
  
    }
    else if (sign=='-'){
        answer=display1-display2
        document.getElementById('mainDisplay').innerHTML=(answer);
    }
   else if (sign=='*'){
        answer=display1*display2
        document.getElementById('mainDisplay').innerHTML=(answer);
    }
    else if (sign=='/'){
        answer=display1/display2
        document.getElementById('mainDisplay').innerHTML=(answer);
    }

}

//the C button
function clearall() {
    val1=''
    val2=''
    answer=''
    sign=''
   document.getElementById('mainDisplay').innerHTML='';
   document.getElementById('secondaryDisplay').innerHTML='';
   

}

// the CE button
function cleardisplay() {
   document.getElementById('mainDispaly').innerHTML='';
}

//fa fa-delete button
function deletebutton() {
    displays=document.getElementById('mainDisplay').innerHTML;
    edit=displays.slice(0,-1)
    document.getElementById('mainDisplay').innerHTML=edit;
}

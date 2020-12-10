var output = document.getElementById('display-screen');

var keys = document.getElementsByClassName('key');

var expression = "";

var count = 0;

function clicked(ele){
    ele.addEventListener('click',function(){

        if(ele.innerText == 'AC'){
            expression = "";
            output.innerText = "0";
            count = 0;
            return;
        }
        else if(ele.innerText == '×'){
            // ×
            expression += '*';
        }
        else if(ele.innerText == '÷'){
            expression += '/';
        }
        else if(ele.innerText == '='){
            count = 3;
        }
        else if(ele.innerText == "."){
            expression += '.';
        }
        else if(ele.innerText == '+/-'){
            expression = eval(expression + "*(-1)");
        }
        else if(ele.innerText == '='){
            count = 3;
        }
        else if(ele.innerText == '%'){
            expression = eval(expression + "/100");
            expression += '*';
        }
        else{
            expression += ele.innerText;
        }

        
        output.innerText = expression;
        if(expression[expression.length - 1] != '.' && expression[expression.length - 1] < 48 && expression[expression.length - 1] > 57)count++;

        if(count == 3){
            console.log(expression);
            expression = eval(expression);
            if(expression != 'Infinity')output.innerText = expression.toPrecision(3);
            else output.innerText = 'Error';
            count = 1;
        }
    });
}

for(var i = 0 ; i < keys.length ; i++)
{
    clicked(keys[i]);
}







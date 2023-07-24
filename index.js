var display = document.getElementById("calcInput");                                                   //getting hold onto the input display
var clearAll = document.getElementById("ok");                                                         //for clear button

function num(number)                                                                                  //to display ex-1,2.... on input
{ 
  display.value += number;
}

function answer(){                                                                                     //to evaluate
    let n1 = display.value;
    let n2 = eval(n1);                                                                                 //eval -its is a predeifned js() that evaluate given expression!!!!!
    display.value = n2;
}

clearAll.addEventListener("click", function(){                                                          //removes everthing on input display
    display.value="";
});
 




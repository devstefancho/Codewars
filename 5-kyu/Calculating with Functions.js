/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/
function zero(operator)   {return calculator(0, operator);}
function one(operator)    {return calculator(1, operator);}
function two(operator)    {return calculator(2, operator);}
function three(operator)  {return calculator(3, operator);}
function four(operator)   {return calculator(4, operator);}
function five(operator)   {return calculator(5, operator);}
function six(operator)    {return calculator(6, operator);}
function seven(operator)  {return calculator(7, operator);}
function eight(operator)  {return calculator(8, operator);}
function nine(operator)   {return calculator(9, operator);}

function plus(num)      {return ['+', num]}
function minus(num)     {return ['-', num]}
function times(num)     {return ['*', num]}
function dividedBy(num) {if(num===0){console.error('cannot divide with zero')} return ['/', num]}

function calculator(num, oper) {
  if(oper) {
    switch (oper[0]) {
      case '+':  
        return num + oper[1];
      case '-':  
        return num - oper[1];
      case '*':  
        return num * oper[1];
      case '/':  
        return parseInt(num / oper[1]);
      default:
        return;
    }}
  return num;
}

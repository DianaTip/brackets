module.exports = function check(str, bracketsConfig) {
const open_brackets = ['(', '[', '{', '|', '1', '3', '5', '7', '8'];
const brackets_pair = {
  [')']: '(',
  [']']: '[',
  ['}']: '{',
  ['|']: '|',
  ['2']: '1',
  ['4']: '3',
  ['6']: '5',
  ['7']: '7',
  ['8']: '8',
};

let stack = [];
for (let i = 0; i < str.length; i ++)
{var currentSymbol = str[i]
/*if (currentSymbol = '|')
   { if (stack[stack.length - 1] === '|')
     {stack.pop()}
     else 
     {stack.push(currentSymbol)}}*/

   if (open_brackets.includes(currentSymbol))
    {stack.push(currentSymbol)}
    else {if (stack.length === 0)
          {return false}

    let topStack = stack[stack.length - 1];
  
      if (brackets_pair[currentSymbol] === topStack)
        {stack.pop()}
      else 
      {return false}
    }}

    if (stack.length === 0)
    {return true}
    else 
    {return false}
}

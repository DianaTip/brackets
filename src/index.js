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
const res = str.split('');
let stack = [];
const br = bracketsConfig.flat();
for (let i = 0; i < res.length; i ++)
{var currentSymbol = res[i]

  if (br.includes(currentSymbol))
     {if (open_brackets.includes(currentSymbol))
      {if ((currentSymbol === '|') || (currentSymbol === '7') || (currentSymbol === '8'))
      {if (stack[stack.length-1] === currentSymbol)   
          {stack.pop();}
      else
          {stack.push(currentSymbol);}
       }

  else
    {stack.push(currentSymbol) }}
else 
{if (stack.length === 0)
{return false}
else
  {let topStack = stack[stack.length - 1];
  if (brackets_pair[currentSymbol] === topStack)
    {stack.pop()}
  else 
    {return false}
  }
}        
}
else
{return false}
}
if (stack.length === 0)
{return true}
else 
{return false}
}

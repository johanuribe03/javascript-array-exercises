var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here

var mix2 = [];

for(let i=0; i<mix.length; i++){
  mix2.push(mix[i].typeOf());  
}

console.log(mix2);


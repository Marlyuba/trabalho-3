alert("Bem-vindo!");

let num = parseInt(prompt('Informe o valor'));
let tabuada = "";
for (let i=0;i<=10;i++){
		tabuada+= `${num} x ${i} = ${num*i} \n`;
}
alert(tabuada); 

let NumAlea = "";
for (let i = 0;i < 5; i++){
    NumAlea += Math.floor(Math.random()*10);
}
console.log(NumAlea);
while(true){
let str = prompt("Tente descobrir a senha \nDigite um numero! \nPara sair digite SAIR ");
if(str == "SAIR")break;
let indexOut = NumAlea.indexOf(str);
if(indexOut == -1){alert("X")};
if(indexOut == 0){alert("O")};
if(indexOut > 0){alert("'-'")};
console.log(indexOut);
}
/*
let condicao1 = true;

if (condicao1){

console.log(' entrei no if 1!');
}

let condicao2 = false;

if (condicao2){

    console.log('Entrei no if 2!');
}


function numeros (num1, num2){

    if (num1 === num2){
        return "sucesso"; 
    }
    
    }
   

console.log(
        numeros(
            Number(prompt("digite um numero")),
            Number(prompt("digite outro numero"))
        )
    );

 

    function dados (nome, idade){
        if(idade >= 18){
            return  nome + ", voce pode dirigir";

        }
    
    }
        console.log(
            dados(
                prompt("qual seu nome"),
                 (Number(prompt("qual a sua idade?"))

                )
                
            )
        );

let condicao = false 

if (condicao){
    console.log('Entrei no if !');
}else{
    //como o valor da condiçao é false,
    //o codigo do bloco else será executado
    console.log('Entrei no else !');
}

function numeros (num1, num2){
    if (num1 === num2){
        return "sucesso";

    } else {
        return "nao teve sucesso";
}

}

console.log(
    numeros(
        Number(prompt("digite um numero")),
        Number(prompt("digite outro numero"))
    )
);

function numeros (num1, num2){
    if (num1 === num2){
        return "iguais";
    
    }else if (num1 > num2 ){
        return " maior "

    }else if (num1 < num2) {
        return " menor "
    }else{
        return "nao teve sucesso"
    
    }      
    }

    
console.log(
    numeros(
        Number(prompt("digite um numero")),
        Number(prompt("digite outro numero"))
    )
);        


let paisDeOrigem;
switch (paisDeOrigem){
    case 'Brasil':
        console.log('brasileiro')
        break
    case 'EUA':
        console.log('norte-americano')
        break
    case 'Inglaterra':
        console.log('Ingles')
        break
    default:
        console.log('nacionalidade não encontrada')
        break
}


//exercicio 4
let pokemons = prompt('Escolha um desses pokemons e saiba o tipo deles: Bulbasauro, Charmander e Squirtle');
switch (pokemons){
    case 'Bulbasauro':
        console.log('Planta e Veneno');
        break
    case 'Charmander':
        console.log('Fogo');
        break
    case 'Squirtle':
        console.log('Aguá');
        break
    default:
        console.log('Pokemon não encontrado');
}  
*/

//exercico 5

function dadosFaculdade ( ensino, idade, outra){
   if(ensino== 'sim' && idade >= 18 && outra == 'nao'){
      return 'pode estudar na faculdade';
   }else { return 'nao pode estudar na faculdade';}
   }

  console.log(dadosFaculdade)
      prompt('Concluiu o ensino medio?').toLocaleLowerCase(),Number(prompt('sua idade?')),prompt('esta cursandou outra faculdade?').toLocaleUpperCase();
   








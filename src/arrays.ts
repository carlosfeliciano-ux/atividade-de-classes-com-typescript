const alunos = [
    "joao",   // indice  0
    "rafaela", // indice  1
    "Breno", // indice  2
    "Klyvia", // indice  3
    "Davi" // indice  4
]

// mostrar todo o array
console.log(alunos)

//acessar um elemento especifico pelo índice
console.log("terceiro elemento :",alunos[3])

//obter a quantidade de elementos
console.log("tamanho : ",alunos.length)

//obter o indice do ultimo elemento
console.log("Indice do ultimo elemento : ",alunos.length - 1)

//Acessar o valor do ultimo elemento
console.log("conteudo da ultima posicao",alunos[alunos.length-1])


//Tentando acessar um indice inexistente
console.log("indice inexistente",alunos[400])

//Alterando um unico elemento
console.log('antes da alteracao',alunos)
alunos[2] = 'Pietro'
console.log('apos a alteracao',alunos)

//acrescentando mais um aluno
alunos.push('isaque')
console.log('apos inserção de um aluno',alunos)

//removendo o ultimo elemento
alunos.pop()
console.log('apos remoção do ultimo aluno',alunos)


//Adicionar um elmento no inicio do array
alunos.unshift("bruno")
console.log('apos adicao do aluno no inicio',alunos)


//Remover um elemento do inicio
alunos.shift()
console.log('apos remoção do aluno no inicio',alunos)


//conversa sobre tipos
const teste = ['josue',27]
console.log("array teste:",teste)

const alunos2:string[] = ['josue','joao','jose']
console.log("array alunos2:",alunos2)
//alunos2.push(1) //isso emite erro

const professores:string[] = ["josue","vini","ana","ina","douglas","renato"]

// for(variavel, condicao saida, incremento){}
//for(let i= 0; i <= professores.length - 1 ; i++){
//    console.log('indice:',i,'valor:',professores[i])
//}


//for of
//for(const professor of professores){
//    console.log("nome: ",professor)
//}

//foreach()

professores.forEach((professor,indice)=>{
    if(professor == 'josue'){
      console.log(indice,professor,"eu odeio")
    }else{

      console.log(indice,professor,"é legal")
    }
    
})

professores.forEach((professor,indice) => {
  if(professor == 'josue'){
    console.log(indice, "A");
  } else {
    console.log(indice, "B");
  }
})







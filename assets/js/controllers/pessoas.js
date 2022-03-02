//INSTANCIAR A CLASSE PESSOAS
// SALVAR NO DB
// RETORNAR ALGO

import { pessoa } from "../models/pessoas.js"
import {db} from "../db/db.js"
import {modal} from "../models/modals.js"
import {getinput} from "../models/modals.js"

const listaDeAlunosCadastradosContainer = document.getElementById("lista-de-alunos")
const btnSearhFilter = document.getElementById("btn")
const cargoOpt = document.getElementById("cargoOption")
const ContadorID = document.getElementById("total-alunos")

btnSearhFilter.addEventListener("click", function(){
    pessoasControle.filtrar()
   
})

class pessoasControle{

    static cadastrarPessoas(Pessoa){
        
        modal.modalCloseOn()
        
        const novaPessoa = new pessoa(Pessoa)
        let arrayToFilter = []
        arrayToFilter.push(novaPessoa)
        
        function getIdade(anniversaryYear){
            let data = new Date()
            let year = data.getFullYear()
            return year - anniversaryYear
        }
    
        let setEmail = ''

        db.pessoas.forEach((pessoas)=>{
            setEmail = pessoas.email
            
        })
        

        arrayToFilter.filter(({email,dataNascimento})=>{
            let birthday = dataNascimento.replace(/[^0-9]/g, '').slice(0,4)
            
            if(email === '' && getIdade(birthday) < 18){  
                modal.modalErrorOn("Por favor! Preencha o campo de email." + " também verifique se a data de nascimento esta correta, " + "Menor de idade não pode igressar!" )

            }else if(email === setEmail && getIdade(birthday) < 18){
                modal.modalErrorOn("Email já cadastrado" + " também verifique se a data de nascimento esta correta, " + "Menor de idade não pode igressar!" )
            }
            else if(getIdade(birthday) < 18 ){
            
                modal.modalErrorOn("Menor de idade. não pode igressar!")

            }else if(email === ''){
                getinput.classList.add("field--advert")
                modal.modalErrorOn("Por favor! Preencha o campo de email.")

            }else if(email === setEmail){
                modal.modalErrorOn("Email já cadastrado")
            }

            else{
                db.pessoas.push(novaPessoa)
                pessoasControle.filtrar()
               
            }
                    
        })
    }
        static filtrar(){
            function template(pessoas){
                const listaDeAlunosCadastrados = document.createElement("li")
                const counteudoDaLista = document.createElement("p")    
                listaDeAlunosCadastrados.appendChild(counteudoDaLista)
                listaDeAlunosCadastradosContainer.appendChild(listaDeAlunosCadastrados)

                counteudoDaLista.innerText = `${pessoas.nome} ${pessoas.sobrenome} ${pessoas.email} ${pessoas.cargo}`
                return counteudoDaLista
            }

            listaDeAlunosCadastradosContainer.innerHTML = ''
            let filtrarPorCargo = cargoOpt.value

            const cargoFiltrado = db.pessoas.filter(({cargo})=>{
                return cargo === `${filtrarPorCargo}`
            })


            if(filtrarPorCargo == 'Todos'){

                db.pessoas.forEach((pessoas)=>{
                
                ContadorID.innerHTML = `${pessoas.id}`
                        template(pessoas)
                })
            }

            if(filtrarPorCargo == 'Aluno'){

                db.pessoas.forEach((pessoas)=>{
                    if(pessoas.cargo === "Aluno"){
                        template(pessoas)
                    }
              
                })
            }

            if(filtrarPorCargo == 'Facilitador'){

                db.pessoas.forEach((pessoas)=>{
                    if(pessoas.cargo === "Facilitador"){
                        template(pessoas)
                    }
              
                })
            }

            if(filtrarPorCargo == 'Instrutor'){

                db.pessoas.forEach((pessoas)=>{
                    if(pessoas.cargo === "Instrutor"){
                        template(pessoas)
                    }
              
                })
            }

        }
         
    
}


export {pessoasControle}
//gerar ID automaticamente
//CRIAR UMA CLASS COM OS PARAMETROS : nome, sobrenome, dataDeNascimento, email, contato, telefone, cargo

import {db} from "../db/db.js"
class pessoa{
    constructor({nome, sobrenome, dataNascimento, email, contato, telefone, cargo}){
        this.id = pessoa.gerarId()
        this.nome = nome
        this.sobrenome = sobrenome
        this.dataNascimento = dataNascimento
        this.email = email
        this.contato = contato
        this.telefone = telefone
        this.cargo = cargo
    }

    static gerarId(){

        let maxId = 0
        db.pessoas.forEach((pessoas) =>{
            if(pessoas.id > maxId){
                maxId = pessoas.id
            } 
       
        })

        return maxId + 1  
    }
 

}


export {pessoa}
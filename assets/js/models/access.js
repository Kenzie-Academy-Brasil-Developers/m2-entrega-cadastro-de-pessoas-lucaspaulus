import {pessoasControle} from "./../controllers/pessoas.js"
import {modal} from "./modals.js"
class access{
    static capturarDados(event){
        event.preventDefault()
        const inputs = event.target        
        const dataForm = {}

            for(let i = 0; i < inputs.length; i++){
                const {name , value} = inputs[i]
                
                if(name){
                    dataForm[name] = value
                }    
               
            }

     
        pessoasControle.cadastrarPessoas(dataForm)
        
    }   

}


export {access}
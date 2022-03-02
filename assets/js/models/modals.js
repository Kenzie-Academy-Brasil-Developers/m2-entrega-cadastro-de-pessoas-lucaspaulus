const modalContent = document.getElementsByClassName("modal__content")[0]
const paragrafo = document.createElement("p")
modalContent.appendChild(paragrafo)
const getinput = document.getElementById("inputEmail")

class modal{
  
    static modalError = document.getElementsByClassName("modal")[0]
    static modalClose = document.getElementsByClassName("modal__close")[0]
 
    static modalErrorOn(msg){
        modal.modalError.style.display = "block"
        paragrafo.innerText = msg
      
    }

    static modalCloseOn(){
        
        let getModalError = modal.modalError
        modal.modalClose.addEventListener("click", function(){
        getModalError.style.display = "none"
        getinput.classList.remove("field--advert")
        paragrafo.innerHTML = ''

        })
    }
}


export {modal}
export {getinput}
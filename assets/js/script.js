import { pessoasControle } from "./controllers/pessoas.js"
import { access } from "./models/access.js"

const btnCadastrarPessoas = document.querySelector("body")

btnCadastrarPessoas.addEventListener("submit", access.capturarDados)

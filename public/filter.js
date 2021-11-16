

const openModal = () => document.getElementById('modal')
.classList.add('active')

const closeModal = () => {
clearFields()
document.getElementById('modal').classList.remove('active')
}


//Interação com o layout

const clearFields = () => {
const fields = document.querySelectorAll('.modal-field')
fields.forEach(field => field.value = "")
document.getElementById('nome').dataset.index = 'new'
}



// Eventos (abrir modais)
document.getElementById('cadastrarCliente')
.addEventListener('click', openModal)
document.getElementById('cadastrarCliente2')
.addEventListener('click', openModal)
document.getElementById('cadastrarCliente3')
.addEventListener('click', openModal)
document.getElementById('cadastrarCliente4')
.addEventListener('click', openModal)
// fechar modais
document.getElementById('modalClose')
.addEventListener('click', closeModal)

document.getElementById('cancelar')
.addEventListener('click', closeModal)
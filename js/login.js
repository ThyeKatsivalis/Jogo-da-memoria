const input = document.querySelector(".login_input");
const button = document.querySelector(".login_button");
const form = document.querySelector(".login-form");

// validação com else

// const validateInput = ({ target }) => {
//     if(target.value.length > 2) {
//         button.removeAttribute('disabled');
//     } else {
//         button.setAttribute('disabled', ''); 
//     }
// }

// validação sem o else usando o return

const validateInput = ({ target }) => {
    if(target.value.length > 2) {
        button.removeAttribute('disabled');
        return; 
    }
    
        button.setAttribute('disabled', ''); 
}

const handleSubmit = (event) => {
    event.preventDefault(); // evita o carregamento da pagina
    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html'
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);

let names = document.getElementById('name');
let email = document.getElementById('email');
let show = document.getElementsByTagName('span');
let input = document.getElementsByTagName('input');

names.onkeydown = function () {
    const regExp = /^[a-zA-Z0-9]{2,10}$/;
    if (regExp.test(names.value)) {
        show[0].innerText = "Name is Valid";
        show[0].style.color = "#00ff00";
        input[0].style.boxShadow = "0px 0px 4px #00ff00";
    }
    else {
        show[0].innerText = "Name is not Valid";
        show[0].style.color = "#ff0000";
        input[0].style.boxShadow = "0px 0px 4px #ff0000";
    }
}

email.onkeydown = function () {
    const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regExp.test(email.value)) {
        show[1].innerText = "Email is Valid";
        show[1].style.color = "#00ff00";
        input[1].style.boxShadow = "0px 0px 4px #00ff00";
    }
    else {
        show[1].innerText = "Email is not Valid";
        show[1].style.color = "#ff0000";
        input[1].style.boxShadow = "0px 0px 4px #ff0000";
    }
}

const form = document.querySelector('form');
const tbody = document.querySelector('tbody');
const table = document.querySelector('table');
function addingUsers(e) {
    e.preventDefault();
    tbody.innerHTML += `
                <tr>
                    <td>${names.value}</td>
                    <td>${email.value}</td>
                    <td><button class="delBtn">X</button></td>
                </tr>
            `;
}

function deletingUsers(e) {
    if (!e.target.classList.contains("delBtn")) {
        return;
    }
    let btn = e.target;
    btn.closest("tr").remove();
}
form.addEventListener('submit', addingUsers);
table.addEventListener('click', deletingUsers);
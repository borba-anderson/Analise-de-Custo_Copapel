async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        window.location.href = 'dashboard.html';
    } else {
        const error = await response.json();
        document.getElementById('errorMessage').textContent = error.error;
    }
}

async function logout() {
    await fetch('/auth/logout', { method: 'POST' });
    window.location.href = 'index.html';
}

async function carregarGastos() {
    const response = await fetch('/gastos');
    const gastos = await response.json();
    const tbody = document.querySelector('#gastosTable tbody');
    tbody.innerHTML = '';

    gastos.forEach(gasto => {
        const row = `<tr><td>${gasto.descricao}</td><td>R$ ${gasto.valor}</td></tr>`;
        tbody.innerHTML += row;
    });

    const total = gastos.reduce((acc, gasto) => acc + parseFloat(gasto.valor), 0);
    document.getElementById('total').textContent = `R$ ${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', carregarGastos);

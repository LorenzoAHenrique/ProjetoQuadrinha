document.addEventListener('DOMContentLoaded', () => {
    const resultsSection = document.getElementById('results');
    const queryParams = new URLSearchParams(window.location.search);
    const location = queryParams.get('location');
    const date = queryParams.get('date');

    // Simulação de dados (substitua por uma chamada à API no futuro)
    const quadras = [
        { nome: 'Quadra do João', local: 'São Paulo', preco: 'R$ 100/h' },
        { nome: 'Campo do Zé', local: 'Rio de Janeiro', preco: 'R$ 120/h' },
    ];

    // Mostrar resultados
    quadras.forEach(quadra => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${quadra.nome}</h3>
                         <p>Local: ${quadra.local}</p>
                         <p>Preço: ${quadra.preco}</p>`;
        resultsSection.appendChild(div);
    });
});
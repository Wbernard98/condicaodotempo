"use strict";

// Selecionando os elementos necessários
var form = document.querySelector("#search-form > form");
var input = document.querySelector("#input-localizacao");
var sectionTempoInfo = document.querySelector('#tempo-info'); // Certifique-se que esta seção existe

console.log(form, input);  // Verifique se os elementos estão sendo corretamente selecionados

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o comportamento padrão do formulário (recarregar a página)

        if (!input || !sectionTempoInfo) {
            console.error("Input ou seção de tempo não encontrados!");
            return;
        }

        var localizacao = input.value.trim();
        if (localizacao.length < 3) {
            alert("O nome do local deve ter pelo menos 3 caracteres.");
            return;
        }

        console.log("Localização:", localizacao);  // Logando a localização para depuração

        // Fazendo a requisição para a API usando o nome da cidade fornecido pelo usuário
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=76e9caa9e6bd11d5856ee972fd7140b7&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao buscar os dados da API");
                }
                return response.json(); // Convertendo a resposta para JSON
            })
            .then(dados => {
                console.log("Dados da API:", dados);  // Verifique os dados recebidos da API

                // Extraindo as informações desejadas da resposta
                var info = {
                    temperatura: Math.round(dados.main.temp), // Temperatura arredondada
                    local: dados.name, // Nome da cidade
                    icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}d@2x.png` // Icone do clima
                };

                // Atualizando o conteúdo da seção com as informações
                sectionTempoInfo.innerHTML = `
                    <div class="tempo-dados">
                        <h2>${info.local}</h2>
                        <span>${info.temperatura}°C</span> <!-- Símbolo de Celsius -->
                    </div>
                    <img src="${info.icone}" alt="Ícone do clima">
                `;

            })
            .catch(error => {
                console.error("Erro na requisição:", error);  // Exibe o erro no console
                alert("Houve um erro ao buscar as informações do tempo. Tente novamente.");
            });
    });
} else {
    console.error("Formulário não encontrado");
}

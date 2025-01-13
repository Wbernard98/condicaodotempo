const form = document.querySelector("#search-form > form") as HTMLFormElement | null;
const input = document.querySelector("#input-localizacao") as HTMLInputElement | null;
const sectionTempoInfo = document.querySelector('#tempo-info') as HTMLElement | null; // Certifique-se que o ID está correto

if (form) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        // Verificando se o input ou sectionTempoInfos não existem
        if (!input || !sectionTempoInfo) {
            return;
        }

        const localizacao = input.value.trim();
        if (localizacao.length < 3) {
            alert("O nome do local deve ter pelo menos 3 caracteres.");
            return;
        }

        try {
            // Requisição para buscar o clima baseado no local
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=76e9caa9e6bd11d5856ee972fd7140b7&units=metric`);

            if (!response.ok) {
                throw new Error("Erro ao buscar os dados da API");
            }

            const dados = await response.json();
            console.log(dados);

            const info = {
                temperatura: Math.round(dados.main.temp), // arredondando a temperatura
                local: dados.name, // nome da cidade
                icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`, // corrigido para acessar o ícone
            };

            // Atualizando o conteúdo da seção #tempo-info com os dados
            sectionTempoInfo.innerHTML = `
                <div class="tempo-dados">
                    <h2>${info.local}</h2>
                    <span>${info.temperatura}°C</span> <!-- Adicionado o símbolo de Celsius -->
                </div>
                <img src="${info.icone}" alt="Ícone do clima">
            `;

        } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
            alert("Houve um erro ao buscar as informações do tempo. Tente novamente.");
        }
    });
}

# Condições do Tempo

Este projeto é uma aplicação web que permite ao usuário pesquisar as **condições climáticas** em tempo real de qualquer cidade do mundo. Utilizando a API **OpenWeatherMap**, ele exibe informações como **temperatura**, **nome da cidade** e **ícones representando o clima atual**. A interface é simples, responsiva e foi desenvolvida com **HTML**, **CSS**, **JavaScript** e **Node.js**.

---

## Funcionalidades

- Pesquisa das **condições climáticas** por cidade.
- Exibição da **temperatura** em Celsius.
- **Ícone** correspondente às condições climáticas.
- Interface **responsiva**, funcionando em dispositivos móveis e desktops.
- Utilização do **Node.js** para gerenciar a execução do servidor (caso deseje um servidor local).

---

## Tecnologias Utilizadas

- **HTML**: Estrutura básica da página.
- **CSS**: Estilização da página e do layout.
- **JavaScript/TypeScript**: Lógica de manipulação de dados e interação com a API.
- **Node.js**: Gerenciamento de servidor para rodar a aplicação localmente.
- **API OpenWeatherMap**: Para obter as informações climáticas.

---

## Pré-requisitos

Para rodar este projeto, você precisará de:

- **Node.js**: Para rodar o servidor local (se necessário). Você pode instalar o Node.js a partir do [site oficial](https://nodejs.org/).
- **Navegador web**: Qualquer navegador moderno (Chrome, Firefox, etc.).
- **Chave da API do OpenWeatherMap**:
  1. Crie uma conta gratuita no [OpenWeatherMap](https://openweathermap.org/).
  2. Gere a chave da API.
  3. Substitua a chave no código na variável `appid`.

---

## Como Usar

### 1. Clone o Repositório

Clone este repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/condicoes-do-tempo.git

```
### 2. Instalar como Dependente
Dentro da pasta do projeto, instale as dependências do projeto:
````
Copiar código
cd condicoes-do-tempo
npm install
````
### 3. Adicione sua chave de API
Obtenha sua chave de API no OpenWeatherMap .
No código, substitui o valor da variávelappidpela sua chave de API.
### 4. Execute o Servidor Local (Se necessário)
Se você estiver utilizando o Node.js para executá-lo.

Copiar código
```
npm start
```
### 5. Abra o Projeto no Navegador
Abra o arquivo index.htmlem seu navegador para usar o aplicativo.
### Como Funcunciona
O usuário insere o nome de uma cidade na barra de pesquisa.
A aplicação faz uma requisição para a API do Op
As informações do clima
Contribuindo
Se você deseja contribuir para o projeto

Faça o fork deste repositório.
1. Crie um branch para suas alterações:git checkout -b minha-alteracao.
2. Faça o commit das suas alteraçõesgit commit -m 'Adicionando novas funcionalidades'.
3. Empurre para uma ramificação: git push origin minha-alteracao.
4. Abra um pull request para revisão.
### O que foi adicionado:
O Node.js foi incluído no contexto de gerenciamento de serviço
Adicionada a instrução para rodar o servidor local com o comando npm start, caso o projeto dependa de execução viaNode.js .


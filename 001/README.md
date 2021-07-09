# Hello World!

Para rodar o arquivo nesta pasta você precisará ter instalado o NodeJS e um navegador e um terminal.

Para rodar o arquivo em um terminal após ter instalado o node, basta rodar `node` seguido do nome deste arquivo. Note que você precisará rodar o comando e estar na mesma localização onde estte arquivo se encontra em seu sisttema – para entender melhor como o terminal funciona, abordaremos em aulas futuras, então por ora fica aqui as instruções para quem já sabe um pouco ou para quando você voltar do futuro e testar por você mesma!

```bash
node helloWorld.js
```

### Instalando o NodeJS e NPM

#### Windows e MacOS

Basta ir na [página oficial do NodeJS](https://nodejs.org/) e realizar o download da versão LTS – este é um acrônimo de **L**ong **T**erm **S**upport ou suporte de longo prazo. Cada organização de software adota suas políticas, mas para o NodeJS isso significa que durante _30 meses_ pelo menos a partir de seu lançamento, esta versão terá suportee oficial da organização, recebendo _patches_ com correção de bug, vulnerabilidade dentre outros. É sempre importante buscar as versões mais recenttes pois elas geralmente possuem performances e seguranças aprimoradas. Um detalhe curioso do NodeJS é que toda versão ímpar é apenas suportada por 6 meses e não recebem o selo LTS. Algumas destas costumam serem instáveis em alguns pontos pois geralmenett são versões em que muitos experimentos são lançados pela primeira vez.

O instaladoor que você baixar te guiará e instalará o `Node.js runtime`, o `NPM` e adicionará os binários do node ao seu path para uso com a linha de comando. O `NPM` é o `Node Package Manager` e é a forma de adicionar e gerenciar dependências em uma aplicação NodeJS.

Depois de conclído, abra seu terminar e uso ambos os comandos:

```bash
node --version
npm --version
```

Deverá retornar a versão instalada de cada um destes.

#### Linux

No Linux dependerá de sua distribuição mas para as baseadas em Debian como o Ubuntu é através do sguinte comando:

```bash
sudo apt-get insttall nodejs
```

## Referências
- [Quais os motivos para escolher entre camelCase e PascalCase em nomes de métodos?](https://pt.stackoverflow.com/questions/386953/quais-os-motivos-para-escolher-entre-camelcase-e-pascalcase-em-nomes-de-m%C3%A9todos)
- [Convenções em nomes em linguagens de programação (material em inglês)](https://en.wikipedia.org/wiki/Naming_convention_(programming))

## Microfronts

### Projetos

* Tailor - Layout service, responsável por juntar as fragments e renderizar uma tela através da utilização de templates.
* Fragment Common - Projeto que contém dependências em comum entre todas as apps de uma página, é em UMD e carrega somente os arquivos necessários.
* Fragment Counter View - App em angular que carrega módulos, subrotas e lazy loading
* Fragment Header - App em React que tem um contador numérico e renderiza o Header.
* Fragment Set Counter - App em Vue com botões para setar o contador e resetar o contador.
  
### Configuração


Clonar projeto

```bash
git clone https://adrian_caetano@bitbucket.org/orsegups/pocs-frontend.git
```

Entrar no diretório do tailor e instalar as dependências dele

```bash
cd pocs-frontend
cd tailor
npm install
```

Instalar dependências de cada fragment, estando dentro da pasta do tailor.

```bash
npm run install-fragments
```

Buildar todos os fragments

```bash
npm run build-fragments
```

Rodar o tailor

```bash
npm run start
 ```

 Abrir um novo terminal e inicializar os fragments

 ```bash
cd tailor
npm run start-fragments
 ```
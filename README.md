# GitHub Details

![gitHubDetails](https://user-images.githubusercontent.com/29557187/193363734-894fb987-b9be-4458-a31d-9b9cbf8abe25.png)

Através da  [api](https://api.github.com) do GitHub esta aplicação faz a busca de repositórios utilizando a sintaxe``username/repositório``<br>

Os repositórios encontrados são pilhados na página inicial e salvos no localStorage. O usuário poderá ver as issues dos repositórios ao clicar em algum deles, sendo assim redirecionado para a página de issues do repositório, que é criada de forma dinâmica pela aplicação.<br>

Na página de issues é possível filtrar entre: abertas, fechadas e todas. Além disso existe paginação na listagem das issues.

A estilização da aplicação tem a intenção de seguir a identidade visual do site oficial do GitHub.<br><br>
Deploy: https://git-hub-details.vercel.app/
## Tecnologias usadas

Front-end:
> Desenvolvido usando: React, Styled Components, Hooks, CSS3, HTML5

Back-end:
> Axios


## Instalando Dependências

>
```bash
cd github-details/
npm install
``` 
## Executando aplicação

  ```
  cd github-details/ && npm start


🎬 Catálogo de Filmes

Um catálogo de filmes construído com React, consumindo dados em tempo real da API pública do The Movie Database (TMDB). O projeto permite navegar por filmes populares, buscar títulos específicos e visualizar detalhes completos de cada filme, com suporte a tema claro e escuro.

✨ Funcionalidades
Listagem de filmes populares — exibição em grid responsivo dos filmes em alta no momento
Busca por título — pesquisa de filmes por nome, com suporte a clique no botão ou tecla Enter
Página de detalhes — sinopse, pôster, nota e demais informações de cada filme, acessada dinamicamente pela URL
Tema claro/escuro — alternância de tema em toda a aplicação, com preferência aplicada de forma consistente
Design responsivo — grid de cards que se adapta automaticamente ao tamanho da tela
Tratamento de estados de carregamento e erro — feedback visual durante requisições à API
🛠️ Tecnologias utilizadas
React — biblioteca para construção da interface, utilizando componentes funcionais e Hooks (useState, useEffect)
Vite — ferramenta de build e servidor de desenvolvimento, responsável pelo ambiente rápido de desenvolvimento e pela leitura das variáveis de ambiente
React Router DOM — biblioteca de roteamento, utilizada para navegação entre páginas (BrowserRouter, Routes, Route, Link) e captura de parâmetros dinâmicos na URL (useParams)
CSS puro — estilização construída do zero, sem frameworks, utilizando:
CSS Grid para o layout do catálogo de filmes
Flexbox para organização interna dos componentes (cards, header, formulário de busca)
Variáveis CSS (Custom Properties) para o sistema de temas claro/escuro
TMDB API — fonte dos dados de filmes, consumida via fetch com tratamento assíncrono (async/await)
📁 Estrutura do projeto
src/
 ├── components/
 │    ├── Header.jsx       # Cabeçalho fixo com navegação e alternância de tema
 │    └── MovieCard.jsx    # Card individual de filme, reutilizado via props
 ├── pages/
 │    ├── Home.jsx         # Listagem, busca e grid de filmes
 │    └── MovieDetails.jsx # Página de detalhes de um filme específico
 ├── App.jsx                # Definição de rotas e estado global de tema
 └── main.jsx                # Ponto de entrada, com BrowserRouter
🎨 Sobre o design

O visual do projeto foi inspirado em plataformas de streaming, com grid de cards, tipografia em destaque e uma paleta de cores construída sobre variáveis CSS — permitindo a troca completa entre tema claro e escuro sem duplicação de código.

Desenvolvido como projeto de estudo em React, com foco em consumo de APIs, roteamento, gerenciamento de estado e estilização com CSS puro.
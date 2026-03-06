# Personalizar

Aqui forneceremos algumas dicas sobre como personalizar o site. Uma coisa importante a observar é que **TODAS** as alterações que você fizer devem ser realizadas na branch **main** do seu repositório. A branch `gh-pages` é automaticamente sobrescrita sempre que você modifica a branch main.

Note que, ao longo dos arquivos [README.md](README.pt-br.md) e [CUSTOMIZE.md](CUSTOMIZE.pt-br.md), o idioma padrão é o inglês (LANG = en-us). Você deve ter um arquivo ou caminho equivalente para cada idioma definido em [\_config.yml](_config.yml). Por exemplo, se você definiu `languages: ["en-us", "pt-br"]`, deverá haver 2 versões do arquivo `_data/LANG/cv.yml`: [\_data/en-us/cv.yml](_data/en-us/cv.yml) e [\_data/pt-br/cv.yml](_data/pt-br/cv.yml).

> **Nota para usuários sem experiência em programação:** Você **não** precisa entender a pilha de tecnologias ou ter qualquer conhecimento em programação para criar e personalizar seu próprio site com o al-folio. Este modelo foi especificamente projetado para ser acessível a acadêmicos e pesquisadores de todas as áreas. Você pode criar um site totalmente funcional simplesmente editando arquivos de configuração e adicionando conteúdo em Markdown, sem necessidade de programação.

<!--ts-->

- [Personalizar](#personalizar)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Configuração](#configuração)
  - [Agente de Personalização GitHub Copilot](#agente-de-personalização-github-copilot)
    - [O que o Agente Pode Ajudar](#o-que-o-agente-pode-ajudar)
    - [Como Usar o Agente](#como-usar-o-agente)
    - [Importante: Verifique a Saída do Agente](#importante-verifique-a-saída-do-agente)
  - [Entendendo a Base de Código com Code Wiki e DeepWiki](#entendendo-a-base-de-código-com-code-wiki-e-deepwiki)
    - [O que são essas ferramentas?](#o-que-são-essas-ferramentas)
    - [Quando usar essas ferramentas](#quando-usar-essas-ferramentas)
  - [Pilha de Tecnologia](#pilha-de-tecnologia)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Construção e Implantação](#construção-e-implantação)
    - [Pontos-chave de Integração](#pontos-chave-de-integração)
  - [Modificando as informações do CV](#modificando-as-informações-do-cv)
  - [Modificando as informações do usuário e do repositório](#modificando-as-informações-do-usuário-e-do-repositório)
  - [Criando novas páginas](#criando-novas-páginas)
  - [Criando novos posts de blog](#criando-novos-posts-de-blog)
  - [Criando novos projetos](#criando-novos-projetos)
  - [Adicionando algumas notícias](#adicionando-algumas-notícias)
  - [Adicionando Coleções](#adicionando-coleções)
    - [Criando uma nova coleção](#criando-uma-nova-coleção)
    - [Usando campos de frontmatter em sua coleção](#usando-campos-de-frontmatter-em-sua-coleção)
    - [Coleções com categorias e tags](#coleções-com-categorias-e-tags)
  - [Adicionando uma nova publicação](#adicionando-uma-nova-publicação)
    - [Anotação do autor](#anotação-do-autor)
    - [Botões (através de palavras-chave BibTeX personalizadas)](#botões-através-de-palavras-chave-bibtex-personalizadas)
  - [Personalizando layout e UI](#personalizando-layout-e-ui)
  - [Adicionando informações de mídia social](#adicionando-informações-de-mídia-social)
  - [Adicionando uma newsletter](#adicionando-uma-newsletter)
  - [Configurando recursos de busca](#configurando-recursos-de-busca)
  - [Gerenciando exibição de publicações](#gerenciando-exibição-de-publicações)
  - [Atualizando bibliotecas de terceiros](#atualizando-bibliotecas-de-terceiros)
  - [Removendo conteúdo](#removendo-conteúdo)
    - [Removendo a página do blog](#removendo-a-página-do-blog)
    - [Removendo a seção de notícias](#removendo-a-seção-de-notícias)
    - [Removendo a página de projetos](#removendo-a-página-de-projetos)
    - [Removendo a página de publicações](#removendo-a-página-de-publicações)
    - [Removendo a página de repositórios](#removendo-a-página-de-repositórios)
    - [Você também pode remover páginas comentando blocos de front-matter](#você-também-pode-remover-páginas-comentando-blocos-de-front-matter)
  - [Adicionando Token para o Lighthouse Badger](#adicionando-token-para-o-lighthouse-badger)
    - [Permissões do Personal Access Token (fine-grained) para o Lighthouse Badger:](#permissões-do-personal-access-token-fine-grained-para-o-lighthouse-badger)
  - [Personalizando fontes, espaçamento e mais](#personalizando-fontes-espaçamento-e-mais)
  - [Posts Agendados](#posts-agendados)
    - [Formato de Nome](#formato-de-nome)
    - [Notas Importantes](#notas-importantes)
  - [Configurando um Personal Access Token (PAT) para Atualizações de Citações do Google Scholar](#configurando-um-personal-access-token-pat-para-atualizações-de-citações-do-google-scholar)
    - [Por que um PAT é necessário?](#por-que-um-pat-é-necessário)
    - [Como configurar o PAT](#como-configurar-o-pat)

<!--te-->

## Estrutura do Projeto

O projeto está estruturado da seguinte forma, com foco nos principais componentes que você precisará modificar:

```txt
.
├── 📂 assets/: contém os recursos exibidos no site
│   └── 📂 json/
│       └── 📄 resume_LANG.json: Currículo em formato JSON (https://jsonresume.org/)
├── 📂 _bibliography/
│   └── 📄 papers.bib: bibliografia em formato BibTeX
├── 📂 _books/: contém as páginas da coleção de livros
│   └── 📂 LANG/: deve existir uma para cada idioma definido em _config.yml
├── 📄 _config.yml: o arquivo de configuração do template
├── 📂 _data/: contém alguns dos dados utilizados no template
│   ├── 📂 LANG/: dados para a versão LANG. Deve existir uma para cada idioma definido em _config.yml
│   │   ├── 📄 cv.yml: Currículo em formato YAML, utilizado quando assets/json/resume_LANG.json não existe
|   |   └── 📄 strings.yml: variáveis traduzidas (placeholders). Deve existir uma para cada idioma definido em _config.yml
│   ├── 📄 repositories.yml: informações de usuários e repositórios em formato YAML
│   └── 📄 socials.yml: suas informações de redes sociais e contato em formato YAML
├── 📂 _includes/: contém partes de código que são incluídas no HTML principal
│   └── 📄 news.liquid: define o layout da seção de notícias na página "Sobre"
├── 📂 _layouts/: contém os layouts disponíveis para serem escolhidos no frontmatter dos arquivos Markdown
├── 📂 _news/: as notícias que aparecerão na seção de notícias na página "Sobre"
│   └── 📂 LANG/: deve existir uma para cada idioma definido em _config.yml
├── 📂 _pages/: contém as páginas do site
│   └── 📂 LANG/: deve existir uma para cada idioma definido em _config.yml
|       └── 📄 404.md: página 404 (não encontrada)
├── 📂 _posts/: contém os posts do blog
│   └── 📂 LANG/: deve existir uma para cada idioma definido em _config.yml
├── 📂 _projects/: contém os projetos
│   └── 📂 LANG/: deve existir uma para cada idioma definido em _config.yml
└── 📂 _sass/: contém os arquivos SASS que definem o estilo do site
    ├── 📄 _base.scss: estilo base do site
    ├── 📄 _cv.scss: estilo da página do currículo
    ├── 📄 _distill.scss: estilo dos artigos no formato Distill
    ├── 📄 _layout.scss: estilo do layout geral
    ├── 📄 _themes.scss: cores dos temas e alguns ícones
    └── 📄 _variables.scss: variáveis utilizadas nos arquivos SASS
```

## Configuração

O arquivo de configuração [\_config.yml](_config.yml) contém as principais configurações do site. A maioria das opções é autoexplicativa e também tentamos adicionar o máximo de comentários possível. Se você tiver alguma dúvida, verifique se ela já não foi respondida nas [Perguntas Frequentes](FAQ.pt-br.md).

> Note que as configurações `url` e `baseurl` são utilizadas para gerar os links do site, conforme explicado nas [instruções de instalação](INSTALL.pt-br.md).

Todas as alterações feitas neste arquivo só são visíveis após você reconstruir o site. Isso significa que você precisará executar novamente `bundle exec jekyll serve` se estiver rodando o site localmente ou enviar (push) suas alterações para o GitHub se estiver utilizando o GitHub Pages. Todas as outras alterações são visíveis imediatamente, bastando atualizar a página.

## Agente de Personalização GitHub Copilot

Este repositório inclui um agente do GitHub Copilot especializado (`.github/agents/customize.agent.md`) projetado para ajudá-lo a personalizar seu site al-folio. O agente funciona como um assistente especialista que pode:

- Orientá-lo através de tarefas comuns de personalização passo a passo
- Modificar arquivos de configuração, adicionar conteúdo e atualizar seu site
- Explicar conceitos técnicos em linguagem simples (especialmente útil se você não estiver familiarizado com Jekyll ou desenvolvimento web)
- Aplicar mudanças diretamente aos seus arquivos de repositório
- Responder perguntas sobre como personalizar recursos específicos

### O que o Agente Pode Ajudar

O agente de personalização pode auxiliar em tarefas como:

- Alterar informações básicas do site (título, nome do autor, detalhes de contato)
- Atualizar seu CV ou currículo
- Adicionar e gerenciar publicações de arquivos BibTeX
- Criar postagens de blog, projetos e itens de notícias
- Personalizar cores de tema e estilo
- Gerenciar links de mídia social
- Ativar ou desativar recursos em `_config.yml`
- Adicionar fotos de perfil e outros ativos
- Resolver problemas de configuração

### Como Usar o Agente

Para usar o agente de personalização:

1. Certifique-se de ter uma assinatura do [GitHub Copilot](https://github.com/features/copilot)
2. Abra seu repositório em um editor com suporte ao GitHub Copilot (como VS Code com a extensão GitHub Copilot)
3. Interaja com GitHub Copilot e faça perguntas ou solicite alterações. Para mais informações, consulte [Usando agentes customizados no seu IDE](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents#using-custom-agents-in-your-ide)
4. O agente o guiará através do processo de personalização e pode fazer alterações diretamente em seus arquivos

Por exemplo, você pode perguntar:

- "Como faço para alterar a cor do tema do meu site para azul?"
- "Ajude-me a adicionar uma nova postagem de blog sobre minha pesquisa"
- "Atualize minhas informações de perfil com meu novo email da universidade"
- "Como adiciono uma publicação ao meu site?"

O agente é projetado para ser paciente e prestativo, explicando cada etapa claramente para que você entenda o que está sendo alterado e por quê.

### Importante: Verifique a Saída do Agente

**O agente de personalização pode cometer erros ou produzir informações incorretas.** Sempre revise e verifique as sugestões e alterações do agente antes de aplicá-las ao seu repositório:

- **Revise todas as alterações** – Antes de aplicar qualquer modificação, leia cuidadosamente o que o agente sugere e certifique-se de que faz sentido para suas necessidades
- **Teste localmente primeiro** – Antes de fazer push para o GitHub, teste as alterações localmente usando Docker ou instalação nativa (veja as instruções de instalação)
- **Verifique a sintaxe** – Certifique-se de que quaisquer arquivos YAML, Markdown ou BibTeX tenham sintaxe correta. A sintaxe incorreta pode quebrar seu site
- **Verifique a configuração** – Se o agente modificar `_config.yml` ou outros arquivos de configuração, verifique se as alterações estão alinhadas com suas intenções
- **Visualize em seu site** – Execute seu site localmente e navegue por ele para garantir que tudo seja exibido corretamente e funcione conforme esperado
- **Não aplique alterações cegamente** – Entenda o que está sendo alterado e por quê antes de fazer commit em seu repositório

**Cenários de exemplo onde a verificação é importante:**

- Se o agente sugere uma entrada BibTeX, verifique se a sintaxe corresponde às entradas existentes em seu arquivo `_bibliography/papers.bib`
- Se o agente modifica seu `_config.yml`, verifique se a indentação está correta (YAML é muito sensível ao espaçamento)
- Se o agente cria uma nova postagem ou página de blog, verifique se o front matter (os metadados no topo) está correto
- Se o agente sugere alterações em cores de tema ou estilo, visualize seu site localmente para garantir que as alterações pareçam conforme planejado

> **Nota:** O agente de personalização requer que o GitHub Copilot esteja habilitado. Para mais informações sobre o GitHub Copilot e seus recursos, veja a [documentação do GitHub Copilot](https://docs.github.com/en/copilot).

## Entendendo a Base de Código com Code Wiki e DeepWiki

Se você estiver interessado em aprender mais sobre como o al-folio funciona por trás dos panos, ou quiser entender aspectos específicos da base de código para personalização mais profunda, você pode usar Code Wiki e DeepWiki como recursos complementares.

### O que são essas ferramentas?

**Code Wiki** e **DeepWiki** são ferramentas alimentadas por IA que ajudam você a explorar e entender repositórios GitHub através de documentação interativa:

- **Code Wiki** (alimentado pelo Google Gemini) gera documentação interativa a partir do código do repositório. Você pode navegar pela estrutura do projeto, pesquisar funções ou módulos específicos, visualizar diagramas de arquitetura e entender como diferentes componentes interagem.

- **DeepWiki** fornece uma interface de chat com IA onde você pode fazer perguntas em linguagem natural sobre a base de código, semelhante a ter um engenheiro disponível 24/7. Você pode perguntar como os recursos funcionam, pesquisar padrões de código ou obter explicações de lógica complexa.

### Quando usar essas ferramentas

Use Code Wiki e DeepWiki **apenas depois** de:

- Você ter revisado as seções relevantes neste arquivo `CUSTOMIZE.md`
- Você ter explorado a seção estrutura do projeto acima
- Você ter explorado os arquivos de documentação principais (README.md, INSTALL.md, FAQ.md)
- Você ter verificado a [seção de Q&A das Discussões do GitHub](https://github.com/alshedivat/al-folio/discussions/categories/q-a)

Essas ferramentas são melhor utilizadas para:

- Entender a arquitetura e como diferentes partes da base de código funcionam juntas
- Encontrar onde a funcionalidade específica é implementada
- Aprender sobre a estrutura do modelo Jekyll e a sintaxe Liquid usada no tema
- Explorar como recursos específicos são implementados (por exemplo, como publicações são renderizadas, como a pesquisa funciona, etc.)

**Acesse essas ferramentas:**

- **Code Wiki**: [Code Wiki para o multi-language-al-folio](https://codewiki.google/github.com/george-gca/multi-language-al-folio)
- **DeepWiki**: [DeepWiki para o multi-language-al-folio](https://deepwiki.com/george-gca/multi-language-al-folio)

## Pilha de Tecnologia

Entender a pilha de tecnologia do al-folio o ajudará a personalizar e estender melhor o tema. Esta seção fornece uma visão geral das principais tecnologias e estruturas usadas no projeto.

### Frontend

- **Markdown**: O conteúdo é escrito em formato Markdown para páginas, postagens de blog e coleções. Isso facilita a criação e manutenção de conteúdo sem se preocupar com HTML.
- **Templating Liquid**: [Liquid](https://shopify.github.io/liquid/) é usado para geração dinâmica de modelos. Os modelos Liquid são usados nos diretórios `_layouts/` e `_includes/` para definir como seu conteúdo deve ser exibido.
- **HTML & CSS**: O tema usa HTML5 semântico e CSS moderno para estilo e layout.
- **SCSS**: As folhas de estilo são escritas em [SCSS (Sass)](https://sass-lang.com/), um pré-processador CSS que fornece variáveis, mixins e funções para estilo mais fáceis de manter. Os arquivos SCSS estão localizados em `_sass/` e são compilados para CSS durante o processo de construção.
- **Bootstrap**: [Bootstrap 4.6](https://getbootstrap.com/docs/4.6/) é usado para layout de grade responsivo e componentes base de estilo.
- **JavaScript**: JavaScript básico é usado para recursos interativos como alternância de modo escuro, funcionalidade de pesquisa e renderização dinâmica de conteúdo.
- **MathJax**: Para renderizar equações matemáticas em formato LaTeX em suas páginas e postagens de blog.
- **Mermaid**: Para criar diagramas (fluxogramas, diagramas de sequência, etc.) diretamente em Markdown.
- **Font Awesome, Academicons e Tabler Icons**: Bibliotecas de ícones usadas ao longo do tema para elementos visuais.

### Backend

- **Jekyll 4.x**: [Jekyll](https://jekyllrb.com/) é um gerador de site estático escrito em Ruby que transforma seus arquivos Markdown e modelos em um site estático. O Jekyll é usado para:
  - Converter arquivos Markdown em HTML
  - Processar modelos Liquid
  - Gerenciar coleções (postagens, projetos, notícias, livros, etc.)
  - Gerar arquivos e paginação
  - Minificar CSS e JavaScript

- **Ruby Gems** (Plugins Jekyll): O projeto usa vários plugins Ruby para estender a funcionalidade do Jekyll:
  - `jekyll-scholar`: Gerencia arquivos de bibliografia (BibTeX) e gera páginas de publicações com citações
  - `jekyll-archives-v2`: Cria páginas de arquivo para postagens e coleções organizadas por categoria, tag ou data
  - `jekyll-paginate-v2`: Lida com paginação para postagens de blog e arquivos
  - `jekyll-feed`: Gera um feed Atom (semelhante a RSS) para seu conteúdo
  - `jekyll-toc`: Gera automaticamente tabela de conteúdos para páginas com cabeçalhos
  - `jekyll-jupyter-notebook`: Integra notebooks Jupyter em seu site
  - `jekyll-tabs`: Adiciona suporte a conteúdo em abas
  - `jemoji`: Converte códigos de emoji em imagens de emoji
  - `jekyll-minifier`: Minifica HTML, CSS e JavaScript para melhor desempenho
  - `classifier-reborn`: Usado para categorizar e encontrar postagens de blog relacionadas
  - Outros utilitários: `jekyll-link-attributes`, `jekyll-imagemagick`, `jekyll-twitter-plugin`, `jekyll-get-json` e muito mais

- **Python**: Usado para scripts utilitários como atualizações de citações via Google Scholar (localizado em `bin/`)

### Construção e Implantação

- **GitHub Actions**: Fluxos de trabalho automatizados para construir, testar e implantar seu site. Os fluxos de trabalho estão definidos em `.github/workflows/`:
  - **Deploy**: Constrói e implanta automaticamente seu site no GitHub Pages quando você faz push de alterações para o branch principal
  - **Verificação de links**: Valida que todos os links do seu site não estão quebrados
  - **Formatação de código**: Garante que o código segue o estilo de código do Prettier
  - **Testes de acessibilidade**: Verifica se há problemas de acessibilidade usando Axe
  - **Lighthouse**: Mede o desempenho do site e as melhores práticas
  - **Atualizações de citações**: Busca automaticamente contagens de citações do Google Scholar

- **GitHub Pages**: Hospedagem gratuita para seu site estático construído por Jekyll
- **Docker**: Containerização opcional para desenvolvimento local (fornece um ambiente consistente entre diferentes máquinas)
- **Prettier**: Formatador de código para arquivos Markdown, YAML e Liquid para manter a formatação consistente

### Pontos-chave de Integração

Entender como essas tecnologias funcionam juntas o ajudará a personalizar o al-folio efetivamente:

1. **Criação de Conteúdo**: Escreva conteúdo em Markdown
2. **Processamento de Modelo**: O Jekyll processa Markdown através de modelos Liquid
3. **Estilo**: Os arquivos SCSS são compilados em CSS, com Bootstrap fornecendo o framework de layout responsivo
4. **Bibliografia**: Os arquivos BibTeX são processados por jekyll-scholar para gerar páginas de publicações
5. **Geração de Site Estático**: O Jekyll constrói todos os arquivos em HTML estático
6. **Implantação**: GitHub Actions implanta automaticamente o site construído no GitHub Pages

## Modificando as informações do CV

Atualmente, existem 2 maneiras diferentes de gerar o conteúdo da página do CV. A primeira utiliza um arquivo JSON localizado em [assets/json/resume_LANG.json](assets/json/resume_en-us.json). Trata-se de um [padrão conhecido](https://jsonresume.org/) para criar um currículo de forma programática. A segunda, atualmente usada como alternativa quando o arquivo JSON não é encontrado, utiliza um arquivo YML localizado em [\_data/LANG/cv.yml](_data/en-us/cv.yml). Essa foi a forma original de criar o conteúdo da página do CV e, por ser mais legível para humanos do que um arquivo JSON, decidimos mantê-la como opção.

Isso significa que, se não houver dados do currículo definidos em [\_config.yml](_config.yml) e carregados via um arquivo JSON, serão carregados os conteúdos de [\_data/LANG/cv.yml](_data/en-us/cv.yml). Se você deseja usar o arquivo [\_data/LANG/cv.yml](_data/en-us/cv.yml) como fonte do seu currículo, deverá excluir o arquivo [assets/json/resume_LANG.json](assets/json/resume_en-us.json).

## Modificando as informações do usuário e do repositório

As informações do usuário e do repositório são definidas em [\_data/repositories.yml](_data/repositories.yml). Você pode adicionar quantos usuários e repositórios desejar. Ambas as informações são utilizadas na seção `repositories`.

## Criando novas páginas

Você pode criar novas páginas adicionando novos arquivos Markdown no diretório [\_pages](_pages/). A maneira mais simples de fazer isso é copiando uma página existente e modificando-a. Você pode escolher o layout da página alterando o atributo [layout](https://jekyllrb.com/docs/layouts/) no [frontmatter](https://jekyllrb.com/docs/front-matter/) do arquivo Markdown, e também o caminho para acessá-la alterando o atributo [permalink](https://jekyllrb.com/docs/permalinks/). Você também pode adicionar novos layouts no diretório [\_layouts](_layouts/) se achar necessário. Para que a página seja exibida em diferentes idiomas, basta criar um arquivo Markdown com o mesmo nome para cada idioma. É possível [usar permalinks diferentes por idioma](https://github.com/untra/polyglot?tab=readme-ov-file#using-different-permalinks-per-language) se desejar.

## Criando novos posts de blog

Para criar um novo post de blog, você pode adicionar um novo arquivo Markdown no diretório [\_posts/LANG/](_posts/en-us/). O [nome do arquivo deve seguir](https://jekyllrb.com/docs/posts/#creating-posts) o formato `YYYY-MM-DD-title.md`. A maneira mais simples de fazer isso é copiando um post existente e modificando-o. Note que alguns posts possuem campos opcionais no [frontmatter](https://jekyllrb.com/docs/front-matter/) que são utilizados para habilitar comportamentos ou funções específicas.

Se você deseja criar posts que ainda não estão prontos para serem publicados, mas quer versioná-los com o git, pode criar um diretório [\_drafts](https://jekyllrb.com/docs/posts/#drafts) e armazená-los nele.

Observe que `posts` também é uma coleção, mas é uma coleção padrão criada automaticamente pelo Jekyll. Para acessar os posts, você pode utilizar a variável `site.posts` em seus templates.

## Criando novos projetos

Você pode criar novos projetos adicionando novos arquivos Markdown no diretório [\_projects/LANG/](_projects/en-us/). A maneira mais simples de fazer isso é copiando um projeto existente e modificando-o.

## Adicionando algumas notícias

Você pode adicionar notícias na página "Sobre" adicionando novos arquivos Markdown no diretório [\_news/LANG/](_news/en-us/). Atualmente, existem dois tipos de notícias: notícias embutidas e notícias com link. Notícias com link levam você para uma nova página, enquanto notícias embutidas são exibidas diretamente na página “Sobre”. A maneira mais simples de criar as suas é copiando uma notícia existente e modificando-a.

## Adicionando Coleções

Este tema Jekyll implementa [coleções](https://jekyllrb.com/docs/collections/) para que você possa dividir seu trabalho em categorias. O tema já vem com três coleções padrão: `news`, `projects` e `books`. Os itens da coleção `news` são exibidos automaticamente na página inicial, enquanto os itens da coleção `projects` são exibidos em uma grade responsiva na página de projetos e os itens da coleção `books` são exibidos em sua própria página de estante de livros dentro dos submenus.

Você pode facilmente criar suas próprias coleções para qualquer tipo de conteúdo—materiais de ensino, cursos, apps, contos ou o que se adequar às suas necessidades.

### Criando uma nova coleção

Para criar uma nova coleção, siga estes passos. Vamos criar uma coleção `teaching`, mas você pode substituir `teaching` por qualquer nome que preferir:

1. **Adicione a coleção ao `_config.yml`**

   Abra a seção `collections` em [\_config.yml](_config.yml) e adicione sua nova coleção:

   ```yaml
   collections:
     news:
       defaults:
         layout: post
       output: true
       permalink: /:collection/:title/
     projects:
       output: true
       permalink: /:collection/:title/
     teaching:
       output: true
       permalink: /:collection/:title/
   ```

   - `output: true` torna os itens da coleção acessíveis como páginas separadas
   - `permalink: **deve ser definido** para evitar adicionar códigos de idioma no caminho da URL (veja o comentário em [\_config.yml](_config.yml)), o que quebraria a estrutura do template
   - Para outras opções de permalink, veja a [documentação de permalinks do Jekyll](https://jekyllrb.com/docs/permalinks/#collections)

2. **Crie pastas específicas de idioma para seus itens de coleção**

   Este é um tema multilíngue, portanto você deve criar pastas específicas de idioma para sua coleção. Crie pastas no diretório raiz com um prefixo de sublinhado e código de idioma. Para uma coleção `teaching` com inglês e português, crie:

   ```text
   _teaching/
   ├── en-us/
   │   ├── course_1.md
   │   ├── course_2.md
   │   └── course_3.md
   └── pt-br/
       ├── course_1.md
       ├── course_2.md
       └── course_3.md
   ```

   > **Importante:** Você deve criar uma pasta para cada idioma definido na lista `languages` em [\_config.yml](_config.yml). Por exemplo, se você tiver `languages: ["en-us", "pt-br", "fr-ca"]`, deve criar as pastas `en-us/`, `pt-br/` e `fr-ca/`.

3. **Crie páginas de entrada específicas de idioma para sua coleção**

   Adicione arquivos Markdown nos diretórios `_pages/LANG/` (por exemplo, `_pages/en-us/teaching.md` e `_pages/pt-br/teaching.md`) que servirão como páginas principais para sua coleção em cada idioma. Você pode usar [\_pages/en-us/projects.md](_pages/en-us/projects.md) ou [\_pages/en-us/books.md](_pages/en-us/books.md) como modelo e adaptá-lo para suas necessidades.

   Em sua página de entrada, acesse sua coleção usando a variável `site.COLLECTION_NAME`:

   ```liquid
   {% assign teaching_items = site.teaching | sort: 'date' | reverse %}

   {% for item in teaching_items %}
     <h3>{{ item.title }}</h3>
     <p>{{ item.content }}</p>
   {% endfor %}
   ```

   Substitua `COLLECTION_NAME` pelo nome real de sua coleção (por exemplo, `site.teaching`).

4. **Adicione links para suas páginas de coleção**

   Atualize [\_pages/LANG/dropdown.md](_pages/en-us/dropdown.md) em cada idioma para adicionar links de menu para sua nova página de coleção ou a configuração de navegação em [\_config.yml](_config.yml).

5. **Crie itens de coleção específicos de idioma**

   Adicione arquivos Markdown em cada pasta de idioma de sua coleção (por exemplo, `_teaching/en-us/` e `_teaching/pt-br/`) com frontmatter e conteúdo apropriados. Certifique-se de criar o conteúdo equivalente em todos os idiomas ativos.

Para mais informações sobre coleções, consulte a [documentação oficial do Jekyll](https://jekyllrb.com/docs/collections/) e o [guia passo a passo](https://jekyllrb.com/docs/step-by-step/09-collections/).

### Usando campos de frontmatter em sua coleção

Ao criar itens em sua coleção, você pode definir campos de frontmatter personalizados e usá-los em sua página de destino. Por exemplo:

```markdown
---
layout: page
title: Introdução aos Métodos de Pesquisa
importance: 1
category: methods
---

Descrição e conteúdo do curso aqui...
```

Depois em seu modelo de página de destino:

```liquid
{% if item.category == 'methods' %}
  <span class="badge">{{ item.category }}</span>
{% endif %}
```

### Coleções com categorias e tags

Se você desejar adicionar suporte a categorias e tags (como os posts de blog têm), você precisa configurar a seção `jekyll-archives` em [\_config.yml](_config.yml). Veja como isso é feito com a coleção `books` como referência. Para mais detalhes, consulte a [documentação do jekyll-archives-v2](https://george-gca.github.io/jekyll-archives-v2/).

## Adicionando uma nova publicação

Para adicionar publicações, crie uma nova entrada no arquivo [\_bibliography/papers.bib](_bibliography/papers.bib). Você pode encontrar a entrada BibTeX de uma publicação no Google Scholar clicando nas aspas abaixo do título da publicação, depois em "BibTeX", ou também diretamente na página da conferência. Por padrão, as publicações serão ordenadas por ano e as mais recentes serão exibidas primeiro. Você pode alterar esse comportamento e outras configurações na seção `Jekyll Scholar` do arquivo [\_config.yml](_config.yml).

Você pode adicionar informações extras a uma publicação, como um arquivo PDF no diretório `assets/pdfs/`, e adicionar o caminho para esse arquivo na entrada BibTeX com o campo `pdf`. Alguns dos campos suportados são: `abstract`, `altmetric`, `annotation`, `arxiv`, `bibtex_show`, `blog`, `code`, `dimensions`, `doi`, `eprint`, `html`, `isbn`, `pdf`, `pmid`, `poster`, `slides`, `supp`, `video` e `website`.

### Anotação do autor

Em publicações, a entrada do autor para você mesmo é identificada pelo array de strings `scholar:last_name` e pelo array de strings `scholar:first_name` em [\_config.yml](_config.yml). Por exemplo, se você tiver a seguinte entrada em seu [\_config.yml](_config.yml):

```yaml
scholar:
  last_name: [Einstein]
  first_name: [Albert, A.]
```

Se a entrada corresponder a alguma forma dos sobrenomes e dos primeiros nomes, ela será sublinhada. Mantenha as meta-informações sobre seus coautores em [\_data/coauthors.yml](_data/coauthors.yml) e o Jekyll irá inserir automaticamente links para as suas páginas. O formato dos dados dos coautores é o seguinte, com os sobrenomes em minúsculas e sem acentos, sendo a chave:

```yaml
"adams":
  - firstname: ["Edwin", "E.", "E. P.", "Edwin Plimpton"]
    url: https://en.wikipedia.org/wiki/Edwin_Plimpton_Adams

"podolsky":
  - firstname: ["Boris", "B.", "B. Y.", "Boris Yakovlevich"]
    url: https://en.wikipedia.org/wiki/Boris_Podolsky

"rosen":
  - firstname: ["Nathan", "N."]
    url: https://en.wikipedia.org/wiki/Nathan_Rosen

"bach":
  - firstname: ["Johann Sebastian", "J. S."]
    url: https://en.wikipedia.org/wiki/Johann_Sebastian_Bach

  - firstname: ["Carl Philipp Emanuel", "C. P. E."]
    url: https://en.wikipedia.org/wiki/Carl_Philipp_Emanuel_Bach
```

Se a entrada corresponder a uma das combinações dos sobrenomes e dos primeiros nomes, ela será destacada e vinculada à URL fornecida. Note que as chaves **DEVEM SER** todas em minúsculas e **NÃO DEVEM** conter acentos, pois elas são utilizadas para comparar os sobrenomes nas entradas BibTeX, considerando possíveis variações (veja a [discussão relacionada](https://github.com/alshedivat/al-folio/discussions/2213)).

### Botões (através de palavras-chave BibTeX personalizadas)

Existem diversas palavras-chave BibTeX personalizadas que você pode utilizar para influenciar a forma como as entradas são exibidas na página:

- `abbr`: Adiciona uma abreviação à esquerda da entrada. Você pode criar links para essas abreviações criando um arquivo venue.yaml na pasta \_data e adicionando as entradas correspondentes.
- `abstract`: Adiciona um botão “Abs” que expande um campo de texto oculto quando clicado para exibir o resumo.
- `altmetric`: Adiciona um selo do [Altmetric](https://www.altmetric.com/) (Nota: se o DOI for fornecido, utilize apenas `true`; caso contrário, adicione apenas o identificador altmetric – o link é gerado automaticamente).
- `annotation`: Adiciona uma mensagem informativa em popover ao final da lista de autores, que pode ser utilizada para esclarecer sobrescritos. HTML é permitido.
- `arxiv`: Adiciona um link para o site do Arxiv (Nota: adicione apenas o identificador arxiv – o link é gerado automaticamente).
- `bibtex_show`: Adiciona um botão “Bib” que expande um campo de texto oculto com a entrada bibliográfica completa.
- `blog`: Adiciona um botão “Blog” que redireciona para o link especificado.
- `code`: Adiciona um botão “Code” que redireciona para o link especificado.
- `dimensions`: Adiciona um selo do [Dimensions](https://www.dimensions.ai/) (Nota: se o DOI ou PMID for fornecido, utilize apenas `true`; caso contrário, adicione apenas o identificador do Dimensions – o link é gerado automaticamente).
- `html`: Insere um botão “HTML” que redireciona para o link especificado pelo usuário.
- `pdf`: Adiciona um botão “PDF” que redireciona para um arquivo especificado (se um link completo não for fornecido, assume-se que o arquivo está no diretório /assets/pdf/).
- `poster`: Adiciona um botão “Poster” que redireciona para um arquivo especificado (se um link completo não for fornecido, assume-se que o arquivo está no diretório /assets/pdf/).
- `slides`: Adiciona um botão “Slides” que redireciona para um arquivo especificado (se um link completo não for fornecido, assume-se que o arquivo está no diretório /assets/pdf/).
- `supp`: Adiciona um botão “Supp” para um arquivo especificado (se um link completo não for fornecido, assume-se que o arquivo está no diretório /assets/pdf/).
- `website`: Adiciona um botão “Website” que redireciona para o link especificado.

Você pode implementar seus próprios botões editando o arquivo [\_layouts/bib.liquid](_layouts/bib.liquid).

## Personalizando layout e UI

Você pode personalizar o layout e a interface do usuário em [\_config.yml](_config.yml):

```yaml
navbar_fixed: true
footer_fixed: true
back_to_top: true
max_width: 930px
```

- `navbar_fixed`: Quando `true`, a barra de navegação permanece fixa no topo da página ao descer. Quando `false`, ela se move com o conteúdo da página.
- `footer_fixed`: Quando `true`, o rodapé permanece fixo na parte inferior da janela de visualização. Quando `false`, aparece no final do conteúdo da página.
- `back_to_top`: Exibe um botão "voltar ao topo" no rodapé. Quando clicado, a página sobe suavemente para o topo.
- `max_width`: Controla a largura máxima da área de conteúdo principal em pixels. Você pode ajustar isso para tornar seu conteúdo mais largo ou estreito.

## Adicionando informações de mídia social

Você pode adicionar seus links de mídia social adicionando as informações especificadas no arquivo [\_data/socials.yml](_data/socials.yml). Essas informações aparecerão na parte inferior da página "Sobre" e nos resultados da pesquisa por padrão, mas isso pode ser alterado para aparecer no cabeçalho da página definindo `enable_navbar_social: true` e não aparecer na pesquisa definindo `socials_in_search: false`, ambos em [\_config.yml](_config.yml).

## Adicionando uma newsletter

Você pode adicionar um formulário de inscrição para newsletter adicionando as informações especificadas na seção `newsletter` do arquivo [\_config.yml](_config.yml). Para configurar uma newsletter, você pode usar um serviço como o [Loops.so](https://loops.so/), que é a solução atualmente suportada. Depois de configurar sua newsletter, você pode adicionar o [endpoint](https://loops.so/docs/forms/custom-form) do formulário ao campo `endpoint` na seção `newsletter` do arquivo [\_config.yml](_config.yml).

Dependendo do comportamento do rodapé que você especificar, o formulário de inscrição aparecerá na parte inferior da página "Sobre" e na parte inferior das postagens do blog se `related_posts` estiver habilitado, ou no rodapé na parte inferior de cada página.

## Configurando recursos de busca

O tema inclui uma funcionalidade de busca poderosa que pode ser personalizada em [\_config.yml](_config.yml):

```yaml
search_enabled: true
socials_in_search: true
posts_in_search: true
bib_search: true
```

- `search_enabled`: Habilita a funcionalidade de busca em todo o site. Quando habilitada, uma caixa de pesquisa aparece na barra de navegação, permitindo que os usuários pesquisem em todo o conteúdo do site.
- `socials_in_search`: Inclui seus links de mídia social e informações de contato nos resultados da pesquisa. Isso facilita que os visitantes encontrem maneiras de se conectar com você.
- `posts_in_search`: Inclui postagens de blog no índice de pesquisa. Os usuários podem pesquisar posts por título, conteúdo ou tags.
- `bib_search`: Habilita a busca dentro de suas publicações/bibliografia. Quando habilitada, uma caixa de pesquisa aparece na página de publicações, permitindo que os visitantes filtrem publicações por título, autor, local ou ano.

Todos esses recursos de pesquisa funcionam em tempo real e não requerem recarregamento de página.

## Gerenciando exibição de publicações

O tema oferece várias opções para personalizar como as publicações são exibidas:

```yaml
enable_publication_thumbnails: true
max_author_limit: 3
more_authors_animation_delay: 10
```

- `enable_publication_thumbnails`: Quando `true`, exibe imagens de visualização para publicações (se especificado na entrada BibTeX com o campo `preview`). Defina como `false` para desabilitar miniaturas para todas as publicações.
- `max_author_limit`: Define o número máximo de autores exibidos inicialmente para cada publicação. Se uma publicação tiver mais autores, eles ficarão ocultos atrás de um link "mais autores". Deixe em branco para sempre mostrar todos os autores.
- `more_authors_animation_delay`: Controla a velocidade da animação (em milissegundos) ao revelar autores adicionais. Um valor menor significa animação mais rápida.

Para adicionar uma minatura a uma publicação, inclua um campo `preview` em sua entrada BibTeX:

```bibtex
@article{example2024,
  title={Example Paper},
  author={Author, First and Author, Second},
  journal={Example Journal},
  year={2024},
  preview={example_preview.png}
}
```

Coloque o arquivo de imagem em `assets/img/publication_preview/`.

## Atualizando bibliotecas de terceiros

O tema usa várias bibliotecas JavaScript e CSS de terceiros. Você pode gerenciar essas na seção `third_party_libraries` de [\_config.yml](_config.yml):

```yaml
third_party_libraries:
  download: false
  bootstrap-table:
    version: "1.22.4"
    url:
      css: "https://cdn.jsdelivr.net/npm/bootstrap-table@{{version}}/dist/bootstrap-table.min.css"
      js: "https://cdn.jsdelivr.net/npm/bootstrap-table@{{version}}/dist/bootstrap-table.min.js"
    integrity:
      css: "sha256-..."
      js: "sha256-..."
```

- `download`: Quando `false` (padrão), as bibliotecas são carregadas de CDNs. Quando `true`, as versões especificadas da biblioteca são baixadas durante a construção e servidas a partir do seu site. Isso pode melhorar o desempenho, mas aumenta o tamanho do seu repositório.
- `version`: Especifica qual versão de cada biblioteca usar. Atualize isso para usar uma versão mais recente.
- `url`: URLs de modelo para carregar a biblioteca. O placeholder `{{version}}` é substituído pelo número da versão.
- `integrity`: Hashes de [Subresource Integrity (SRI)](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) garantem que a biblioteca não foi adulterada. Ao atualizar uma versão de biblioteca, você também deve atualizar seu hash de integridade.

Para atualizar uma biblioteca:

1. Altere o número da `version`
2. Obtenha o novo hash de integridade para a versão atualizada da biblioteca e atualize o campo `integrity` com o novo hash. Você pode:
   - Verificar se o provedor de CDN (por exemplo, jsDelivr, cdnjs, unpkg) fornece o hash SRI para o arquivo. Muitos sites de CDN exibem o hash SRI junto da URL do arquivo.
   - Gerar o hash SRI você mesmo usando uma ferramenta como [SRI Hash Generator](https://www.srihash.org/) ou executando o seguinte comando em seu terminal:

     ```bash
     curl -sL [FILE_URL] | openssl dgst -sha384 -binary | openssl base64 -A
     ```

     Substitua `[FILE_URL]` pela URL do arquivo da biblioteca. Em seguida, adicione `sha384-` ao resultado e use-o no campo `integrity`.
     Para instruções detalhadas sobre como atualizar bibliotecas específicas, veja as Perguntas Frequentes:
     - [Como posso atualizar a versão do Academicons](FAQ.pt-br.md#como-posso-atualizar-a-versão-do-academicons-no-modelo)
     - [Como posso atualizar a versão do Font Awesome](FAQ.pt-br.md#como-posso-atualizar-a-versão-do-font-awesome-no-modelo)
     - [Como posso atualizar a versão do Tabler Icons](FAQ.pt-br.md#como-posso-atualizar-a-versão-do-tabler-icons-no-modelo)

## Removendo conteúdo

Como este template possui muito conteúdo, pode ser que você queira remover parte dele. A maneira mais simples de fazer isso e evitar conflitos de merge ao atualizar seu código (como [apontado por CheariX](https://github.com/alshedivat/al-folio/pull/2933#issuecomment-2571271117)) é adicionar os arquivos indesejados à seção `exclude` do seu arquivo [\_config.yml](_config.yml) em vez de deletá-los, por exemplo:

```yml
exclude:
  - _news/**/announcement_*.md
  - _pages/**/blog.md
  - _posts/
  - _projects/**/?_project.md
  - assets/jupyter/blog.ipynb
```

Aqui está uma lista dos principais componentes que você pode querer remover e como fazê-lo. Não se esqueça de atualizar a propriedade `nav_order` das páginas restantes se você deletar alguma página.

### Removendo a página do blog

Para remover o blog, você deve:

- excluir o diretório [\_posts](_posts/)
- excluir as páginas do blog em `_pages/LANG/blog.md`
- remover a referência à página do blog em `_pages/LANG/dropdown.md`
- remover a parte `latest_posts` em `_pages/LANG/about.md`
- remover a seção `Blog` do arquivo [\_config.yml](_config.yml) e as partes relacionadas, como o `jekyll-archives`

Você também pode:

- excluir [\_includes/latest_posts.liquid](_includes/latest_posts.liquid)
- excluir [\_includes/related_posts.liquid](_includes/related_posts.liquid)
- excluir [\_layouts/archive.liquid](_layouts/archive.liquid) (a menos que você tenha uma collection personalizada que o utilize)
- excluir [\_plugins/external-posts.rb](_plugins/external-posts.rb)
- remover a gem `jekyll-archives-v2` do [Gemfile](Gemfile) e a seção `plugins` do arquivo [\_config.yml](_config.yml) (a menos que você tenha uma collection personalizada que a utilize)
- remover a gem `classifier-reborn` do [Gemfile](Gemfile)

### Removendo a seção de notícias

Para remover a seção de notícias, você pode:

- excluir o diretório [\_news](_news/)
- excluir o arquivo [\_includes/news.liquid](_includes/news.liquid) e as referências a ele em `_pages/LANG/about.md`
- remover a parte `announcements` em `_pages/LANG/about.md`
- remover a parte de notícias na seção `Collections` do arquivo [\_config.yml](_config.yml)

### Removendo a página de projetos

Para remover os projetos, você pode:

- excluir o diretório [\_projects](_projects/)
- excluir a página de projetos em `_pages/LANG/projects.md`
- remover a referência à página de projetos em `_pages/LANG/dropdown.md`
- remover a parte dos projetos na seção `Collections` do arquivo [\_config.yml](_config.yml)

Você também pode:

- excluir [\_includes/projects_horizontal.liquid](_includes/projects_horizontal.liquid)
- excluir [\_includes/projects.liquid](_includes/projects.liquid)

### Removendo a página de publicações

Para remover as publicações, você pode:

- excluir o diretório [\_bibliography](_bibliography/)
- excluir a página de publicações em `_pages/LANG/publications.md`
- remover a referência à página de publicações em `_pages/LANG/dropdown.md`
- remover a seção `Jekyll Scholar` do arquivo [\_config.yml](_config.yml)

Você também pode:

- excluir o arquivo [\_layouts/bib.liquid](_layouts/bib.liquid)
- excluir [\_includes/bib_search.liquid](_includes/bib_search.liquid)
- excluir [\_includes/citation.liquid](_includes/citation.liquid)
- excluir [\_includes/selected_papers.liquid](_includes/selected_papers.liquid)
- excluir [\_plugins/google-scholar-citations.rb](_plugins/google-scholar-citations.rb)
- excluir [\_plugins/hide-custom-bibtex.rb](_plugins/hide-custom-bibtex.rb)
- excluir [\_plugins/inspirehep-citations.rb](_plugins/inspirehep-citations.rb)
- remover a gem `jekyll-scholar` do [Gemfile](Gemfile) e a seção `plugins` do arquivo [\_config.yml](_config.yml)

### Removendo a página de repositórios

Para remover os repositórios, você pode:

- excluir a página de repositórios em `_pages/LANG/repositories.md`
- excluir o diretório [\_includes/repository/](_includes/repository/)

### Você também pode remover páginas comentando blocos de front-matter

Para arquivos `.md` no diretório [\pages](_pages/), se você não quiser editá-los ou excluí-los completamente, mas deseja salvá-los para uso posterior, pode desabilitar temporariamente essas variáveis. Mas esteja ciente de que o Jekyll reconhece o front matter apenas quando ele aparece como não comentado. O layout, permalink e outros comportamentos do front-matter são desabilitados para esse arquivo.

Por exemplo, em books.md faça:

```md
<!-- ---
layout: book-shelf
title: bookshelf
permalink: /books/
nav: true
collection: books
--- -->

> What an astonishing thing a book is. It's a flat object made from a tree with flexible parts on which are imprinted lots of funny dark squiggles. But one glance at it and you're inside the mind of another person, maybe somebody dead for thousands of years. Across the millennia, an author is speaking clearly and silently inside your head, directly to you. Writing is perhaps the greatest of human inventions, binding together people who never knew each other, citizens of distant epochs. Books break the shackles of time. A book is proof that humans are capable of working magic.
>
> -- Carl Sagan, Cosmos, Part 11: The Persistence of Memory (1980)

## Books that I am reading, have read, or will read
```

## Adicionando Token para o Lighthouse Badger

Para adicionar segredos para o [lighthouse-badger](https://github.com/alshedivat/al-folio/actions/workflows/lighthouse-badger.yml), crie um [personal access token (PAT)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token) e adicione-o como um [secret](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-encrypted-secrets-for-a-repository) denominado `LIGHTHOUSE_BADGER_TOKEN` ao seu repositório. A [documentação do lighthouse-badger](https://github.com/MyActionWay/lighthouse-badger-workflows#lighthouse-badger-easyyml) especifica o uso de uma variável de ambiente, mas utilizá-lo como secret é mais seguro e apropriado para um PAT.

Caso você encontre o erro: "Input required and not supplied: token" na ação do Lighthouse Badger, essa solução deverá resolvê-lo.

### Permissões do Personal Access Token (fine-grained) para o Lighthouse Badger:

- **contents**: acesso: leitura e escrita
- **metadata**: acesso: somente leitura

Devido às permissões necessárias mencionadas, recomenda-se usá-lo como secret ao invés de como variável de ambiente.

## Personalizando fontes, espaçamento e mais

Você pode personalizar as fontes, os espaçamentos e outros aspectos editando o arquivo [\_sass/\_base.scss](_sass/_base.scss). A maneira mais simples de testar as alterações antecipadamente é utilizando as [ferramentas de desenvolvedor do Chrome](https://developer.chrome.com/docs/devtools/css) ou as [ferramentas de desenvolvedor do Firefox](https://firefox-source-docs.mozilla.org/devtools-user/). Nelas, você pode clicar em um elemento e visualizar todos os atributos definidos para ele, bem como a origem desses estilos. Para mais informações sobre como utilizar esses recursos, consulte os tutoriais do [Chrome](https://developer.chrome.com/docs/devtools/css), do [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) e [este tutorial em vídeo](https://www.youtube.com/watch?v=l0sgiwJyEu4).

## Posts Agendados

O `al-folio` contém um workflow que publica automaticamente todos os posts agendados para um determinado dia, no final do dia (23:30). Por padrão, a ação está desabilitada e, para habilitá-la, você precisa ir para o diretório `.github/workflows/` e encontrar o arquivo chamado `schedule-posts.txt`. Este é o arquivo do workflow. Para que o GitHub o reconheça como tal (ou para habilitar a ação), você precisa renomeá-lo para `schedule-posts.yml`.

Para utilizá-lo, salve todos os seus posts "Concluídos" que estão agendados para serem publicados em uma data específica, em uma pasta chamada `_scheduled/` no diretório raíz.

> Posts incompletos devem ser salvos em `_drafts/`

### Formato de Nome

Nesta pasta, os arquivos devem ser salvos no mesmo formato que seriam salvos em `_posts/`, incluindo o diretório de idioma.

> Exemplo de nome de arquivo: `2024-08-26-This file will be uploaded on 26 August.md`

### Notas Importantes

- O scheduler publica os posts todos os dias às 🕛 23:30 UTC.
- Ele publicará os posts somente às 23:30 UTC dos respectivos dias agendados; não ocorre às 23:59, caso haja muitos arquivos, pois o scheduler precisa finalizar antes da meia-noite.
- Serão publicados somente arquivos que seguem o padrão `yyyy-mm-dd-title.md`:
  - Isso significa que apenas arquivos Markdown serão publicados.
  - Qualquer arquivo Markdown que não siga esse padrão não será publicado.
- O scheduler funciona movendo os posts do diretório `_scheduled/` para `_posts/`; ele não publica em pastas como `_projects/` ou `_news/`.
- A data no nome do arquivo indica o dia em que o arquivo será publicado:
  - `2024-08-27-file1.md` não será publicado antes nem depois de 27 de agosto de 2024 (o scheduler funciona apenas para posts agendados para o dia presente).
  - `2025-08-27-file2.md` será publicado exatamente em 27 de agosto de 2025.
  - `File3.md` não será publicado.
  - `2026-02-31-file4.md` está programado para ser publicado em 31 de fevereiro de 2026, mas como fevereiro não tem 31 dias, esse arquivo nunca será publicado.

## Configurando um Personal Access Token (PAT) para Atualizações de Citações do Google Scholar

> [!TIP]
> Após configurar o al-folio, você pode querer executar `python3 bin/update_citations.py` para preencher o arquivo `_data/citations.yml` com suas contagens de citações do Google Scholar.

Este projeto inclui um fluxo de trabalho automatizado para atualizar as contagens de citações de suas publicações usando o Google Scholar.
O fluxo de trabalho faz commit das alterações em `_data/citations.yml` diretamente no ramo `main`.
Por padrão, o `GITHUB_TOKEN` será usado para fazer commit das alterações.
No entanto, este token não tem permissão para acionar fluxos de trabalho subsequentes, como o fluxo de trabalho de reconstrução do site.
Para implantar as alterações de `main`, você pode acionar manualmente o fluxo de trabalho `deploy`.

> [!TIP]
> Para garantir que esses commits possam acionar workflows adicionais do GitHub Actions (como reconstruções de site), você pode usar um Personal Access Token (PAT) em vez do token GitHub Actions padrão.
> Se você configurou um PAT, as atualizações de citações acionarão fluxos de trabalho adicionais (como reconstruções de site) após fazer commit das alterações. Para executar a ação com um PAT, você precisa descomentar as seguintes linhas do arquivo de workflow (`update-citations.yml`):
>
> ```yaml
> with:
>   token: ${{ secrets.PAT }}
> ```

### Por que um PAT é necessário?

O GitHub restringe o `GITHUB_TOKEN` padrão de acionar outros fluxos de trabalho quando um commit é feito dentro de um fluxo de trabalho. Usar um PAT supera essa limitação e permite automação completa.

### Como configurar o PAT

1. **Crie um Personal Access Token**
   - Vá para [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens).
   - Clique em "Generate new token" (clássico ou fine-grained).
   - Conceda pelo menos as seguintes permissões:
     - `repo` (para tokens clássicos se repo é privado), `public_repo` (para tokens clássicos se repo é público) ou `contents: read/write` (para tokens fine-grained)
   - Salve o token em algum lugar seguro.

2. **Adicione o PAT como um secret do repositório**
   - Vá para seu repositório no GitHub.
   - Navegue até `Settings` > `Secrets and variables` > `Actions` > `New repository secret`.
   - Nomeie o secret como `PAT` (deve corresponder ao nome usado no fluxo de trabalho).
   - Cole seu PAT e salve.

3. **Uso do fluxo de trabalho**
   O fluxo de trabalho `.github/workflows/update-citations.yml` usa este PAT para fazer commit de atualizações em `_data/citations.yml`.

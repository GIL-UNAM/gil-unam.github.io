# multi-language-al-folio

<div align="center">

[![Pré-visualização](readme_preview/al-folio-preview.png)](https://george-gca.github.io/multi-language-al-folio/)

**Uma versão multilíngue do [tema al-folio](https://github.com/alshedivat/al-folio), um tema [Jekyll](https://jekyllrb.com/) simples, limpo e responsivo para acadêmicos.**

---

[![deploy](https://github.com/george-gca/multi-language-al-folio/actions/workflows/deploy.yml/badge.svg)](https://github.com/george-gca/multi-language-al-folio/actions/workflows/deploy.yml)
[![Status no Netlify](https://api.netlify.com/api/v1/badges/fd22b3da-3970-4612-8dee-5579601589a3/deploy-status)](https://app.netlify.com/sites/multi-language-al-folio/deploys)
[![Mantenedores](https://img.shields.io/badge/maintainers-1-success.svg)](#mantenedores)
[![Contribuidores no GitHub](https://img.shields.io/github/contributors/alshedivat/al-folio.svg)](https://github.com/george-gca/multi-language-al-folio/graphs/contributors/)

[![Versão da Imagem Docker](https://img.shields.io/docker/v/georgegca/multi-language-al-folio?sort=semver&label=docker%20image&color=blueviolet)](https://hub.docker.com/r/georgegca/multi-language-al-folio)
[![Tamanho da Imagem Docker](https://img.shields.io/docker/image-size/georgegca/multi-language-al-folio?sort=date&label=docker%20image%20size&color=blueviolet)](https://hub.docker.com/r/georgegca/multi-language-al-folio)
[![Pulls do Docker](https://img.shields.io/docker/pulls/georgegca/multi-language-al-folio?color=blueviolet)](https://hub.docker.com/r/georgegca/multi-language-al-folio)

[![GitHub release](https://img.shields.io/github/v/release/george-gca/multi-language-al-folio)](https://github.com/george-gca/multi-language-al-folio/releases/latest)
[![Licença no GitHub](https://img.shields.io/github/license/george-gca/multi-language-al-folio?color=blue)](https://github.com/george-gca/multi-language-al-folio/blob/main/LICENSE)
[![Estrelas no GitHub](https://img.shields.io/github/stars/george-gca/multi-language-al-folio)](https://github.com/george-gca/multi-language-al-folio)
[![Forks no GitHub](https://img.shields.io/github/forks/george-gca/multi-language-al-folio)](https://github.com/george-gca/multi-language-al-folio/fork)

[![Code Wiki](https://img.shields.io/badge/Code_Wiki-ask_about_repo-blue?logo=googlegemini)](https://codewiki.google/github.com/george-gca/multi-language-al-folio)
[![DeepWiki](https://img.shields.io/badge/DeepWiki-ask_about_repo-lightcyan)](https://deepwiki.com/george-gca/multi-language-al-folio)

[![en-us](https://img.shields.io/badge/read_me-en--us-blue.svg)](README.md)

</div>

## Comunidade de Usuários

A vibrante comunidade de usuários do **al-folio** está crescendo!
Acadêmicos ao redor do mundo utilizam este tema para suas páginas pessoais, blogs, páginas de laboratórios, assim como para cursos, workshops, conferências, encontros e muito mais.
Confira as páginas da comunidade no [README em inglês](README.md#user-community).
Sinta-se à vontade para adicionar a(s) sua(s) própria(s) página(s) enviando um PR.

## Lighthouse PageSpeed Insights

### Desktop

[![Google Lighthouse PageSpeed Insights](lighthouse_results/desktop/pagespeed.svg)](https://htmlpreview.github.io/?https://github.com/george-gca/multi-language-al-folio/blob/main/lighthouse_results/desktop/george_gca_github_io_multi_language_al_folio_.html)

Execute o teste você mesmo: [Google Lighthouse PageSpeed Insights](https://pagespeed.web.dev/report?url=https%3A%2F%2Fgeorge-gca.github.io%2Fmulti-language-al-folio%2F&form_factor=desktop)

### Mobile

[![Google Lighthouse PageSpeed Insights](lighthouse_results/mobile/pagespeed.svg)](https://htmlpreview.github.io/?https://github.com/george-gca/multi-language-al-folio/blob/main/lighthouse_results/mobile/george_gca_github_io_multi_language_al_folio_.html)

Execute o teste você mesmo: [Google Lighthouse PageSpeed Insights](https://pagespeed.web.dev/report?url=https%3A%2F%2Fgeorge-gca.github.io%2Fmulti-language-al-folio%2F&form_factor=mobile)

## Índice

<!--ts-->

- [multi-language-al-folio](#multi-language-al-folio)
  - [Comunidade de Usuários](#comunidade-de-usuários)
  - [Lighthouse PageSpeed Insights](#lighthouse-pagespeed-insights)
    - [Desktop](#desktop)
    - [Mobile](#mobile)
  - [Índice](#índice)
  - [Começando](#começando)
  - [Instalação e Implantação](#instalação-e-implantação)
  - [Personalizando](#personalizando)
  - [Agentes do GitHub Copilot](#agentes-do-github-copilot)
    - [Agente de Personalização](#agente-de-personalização)
    - [Agente de Documentação](#agente-de-documentação)
  - [Recursos](#recursos)
    - [Suporte Multilíngue](#suporte-multilíngue)
    - [Modo Claro/Escuro](#modo-claroescuro)
    - [Currículo (CV)](#currículo-cv)
    - [Pessoas](#pessoas)
    - [Publicações](#publicações)
    - [Coleções](#coleções)
    - [Layouts](#layouts)
      - [O estilo icônico do Distill](#o-estilo-icônico-do-distill)
      - [Suporte completo para matemática e código](#suporte-completo-para-matemática-e-código)
      - [Fotos, Áudio, Vídeo e mais](#fotos-áudio-vídeo-e-mais)
    - [Outros recursos](#outros-recursos)
      - [Repositórios do GitHub e estatísticas do usuário](#repositórios-do-github-e-estatísticas-do-usuário)
      - [Temas](#temas)
      - [Visualizações de mídia social](#visualizações-de-mídia-social)
      - [Feed Atom (semelhante a RSS)](#feed-atom-semelhante-a-rss)
      - [Postagens relacionadas](#postagens-relacionadas)
      - [Verificações de qualidade de código](#verificações-de-qualidade-de-código)
  - [Perguntas Frequentes](#perguntas-frequentes)
  - [Contribuindo](#contribuindo)
    - [Mantenedores](#mantenedores)
    - [Todos os Colaboradores](#todos-os-colaboradores)
  - [Histórico de Estrelas](#histórico-de-estrelas)
  - [Licença](#licença)

<!--te-->

## Começando

Quer aprender mais sobre Jekyll? Confira [este tutorial](https://www.taniarascia.com/make-a-static-website-with-jekyll/).
Por que Jekyll? Leia [o post no blog do Andrej Karpathy](https://karpathy.github.io/2014/07/01/switching-to-jekyll/)!
Por que escrever um blog? Leia [o post da Rachel Thomas](https://medium.com/@racheltho/why-you-yes-you-should-blog-7d2544ac1045).

## Instalação e Implantação

Para detalhes de instalação e implantação, consulte [INSTALL.md](INSTALL.pt-br.md).

## Personalizando

Para detalhes de personalização, consulte [CUSTOMIZE.md](CUSTOMIZE.pt-br.md).

## Agentes do GitHub Copilot

Este repositório inclui dois agentes especializados do GitHub Copilot para melhorar sua experiência de desenvolvimento:

### Agente de Personalização

O **Agente de Personalização** ajuda você a personalizar seu site al-folio, oferecendo:

- Orientação passo a passo para alterações de configuração
- Modificação direta de arquivos em seu repositório
- Explicação de conceitos técnicos em linguagem simples (ótimo para usuários sem experiência em programação)
- Assistência com tarefas comuns, como atualizar seu CV, adicionar publicações, criar postagens de blog e personalizar temas

Consulte [CUSTOMIZE.md § Agente de Personalização do GitHub Copilot](CUSTOMIZE.pt-br.md#Agente-de-Personalização-GitHub-Copilot) para obter instruções detalhadas de uso.

### Agente de Documentação

O **Agente de Documentação** mantém a documentação do projeto clara e atualizada, realizando:

- Atualização de arquivos de documentação quando os recursos mudam
- Redação em um estilo acessível para acadêmicos e pesquisadores
- Manutenção da sincronização da documentação com a base de código
- Seguindo as melhores práticas de documentação

Consulte [CONTRIBUTING.md § Agentes do GitHub Copilot](CONTRIBUTING.pt-br.md#Agentes-do-GitHub-Copilot) para obter mais informações.

> **Requisitos:** Ambos os agentes exigem uma assinatura do [GitHub Copilot](https://github.com/features/copilot). Para mais informações sobre o GitHub Copilot e como usar agentes, consulte a [documentação do GitHub Copilot](https://docs.github.com/en/copilot).

## Recursos

### Suporte Multilíngue

Em uma versão anterior, isso era feito utilizando o [jekyll-multiple-languages-plugin](https://github.com/kurtsson/jekyll-multiple-languages-plugin), mas como o repositório do plugin foi arquivado, ele foi substituído pelo plugin [polyglot](https://github.com/untra/polyglot).
Este plugin foi criado com base nas funcionalidades do [jekyll-multiple-languages-plugin](https://github.com/kurtsson/jekyll-multiple-languages-plugin) e é mantido ativamente. Para mais informações sobre essa mudança, veja [UPGRADING.md](UPGRADING.md).

O idioma padrão (usado como alternativa caso um link para outro idioma não seja encontrado) será o definido como `default_lang` no arquivo [\_config.yml](_config.yml).
Ao utilizar dois idiomas, o tema exibirá um botão no cabeçalho que alterna diretamente para o outro idioma.

![Alternar idioma](readme_preview/multi-language-diff-1.png)
![Voltar o idioma](readme_preview/multi-language-diff-2.png)

Também é possível exibir a bandeira do país em vez do nome do idioma.

![Usar bandeira do país em vez do nome do idioma](readme_preview/country_flag.png)

Ao utilizar três ou mais idiomas, um menu dropdown será criado com todas as línguas disponíveis.

![Alternar idioma entre 3 ou mais](readme_preview/multi-language-3-or-more.png)

Note que, ao longo dos arquivos [README.md](README.pt-br.md) e [CUSTOMIZE.md](CUSTOMIZE.pt-br.md), o idioma padrão é o inglês (LANG = en-us).
Você deve ter um arquivo ou caminho equivalente para cada idioma definido no [\_config.yml](_config.yml).
Por exemplo, se você definiu `languages: ["en-us", "pt-br"]`, deverá ter 2 versões do arquivo `_data/LANG/cv.yml`: [\_data/en-us/cv.yml](_data/en-us/cv.yml) e [\_data/pt-br/cv.yml](_data/pt-br/cv.yml).

---

### Modo Claro/Escuro

Este template possui um modo claro/escuro embutido.
Ele detecta a preferência de esquema de cores do usuário e alterna automaticamente.
Você também pode alternar manualmente entre os modos claro e escuro clicando no ícone de sol/lua no canto superior direito da página.

<p align="center">
<img src="readme_preview/light.png" width=400>
<img src="readme_preview/dark.png" width=400>
</p>

---

### Currículo (CV)

Atualmente, existem 2 formas de gerar o conteúdo da página do currículo.
A primeira utiliza um arquivo json localizado em [assets/json/resume_LANG.json](assets/json/resume_en-us.json).
Trata-se de um [padrão conhecido](https://jsonresume.org/) para criar um currículo programaticamente.
A segunda, atualmente utilizada como alternativa quando o arquivo json não for encontrado, usa um arquivo yml localizado em [\_data/LANG/cv.yml](_data/en-us/cv.yml).
Esta foi a forma original de criar o conteúdo da página do currículo e, por ser mais legível, decidimos mantê-la como opção.

Ou seja, se não houver dados de currículo definidos no [\_config.yml](_config.yml) e carregados via um arquivo json, o conteúdo de [\_data/LANG/cv.yml](_data/en-us/cv.yml) será usado como alternativa.

[![Pré-visualização do Currículo](readme_preview/cv.png)](https://george-gca.github.io/multi-language-al-folio/cv/)

---

### Pessoas

Você pode criar uma página de pessoas caso deseje apresentar mais de uma pessoa.
Cada pessoa pode ter sua própria bio breve, foto de perfil e definir se todas as pessoas aparecerão em lados opostos ou iguais.

[![Pré-visualização de Pessoas](readme_preview/people.png)](https://george-gca.github.io/multi-language-al-folio/people/)

---

### Publicações

A página de publicações é gerada automaticamente a partir da sua bibliografia em BibTex.
Basta editar [\_bibliography/papers.bib](_bibliography/papers.bib).
Você também pode adicionar novos arquivos `*.bib` e personalizar a aparência de suas publicações editando [\_pages/LANG/publications.md](_pages/en-us/publications.md).
Por padrão, as publicações são ordenadas por ano, exibindo as mais recentes primeiro.
Você pode alterar esse comportamento e outros detalhes na seção `Jekyll Scholar` do arquivo [\_config.yml](_config.yml).

Você pode adicionar informações extras a uma publicação, como um arquivo PDF na pasta [assets/pdf/](assets/pdf/) e informar o caminho para o arquivo no registro BibTeX com o campo `pdf`.
Alguns dos campos suportados são: `abstract`, `altmetric`, `arxiv`, `bibtex_show`, `blog`, `code`, `dimensions`, `doi`, `eprint`, `html`, `isbn`, `pdf`, `pmid`, `poster`, `slides`, `supp`, `video` e `website`.

[![Pré-visualização das Publicações](readme_preview/publications.png)](https://george-gca.github.io/multi-language-al-folio/publications/)

---

### Coleções

Este tema Jekyll utiliza `collections` para que você possa categorizar seu trabalho.
O tema já vem com duas coleções padrão: `news` e `projects`.
Itens da coleção `news` são automaticamente exibidos na página inicial.
Itens da coleção `projects` são apresentados em uma grade responsiva na página de projetos.

[![Pré-visualização dos Projetos](readme_preview/projects.png)](https://george-gca.github.io/multi-language-al-folio/projects/)

Você pode facilmente criar suas próprias coleções, como apps, contos, cursos ou qualquer outro trabalho criativo.
Para isso, edite as coleções no arquivo [\_config.yml](_config.yml), crie uma pasta correspondente e uma página de entrada para sua coleção, similar ao arquivo `_pages/projects.md`.

---

### Layouts

O **al-folio** vem com layouts elegantes para páginas e posts de blog.

#### O estilo icônico do Distill

O tema permite que você crie posts de blog no estilo do [distill.pub](https://distill.pub/):

[![Pré-visualização Distill](readme_preview/distill.png)](https://george-gca.github.io/multi-language-al-folio/blog/2018/distill/)

Para mais detalhes sobre como criar posts no estilo distill utilizando as tags `<d-*>`, consulte [o exemplo](https://george-gca.github.io/multi-language-al-folio/blog/2018/distill/).

#### Suporte completo para matemática e código

O **al-folio** oferece suporte rápido para renderização de fórmulas matemáticas via [MathJax](https://www.mathjax.org/) e para realce de sintaxe de código utilizando o [estilo do GitHub](https://github.com/jwarby/jekyll-pygments-themes).
Também suporta gráficos com [chartjs](https://www.chartjs.org/), diagramas com [mermaid](https://mermaid-js.github.io/mermaid/#/), e figuras em [TikZ](https://tikzjax.com/).

<p align="center">
<a href="https://george-gca.github.io/multi-language-al-folio/blog/2015/math/" target="_blank"><img src="readme_preview/math.png" width=400 alt="exemplo de post com matemática"></a>
<a href="https://george-gca.github.io/multi-language-al-folio/blog/2015/code/" target="_blank"><img src="readme_preview/code.png" width=400 alt="exemplo de post com código"></a>
</p>

#### Fotos, Áudio, Vídeo e mais

A formatação de fotos é simplificada utilizando o sistema de grid do [Bootstrap](https://getbootstrap.com/docs/4.4/layout/grid/).
Crie facilmente grades bonitas em seus posts e páginas de projetos, com suporte também para adição de [vídeo](https://george-gca.github.io/multi-language-al-folio/blog/2023/videos/) e [áudio](https://george-gca.github.io/multi-language-al-folio/blog/2023/audios/):

<p align="center">
  <a href="https://george-gca.github.io/multi-language-al-folio/projects/1_project/">
    <img src="readme_preview/photos-screenshot.png" width="75%">
  </a>
</p>

---

### Outros recursos

#### Repositórios do GitHub e estatísticas do usuário

O **al-folio** utiliza [github-readme-stats](https://github.com/anuraghazra/github-readme-stats) e [github-profile-trophy](https://github.com/ryo-ma/github-profile-trophy) para exibir repositórios e estatísticas do usuário na página `/repositories/`.

[![Pré-visualização de Repositórios](readme_preview/repositories.png)](https://george-gca.github.io/multi-language-al-folio/repositories/)

Edite o arquivo `_data/repositories.yml` e altere as listas `github_users` e `github_repos` para incluir seu perfil e repositórios desejados na página `/repositories/`.

Você também pode usar os códigos abaixo para exibir isso em outras páginas.

```html
<!-- código para usuários do GitHub -->
{% if site.data.repositories.github_users %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %} {% include repository/repo_user.liquid username=user %} {% endfor %}
</div>
{% endif %}

<!-- código para troféus do GitHub -->
{% if site.repo_trophies.enabled %} {% for user in site.data.repositories.github_users %} {% if site.data.repositories.github_users.size > 1 %}
<h4>{{ user }}</h4>
{% endif %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
</div>
{% endfor %} {% endif %}

<!-- código para repositórios do GitHub -->
{% if site.data.repositories.github_repos %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %} {% include repository/repo.liquid repository=repo %} {% endfor %}
</div>
{% endif %}
```

---

#### Temas

Uma variedade de cores de tema bonitas foi selecionada para você escolher. O padrão é roxo, mas você pode alterá-lo rapidamente editando a variável `--global-theme-color` no arquivo `_sass/_themes.scss`. Outras variáveis de cor estão listadas lá também. As opções de cor de tema disponíveis podem ser encontradas em `_sass/_variables.scss`. Você também pode adicionar suas próprias cores a este arquivo, atribuindo a cada uma um nome para facilitar o uso em todo o modelo.

---

#### Visualizações de mídia social

**al-folio** suporta imagens de visualização em mídias sociais. Para ativar essa funcionalidade, você precisa definir `serve_og_meta` para `true` em seu `_config.yml`. Depois de fazer isso, todas as páginas do seu site incluirão dados do Open Graph no elemento head HTML.

Você precisará então configurar qual imagem exibir nas visualizações de mídia social do seu site. Isso pode ser configurado por página, definindo a variável de página `og_image`. Se para uma página individual essa variável não for definida, o tema usará como fallback uma variável `og_image` em todo o site, configurável em seu `_config.yml`. Nos casos específicos da página e em todo o site, a variável `og_image` precisa conter a URL da imagem que deseja exibir nas visualizações de mídia social.

---

#### Feed Atom (semelhante a RSS)

Ele gera um feed Atom (semelhante a RSS) de suas postagens, útil para leitores de Atom e RSS. O feed é acessível simplesmente digitando após sua página inicial `/feed.xml`. Por exemplo, assumindo que o seu ponto de montagem do site seja a pasta principal, você pode digitar `yourusername.github.io/feed.xml`

---

#### Postagens relacionadas

Por padrão, haverá uma seção de postagens relacionadas na parte inferior das postagens do blog. Estas são geradas selecionando as `max_related` postagens mais recentes que compartilham pelo menos `min_common_tags` tags com a postagem atual. Se você não quiser exibir postagens relacionadas em uma postagem específica, simplesmente adicione `related_posts: false` ao front matter da postagem. Se quiser desativar para todas as postagens, simplesmente defina `enabled` para false na seção `related_blog_posts` em `_config.yml`.

---

#### Verificações de qualidade de código

Atualmente, executamos algumas verificações para garantir que a qualidade do código e o site gerado sejam bons. As verificações são feitas usando GitHub Actions e as seguintes ferramentas:

- [Prettier](https://prettier.io/) - verificar se a formatação do código segue o guia de estilo
- [lychee](https://lychee.cli.rs/) - verificar links quebrados
- [Axe](https://github.com/dequelabs/axe-core) (necessário executar manualmente) - fazer testes de acessibilidade

Decidimos manter as execuções do `Axe` manuais porque corrigir os problemas não é direto e pode ser difícil para pessoas sem conhecimento de desenvolvimento web.

## Perguntas Frequentes

Para perguntas frequentes, consulte [FAQ.pt-br.md](FAQ.pt-br.md).

## Contribuindo

Contribuições para multi-language-al-folio são muito bem-vindas! Antes de começar, dê uma olhada em [as orientações](CONTRIBUTING.pt-br.md).

Se você gostaria de melhorar a documentação ou corrigir uma inconsistência ou bug menor, sinta-se livre para enviar um PR diretamente para `main`. Para problemas/bugs mais complexos ou solicitações de recursos, abra uma issue usando o modelo apropriado.

### Mantenedores

Nossos colaboradores mais ativos são bem-vindos para se juntar à equipe de mantenedores. Se estiver interessado, entre em contato!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://maruan.alshedivat.com"><img src="https://avatars.githubusercontent.com/u/2126561?v=4" width="100px;" alt=""/><br /><sub><b>Maruan</b></sub></a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://rohandebsarkar.github.io"><img src="https://avatars.githubusercontent.com/u/50144004?v=4" width="100px;" alt=""/><br /><sub><b>Rohan Deb Sarkar</b></sub></a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://amirpourmand.ir"><img src="https://avatars.githubusercontent.com/u/32064808?v=4" width="100px;" alt=""/><br /><sub><b>Amir Pourmand</b></sub></a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://george-gca.github.io/"><img src="https://avatars.githubusercontent.com/u/31376482?v=4" width="100px;" alt=""/><br /><sub><b>George</b></sub></a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

### Todos os Colaboradores

<a href="https://contrib.rocks">
  <img src="https://contrib.rocks/image?repo=alshedivat/al-folio&max=500&columns=24" />
</a>

## Histórico de Estrelas

<a href="https://star-history.com/#george-gca/multi-language-al-folio&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=george-gca/multi-language-al-folio&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=george-gca/multi-language-al-folio&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=george-gca/multi-language-al-folio&type=Date" />
  </picture>
</a>

## Licença

O tema está disponível como código aberto sob os termos da [Licença MIT](https://github.com/george-gca/multi-language-al-folio/blob/main/LICENSE).

Originalmente, **al-folio** foi baseado no tema [\*folio](https://github.com/bogoli/-folio) (publicado por [Lia Bogoev](https://liabogoev.com) e sob a licença MIT). Desde então, ele recebeu uma reescrita completa dos estilos e muitos recursos legais adicionais.

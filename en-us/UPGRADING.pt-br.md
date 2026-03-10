# Atualizando

A partir de 15 de janeiro de 2024, o repositório [jekyll-multiple-languages-plugin](https://github.com/kurtsson/jekyll-multiple-languages-plugin) foi arquivado por seu proprietário e agora é somente leitura, o que significa que não receberá mais atualizações. Conforme discutido em [#17](https://github.com/george-gca/multi-language-al-folio/issues/17), uma possível solução era substituir o plugin por [jekyll-polyglot](https://github.com/untra/polyglot). Esta mudança foi implementada a partir da versão 1.11.0 deste tema.

## Mudanças no projeto

Algumas mudanças foram necessárias devido à mudança para `polyglot`. Mais especificamente:

- todos os usos de `site.lang` foram substituídos por `site.active_lang`, pois é assim que o plugin `polyglot` armazena o idioma ativo
- movemos o conteúdo de `_i18n/` para seus respectivos diretórios `LANG/` dentro dos diretórios `_news/`, `_pages/`, `_posts/` e `_projects/`. Por exemplo: `_i18n/en-us/_pages/about.md` foi movido para `_pages/en-us/about.md`
- algumas modificações foram feitas no arquivo `_config.yml` relacionadas ao plugin `polyglot`
- o conteúdo dos arquivos `_i18n/LANG.yml` foi movido para `_data/LANG/strings.yml`. Observe que nem todas as variáveis foram movidas. O resto das variáveis foi usado diretamente no conteúdo das páginas

### Mudanças de diretórios

[Anteriormente](https://github.com/george-gca/multi-language-al-folio/tree/8f1528a4816aaf16e916791ae0f8cddbecf2416a), algumas páginas eram compostas por uma página principal, como a página [\_pages/about.md](https://github.com/george-gca/multi-language-al-folio/blob/8f1528a4816aaf16e916791ae0f8cddbecf2416a/_pages/about.md), e uma subpágina traduzida, como [\_i18n/en-us/\_pages/about.md](https://github.com/george-gca/multi-language-al-folio/blob/8f1528a4816aaf16e916791ae0f8cddbecf2416a/_i18n/en-us/_pages/about.md). Esta estrutura foi alterada para uma única página com todo o conteúdo no mesmo arquivo, um arquivo para cada idioma em [\_pages/LANG/](https://github.com/george-gca/multi-language-al-folio/tree/main/_pages/en-us). Essa mudança foi feita para simplificar a estrutura do tema e facilitar sua manutenção. Também permite ter páginas completamente diferentes para idiomas diferentes, se necessário.

### Strings traduzidas



### Outras informações

Devido ao uso do plugin `polyglot`, muitos dos workarounds anteriores se tornaram desnecessários. Por exemplo, o filtro `t` foi usado para traduzir as variáveis `page.title` e `page.description` em muitos arquivos diferentes. Agora, os valores dessas variáveis podem ser usados diretamente. O mesmo se aplica a algumas soluções relacionadas a redirecionamentos de páginas ou uso de assets. Por exemplo, no arquivo antigo `_layouts/archive-category.liquid` (atualmente [\_layouts/archive.liquid](_layouts/archive.liquid)), tínhamos este trecho de código:

```liquid
{% assign is_asset = post.redirect | startswith: '/assets/' %}
{% if is_asset %}
  <a class="post-link" href="{{ post.redirect | prepend: site.baseurl_root }}">{{ post.title }}</a>
{% else %}
  <a class="post-link" href="{{ post.redirect | prepend: site.baseurl }}">{{ post.title }}</a>
{% endif %}
```

Que era responsável por avaliar se `post.redirect` era um asset ou uma página e construir o link correto considerando o idioma atual. Agora, podemos simplesmente usar:

```liquid
<a class="post-link" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
```

já que o plugin `polyglot` cuida do prefixo de idioma nas URLs.

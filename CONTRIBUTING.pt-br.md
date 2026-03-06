# Contribuindo para o multi-language-al-folio

Obrigado por considerar contribuir para o al-folio ou para sua versão multilíngue! Por favor, verifique se sua contribuição está relacionada ao próprio template ou ao aspecto multilíngue dele. Se for o primeiro caso, considere fazê-la no repositório original do [al-folio](https://github.com/alshedivat/al-folio/). Se for o segundo, siga as instruções abaixo.

## Pull Requests

Agradecemos seus pull requests (PRs).
Para correções menores (por exemplo, melhorias na documentação), sinta-se à vontade para enviar um PR diretamente.
Se você deseja implementar um novo recurso ou corrigir um bug, por favor, certifique-se de que você (ou outra pessoa) já abriu uma issue apropriada primeiro; no seu PR, mencione a issue que ele resolve.

Note que, desde [#2048](https://github.com/alshedivat/al-folio/pull/2048), o al-folio utiliza o [formater prettier](https://prettier.io/) para seu código, o que significa que todo código novo enviado deve estar em conformidade com esse padrão. Se você não tem o `prettier` instalado no seu ambiente de desenvolvimento e a verificação de código com o `prettier` falhar ao enviar um PR, você pode verificar a ação que falhou em nosso repositório. Nessa ação haverá um artifact com um diff em HTML mostrando as alterações necessárias.

### Adicionando novas informações de mídia social

Para adicionar novas informações de mídia social, há alguns lugares que você pode precisar modificar. Atualmente, o modelo suporta ícones do [Academicons](https://jpswalsh.github.io/academicons/), [Font Awesome](https://fontawesome.com/) e [Tabler Icons](https://tabler.io/icons). Para um exemplo de PR, consulte [Add HAL id to socials](https://github.com/alshedivat/al-folio/pull/3206/files). Note que as informações em todos estes arquivos estão ordenadas alfabeticamente.

- \_data/socials.yml - suas informações de mídia social
- \_includes/metadata.liquid - adicione informações de mídia social aos metadados do site
- \_includes/social.liquid - onde o ícone de mídia social será exibido
- \_scripts/search.liquid.js - faça com que as informações de mídia social apareçam na pesquisa

## Agentes do GitHub Copilot

Este repositório inclui dois agentes do GitHub Copilot especializados para auxiliar no desenvolvimento e documentação:

### Agente de Personalização

O **Agente de Personalização** (`.github/agents/customize.agent.md`) ajuda os usuários a personalizar seu site al-folio. Ele:

- Orienta você através da modificação de arquivos de configuração, adição de conteúdo e personalização do tema
- Explica conceitos técnicos em linguagem simples para usuários sem experiência em programação
- Aplica alterações diretamente aos seus arquivos de repositório
- Fornece instruções passo a passo para tarefas comuns de personalização

Para usar o agente de personalização, você precisa ter o [GitHub Copilot](https://github.com/features/copilot) habilitado em seu repositório. O agente pode ajudar com tarefas como alterar informações do site, atualizar seu CV, adicionar publicações, criar postagens de blog, personalizar cores de tema e muito mais.

### Agente de Documentação

O **Agente de Documentação** (`.github/agents/docs.agent.md`) mantém a documentação do projeto. Ele:

- Atualiza e mantém arquivos de documentação (README.md, INSTALL.md, CUSTOMIZE.md, FAQ.md, CONTRIBUTING.md)
- Mantém a documentação sincronizada com mudanças de código
- Escreve documentação clara e concisa para usuários sem conhecimento técnico
- Segue padrões de documentação e melhores práticas

O agente de documentação é principalmente destinado a mantenedores e colaboradores que estão atualizando a documentação do projeto.

### Importante: Verifique a Saída do Agente

Embora esses agentes sejam projetados para ajudá-lo, **eles podem cometer erros ou produzir informações incorretas**. Sempre revise e verifique a saída antes de aplicá-la ao seu repositório:

- **Revise código e mudanças de configuração** – Verifique se as modificações sugeridas estão corretas e atendem às suas necessidades
- **Teste alterações localmente** – Antes de fazer push para o GitHub, teste as alterações localmente (usando Docker ou instalação nativa)
- **Verifique a sintaxe** – Certifique-se de que quaisquer arquivos YAML, Markdown ou de configuração tenham sintaxe correta
- **Verifique a documentação** – Se o agente gerar documentação, revise-a quanto à exatidão e clareza
- **Não aplique alterações cegamente** – Entenda o que está sendo alterado e por quê
- **Execute seu site** – Após aplicar as alterações, execute seu site localmente e verifique se tudo funciona conforme esperado

**Exemplo:** Se um agente sugere uma entrada BibTeX ou mudança de configuração, verifique se a sintaxe está correta e corresponde ao estilo existente em seu repositório antes de fazer commit.

### Como Ativar Agentes

Os agentes GitHub Copilot estão disponíveis para usuários com assinaturas do GitHub Copilot. Para usar esses agentes:

1. Certifique-se de ter o [GitHub Copilot](https://github.com/features/copilot) habilitado para sua conta
2. Abra seu repositório em um editor com suporte ao GitHub Copilot (como VS Code com a extensão GitHub Copilot)
3. Os agentes estarão automaticamente disponíveis com base nos arquivos de configuração em `.github/agents/`. Para mais informações, veja [Usando agentes customizados no seu IDE](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents#using-custom-agents-in-your-ide).

Para mais informações sobre agentes do GitHub Copilot e como usá-los, veja a [documentação do GitHub Copilot](https://docs.github.com/en/copilot).

## Issues

Utilizamos as issues do GitHub para rastrear bugs e solicitações de novos recursos.
Antes de enviar uma issue, por favor, certifique-se de:

1. Ter lido a seção [FAQ](FAQ.pt-br.md) do README e que sua pergunta NÃO está respondida lá.
2. Ter feito o possível para garantir que sua issue NÃO seja uma duplicata de uma das [issues anteriores](https://github.com/george-gca/multi-language-al-folio/issues).
3. Que sua issue seja de fato um bug (comportamento inesperado ou indesejado) ou uma solicitação de recurso.
   Se for apenas uma pergunta, por favor, faça-a no fórum de [Discussões](https://github.com/george-gca/multi-language-al-folio/discussions).

Ao enviar uma issue, por favor, certifique-se de usar o template apropriado.

## Licença

Ao contribuir para o multi-language-al-folio, você concorda que suas contribuições serão licenciadas
sob os termos do arquivo LICENSE localizado na raiz do diretório fonte.

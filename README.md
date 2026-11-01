# Verdão sem Perrengues
`npm install && npm run dev` (localhost:3000) · `npm run build` para produção (Vercel ou Cloudflare Pages).

Todo conteúdo fica em `data/*.json`: edite e publique, sem código.
- `checklist.json`: itens, condições (`quando`), prazo em dias antes da final, `fonte` (URL oficial) e `afiliado` (id de parceiro).
- `custos.json`: preencha as premissas (null = vazio) e a data de atualização.
- `guias.json`, `dia-do-jogo.json`, `parceiros.json`, `site.json` (links dos canais).

Nunca publique regra, valor ou prazo sem fonte oficial e data de verificação. Perfil e checklist ficam no localStorage do aparelho (sem login, sem banco).

## Novidades
- `data/faq.json`: edite respostas (`r`); `pop:1` destaca como popular.
- `data/perfil.json`: números e texto da seção "Como você vai para Montevidéu?".

## Resolver pendências
- `data/pendencias.json`: cards de pendência (esim, wise, hosp), chave = id do item no checklist.
- `data/parceiros.json`: cadastre os afiliados aprovados em `url`; sem url, o botão não aparece.
- A página `/parceiros` é só de transparência.

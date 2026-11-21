# Site do MocoTube

Abra `index.html` para testar localmente. A página usa HTML, CSS e JavaScript e pode ser publicada sem etapa de build.

## Publicar no GitHub Pages

1. Extraia o ZIP de publicação e crie um repositório público no GitHub, por exemplo `mocotube-site`.
2. Em **Add file → Upload files**, envie o conteúdo extraído com `index.html` na raiz. Mantenha a pasta `assets` e os arquivos `LICENSE`, `MocoTube-Site-Codigo.zip` e `.nojekyll`. Confirme o commit na branch `main`.
3. Em **Settings → Pages**, selecione **Deploy from a branch**, depois **main** e **/(root)**. Clique em **Save**.
4. O endereço publicado aparece em **Settings → Pages**. Use esse endereço para testar os downloads e a galeria no navegador.

[Documentação do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Atualizar

- O botão Windows aponta para o MediaFire de PiresHUB.
- O botão Android aponta para o APK assinado no MediaFire. Ao publicar uma nova versão, atualize o endereço no `index.html`.
- O botão **Ver Código-Fonte** baixa o código da landing page. Depois de publicar o repositório, você pode trocar esse endereço pela URL do GitHub no `index.html` e remover o atributo `download`.
- O código da landing page usa licença MIT. Os instaladores, logotipos, capas e capturas têm seus próprios titulares e licenças.

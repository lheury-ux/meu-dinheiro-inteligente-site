MEU DINHEIRO INTELIGENTE — SITE GLASS PREMIUM

CONTEÚDO
- index.html: site de apresentação responsivo
- login.html + auth.js: login e cadastro por e-mail via Supabase Auth
- config.js: configuração pública do Supabase (em branco por segurança)
- privacidade.html e termos.html: modelos preliminares a revisar
- style.css: visual Glass Premium

ATENÇÃO: O SITE NÃO ESTÁ PUBLICADO E NÃO TEM LOGIN HABILITADO ATÉ A CONFIGURAÇÃO.
Não foram criadas contas GitHub, domínio, senhas ou contas bancárias.

1) ANTES DE PUBLICAR
- Em privacidade.html e termos.html, substitua os campos [PREENCHER...] por dados verdadeiros.
- Revise a política de privacidade para refletir o tratamento de dados REAL do seu aplicativo.
- Não anuncie integração bancária como ativa até estar em produção e testada.

2) CONFIGURAR LOGIN (OPCIONAL)
- Abra config.js.
- Informe SOMENTE a URL pública e a publishable/anon key do MESMO projeto Supabase usado pelo app.
- NUNCA publique service_role, secret keys ou senhas.
- No painel Supabase > Authentication > URL Configuration, adicione o endereço real do site nas URLs de redirecionamento permitidas, quando aplicável.
- Verifique se cadastro por e-mail está habilitado, se confirmação de e-mail é exigida e se as políticas de segurança/RLS estão corretas.
- Teste o login depois de publicar; esta área não é o painel financeiro do app.

3) PUBLICAR NO GITHUB PAGES
- Crie ou acesse uma conta GitHub (a senha é escolhida somente no GitHub).
- Crie um repositório público, por exemplo 'meu-dinheiro-inteligente-site'.
- Envie os arquivos desta pasta para a raiz do repositório.
- Vá em Settings > Pages > Build and deployment > Deploy from a branch.
- Escolha branch 'main' e pasta '/ (root)', salve e aguarde o endereço HTTPS.
- Confirme que index.html, privacidade.html e termos.html estão acessíveis publicamente.
- Use o endereço REAL publicado no formulário da Pluggy.

4) IMPORTANTE
- O site é uma apresentação independente. Não substitui o app React Native.
- A prévia financeira usa valores ilustrativos, não consulta o banco ou Supabase.
- O login web usa Supabase Auth quando configurado, mas não carrega os dados financeiros.
- GitHub Pages é hospedagem pública estática; não coloque segredos nos arquivos.
- Para conexão bancária real e Pix, serão necessários serviços seguros de backend, consentimento e parceiros habilitados.

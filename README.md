# Learning

- pnpm
  - スピード比較
    - https://github.com/pnpm/benchmarks-of-javascript-package-managers#lots-of-files
  - yarn でもええな・・・
- turborepo
  - チュートリアル
    - https://turbo.build/repo/docs/getting-started/create-new
  - ちゃんとやるなら turbo.json でキチンと pipeline を書かないといけない
  - 色々めんどくさいがフロントエンドとバックエンドで共通モジュール使いたいしなぁという感じ
  - vercel でリモートキャッシュ使うの気にはなる
    - CI/CDとか効率化出来そうな雰囲気を感じた
    - > Remote Caching is a powerful feature of Turborepo, but with great power comes great responsibility. Make sure you are caching correctly first and double check handling of environment variables. Please also remember Turborepo treats logs as artifacts, so be aware of what you are printing to the console.
    - https://turbo.build/repo/docs/core-concepts/remote-caching#artifact-integrity-and-authenticity-verification
    - Custom Remote Caches
      - https://turbo.build/repo/docs/core-concepts/remote-caching#custom-remote-caches
    - 権限管理が必要になる？
      - 社内・社外・他部署や分社？
- tsconfig
  - やっぱ記憶するのはキツいので都度リファレンス引くのが良いか
- node.js
  - http
    - https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
    - https://nodejs.org/api/http.html#httpgeturl-options-callback
- bash
  - macで動かす時にデバッグ
- powershell
  - お久しぶりです

# rule34-electron
обёртка для рул 34 с блокировщиком рекламы
# почему это существует?
я сделал это по приколу потому что один челик сказал в дикскорде
# как установить?
просто скачай [appimage](https://github.com/fishcheese/rule34-electron/releases/) и запусти

так же эта прога есть в моём репозитории shit package manager, просто пропиши `spm add https://raw.githubusercontent.com/fishcheese/spm-repo/refs/heads/main/repo.json` и `spm install rule34-electron`
# как сбилдить?
```
git clone https://github.com/fishcheese/rule34-electron/
cd rule34-electron
npm install
npm install npm install electron --save-dev
npm install --save-dev electron-builder
npm install --save @cliqz/adblocker-electron
npm run dist
```

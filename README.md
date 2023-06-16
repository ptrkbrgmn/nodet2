Bygga
npm run build

Bygga enskild app
npm run build --workspace ./packages/<app>

Starta enskild app
npm run start --workspace ./packages/<app>

Kör tester för enskild app
npm run test --workspace ./packages/<app>

---

Setup:

Define the dependencies between the packages:
npm install @nodet2/core -w @nodet2/academy
npm install @nodet2/core -w @nodet2/event

Bra info:
https://daveiscoding.com/nodejs-typescript-monorepo-via-npm-workspaces
https://earthly.dev/blog/setup-typescript-monorepo/ (dock en del typos)

## Monorepo - Typescript NPM workspaces

### Installera, bygg, lint, test

```shell
./re-initialize
```

### Bygga allt

```shell
npm run build
```

### Define dependencies between packages

```shell
npm install @node2/core -w @nodet2/<app1>
npm install @node2/core -w @nodet2/<app2>
```

### Bygga enskild app

```shell
npm run build --workspace ./packages/<app>
```

### Starta enskild app

```shell
npm run start --workspace ./packages/<app>
```

### Kör tester för enskild app

```shell
npm run test --workspace ./packages/<app>
```

### Define the dependencies between packages

```shell
npm install @nodet2/core -w @nodet2/academy
npm install @nodet2/core -w @nodet2/event
```

### Se config

Antingen root dir eller i package root dir

```shell
nodet2/packages/<app> (main) $ ts-node --showConfig
nodet2/packages/<app> (main) $ npx tsc --showConfig
```

---

### Bra info/exempel

https://daveiscoding.com/nodejs-typescript-monorepo-via-npm-workspaces
https://earthly.dev/blog/setup-typescript-monorepo/ (dock en del typos)

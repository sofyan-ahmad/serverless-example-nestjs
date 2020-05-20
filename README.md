# serverless-example-nestjs

This is an example of creating a function that runs as nestjs using the serverless framework.
Sample publish. https://hello.magishift.com/

## How to use

### Prepare

```
$ npm install @nestjs/cli serverless -g
$ git clone https://github.com/sofyan-ahmad/serverless-example-nestjs.git 【projectName】
$ cd 【projectName】
$ npm install
$ npm start
```

### Development

#### use NestCLI

```
$ npm start
```

Then browse http://localhost:3000

#### use serverless-offline

**after also doing an: `npm run build`**

```bash
$ sls offline
```

Then browse http://localhost:3000

## How to Deploy

```bash
$ npm run build && sls deploy
```

## Options

### Hot start

See : https://serverless.com/blog/keep-your-lambdas-warm/

These behavior can be fixed with the plugin serverless-plugin-warmup

1 Install the plugin

```
$ npm install serverless-plugin-warmup --save-dev
```

2 Enable the plugin

```
plugins:
  - serverless-offline
  - serverless-dotenv-plugin
  - serverless-domain-manager
  - serverless-plugin-optimize
  - serverless-pseudo-parameters

custom:
  # Enable warmup on all functions (only for production and staging)
  warmup:
      - production
      - staging
```

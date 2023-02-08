# Angular 13

## Get started

### Clone the repo

```shell
git clone https://github.com/tatendamar/angularAssessment.git
cd angularAssessment
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
yarn install
ng serve
```

The `ng serve` command serves a dev environment(compiles TypeScript and copies assets) the application into watches for changes to the source files, on port `4200`.

Shut it down manually with `Ctrl-C`.

#### npm scripts

These are the most useful commands defined in `package.json`:

- `ng serve` - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
- `npm run build` - runs the TypeScript compiler and asset copier once.
- `npm run build:watch` - runs the TypeScript compiler and asset copier in "watch mode"; when changes occur to source files, they will be recompiled or copied into `dist/`.

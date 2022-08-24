# Angularfourteenelement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

```bash
$ time ng new --package-manager=yarn --routing=true --strict=true --style=scss --view-encapsulation=ShadowDom angularfourteenelement
CREATE angularfourteenelement/README.md (1076 bytes)
CREATE angularfourteenelement/.editorconfig (274 bytes)
CREATE angularfourteenelement/.gitignore (548 bytes)
CREATE angularfourteenelement/angular.json (3221 bytes)
CREATE angularfourteenelement/package.json (1053 bytes)
CREATE angularfourteenelement/tsconfig.json (863 bytes)
CREATE angularfourteenelement/.browserslistrc (600 bytes)
CREATE angularfourteenelement/karma.conf.js (1439 bytes)
CREATE angularfourteenelement/tsconfig.app.json (287 bytes)
CREATE angularfourteenelement/tsconfig.spec.json (333 bytes)
CREATE angularfourteenelement/.vscode/extensions.json (130 bytes)
CREATE angularfourteenelement/.vscode/launch.json (474 bytes)
CREATE angularfourteenelement/.vscode/tasks.json (938 bytes)
CREATE angularfourteenelement/src/favicon.ico (948 bytes)
CREATE angularfourteenelement/src/index.html (308 bytes)
CREATE angularfourteenelement/src/main.ts (448 bytes)
CREATE angularfourteenelement/src/polyfills.ts (2338 bytes)
CREATE angularfourteenelement/src/styles.scss (80 bytes)
CREATE angularfourteenelement/src/test.ts (749 bytes)
CREATE angularfourteenelement/src/assets/.gitkeep (0 bytes)
CREATE angularfourteenelement/src/environments/environment.prod.ts (51 bytes)
CREATE angularfourteenelement/src/environments/environment.ts (658 bytes)
CREATE angularfourteenelement/src/app/app-routing.module.ts (245 bytes)
CREATE angularfourteenelement/src/app/app.module.ts (393 bytes)
CREATE angularfourteenelement/src/app/app.component.scss (0 bytes)
CREATE angularfourteenelement/src/app/app.component.html (23115 bytes)
CREATE angularfourteenelement/src/app/app.component.spec.ts (1121 bytes)
CREATE angularfourteenelement/src/app/app.component.ts (227 bytes)
✔ Packages installed successfully.
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint: 
hint: 	git config --global init.defaultBranch <name>
hint: 
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint: 
hint: 	git branch -m <name>
    Successfully initialized git.

real	0m36.994s
user	0m18.252s
sys	0m8.823s
```


```bash
ng generate component HelloWorld
CREATE src/app/hello-world/hello-world.component.scss (0 bytes)
CREATE src/app/hello-world/hello-world.component.html (26 bytes)
CREATE src/app/hello-world/hello-world.component.spec.ts (628 bytes)
CREATE src/app/hello-world/hello-world.component.ts (295 bytes)
UPDATE src/app/app.module.ts (493 bytes)
```

```bash
$ time yarn add @angular/elements
yarn add v1.22.19
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...

success Saved lockfile.
success Saved 1 new dependency.
info Direct dependencies
└─ @angular/elements@14.1.3
info All dependencies
└─ @angular/elements@14.1.3
Done in 7.34s.

real    0m7.723s
user    0m7.422s
sys     0m3.276s
```

```bash
$ time yarn run build
yarn run v1.22.19
$ ng build
✔ Browser application bundle generation complete.
✔ Copying assets complete.
✔ Index html generation complete.

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.b2007b777af788a0.js      | main          | 192.52 kB |                52.26 kB
polyfills.396fc25c62aea290.js | polyfills     |  33.10 kB |                10.66 kB
runtime.38b573fc43a98118.js   | runtime       |   1.07 kB |               607 bytes
styles.ef46db3751d8e999.css   | styles        |   0 bytes |                       -

                              | Initial Total | 226.68 kB |                63.51 kB

Build at: 2022-08-24T13:44:58.107Z - Hash: ee1f146c513429ea - Time: 13542ms
Done in 15.84s.

real    0m16.138s
user    0m28.344s
sys     0m1.160s
```

```bash
$ time yarn run bundle
yarn run v1.22.19
$ ng build --output-hashing none
✔ Browser application bundle generation complete.
✔ Copying assets complete.
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 192.52 kB |                52.26 kB
polyfills.js        | polyfills     |  33.10 kB |                10.66 kB
runtime.js          | runtime       |   1.07 kB |               607 bytes
styles.css          | styles        |   0 bytes |                       -

                    | Initial Total | 226.68 kB |                63.51 kB

Build at: 2022-08-24T13:49:22.445Z - Hash: ee1f146c513429ea - Time: 9626ms
Done in 11.62s.

real    0m11.770s
user    0m21.177s
sys     0m1.051s
```

```
$ time yarn add concat
yarn add v1.22.19
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 1 new dependency.
info Direct dependencies
└─ concat@1.0.3
info All dependencies
└─ concat@1.0.3
Done in 3.29s.

real    0m3.489s
user    0m3.926s
sys     0m1.339s
```

```
time node ./concat.js

real    0m0.078s
user    0m0.052s
sys     0m0.027s
```

```
$ time yarn run bundle
yarn run v1.22.19
$ ng build --output-hashing none && node ./concat.js
✔ Browser application bundle generation complete.
✔ Copying assets complete.
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 192.52 kB |                52.26 kB
polyfills.js        | polyfills     |  33.10 kB |                10.66 kB
runtime.js          | runtime       |   1.07 kB |               607 bytes
styles.css          | styles        |   0 bytes |                       -

                    | Initial Total | 226.68 kB |                63.51 kB

Build at: 2022-08-24T14:03:54.706Z - Hash: ee1f146c513429ea - Time: 4155ms
Done in 6.16s.

real    0m6.342s
user    0m9.221s
sys     0m0.562s
```

```
$ time yarn run bundle
yarn run v1.22.19
$ ng build --output-hashing none && node ./concat.js
✔ Browser application bundle generation complete.
✔ Copying assets complete.
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 192.52 kB |                52.26 kB
polyfills.js        | polyfills     |  33.10 kB |                10.66 kB
runtime.js          | runtime       |   1.07 kB |               607 bytes
styles.css          | styles        |   0 bytes |                       -

                    | Initial Total | 226.68 kB |                63.51 kB

Build at: 2022-08-24T14:03:54.706Z - Hash: ee1f146c513429ea - Time: 4155ms
Done in 6.16s.

real    0m6.342s
user    0m9.221s
sys     0m0.562s
```

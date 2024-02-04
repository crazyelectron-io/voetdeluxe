# VoetDeluxe pedicure website

## Building the VoetDeluxe website

```Shell
❯ yarn create nuxt-app voetdeluxe
yarn create v1.22.10
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Installed "create-nuxt-app@3.5.2" with binaries:
      - create-nuxt-app
[##########################################################################################] 342/342
create-nuxt-app v3.5.2
✨  Generating Nuxt.js project in voetdeluxe
? Project name: voetdeluxe
? Programming language: JavaScript
? Package manager: Yarn
? UI framework: Tailwind CSS
? Nuxt.js modules: Content - Git-based headless CMS
? Linting tools: ESLint, StyleLint
? Testing framework: None
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Server (Node.js hosting)
? Development tools: jsconfig.json
? Continuous integration: None
? Version control system: Git
yarn run v1.22.10
$ eslint --ext ".js,.vue" --ignore-path .gitignore . --fix
✨  Done in 0.76s.
yarn run v1.22.10
$ stylelint "**/*.{vue,css}" --ignore-path .gitignore --fix
✨  Done in 0.40s.

🎉  Successfully created project voetdeluxe

  To get started:

	cd voetdeluxe
	yarn dev

  To build & start for production:

	cd voetdeluxe
	yarn build
	yarn start
```

Let's see what the default nuxt.js site looks like.

```shell
❯ cd voetdeluxe
❯ yarn dev
yarn run v1.22.10
error Couldn\'t find a package.json file in "/Users/ron/Documents/projects"
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
❯ cd voetdeluxe
❯ yarn dev
yarn run v1.22.10
$ nuxt
ℹ Parsed 1 files in 0,3 seconds                                              @nuxt/content 10:43:35

   ╭───────────────────────────────────────────────────────╮
   │                                                       │
   │   Nuxt @ v2.14.12                                     │
   │                                                       │
   │   ▸ Environment: development                          │
   │   ▸ Rendering:   server-side                          │
   │   ▸ Target:      server                               │
   │                                                       │
   │   Listening: http://localhost:3000/                   │
   │                                                       │
   │   Tailwind Viewer: http://localhost:3000/_tailwind/   │
   │                                                       │
   ╰───────────────────────────────────────────────────────╯

ℹ Preparing project for development                                                        10:43:36
ℹ Initial build may take a while                                                           10:43:36
✔ Builder initialized                                                                      10:43:36
✔ Nuxt files generated                                                                     10:43:36

✔ Client
  Compiled successfully in 7.86s

✔ Server
  Compiled successfully in 5.23s

ℹ Waiting for file changes                                                                 10:43:45
ℹ Memory usage: 344 MB (RSS: 587 MB)                                                       10:43:45
ℹ Listening on: http://localhost:3000/
```

Go to http://localhost:3000 and confirm that the default nuxt.js side is up and running.
Next, add tailwindcss to the project.
Note that currently that installs TailwindCSS version 1 and we will upgrade it to version 2 in a moment.

```shell
❯ yarn add --dev @nuxtjs/tailwindcss
yarn add v1.22.10
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "@nuxtjs/eslint-config > eslint-plugin-jest > @typescript-eslint/experimental-utils > @typescript-eslint/typescript-estree > tsutils@3.20.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
warning "@nuxtjs/eslint-module > eslint-webpack-plugin@2.5.0" has unmet peer dependency "webpack@^4.0.0 || ^5.0.0".
warning "@nuxtjs/stylelint-module > stylelint-webpack-plugin@2.1.1" has unmet peer dependency "webpack@^4.0.0 || ^5.0.0".
[4/4] 🔨  Building fresh packages...
success Saved 1 new dependency.
info Direct dependencies
└─ @nuxtjs/tailwindcss@3.4.2
info All dependencies
└─ @nuxtjs/tailwindcss@3.4.2
✨  Done in 1.77s.
```

The installation of TailwindCSS will also add the following to your `nuxt.config.js`:

```JavaScript
export default {
  buildModules: ['@nuxtjs/tailwindcss']
}
```

You can customize the module behaviour by using the _tailwindcss_ property in `nuxt.config.js`.

```JavaScript
export default {
  tailwindcss: {
    // Options
  }
}
```

Nuxt 2.14 is still using PostCSS 7.
Once merged on v2.15, we will release a major version of this module to include TailwindCSS 2, see PR#203.
In the meantime, you can upgrade Tailwind by using the compatibility build:

```Shell
❯ yarn add --dev tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
yarn add v1.22.10
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "@nuxtjs/eslint-config > eslint-plugin-jest > @typescript-eslint/experimental-utils > @typescript-eslint/typescript-estree > tsutils@3.20.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
warning "@nuxtjs/eslint-module > eslint-webpack-plugin@2.5.0" has unmet peer dependency "webpack@^4.0.0 || ^5.0.0".
warning "@nuxtjs/stylelint-module > stylelint-webpack-plugin@2.1.1" has unmet peer dependency "webpack@^4.0.0 || ^5.0.0".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 5 new dependencies.
info Direct dependencies
└─ tailwindcss@2.0.3
info All dependencies
├─ @fullhuman/postcss-purgecss@3.1.3
├─ didyoumean@1.2.1
├─ modern-normalize@1.0.0
├─ purgecss@3.1.3
└─ tailwindcss@2.0.3
✨  Done in 2.09s.
```

Generate the default Tailwind configuration file `tailwind.config.js`.

```Shell
❯ yarn tailwindcss init
yarn run v1.22.10
$ /Users/ron/Documents/projects/voetdeluxe/node_modules/.bin/tailwindcss init

   @tailwindcss/postcss7-compat 2.0.3

   ✅ Created Tailwind config file: tailwind.config.js

✨  Done in 0.48s.
```

Add the SASS modules:

```Shell
❯ yarn add --dev sass sass-loader@10 fibers
yarn add v1.22.10
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "@nuxtjs/eslint-config > eslint-plugin-jest > @typescript-eslint/experimental-utils > @typescript-eslint/typescript-estree > tsutils@3.20.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
warning "@nuxtjs/eslint-module > eslint-webpack-plugin@2.5.0" has unmet peer dependency "webpack@^4.0.0 || ^5.0.0".
warning "@nuxtjs/stylelint-module > stylelint-webpack-plugin@2.1.1" has unmet peer dependency "webpack@^4.0.0 || ^5.0.0".
warning " > sass-loader@10.1.1" has unmet peer dependency "webpack@^4.36.0 || ^5.0.0".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 5 new dependencies.
info Direct dependencies
├─ fibers@5.0.0
├─ sass-loader@10.1.1
└─ sass@1.32.7
info All dependencies
├─ detect-libc@1.0.3
├─ fibers@5.0.0
├─ klona@2.0.4
├─ sass-loader@10.1.1
└─ sass@1.32.7
✨  Done in 3.96s.
```

```Shell
❯ yarn add tailwindcss-dark-mode
yarn add v1.22.10
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "@nuxtjs/eslint-config > eslint-plugin-jest > @typescript-eslint/experimental-utils > @typescript-eslint/typescript-estree > tsutils@3.20.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
warning "@nuxtjs/eslint-module > eslint-webpack-plugin@2.5.0" has unmet peer dependency "webpack@^4.0.0 || ^5.0.0".
warning "@nuxtjs/stylelint-module > stylelint-webpack-plugin@2.1.1" has unmet peer dependency "webpack@^4.0.0 || ^5.0.0".
warning " > sass-loader@10.1.1" has unmet peer dependency "webpack@^4.36.0 || ^5.0.0".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 1 new dependency.
info Direct dependencies
└─ tailwindcss-dark-mode@1.1.7
info All dependencies
└─ tailwindcss-dark-mode@1.1.7
✨  Done in 2.66s.
```

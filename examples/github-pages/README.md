# Deploying to GitHub Pages

## Configuring GitHub Actions Workflow
To include the `.next/cache` directory in the cache, add the following configuration to your GitHub Actions workflow file:
```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Cache dependencies
        uses: actions/cache@v2
        with:
          path: .next/cache
          key: ${{ runner.os }}-cache
          restore-keys: |
            ${{ runner.os }}-cache
      - name: Install dependencies
        run: npm install
      # ... other steps
```

## CircleCI Configuration
Below is an example configuration for the save_cache step in the CircleCI configuration file:
```yaml
version: 2.1
jobs:
  build:
    docker:
      - image: cimg/node:14.17
    steps:
      - checkout
      - restore_cache:
          keys:
            - v1-dependencies-{{ checksum "package.json" }}
            - v1-dependencies-
      - run: npm install
      # ... other steps
      - save_cache:
          paths:
            - .next/cache
          key: v1-dependencies-{{ checksum "package.json" }}
```

This example supports deploying a statically exported Next.js application to GitHub Pages.

The `out` directory should not be ignored by version control.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example github-pages nextjs-github-pages
# or
yarn create next-app --example github-pages nextjs-github-pages
# or
pnpm create next-app --example github-pages nextjs-github-pages
```

### Deploy to GitHub Pages

1.  Create a new public GitHub repository.
1.  Edit `next.config.js` to match your GitHub repository name.
1.  Push the starter code to the `main` branch.
1.  Run the `deploy` script (e.g. `npm run deploy`) to create the `gh-pages` branch.
1.  On GitHub, go to **Settings** > **Pages** > **Branch**, and choose `gh-pages` as the branch with the `/root` folder. Hit **Save**.
1.  Make a change.
1.  Run the `deploy` script again to push the changes to GitHub Pages.

Congratulations! You should have a URL like:

```bash
https://<github-user-name>.github.io/<github-project-name>/
```

# webpack-angular5

Angular5 application with plain webpack bundling

## Usage

Once the repository is cloned, install the required npm modules by running following command in the root folder

```
npm install
```

This will get all the required modules i.e. webpack, angular (v5) and all the required webpack loaders and plugins.

Now bundle the source files using following command

```
./node_modules/.bin/webpack
```

Open chrome and load the `dist/index.html`

Voila! The page should have Angular in action.

To play with the application, run webpack in watch mode by using following command

```
./node_modules/.bin/webpack --watch
```

Open your favorite editor and make changes to the files under `src` folder (NOT `dist` folder). Webpack should take care of bundling the updated source file. Go the Chrome and refresh the page.

**Note : Though not necessary, feel free to use a simple node server if you want to.**

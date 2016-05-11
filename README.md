# SQL-EVERYWHERE

> A Node JS based query enviroment


## Install

First, clone the repo via git:

```bash
git clone https://github.com/goldsziggy/sql-everywhere.git your-project-name
```

And then install dependencies.

```bash
$ cd your-project-name && npm install
```

## Run

```bash
$ npm run dev
```
*Note: requires a node version >= 4 and an npm version >= 2.*

## CSS Modules
All `.css` file extensions will use css-modules unless it has `.global.css`.

If you need global styles, stylesheets with `.global.css` will not go through the
css-modules loader. e.g. `app.global.css`

## Roadmap

There is plenty left to do here. In no particular order here of some of the missing features

- Test Database connection (MySQL, DB2, Sybase)
- Pass Query
- Pre-built meta data queries (for getting meta data and caching it - used for autocompletion)
- Saving React store (not implemented yet for the testy nature of it all)
- Implement different themes using both Microsoft themes as well as CodeMirror themes
- Same page query results
- New page query results
- Ability to store and run pre-built queries
- TESTS!!!!

## Development Tips/Gotchas

#### QueryBox/CodeMirror/Codebox

- QueryBox:  legacy | This was the first attempt at the query box.  The thought was to leverage Facebook's Draft.js.  This was dropped for the support for CodeMirror

- CodeBox: legacy | This was the next attempt. The thought was to create my own React Component for CodeMirror.  After starting, I found someone has already done this, so I am now using thier implementation.

- CodeMirror: current | This is the direction of the application.


## Attributions

Used the Electron-React starter-kit/framework from chentsulin (https://github.com/chentsulin/electron-react-boilerplate)


## Maintainers

- [Matthew Zygowicz](https://github.com/goldsziggy)

# js-templates

These are my file templates for JavaScript projects.

## Manifest

- `.editorconfig`: Two spaces
- `.eslintignore`: Don't worry about `karma.conf.js` 
- `.eslintrc.yml`: If using ESLint, a starting point for linting
- `.gitignore`: For a standard NodeJS project, accompanied by temp files for many popular editors and operating systems
- `.jscsrc`: Represents my coding style pretty well; based on Crockford with some tweaks
- `.jshintignore`: Ignore 3p code when using JSHint
- `.jshintrc`: If using JSHint, a starting point; environment-agnostic for easy tweaking
- `.npmignore`: Ignore dotfiles, demos, examples, docs, etc., when installing
- `.travis.yml`: Basic setup for CodeClimate against NodeJS 0.10 thru 0.12, with secure token
- `jsdoc.conf.json`: Basic JSDoc settings against the [jsdoc-oblivion](https://www.npmjs.com/package/jsdoc-oblivion) template
- `karma.conf.js`: Mostly so I don't ever have to go through `karma init`

## TODO

- Add some sort of `Gruntfile.js` and a collection of basic tasks (using [load-grunt-config](https://www.npmjs.com/package/load-grunt-config))
- Some sort of script to just copy files over and do the appropriate `npm install`s

## Author

[Christopher Hiller](http://boneskull.com)

## License

MIT

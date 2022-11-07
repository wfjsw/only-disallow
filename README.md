# only-disallow

> Force a specific package manager to not be used on a project

## Usage

Add a `preinstall` script to your project's `package.json`.

If you want to force no [npm](https://docs.npmjs.com/cli/npm), add:

```json
{
  "scripts": {
    "preinstall": "npx only-disallow npm"
  }
}
```

If you want to force no [cnpm](https://npmmirror.com/), add:

```json
{
  "scripts": {
    "preinstall": "npx only-disallow cnpm"
  }
}
```

If you want to force no [pnpm](https://pnpm.js.org/), add:

```json
{
  "scripts": {
    "preinstall": "npx only-disallow pnpm"
  }
}
```

If you want to force no [yarn](https://yarnpkg.com/), add:

```json
{
  "scripts": {
    "preinstall": "npx only-disallow yarn"
  }
}
```

## License

[MIT](LICENSE)

# Estonian Messages for React-Admin

[![npm](https://img.shields.io/npm/v/ra-language-estonian.svg)](https://npmjs.org/package/ra-language-estonian)
[![npm downloads](https://img.shields.io/npm/dm/ra-language-estonian.svg)](https://www.npmjs.com/package/ra-language-estonian)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/ra-language-estonian.svg)](https://bundlephobia.com/result?p=ra-language-estonian)

Estonian messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

## Installation

```sh
npm install --save ra-language-estonian
```

## Usage

```js
import lithuanianMessages from 'ra-language-lithuanian';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
    'et': estonianMessages,
};
const i18nProvider = polyglotI18nProvider(locale => messages[locale]);

<Admin locale="et" i18nProvider={i18nProvider}>
  ...
</Admin>
```

## License

This translation is licensed under the [MIT Licence](LICENSE).

import path from 'path';

import autoprefixer from 'autoprefixer';
import postcssAdvancedVariables from 'postcss-advanced-variables';
import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';
import postcssNested from 'postcss-nested';
import postcssPartialImport from 'postcss-partial-import';
import postcssPresetEnv from 'postcss-preset-env';
import postcssSimpleVars from 'postcss-simple-vars';

export default {
  plugins: [
    postcssImport({
      path: [path.resolve('public/styles/pcss')],
    }),
    postcssPartialImport({
      prefix: '_',
    }),
    postcssMixins,
    postcssAdvancedVariables,
    postcssSimpleVars,
    postcssNested,
    postcssPresetEnv({
      stage: 1,
    }),
    autoprefixer,
  ],
};

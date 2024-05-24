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
    postcssImport,
    postcssPartialImport({
      prefix: '_',
    }),
    postcssMixins,
    postcssAdvancedVariables,
    postcssSimpleVars,
    postcssNested,
    postcssPresetEnv({
      browsers: 'last 2 versions',
      stage: 1,
    }),
    autoprefixer,
  ],
};

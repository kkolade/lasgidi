<<<<<<< HEAD
=======
import path from 'path';

>>>>>>> postcss_experiment
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
<<<<<<< HEAD
    postcssImport,
=======
    postcssImport({
      path: [path.resolve('public/styles/pcss')],
    }),
>>>>>>> postcss_experiment
    postcssPartialImport({
      prefix: '_',
    }),
    postcssMixins,
    postcssAdvancedVariables,
    postcssSimpleVars,
    postcssNested,
    postcssPresetEnv({
<<<<<<< HEAD
      browsers: 'last 2 versions',
=======
>>>>>>> postcss_experiment
      stage: 1,
    }),
    autoprefixer,
  ],
};

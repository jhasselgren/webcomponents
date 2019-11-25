import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import alias from '@rollup/plugin-alias';

export default {
  input: 'src/index.tsx',
  output: {
    file: 'bundle.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    
    babel({
      exclude: 'node_modules/**',
      extensions: [ '.js', '.jsx', '.ts', '.tsx' ]
    }),
    resolve({
      mainFields: [ 'module', 'main', 'browser' ],
      extensions: [ '.js', '.jsx', '.ts', '.tsx' ]
    }),
    alias({
      entries: {
        resolve: [ '.tsx', '.ts', '.js', '.jsx' ],
        react: require.resolve('preact/compat'),
        'react-dom': require.resolve('preact/compat')
      }
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react-is/index.js': [ 'isValidElementType', 'isContextConsumer' ],
        'node_modules/preact/compat/dist/compat.js': ['useMemo', 'useEffect', 'useLayoutEffect', 'useContext', 'useReducer', 'useRef']
      }
    })
  ]
};

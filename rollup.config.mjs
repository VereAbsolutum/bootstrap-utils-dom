import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'; 
import terser from '@rollup/plugin-terser'; 


export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/bootstrap-utils-dom.umd.js',
      format: 'umd',
      name: 'BootstrapUtilsDom', 
    },
    {
      file: 'dist/bootstrap-utils-dom.esm.js', 
      format: 'esm', 
    },
  ],
  plugins: [
    resolve(), 
    commonjs(), 
    terser(),
  ],
};

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //so the @types/node helps us to  use path without any issues from typescript
  //the resolve object has an alias that finds @ and replaces it with the current absolute directory(__dirname) starting from 'src'
  resolve:{
    alias:[{ find:"@", replacement: path.resolve(__dirname,"src") }],
  },
})

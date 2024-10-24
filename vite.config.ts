import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/index.ts',
      name: 'tz-compare',
      fileName: 'index'
    }
  }
})

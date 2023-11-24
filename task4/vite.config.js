export default {
    root: './src',
    name: 'task4',
    outDir: 'dist',
    base: '/',
    server: {
      port: 3001,
      open: false,
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    build: {
      minify: 'terser',
      lib: false
    },
  };

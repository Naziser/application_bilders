export default {
    root: './',
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
      rollupOptions: {
        input: {
          main: './src/index.html',
        },
      },
      minify: 'terser',
      lib: false
    },
  };

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // Directs all Vue 2 style definitions directly to the compatibility layer
        'vue$': '@vue/compat',
        'vue': '@vue/compat'
      }
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        };
      });
  }
};

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver',
        {
          root: ['./'],
          "alias": { // this is supposed to mirror tsconfig.json
            '@lib': './src/lib',
            '@features': './src/features',
            '@config': './src/config',
            '@components': './src/components',
            '@customTypes': './src/customTypes'
          },
        },
      ],
    ],
  };
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ios.tsx',
            '.android.tsx',
            '.ts',
            '.d.ts',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            components: './src/components',
          },
        },
      ],
    ],
  };
};

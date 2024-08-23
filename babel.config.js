module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        '@': './', // @를 루트 디렉토리로 설정
                    },
                    // extensions: ['.js', '.jsx', '.ts', '.tsx', '.png'], // 확장자를 추가
                },
            ],
        ],
    };
};

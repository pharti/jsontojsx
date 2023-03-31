/* eslint-disable prettier/prettier */
export const getArticleConfig = (config) => {
    //... config parameter is used when the default configuration are needed to override
    let defaultArticleConfig = {
        type: 'Element',
        tagName: 'article',
        attributes: {
            borderColor: 'coolGray.200',
            overflow: 'hidden',
            //... Border Radius
            rounded: 'lg',
            borderWidth: '1',
            backgroundColor: 'white',
            //... Padding
            p: '4',
            //... Breakpoints
            w: ['100%', '100%', '48%', '48%', '32%', '24%'],
        },
        children: config?.children && config?.children.length > 0 ? [...config?.children] : [],
    };

    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultArticleConfig[key] = { ...defaultArticleConfig[key], ...config[key] };
        } else {
            defaultArticleConfig[key] = config[key];
        }
    });

    return defaultArticleConfig;

};

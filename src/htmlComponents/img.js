/* eslint-disable prettier/prettier */
export const getImgConfig = (config) => {
    //... config parameter is used when the default configuration are needed to override,
    let defaultImgConfig = {
        type: 'Element',
        tagName: 'img',
        attributes: {
            alt: config.alt,
            source: { uri: `${config.src}` },
            height: `${config.height ? config.height : 160}`,
            width: `${config.width ? config.width : 160}`,
        },
    };


    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultImgConfig[key] = { ...defaultImgConfig[key], ...config[key] };
        } else if (key === 'styles') {
            //... native base accepts style prop for styling
            //... Note styles used double braces.. But object doesn't accept double braces as value.
            defaultImgConfig.attributes = { ...defaultImgConfig.attributes, ...config[key] };
            defaultImgConfig.style = { ...config.styles };
        } else {
            defaultImgConfig[key] = config[key];
        }
    });
    return defaultImgConfig;

};

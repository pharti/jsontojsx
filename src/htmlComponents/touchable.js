/* eslint-disable prettier/prettier */

export const getTouchableConfig = (config) => {
    console.log('config', config);
    //... config parameter is used when the default configuration are needed to override
    let defaultTouchableConfig = {
        type: 'Element',
        tagName: 'touchable',
        attributes: {
            display: 'flex',
            onPress: config.onPress,
        },
        children: config?.children && config?.children.length > 0 ? [...config?.children] : [],
    };

    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultTouchableConfig[key] = { ...defaultTouchableConfig[key], ...config[key] };
        } else if (key === 'styles') {
            defaultTouchableConfig.attributes = { ...defaultTouchableConfig.attributes, ...config[key] };
            defaultTouchableConfig.style = { ...config[key] };
            if ('paddingVertical' in config[key]) {
                defaultTouchableConfig.attributes.py = config[key].paddingVertical;
            }
            if ('paddingHorizontal' in config[key]) {
                defaultTouchableConfig.attributes.py = config[key].paddingHorizontal;
            }
        } else {
            defaultTouchableConfig[key] = config[key];
        }
    });

    return defaultTouchableConfig;
};

/* eslint-disable prettier/prettier */
export const getDivConfig = (config) => {
    //... config parameter is used when the default configuration are needed to override
    let defaultDivConfig = {
        type: 'Element',
        tagName: 'div',
        attributes: {
            display: 'flex',
        },
        children: config?.children && config?.children.length > 0 ? [...config?.children] : [],
    };

    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultDivConfig[key] = { ...defaultDivConfig[key], ...config[key] };
        } else if (key === 'styles') {
            defaultDivConfig.attributes = { ...defaultDivConfig.attributes, ...config[key] };
            defaultDivConfig.style = { ...config[key] };
            if ('paddingVertical' in config[key]) {
                defaultDivConfig.attributes.py = config[key].paddingVertical;
            }
            if ('paddingHorizontal' in config[key]) {
                defaultDivConfig.attributes.py = config[key].paddingHorizontal;
            }
        } else {
            defaultDivConfig[key] = config[key];
        }
    });

    return defaultDivConfig;
};

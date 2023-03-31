/* eslint-disable prettier/prettier */
export const getHeaderConfig = (config) => {
    //... config parameter is used when the default configuration are needed to override
    let defaultHeaderConfig = {
        type: 'Element',
        tagName: 'header',
        attributes: {},
        children: config?.children && config?.children.length > 0 ? [...config?.children] : [],
    };

    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultHeaderConfig[key] = { ...defaultHeaderConfig[key], ...config[key] };
        } else if (key === 'styles') {
            //... native base accepts style prop for styling
            //... Note styles used double braces.. But object doesn't accept double braces as value.
            defaultHeaderConfig.style = { ...config.styles };
        } else {
            defaultHeaderConfig[key] = config[key];
        }
    });

    return defaultHeaderConfig;
};

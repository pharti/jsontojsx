/* eslint-disable prettier/prettier */
export const getIconConfig = (config) => {
    try {
        //... config parameter is used when the default configuration are needed to override
        let defaultIconConfig = {
            type: 'Element',
            tagName: 'i',
            attributes: {
                as: config.as,
                name: `${config.name}`,
                color: `${config.color ? config.color : 'trueGray.700'}`,
                size: `${config.size ? config.size : 'xl'}`,
            },
        };


        // Object.keys(config).forEach((key, index) => {
        //     //... For attributes merge the config and default config attributes
        //     if (key === 'attributes') {
        //         defaultIconConfig[key] = { ...defaultIconConfig[key], ...config[key] };
        //     } else if (key === 'styles') {
        //         //... native base accepts style prop for styling
        //         //... Note styles used double braces.. But object doesn't accept double braces as value.
        //         defaultIconConfig.style = { ...config.styles }
        //     } else {
        //         defaultIconConfig[key] = config[key];
        //     }
        // });
        return defaultIconConfig;
    } catch (error) {
        console.log('Error: getPConfig', error);
    }
};

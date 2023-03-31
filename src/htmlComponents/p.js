/* eslint-disable prettier/prettier */
import { ComponentToFontSizeMap } from '../mapper/fontStyleMapper';

export const getPConfig = (config) => {
    console.log('config', config);
    try {
        //... config parameter is used when the default configuration are needed to override
        let defaultPConfig = {
            type: 'Element',
            tagName: 'p',
            attributes: {
                fontSize: ComponentToFontSizeMap.p,
            },
            children: config?.children && config?.children.length > 0 ? [...config?.children] : [],
        };


        Object.keys(config).forEach((key, index) => {
            //... For attributes merge the config and default config attributes
            if (key === 'attributes') {
                defaultPConfig[key] = { ...defaultPConfig[key], ...config[key] };
            } else if (key === 'styles') {
                //... native base accepts style prop for styling
                //... Note styles used double braces.. But object doesn't accept double braces as value.
                defaultPConfig.attributes = { ...defaultPConfig.attributes, ...config[key] };
                defaultPConfig.style = { ...config.styles };
            } else {
                defaultPConfig[key] = config[key];
            }
        });
        console.log('defaultPConfig', defaultPConfig);
        return defaultPConfig;
    } catch (error) {
        console.log('Error: getPConfig', error);
    }

};

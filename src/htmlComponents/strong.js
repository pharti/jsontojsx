/* eslint-disable prettier/prettier */
import { ComponentToFontWeightMap } from '../mapper/fontStyleMapper';

export const getStrongConfig = (config) => {
    //... config parameter is used when the default configuration are needed to override
    let defaultStrongConfig = {
        type: 'Element',
        tagName: 'strong',
        attributes: {
            fontWeight: ComponentToFontWeightMap[config.tagName],
        },
        children: config?.children && config?.children.length > 0 ? [...config?.children] : [],
    };

    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultStrongConfig[key] = { ...defaultStrongConfig[key], ...config[key] };
        } else if (key === 'styles') {
            //... native base accepts style prop for styling
            //... Note styles used double braces.. But object doesn't accept double braces as value.
            defaultStrongConfig.style = { ...config.styles };
        } else {
            defaultStrongConfig[key] = config[key];
        }
    });

    return defaultStrongConfig;
};

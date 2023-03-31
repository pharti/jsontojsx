/* eslint-disable prettier/prettier */
import { ComponentToFontSizeMap } from '../mapper/fontStyleMapper';

export const getTimeConfig = (config) => {
    //... config parameter is used when the default configuration are needed to override
    let defaultTimeConfig = {
        type: 'Element',
        tagName: 'time',
        attributes: {
            fontSize: ComponentToFontSizeMap[config.tagName],
        },
        children: config?.children && config?.children.length > 0 ? [...config?.children] : [],
    };

    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultTimeConfig[key] = { ...defaultTimeConfig[key], ...config[key] };
        } else if (key === 'styles') {
            //... native base accepts style prop for styling
            //... Note styles used double braces.. But object doesn't accept double braces as value.
            defaultTimeConfig.style = { ...config.styles };
        } else {
            defaultTimeConfig[key] = config[key];
        }
    });

    return defaultTimeConfig;
};

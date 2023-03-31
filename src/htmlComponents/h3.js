/* eslint-disable prettier/prettier */
import { ComponentToFontSizeMap } from '../mapper/fontStyleMapper';

export const getH3Config = (config) => {
    //... config parameter is used when the default configuration are needed to override
    let defaultH3Config = {
        type: 'Element',
        tagName: 'h3',
        attributes: {
            fontSize: ComponentToFontSizeMap.h3,
        },
        children: config?.children && config?.children.length > 0 ? [...config?.children] : [],
    };


    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultH3Config[key] = { ...defaultH3Config[key], ...config[key] };
        } else if (key === 'styles') {
            //... native base accepts style prop for styling
            //... Note styles used double braces.. But object doesn't accept double braces as value.
            defaultH3Config.attributes = { ...defaultH3Config.attributes, ...config[key] };
            defaultH3Config.style = { ...config.styles };
        } else {
            defaultH3Config[key] = config[key];
        }
    });

    return defaultH3Config;
};

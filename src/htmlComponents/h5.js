/* eslint-disable prettier/prettier */
import { ComponentToFontSizeMap } from '../mapper/fontStyleMapper';

export const getH5Config = (config) => {
    //... config parameter is used when the default configuration are needed to override
    let defaultH5Config = {
        type: 'Element',
        tagName: 'h5',
        attributes: {
            fontSize: ComponentToFontSizeMap.h5,
        },
        children: config?.children && config?.children.length > 0 ? [...config?.children] : [],
    };


    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultH5Config[key] = { ...defaultH5Config[key], ...config[key] };
        } else if (key === 'styles') {
            //... native base accepts style prop for styling
            //... Note styles used double braces.. But object doesn't accept double braces as value.
            defaultH5Config.attributes = { ...defaultH5Config.attributes, ...config[key] };
            defaultH5Config.style = { ...config.styles };
        } else {
            defaultH5Config[key] = config[key];
        }
    });

    return defaultH5Config;
};

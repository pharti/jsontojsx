/* eslint-disable prettier/prettier */
import { ComponentToFontSizeMap } from '../mapper/fontStyleMapper';

export const getH4Config = (config) => {
    //... config parameter is used when the default configuration are needed to override
    let defaultH4Config = {
        type: 'Element',
        tagName: 'h4',
        attributes: {
            fontSize: ComponentToFontSizeMap.h4,
        },
        children: config?.children && config?.children.length > 0 ? [...config?.children] : [],
    };


    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultH4Config[key] = { ...defaultH4Config[key], ...config[key] };
        } else if (key === 'styles') {
            //... native base accepts style prop for styling
            //... Note styles used double braces.. But object doesn't accept double braces as value.
            defaultH4Config.attributes = { ...defaultH4Config.attributes, ...config[key] };
            defaultH4Config.style = { ...config.styles };
        } else {
            defaultH4Config[key] = config[key];
        }
    });

    return defaultH4Config;
};

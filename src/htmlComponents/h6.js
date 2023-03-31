/* eslint-disable prettier/prettier */
import { ComponentToFontSizeMap } from '../mapper/fontStyleMapper';

export const getH6Config = (config) => {
    //... config parameter is used when the default configuration are needed to override
    let defaultH6Config = {
        type: 'Element',
        tagName: 'h6',
        attributes: {
            fontSize: ComponentToFontSizeMap.h6,
        },
        children: config?.children && config?.children.length > 0 ? [...config?.children] : [],
    };


    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultH6Config[key] = { ...defaultH6Config[key], ...config[key] };
        } else if (key === 'styles') {
            //... native base accepts style prop for styling
            //... Note styles used double braces.. But object doesn't accept double braces as value.
            defaultH6Config.attributes = { ...defaultH6Config.attributes, ...config[key] };
            defaultH6Config.style = { ...config.styles };
        } else {
            defaultH6Config[key] = config[key];
        }
    });

    return defaultH6Config;
};

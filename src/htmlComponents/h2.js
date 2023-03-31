/* eslint-disable prettier/prettier */
import { ComponentToFontSizeMap } from '../mapper/fontStyleMapper';

export const getH2Config = (config) => {
    //... config parameter is used when the default configuration are needed to override
    let defaultH2Config = {
        type: 'Element',
        tagName: 'h2',
        attributes: {
            fontSize: ComponentToFontSizeMap.h2,
        },
        children: config?.children && config?.children.length > 0 ? [...config?.children] : [],
    };


    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultH2Config[key] = { ...defaultH2Config[key], ...config[key] };
        } else if (key === 'styles') {
            //... native base accepts style prop for styling
            //... Note styles used double braces.. But object doesn't accept double braces as value.
            defaultH2Config.attributes = { ...defaultH2Config.attributes, ...config[key] };
            defaultH2Config.style = { ...config.styles };
        } else {
            defaultH2Config[key] = config[key];
        }
    });
    return defaultH2Config;
};

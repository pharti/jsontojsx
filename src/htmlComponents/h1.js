/* eslint-disable prettier/prettier */
import { ComponentToFontSizeMap } from '../mapper/fontStyleMapper';

export const getH1Config = (config) => {
    //... config parameter is used when the default configuration are needed to override
    let defaultH1Config = {
        type: 'Element',
        tagName: 'h1',
        attributes: {
            fontSize: ComponentToFontSizeMap.h1,
        },
        children: config.children && config.children.length > 0 ? [...config.children] : [],
    };

    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultH1Config[key] = { ...defaultH1Config[key], ...config[key] };
        } else if (key === 'styles') {
            //... native base accepts style prop for styling
            //... Note styles used double braces.. But object doesn't accept double braces as value.
            defaultH1Config.attributes = { ...defaultH1Config.attributes, ...config[key] };
            defaultH1Config.style = { ...config.styles };
        } else {
            defaultH1Config[key] = config[key];
        }
    });

    return defaultH1Config;
};

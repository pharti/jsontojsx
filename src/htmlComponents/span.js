/* eslint-disable prettier/prettier */
import { ComponentToFontSizeMap } from '../mapper/fontStyleMapper';

export const getSpanConfig = (config) => {
    //... config parameter is used when the default configuration are needed to override
    let defaultSpanConfig = {
        type: 'Element',
        tagName: 'span',
        attributes: {
            fontSize: ComponentToFontSizeMap.span,
        },
        children: config?.children && config?.children.length > 0 ? [...config?.children] : [],
    };


    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultSpanConfig[key] = { ...defaultSpanConfig[key], ...config[key] };
        } else if (key === 'styles') {
            //... native base accepts style prop for styling
            //... Note styles used double braces.. But object doesn't accept double braces as value.
            defaultSpanConfig.style = { ...config.styles };
        } else {
            defaultSpanConfig[key] = config[key];
        }
    });

    return defaultSpanConfig;

};

/* eslint-disable prettier/prettier */
export const getInputConfig = (config) => {
    //... config parameter is used when the default configuration are needed to override
    let defaultInputConfig = {
        type: 'Element',
        tagName: 'input',
        attributes: {
            onChangeText: (text) => config.onTextChange(text),
        },
    };


    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultInputConfig[key] = { ...defaultInputConfig[key], ...config[key] };
        } else if (key === 'styles') {
            //... native base accepts style prop for styling
            //... Note styles used double braces.. But object doesn't accept double braces as value.
            defaultInputConfig.style = { ...config.styles };
        } else {
            defaultInputConfig[key] = config[key];
        }
    });
    return defaultInputConfig;

};

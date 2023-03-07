export const getCheckBoxConfig = (config) => {
    //... config parameter is used when the default configuration are needed to override 
    let defaultCheckBoxConfig = {
        type: 'Element',
        tagName: 'input',
        attributes: {
            type: 'checkbox',
            value: 'CheckBox'
        },
    };


    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultCheckBoxConfig[key] = { ...defaultCheckBoxConfig[key], ...config[key] };
        } else if (key === 'styles') {
            //... native base accepts style prop for styling
            //... Note styles used double braces.. But object doesn't accept double braces as value.
            defaultCheckBoxConfig.style = { ...config.styles }
        } else {
            defaultCheckBoxConfig[key] = config[key];
        }
    });
    console.log('defaultCheckBoxConfig', defaultCheckBoxConfig);
    return defaultCheckBoxConfig;

}
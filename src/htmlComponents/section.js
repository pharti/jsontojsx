export const getSectionConfig = (config) => {
    //... config parameter is used when the default configuration are needed to override 
    let defaultSectionConfig = {
        type: 'Element',
        tagName: 'section',
        attributes: {},
        children: config?.children && config?.children.length > 0 ? [...config?.children] : []
    };

    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultSectionConfig[key] = { ...defaultSectionConfig[key], ...config[key] };
        } else if (key === 'styles') {
            //... native base accepts style prop for styling
            //... Note styles used double braces.. But object doesn't accept double braces as value.
            defaultSectionConfig.style = { ...config.styles }
        } else {
            defaultSectionConfig[key] = config[key];
        }
    });

    return defaultSectionConfig;
}
/* eslint-disable prettier/prettier */
export const getFooterConfig = (config) => {

    //... config parameter is used when the default configuration are needed to override 
    let defaultFooterConfig = {
        type: 'Element',
        tagName: 'footer',
        attributes: {
            /*
                Section is basically a grouping of heading and text content,
                which separates the content from other content using spacing. 
            */
            py: "2"
        },
        children: config?.children && config?.children.length > 0 ? [...config?.children] : []
    };

    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultFooterConfig[key] = { ...defaultFooterConfig[key], ...config[key] };
        } else {
            defaultFooterConfig[key] = config[key];
        }
    });

    return defaultFooterConfig;

}
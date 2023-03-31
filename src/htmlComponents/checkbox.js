/* eslint-disable prettier/prettier */
export const getCheckBoxConfig = (config) => {

    const defaultCheckBoxConfig = {
        type: 'Element',
        tagName: 'checkBox',
        attributes: {
            value: `${config.value}`,
            isDisabled: config.isDisabled ? true : false,
        },
        children: config.children && config.children.length > 0 ? [...config.children] : [],
    };
    //... config parameter is used when the default configuration are needed to override
    return defaultCheckBoxConfig;
};

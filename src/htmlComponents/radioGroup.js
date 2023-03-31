/* eslint-disable prettier/prettier */

export const getRadioGroupConfig = (config) => {

    const defaultRadioGroupConfig = {
        type: 'Element',
        tagName: 'radioGroup',
        attributes: {
            size: 'md',
            defaultValue: '1',
            onChange: (value) => config.onPress(value),
            isDisabled: config.isDisabled ? true : false,
        },
        children: config.children && config.children.length > 0 ? [...config.children] : [],
    };

    //... config parameter is used when the default configuration are needed to override
    return defaultRadioGroupConfig;
};

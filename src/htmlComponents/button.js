/* eslint-disable prettier/prettier */
export const getButtonConfig = (config, platform) => {
    //... config parameter is used when the default configuration are needed to override
    const defaultButtonConfig = {
        type: 'Element',
        tagName: 'button',
        attributes: {
            size: `${config.size ? config.size : 'lg'}`,
            startIcon: '',
            endIcon: '',
            variant: platform === 'web' ? 'contained' : 'solid',
            //... bgColor overrides the colorScheme
            bgColor: `${config.bgColor ? config.bgColor : '#06255B'}`,
            // colorScheme: `${config.colorScheme ? config.colorScheme : 'secondary'}`,
            // isLoadingText: `${config.isLoadingText ? config.isLoadingText : "Loading..."}`,
            // variant: `${config.variant ? config.variant : "solid"}`,
            // onPress: (text) => config.onPress(text),
        },
        children: [{
            type: 'Element',
            tagName: 'p',
            attributes: { color: 'white' },
            children: [
                {
                    type: 'Text',
                    content: `${config.buttonText ? config.buttonText : 'Submit'}`,
                },
            ],
        }],
    };

    Object.keys(config).forEach((key, index) => {
        //... For attributes merge the config and default config attributes
        if (key === 'attributes') {
            defaultButtonConfig[key] = { ...defaultButtonConfig[key], ...config[key] };
        } else if (key === 'styles') {
            defaultButtonConfig.attributes = { ...defaultButtonConfig.attributes, ...config[key] };
            defaultButtonConfig.style = { ...config[key] };
            if ('paddingVertical' in config[key]) {
                defaultButtonConfig.attributes.py = config[key].paddingVertical;
            }
            if ('paddingHorizontal' in config[key]) {
                defaultButtonConfig.attributes.py = config[key].paddingHorizontal;
            }
            if ('margin' in config[key]) {
                defaultButtonConfig.attributes.m = config[key].margin;
            }
        } else {
            defaultButtonConfig[key] = config[key];
        }
    });

    return defaultButtonConfig;
};

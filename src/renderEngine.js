/* eslint-disable prettier/prettier */
import React from 'react';
import { ConfigToComponentForMobile } from './mapper/mobileMapper';
import { ConfigToComponentForWeb } from './mapper/webMapper';
import { configEngine } from './configEngine';

//... Return the element content, If the config has children. Iterate over the children.
const generateElement = (config, platform) => {
    try {
        if (config.content || config.value) {
            if (config?.content && config?.content !== '') {
                return config?.content?.trim();
            } else if (config.value && config.value !== '') {
                return config.value;
            }
        }
        if (config.children && config?.children?.length > 0) {
            //...If config has a child element which must be an array. That is stored in childElement key
            return config.children.map(c => {
                if (c.type === 'Text') {
                    //... Remove any extra spaces from the string.
                    return c.content.replace(/\s+/g, ' ').trim();
                } else {
                    switch (platform) {
                        case 'web':
                            return elementCreatorForWeb(c);
                        case 'mobile':
                            return elementCreatorForMobile(c);
                        default:
                            return elementCreatorForMobile(c);
                    }
                }
            });
        }
    } catch (error) {
        console.log('Error: generateElement', error);
    }
};

//... Takes JSON config as input and returns a JSX Element.
const elementCreatorForWeb = config => {
    try {
        const platform = 'web';
        const updatedConfig = configEngine(config, platform);
        console.log('updatedConfig', updatedConfig);
        if (updatedConfig) {
            /*... Create JSX Element. Using the config. The passed config type is
                   mapped with the corresponding native-base component */
            return React.createElement(
                ConfigToComponentForWeb[updatedConfig.tagName], //... React component that we want to render
                { ...updatedConfig.attributes }, //... Attributes, styles, href, source etc
                generateElement(updatedConfig, platform), //... Child element goes here.
            );
        }
    } catch (error) {
        console.log('Error: htmlElementCreator', error);
    }
};

//... Takes JSON config as input and returns a JSX Element.
const elementCreatorForMobile = config => {
    try {
        const platform = 'mobile';
        const updatedConfig = configEngine(config, platform);
        if (updatedConfig) {
            /*... Create JSX Element. Using the config. The passed config type is
                   mapped with the corresponding native-base component */
            return React.createElement(
                ConfigToComponentForMobile[updatedConfig.tagName], //... React component that we want to render
                { ...updatedConfig.attributes }, //... Attributes, styles, href, source etc
                generateElement(updatedConfig, platform), //... Child element goes here.
            );
        }
    } catch (error) {
        console.log('Error: htmlElementCreator', error);
    }
};

//... Iterate over each child element and calls the element creator function.
const webRenderEngine = rootConfig => {
    /**
          rootConfig is an object which includes the information
          for creating a UI Element.
      */
    return rootConfig?.children?.map(c => elementCreatorForWeb(c));
};

//... Iterate over each child element and calls the element creator function.
const mobileRenderEngine = rootConfig => {
    /**
          rootConfig is an object which includes the information
          for creating a UI Element.
      */
    return rootConfig?.children?.map(c => elementCreatorForMobile(c));
};

export { webRenderEngine, mobileRenderEngine };

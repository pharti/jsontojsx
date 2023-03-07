import React from "react";
import { ComponentToCommonTagsMap } from "./mapper";
import { configEngine } from "./configEngine";

//... Return the element content, If the config has children. Iterate over the children.
const generateElement = (config) => {
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
                if (c.type === "Text") {
                    //... Remove any extra spaces from the string.
                    return c.content.replace(/\s+/g, ' ').trim();
                } else {
                    return htmlElementCreator(c)
                };
            })
        }

    } catch (error) {
        console.log('Error: generateElement', error);
    }
};

//... Takes JSON config as input and returns a JSX Element.
const htmlElementCreator = (config) => {
    try {
        const updatedConfig = configEngine(config);
        if (updatedConfig) {
            /*... Create JSX Element. Using the config. The passed config type is
             mapped with the corresponding native-base component */
            return React.createElement(
                ComponentToCommonTagsMap[updatedConfig.tagName],                //... React component that we want to render
                { ...updatedConfig.attributes },                              //... Attributes, styles, href, source etc
                generateElement(updatedConfig)                             //... Child element goes here.
            );
        }
    } catch (error) {
        console.log('Error: htmlElementCreator', error);
    }
};

//... Iterate over each child element and calls the element creator function.
const renderEngine = (rootConfig) => {
    /**
        rootConfig is an object which includes the information 
        for creating a UI Element.
    */
    return rootConfig?.children?.map(c => htmlElementCreator(c));
};

export default renderEngine;
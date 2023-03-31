/* eslint-disable prettier/prettier */
import { getLinkConfig } from './htmlComponents/a';
import { getArticleConfig } from './htmlComponents/article';
import { getButtonConfig } from './htmlComponents/button';
import { getCheckBoxConfig } from './htmlComponents/checkbox';
import { getDivConfig } from './htmlComponents/div';
import { getFigureConfig } from './htmlComponents/figure';
import { getFooterConfig } from './htmlComponents/footer';
import { getH1Config } from './htmlComponents/h1';
import { getH2Config } from './htmlComponents/h2';
import { getH3Config } from './htmlComponents/h3';
import { getH4Config } from './htmlComponents/h4';
import { getH5Config } from './htmlComponents/h5';
import { getH6Config } from './htmlComponents/h6';
import { getHeaderConfig } from './htmlComponents/header';
import { getIconConfig } from './htmlComponents/icon';
import { getImgConfig } from './htmlComponents/img';
import { getInputConfig } from './htmlComponents/input';
import { getPConfig } from './htmlComponents/p';
import { getRadioConfig } from './htmlComponents/radio';
import { getRadioGroupConfig } from './htmlComponents/radioGroup';
import { getSectionConfig } from './htmlComponents/section';
import { getSpanConfig } from './htmlComponents/span';
import { getStrongConfig } from './htmlComponents/strong';
import { getTimeConfig } from './htmlComponents/time';

//... return default configuration, plus the configuration passed to the configEngine function.
export const configEngine = (config, platform) => {
    try {
        let updatedConfig;
        //... parser gives tagName and User config type.
        let type = config.tagName || config.type;
        switch (type) {
            //HTML TAGS
            case 'div':
                updatedConfig = getDivConfig(config);
                break;
            case 'h1':
                updatedConfig = getH1Config(config);
                break;
            case 'h2':
                updatedConfig = getH2Config(config);
                break;
            case 'h3':
                updatedConfig = getH3Config(config);
                break;
            case 'h4':
                updatedConfig = getH4Config(config);
                break;
            case 'h5':
                updatedConfig = getH5Config(config);
                break;
            case 'h6':
                updatedConfig = getH6Config(config);
                break;
            case 'p':
                //... If the value consist of html tags. Than parse and get the config to iterate over all the tags.
                //... DO NOT REMOVE
                // const findHtmlTagRegex = /<\/?[a-z][\s\S]*>/g;
                // const found = config.value.match(findHtmlTagRegex);
                // if (found && found.length > 0) {
                //     parseHtml(config.value).then(result => {
                //         console.log("1", result);
                //         updatedConfig = getPConfig(config, result.children);
                //         console.log('4', updatedConfig);
                //         return updatedConfig;
                //     });
                // }
                updatedConfig = getPConfig(config);
                break;
            case 'a':
                updatedConfig = getLinkConfig(config);
                break;
            case 'i':
                updatedConfig = getIconConfig(config);
                break;
            case 'section':
                updatedConfig = getSectionConfig(config);
                break;
            case 'strong':
                updatedConfig = getStrongConfig(config);
                break;
            case 'footer':
                updatedConfig = getFooterConfig(config);
                break;
            case 'time':
                updatedConfig = getTimeConfig(config);
                break;
            case 'figure':
                updatedConfig = getFigureConfig(config);
                break;
            case 'img':
                updatedConfig = getImgConfig(config);
                break;
            case 'article':
                updatedConfig = getArticleConfig(config);
                break;
            case 'header':
                updatedConfig = getHeaderConfig(config);
                break;
            case 'span':
                updatedConfig = getSpanConfig(config);
                break;
            case 'input':
                updatedConfig = getInputConfig(config);
                break;
            case 'button':
                updatedConfig = getButtonConfig(config, platform);
                break;
            case 'checkBox':
                updatedConfig = getCheckBoxConfig(config);
                break;
            case 'radio':
                updatedConfig = getRadioConfig(config);
                break;
            case 'radioGroup':
                updatedConfig = getRadioGroupConfig(config);
                break;
            // case 'touchable':
            //     updatedConfig = getTouchableConfig(config);
            // break;

            default:
                return updatedConfig;
        }
        return updatedConfig;
    } catch (error) {
        console.log('Error: modifyConfig', error);
    }

};

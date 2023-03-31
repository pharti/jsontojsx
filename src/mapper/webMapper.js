/* eslint-disable prettier/prettier */
import {
    Avatar,
    Box,
    FormControl,
    Heading,
    HStack,
    Icon,
    Image,
    Input,
    Link,
    Modal,
    Stack,
    Text,
    VStack,
    Checkbox,
    Radio,
    Button,
} from 'native-base';
import { Pressable } from 'react-native';

//... Maps native base component to common HTML tags
export const ConfigToComponentForWeb = {
    //... Page tags
    // html
    // head
    // body
    // link
    // meta
    // base
    // script
    // style
    // title

    //...Layout tags
    header: Box,
    // main
    footer: Box,
    // nav
    article: Box,
    // aside
    div: Box,
    section: Box,

    //... Table tags
    // table
    // caption
    // colgroup
    // col
    // thead
    // tbody
    // tfoot
    // tr
    // th
    // td

    //... Form tags
    form: FormControl,
    input: Input,
    // label
    // textarea
    // select
    // button
    // datalist
    // fieldset
    // legend

    //...Text tags
    p: Text,
    h1: Text,
    h2: Text,
    h3: Text,
    h4: Text,
    h5: Text,
    h6: Text,
    span: Text,
    // br
    sub: Text,
    // sup
    u: Text,        //...u HTML tag is outdated, instead use ins
    i: Text,
    b: Text,
    em: Text,
    // strong
    del: Text,
    ins: Text,
    // ruby
    //kbd
    //wbr

    //... List tag
    // ul
    // ol
    // li
    // dl
    // dt
    // dd

    //...Media tags
    //audio
    //video
    //source
    img: Image,
    //canvas
    //track
    //embed
    //iframe
    //svg
    //area
    figure: Box,
    //figcaption
    //map

    //...code group
    //pre
    //code
    //samp
    //output
    //var

    a: Link,
    mark: Text,
    small: Text,
    time: Text,
    //... Generic Components
    heading: Heading,
    subHeading: Text,
    caption: Text,
    button: Button,
    image: Image,
    container: Box,
    avatar: Avatar,
    icon: Icon,
    modal: Modal,
    checkBox: Checkbox,
    touchable: Pressable,
    radio: Radio,
    radioGroup: Radio.Group,
    //...Stack compoments
    HStack: HStack,
    VStack: VStack,
    stack: Stack,
    //... Composite Components
    card: Box,
};

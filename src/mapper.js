import {
    Avatar,
    Box,
    Button,
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
    VStack
} from 'native-base';

//... Maps native base component to common HTML tags
export const ComponentToCommonTagsMap = {
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
    //...Stack compoments
    HStack: HStack,
    VStack: VStack,
    stack: Stack,
    //... Composite Components
    card: Box,
};

//... Maps native base font size standards to HTML tags
export const ComponentToFontSizeMap = {
    small: 'xs',
    caption: 'sm',
    p: 'md',
    h1: '6xl',
    h2: '5xl',
    h3: '4xl',
    h4: '3xl',
    h5: '2xl',
    h6: 'xl',
    time: 'sm'
};

//... Maps native base font style standards to HTML tags
export const ComponentToFontStyleMap = {
    i: 'italic',
    em: 'italic'
};

//... Maps native base font weight standards to HTML tags
export const ComponentToFontWeightMap = {
    b: 'bold',
    strong: 'bold',
};
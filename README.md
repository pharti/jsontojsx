## jsontojsx v1.0.6

This library convert JSON to JSX Element.


## Installation
Using npm

```sh
    npm i jsontojsx
```
## Usage

```sh
    import { renderEngine } from 'jsontojsx';

    renderEngine(testConfig);
```
## JSON Structure

```sh
const testConfig = {
    children: [
    {
type: 'div',
id: 'container-div',
class: 'container-class',
attributes: {},
styles: { padding: 8 },
children: [
{
  type: 'h6',
  id: 'para',
  class: 'para-class',
  attributes: {
    paddingBottom: 8,
  },
  value: 'Login Form',
},
{
  type: 'p',
  id: 'para',
  class: 'para-class',
  attributes: {},
  value: 'Username',
},
{
  type: 'input',
  onTextChange: () => console.log('text ==> '),
},
{
  type: 'p',
  id: 'para',
  attributes: {
    marginTop: 4
  },
  class: 'para-class',
  value: 'Password',
},
{
  type: 'input',
  onTextChange: () => console.log('text ==> '),
},
{
  type: 'button',
  attributes: {
    marginTop: 8
  },
  style: {},
  onPress: () => console.log('Button Click'),
}
]
    },
  ]
};
```

## Output

# <img src="https://raw.githubusercontent.com/pharti/jsontojsx/main/example.png" alt="Example output">


## JSON Reference

Type h1 - h6
```sh
{
  type: 'h6',
  id: '<Tag id>',
  class: '<Tag class name>',
  attributes: { fontSize: 16 },
  value: 'Heading',
}
```

Type p
```sh
{
  type: 'p',
  id: '<Tag id>',
  class: '<Tag class name>',
  attributes: { fontSize: 16 },
  value: 'Heading',
}
```

Type a
```sh
{
  type: 'a',
  id: '<Tag id>',
  class: '<Tag class name>',
  attributes: { href: 'https://www.google.com', },
  value: 'Hyperlink',
}
```

Type Image
```sh
{
 type: 'img',
 id: '<Tag id>',
 class: '<Tag class name>',
 src: 'https://wallpaperaccess.com/full/317501.jpg',
 alt: "<Alt image desc>",
}
```

Type Button
```sh
{
 type: 'button',
 buttonText: 'Submit',
 attributes: { marginTop: 8 },
 onPress: () => foo(),
},
```

Type Input
```sh
{
  type: 'input',
  onTextChange: (value) => console.log(value),
}
```



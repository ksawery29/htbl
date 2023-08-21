## htbl - a _new_ stupid way to write backends

### what is it

as the title says, its a parser for html to write backends inspired by [this post](https://dev.to/thormeier/dont-try-this-at-home-css-as-the-backend-what-3oih). htbl is not a real parser, framework or anything else, its a joke, so it wont get any updates regularly.

### example

heres an example how to return hello world

```html
<!--returns hello world at localhost:3215-->
<route url="/">
    <return>Hello, World!</return>
</route>
```

default port is 3125

### installation

just install it using: `npm install htbl` and run it with: `npx htbl file.html` replacing file.html with your html file

### license

mit

---
id: adding-images-fonts-and-files
title: 使用图片
---

css 属性中： `background: url("assets/xxx.jpg")`


```js
import React from 'react';
import logo from './logo.png';

function Header() {
  return <img src={logo} alt="Logo" />;
}

export default Header;
```
or
```js
import React from 'react';

function Header() {
  return <img src={require('./logo.png')} alt="Logo" />;
}

export default Header;
```
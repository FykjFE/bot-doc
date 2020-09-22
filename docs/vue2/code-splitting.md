---
id: code-splitting
title: 代码分割
---
通过代码拆分，您可以将代码拆分为小块，然后按需加载，而不是在用户使用之前下载整个应用程序。

该项目设置支持通过dynamic进行import()代码拆分。它的建议在阶段4中进行。类import()函数形式采用模块名称作为参数，并返回Promise始终解析为模块名称空间对象的。

这是一个例子：

## `moduleA.js`

```js
const moduleA = 'Hello';

export { moduleA };
```

## `App.js`

```js
import React, { Component } from 'react';

class App extends Component {
  handleClick = () => {
    import('./moduleA')
      .then(({ moduleA }) => {
        // Use moduleA
      })
      .catch(err => {
        // Handle failure
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Load</button>
      </div>
    );
  }
}

export default App;
```
这将使它moduleA.js及其所有唯一依赖项成为一个单独的块，仅在用户单击“加载”按钮后才加载。有关创建的块的更多信息，请参见生产构建部分。

如果愿意，也可以将它与async/ await语法一起使用
## With React Router
```javascript
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```
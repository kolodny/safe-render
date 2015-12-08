safe-render
===

Usage:

```js
import React, { Component } from 'react';
import safeRender from 'safe-render';

class App extends Component {

  @safeRender
  render() {
    throw new Error("Whoa");
  }
}
```

![image](https://cloud.githubusercontent.com/assets/1187604/11669349/3e1a2eb6-9dca-11e5-9796-eee9209117a5.png)

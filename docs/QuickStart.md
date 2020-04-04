## 快速开始

### 第一步

```js
// 克隆项目
git clone https://github.com/PDKSophia/erek-resume

// 切换分支，最新react版本在v2分支上，vue旧版本在devlop分支上
git checkout v2

// 安装依赖
npm install

// 启动项目
npm start

// 打开项目
http://localhost:3000
```

### 第二步

当项目启动之后，浏览器中输入 `http://localhost:3000`，看到下图所示，意味项目器动成功

<img src='https://github.com/PDKSophia/YunResume/raw/master/image/lo1.png'>

此时选择进入`模板`，从模板列表中，选择你喜欢的模板，然后进入，输入个人信息，之后到处 PDF 即可~

## 其他说明

### 设置 alias

1. 修改 config-overrides.js 文件：

```js
const { override, addWebpackAlias, addDecoratorsLegacy } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@src": path.resolve(__dirname, "src/")
  })
);
```

2. 在 tsconfig.json 文件中新增 paths:

```js
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "baseUrl": "src",
    "paths": {
      "@/*": ["src/*"]
    },
  }
```

3. 引用

```js
import {} from "@src/common/hooks/useTheme";
```

运行，发现会报错，`Module not found: Can't resolve '@src/common/hooks/useTheme'`

4. 解决

在根目录新建一个 paths.json 文件，具体文件名称可自行修改，加入以下内容

```js
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@src/*": ["src/*"]
    }
  }
}
```

然后在 tsconfig.json 中新加：

```js
"extends": "./paths.json"
```

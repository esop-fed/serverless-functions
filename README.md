# serverless-functions
无数据库服务，无数据库数据存储方案，esop-fe

## Useage
```bash
git clone https://github.com/esop-fed/serverless-functions.git
npm i
npm start
```

http://localhost:3040

远程接口地址：https://serverless-functions.esop-fe.now.sh/api + '文件名'  
例如：https://serverless-functions.esop-fe.now.sh/api/message

### 编写Api
请在api/src下编写typescript

```js
// message.ts

import { setCors } from "./utils";

const data: any = {};

export default (req: any, res: any) => {
    setCors(res);

    if (req.method === 'POST') {
        for(let id in req.body) {
            data[id] = req.body[id]
        }

        return res.sendStatus(200);
    }

    if (req.method === 'GET') {
        return res.json({
            data
        });
    }

    res.sendStatus(400);
};
```

## 构建

```bash
npm run buildApi
git push
```

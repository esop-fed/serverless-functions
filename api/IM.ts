import * as fs from 'fs';
import * as path from 'path';

export default (req: any, res: any) => {
    fs.writeFile('test.json', JSON.stringify(req.body), err => {
        console.log(err);
    });

    res.sendStatus ? res.sendStatus(400) : res.send(400);
};

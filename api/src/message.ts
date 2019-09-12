import { setCors } from "./utils";

const data: any = {};

export default (req: any, res: any) => {
    setCors(res);

    if (req.method === 'POST') {
        for(let id in req.body) {
            data[id] = req.body[id]
        }

        return res.sendStatus ? res.sendStatus(200) : res.send(200);
    }

    if (req.method === 'GET') {
        return res.json({
            data
        });
    }

    res.sendStatus ? res.sendStatus(400) : res.send(400);
};

import { setCors } from "./utils";

const data: any = {};

export default (req: any, res: any) => {
    setCors(res);

    if (req.method === 'POST') {
        for(let id in req.body) {
            data[id] = req.body[id]
        }

        return res.send(200);
    }

    if (req.method === 'GET') {
        return res.json({
            data
        });
    }

    res.send(400);
};

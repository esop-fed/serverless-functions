import { setCors } from "./utils";

const data = {};

export default (req: any, res: any) => {
    setCors(res);

    if (req.method === 'POST') {
        Object.assign(data, req.body);

        return res.sendStatus(200);
    }

    if (req.method === 'GET') {
        return res.json({
            data
        });
    }

    res.sendStatus(400);
};

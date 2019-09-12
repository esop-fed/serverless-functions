export const data = {};

export default (req: any, res: any) => {
    Object.assign(data, req.body);

    res.json({
        data
    });
};

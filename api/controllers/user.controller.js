export const test = (req, res) => {
    res.json({
        message: "User route is working",
    });
};
export const main = (req, res) => {
    res.json({
        message: "Main is working",
    });
};
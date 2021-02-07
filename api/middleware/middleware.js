const IntToBoolean = (model, key, method) => (req, res, next) => {
    if (method === "get") {
        model
        .find()
        .then((projects) => {
            const Bool = IntToBool(projects, key);
            req.newObjs = Bool;
            next();
        })
        .catch((err) => {
            res.status(500).json(err);
        });
    } else {
        const data = req.body;

        model
        .create(data)
        .then((object) => {
            const respond = IntToBool(object, key);
            req.newObject = respond;
            next();
        })
        .catch((err) => {
            res.status(500).json(err);
        });
    }
};

function IntToBool (array, key) {
    const Array = array.map((item) => {
        const object = {
            ...item, [key]: item[key] === 0 ? false : true,
        };

        return object;
    });
    return Array;
}

module.exports = { IntToBoolean }
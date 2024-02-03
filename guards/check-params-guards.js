module.exports = (params) => {

    return (req, res, next) => {

        let error = false;
        params.forEach((param) => {
            console.log(param)
            console.log(req.body)
            if (!req.body[param]) {
                error = true;
                res.status(400).send({
                    message: `Falta el campo ${param}.`
                });
                return;
            }
        });
        if (error) {
            return;
        }
        next();
    }
}
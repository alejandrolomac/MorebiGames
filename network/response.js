exports.success = function(req, res, status) {
    res.status(status || 200).send({
        error: '',
        body: message
    });
}

exports.error = function(req, res, status, details){
    res.status(status || 500).send({
        error: message,
        body: '',
    });
}
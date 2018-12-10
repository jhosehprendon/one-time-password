module.exports = function(req, res) {
    if(!req.body.phone) {
        return res.status(422).send({ error: 'you must provide a phone number' })
    }

    const phone = String(req.body.phone).replace(/[^\d]/g, '')
}
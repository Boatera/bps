const BPS = require('../model/model');
const errorHandler = require('../database/error');

exports.getBPS = async function(req, res, next){
    try {
        let cari;
        const bps = req.params.bps;
        const resi = req.params.resi;

        if(!bps || !resi){
            throw errorHandler({
                msg: 'Missing required params',
                statusCode: 400
            });
        };
        if(bps){
            cari = await BPS.getBPS({
                resi: resi
            });
        } else {
            cari = await BPS.getBPS({
                resi: resi,
                bps: bps
            });
        };
        if(cari.length === 0){
            return res.status(404).json({
                msg: "Data Not Founf"
            });
        };
        return res.status(200).json(cari);
    } catch(err){
        console.log('API Error:', err);
        next(err);
    };
};
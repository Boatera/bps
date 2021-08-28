const BPS = require('../model/model');
const errorHandler = require('../database/error');

exports.getBPS = async function(req, res, next){
    try {
        //Selecton
        if(!req.query){
            throw errorHandler({msg: "Missing required fields", statusCode: 400});
        };
        const searchNomor = req.query.searchNomor;
        const tipe = req.query.tipe;

        //Check apakah ini mencari atau ngeload semua
        if(req.query.searchNomor){
            let bps;
            //Validation
            const tipe = typeof(tipe) === 'string' ? ['bps', 'resi'].indexOf(tipe) > -1 ?  tipe.trim() : false : false;

            if(tipe === "bps"){
                bps = await BPS.findOne({bps: searchNomor});
            };

            if(tipe === "resi"){
                bps = await BPS.findOne({resi: searchNomor});
            };

            if(!bps){
                return res.status(404).json({
                    msg: "BPS Not Found"
                });
            };

            return res.status(200).json(bps);
        };
    } catch(err){
        console.log('API Error:', err);
        next(err);
    };
};

exports.postBPS = async function(req, res, next){
    try {
        if(!req.body){
            throw errorHandler({msg: "Missing required body", statusCode: 400});
        };

        const bps = req.body.bps;
        const resi = req.body.resi;
        const permohonan = req.body.permohonan;
        const status = req.body.status;
        const npwp = req.body.npwp;
        const nama = req.body.nama;

        if(!bps || !resi || !permohonan || !status || !npwp || !nama){
            throw errorHandler({msg: "Missing required fields", statusCode: 400});
        };

        const bpspermohonan = new BPS({bps: bps, resi: resi, permohonan: permohonan, status: status, npwp: npwp, nama: nama});


        

    } catch(err){
        console.log(err);
        next(err);
    };
};
import paytmchecksum from "../paytm/PaytmChecksum.js"; 
import { paytmParams, paytmMerchantkey } from '../server.js';
// import formidable from 'formidable';
// import https from 'https';

export const addPaymentGateWay = async (request, response) => {
    try {
        let paytmCheckSum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantkey);
        let params = {
            ...paytmParams,
            'CHECKSUMHASH': paytmCheckSum
        }
        response.status(200).json(params);
    } catch (error) {
        response.status(500).json({error:error.message})
    }
}
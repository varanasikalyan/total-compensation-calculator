import { OfferCompClient } from './offer_grpc_web_pb';
import { GetProjectionsRawRequest } from './offer_pb.js';
import BaseService from './base';

class OfferService extends BaseService {
    constructor() {
        super();
        this.client = new OfferCompClient(this.url, null, null);;
    }

    callGetProjectionsRaw =  () => {
        const request = new GetProjectionsRawRequest();

        this.client.getProjectionsRaw(request, {}, (err, response) => {
          if (response == null) {
            console.log(err)
          }else {
            console.log(response.getProjections())
          }
        });
    }
}

export default OfferService;
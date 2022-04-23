import { OfferCompClient } from './offer_grpc_web_pb';
import { 
    GetProjectionsRawRequest
} from './offer_pb.js';
	

const client = new OfferCompClient('http://localhost:8080', null, null);

const CallGetProjectionsRaw = () => {
    const request = new GetProjectionsRawRequest();

    client.getProjectionsRaw(request, {}, (err, response) => {
      if (response == null) {
        console.log(err)
      }else {
        console.log(response.getProjections())
      }
    });
}

export default CallGetProjectionsRaw;
import { OfferComp } from './offer_grpc_web_pb';
import { 
    GetProjectionsRequest, 
    GetProjectionsResponse, 
    GetProjectionsRawRequest,
    GetProjectionsRawResponse
} from './offer_pb.js';
	

let client = new OfferComp('http://localhost:8080', null, null);

const CallGetProjectionsRaw = () => {
    const request = new GetProjectionsRawRequest();
    request.setInput('INR');


    client.GetProjectionsRaw(request, {}, (err, response) => {
      if (response == null) {
        console.log(err)
      }else {
        console.log(response.getProjections())
      }
    });
}

export default CallGetProjectionsRaw;
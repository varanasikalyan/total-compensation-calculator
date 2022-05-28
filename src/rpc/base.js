import settings from '../settings';

class BaseService {
	constructor() {
		this.url = settings.OFFERRPCSERVER.url			
	}
}

export default BaseService
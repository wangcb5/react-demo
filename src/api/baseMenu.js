import ajax from '../util/fetch-install'
import CommonUtil from "../util/commonUtil";
let menu_url = "/menu.json";
import proxyUrl from './proxyUrl'


export default{
    async getMenu(data, cb){
        let result = await ajax.getJsonFetch( menu_url + '?' + CommonUtil.object.toQueryString(data));
        cb(result)
    }
}
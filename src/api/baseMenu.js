import ajax from '../util/fetch-install'
import CommonUtil from "../util/commonUtil";
let menu_url = "/getauthmenu";
import proxyUrl from './proxyUrl'


export default{
    async getMenu(data, cb){
        let result = await ajax.getFetch( proxyUrl.API + menu_url + '?' + CommonUtil.object.toQueryString(data));
        cb(result)
    }
}
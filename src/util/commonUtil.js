
let CommonUtil = {
    throwError:function(str){
        console.log(str);
    },
    string:{
        replaceAll:function(value,findText,replaceText){
            let regExp = new RegExp(findText, "g");
            return value.replace(regExp, replaceText);
        }
    },
    object:{
        toQueryString(obj){
            let str = "";
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    str= str +"&"+key + "=" + obj[key]
                }
            }
            str = str.substring(1);
            return str;
        },
        equalsObject(source,target){
            let p;
            for (p in source) {
                if (typeof (target[p]) == 'undefined') {
                    return false;
                }
            }
    
            for (p in source) {
                if (source[p]) {
                    switch (typeof (source[p])) {
                        case 'object':
                            if (!this.equalsObject(source[p], target[p])) {
                                return false;
                            }
                            break;
                        case 'function':
                            if (typeof (target[p]) == 'undefined' ||
                                (p != 'equals' && source[p].toString() != target[p].toString()))
                                return false;
                            break;
                        default:
                            if (source[p] != target[p]) {
                                return false;
                            }
                    }
                } else {
                    if (target[p])
                        return false;
                }
            }
    
            for (p in target) {
                if (typeof (source[p]) == 'undefined') {
                    return false;
                }
            }
    
            return true;
        },
        cloneObj(source){
            if(source){
                return JSON.parse(JSON.stringify(source));
            }
            return null;
        },
        getProperties(obj){
            let res = [];
            if(!obj){
                return res;
            }
            for(let i in obj){
                res.push(i);
            }
            return res;
        },
        /**
         * js中的任务队列
         * @params: data:Array
         * @params: process:function
         * @params: completedCallback : function 执行完毕的回调
         * @params: context(可选): 执行环境,如果没有，则为window
         * return undefined
         * demo:
         * let data = [{name:1},{name:2},{name:3},{name:4},{name:5},{name:6},{name:7}];
         * function print(item){console.log(item.name);}
         * taskQueue(data,print,cb);
         * **/
        taskQueue:function f(array,process,completedCallback,context){
            if(completedCallback && typeof completedCallback == "function"){
                if(array.length == 1){
                    completedCallback({data:"all tasks completed!"});
                    return;
                }
            }
            let item = array.shift();
            process.call(context,item);
            if(array.length >0){
                setTimeout(()=>{
                    f(array,process,completedCallback,context);
                },500);
            }
        },
        /**
         * 节流函数:
         * 如果在段时间内一直操作DOM,可能会导致浏览器内存问题，甚至崩溃，所以在一段时间内，我们让该持续性的操作间隔的执行
         * @params: method：function 需要执行的函数
         * @params: context(可选)：执行环境，如果没有，则为window
         * return undefined
         * demo:
         * function resizeDiv(){
         *      let div = document.querySelector("#div1");
         *      div.style.height = div.offsetWidth + "px";
         * }
         * throttle(resizeDiv);
         * **/
        throttle:function(method,context) {
            clearTimeout(method.tId);
            method.tId = setTimeout(function () {
                method.call(context);
            }, 80)
        },
        addPrimaryAndCk(data,ck){
            data.map(item=>{
                if(ck!=undefined){
                    if(!ck){
                        item.ck = false;
                    }else{
                        item.ck = true;
                    }
                }else{
                    item.ck = false;
                }
                item.cls = "";
                item.__tmpId = tool._idSeed.newId();
            });
            return data;
        },
        getCheckedItems(arr,field){
            let res = {items:[],vals:[]};
            arr.map(item=>{
                if(item.ck){
                    res.items.push(item);
                    if(field){
                        res.vals.push(item[field]);
                    }
                }
            })
            return res;
        },
        getInfoInArrayByField(field,vals,array){
            let res = [];
            vals.map(item=>{
                array.map(k=>{
                    if(k[vals] == item){
                        res.push(k);
                    }
                })
            })
            return res;
        }
    },
    cookie:{
        removeCookie(name){
            this.setCookie(name,"",new Date(0));
        },
        getCookie(name){
            let cookie = document.cookie;
            let cookieName = encodeURIComponent(name) + "=",
                cookieStart = cookie.indexOf(cookieName),
                cookieValue = null;
            if(cookieStart > -1){
                let cookieEnd = cookie.indexOf(';',cookieStart);
                if(cookieEnd == -1){
                    cookieEnd = cookie.length;
                }
                cookieValue = decodeURIComponent(cookie.substring(cookieStart + cookieName.length,cookieEnd));
            }
            return cookieValue;
        },
        setCookie(name,value,expires){
            let cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
            if(expires instanceof Date){
                cookieText += "; expires=" + expires.toGMTString();
            }else{
                cookieText += "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
            }
            document.cookie = cookieText+";path=/;domain="+document.domain;
        },
    },
    date:{
        date:function(val,splitKey){
            if(!val){return "";}
            let d = new Date(val);
            let m = d.getMonth()+1;
            m = m>=10?m:"0"+m;
            let day = d.getDate();
            day = d.getDate()>=10?d.getDate():"0"+d.getDate();
            if(splitKey){
                return d.getFullYear() + splitKey + m + splitKey + day;
            }else{
                return d.getFullYear() + "/" + m + "/" + day;
            }
        },
        dateTime:function(val,splitKey){
            return this.date(val,splitKey) + " " + this.time(val);
        },
        dateYearTime:function(val,splitKey){
            return this.date(val,splitKey)
        },
        time:function(val){
            if(!val){return "";}
            let d = new Date(val);
            let h = d.getHours() >=10?d.getHours():"0"+d.getHours();
            let m = d.getMinutes() >=10?d.getMinutes():"0"+d.getMinutes();
            let s = d.getSeconds() >=10?d.getSeconds():"0"+d.getSeconds();
            return h + ":" + m + ":" +s;
        },
        //当前月的第一天
        getCurrentMonthFirst(){
            let date=new Date();
            date.setDate(1);
            return this.date(date);
        },
        //当前月的最后一天
        getCurrentMonthLast(){
            let date=new Date();
            let currentMonth=date.getMonth();
            let nextMonth=++currentMonth;
            let nextMonthFirstDay=new Date(date.getFullYear(),nextMonth,1);
            let oneDay=1000*60*60*24;
            return this.date(new Date(nextMonthFirstDay-oneDay));
        },
        //比较2个时间
        compareData(one,two){
            let res = {success:false,data:false};
            if(new Date(one) == "Invalid Date" || new Date(two) == "Invalid Date"){
                res.success = false;
            }else{
                res.success = true;
                let time_one = new Date(one).getTime();
                let time_two = new Date(two).getTime();
                if(time_one > time_two){
                    res.data = true;
                }else{
                    res.data = false;
                }
            }
            return res;
        }
    }
}

export default CommonUtil;
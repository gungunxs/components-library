/**
 * 自封装路由，主要是为了对页面跳转和资源导入进行统一管理。
 * 防止修改页面结构时，需要到处修改相对路径
 * 所有的页面路径均存放在utils下的path.ts文件下
 * 但是需要注意的是，需要实时更新此文件内的内容，否则会出现信息对应不上的问题
 */
// 这里的interface需要和index.d.ts中一一对应，否则在使用时，可能会出现编辑器不提示函数等问题！

interface routerItem{
  name:string,
  router:string
}

export interface router{
  pages:{[k: string]: any},
  require($uri:string):any,
  register(name:string, router:string):void,
  navigateTo(name:string):void
}

export class router implements router {
    pages:{
      [k: string]: any
    }
    constructor() {
      this.pages = {}
    }
    /**
     * 绝对路径导入(@符号开头)
     * @param $uri 
     */
    require($uri:string){
      if($uri[0] == "@"){
        $uri = $uri.replace("@","..");
      }
      return require($uri)
    }
    /**
     * 注册路由
     * @param name 路由别名
     * @param router 实际路径（与app.json中一样）
     */
    register(name:string, router:string) {
      this.pages[name] = "/" + router;
    }

    /**
     * 注册路由列表
     * @param routerList 路由列表
     */
    registerList(routerList:Array<routerItem>) {
      for(let item of routerList){
        this.register(item.name, item.router);
      }
    }

    /**
     * 自封装页面跳转
     * @param name 目标页面别名
     */
    navigateTo(name:string){
      wx.navigateTo({
        url:this.pages[name],
        fail(e){
          console.log(e)
        }
      })
    }

    /**
     * 自封装页面重定向
     * @param name 目标路径别名
     */
    redictTo(name:string){
      wx.redirectTo({
        url:this.pages[name],
        fail(e){
          console.log(e)
        }
      })
    }
}
// 注册路由
const routerUtil = new router;
// TODO 自动添加别名的默认名称为最后一个/后的内容
const myRouteList:Array<routerItem> = [
  {name:"index", router:"pages/index/index"},
  {name:"userAgreement", router:"pages/userAgreement/userAgreement"},
  {name:"loginErro", router:"pages/loginError/loginErro"},
  {name:"versionStatementPage", router:"pages/versionStatement/versionStatementPage/versionStatementPage"},
  {name:"login", router:"pages/login/login"}
]
routerUtil.registerList(myRouteList);

export{
  routerUtil
}
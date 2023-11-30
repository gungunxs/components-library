/**
 * 自封装路由，主要是为了对页面跳转和资源导入进行统一管理。
 * 防止修改页面结构时，需要到处修改相对路径
 * 所有的页面路径均存放在utils下的path.ts文件下
 * 但是需要注意的是，需要实时更新此文件内的内容，否则会出现信息对应不上的问题
 * 
 * routerUtil有三种方法 
 * @navigateTo 导航到某个页面
 *  需要注意的是必须在myRouteList里面按照格式添加相应数据
 *  const app = getApp() as IAppOption
    app.router.navigateTo("index")
 * @require 按需引入（@/）
 */
// 这里的interface需要和index.d.ts中一一对应，否则在使用时，可能会出现编辑器不提示函数等问题！
/**
 * "ignoreDevUnusedFiles": false
    在project.private.config.json的setting里添加此行代码，避免出现微信自己开一个它自己的依赖分析，检测到我没有用这个模块而导致的报错信息。
 */

// 在小程序页面或组件中
/**
 *   redirect() {
    const app = getApp() as IAppOption
    app.router.navigateTo("dialog",
      // 成功的回调
      () => {
        this.success()
      },
      // 失败的回调
      () => {
        this.error()
      }
    )
  },
  success() {
    console.log("返回成功")
  },
  error() {
    console.log("返回失败")
  },
 */

// 声明 __wxConfig 全局变量
declare const __wxConfig: {
  pages: string[]
};

interface routerItem {
  name: string,
  router: string
}

export interface router {
  pages: { [k: string]: any },
  require($uri: string): any,
  register(name: string, router: string): void,
  navigateTo(name: string, successCallback?: () => void, failCallback?: (error?: any) => void): void
  redictTo(name: string, successCallback?: () => void, failCallback?: (error?: any) => void): void
}

export class router implements router {
  pages: {
    [k: string]: any
  }
  constructor() {
    this.pages = {}
  }
  /**
   * 绝对路径导入(@符号开头)
   * @param $uri 
   */
  require($uri: string) {
    if ($uri[0] == "@") {
      $uri = $uri.replace("@", "..");
    }
    return require($uri)
  }
  /**
   * 注册路由
   * @param name 路由别名
   * @param router 实际路径（与app.json中一样）
   */
  register(name: string, router: string) {
    this.pages[name] = "/" + router;
  }

  /**
   * 注册路由列表
   * @param routerList 路由列表
   */
  registerList(routerList: Array<routerItem>) {
    for (let item of routerList) {
      this.register(item.name, item.router);
    }
  };
  /**
   * 自封装页面跳转
   * @param name 目标页面别名
   * @param successCallback 成功回调函数
   * @param failCallback 失败回调函数
   */
  navigateTo(name: string, successCallback?: () => void, failCallback?: (error?: any) => void) {
    wx.navigateTo({
      url: this.pages[name],
      success: () => {
        if (successCallback) {
          successCallback();
        }
      },
      fail: (error) => {
        console.error(error);
        if (failCallback) {
          failCallback(error);
        }
      }
    });
  };

  /**
   * 自封装页面重定向
   * @param name 目标路径别名
   * @param successCallback 成功回调函数
   * @param failCallback 失败回调函数
   */
  redictTo(name: string, successCallback?: () => void, failCallback?: (error?: any) => void) {
    wx.redirectTo({
      url: this.pages[name],
      success: () => {
        if (successCallback) {
          successCallback();
        }
      },
      fail: (error) => {
        console.error(error);
        if (failCallback) {
          failCallback(error);
        }
      }
    });
  };
}
/**
 * 自动注册路由列表
 */
const routerUtil = new router;
const registerRouteAuto = () => {
  // 注册路由
  var routerList:Array<routerItem> = [];
  __wxConfig.pages.map((path:string)=>{
    let newPath = path.split("/")
    let routerListItem:routerItem = {
      name: newPath[newPath.length - 1],
      router: path
    }
    routerList.push(routerListItem)
  })
  // console.log(routerList)
  routerUtil.registerList(routerList)
}
registerRouteAuto()





export {
  routerUtil
}
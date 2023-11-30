/**
 * 路由路径存放文件
 * 由于微信小程序不支持@导入，我们手写了路由工具类来实现这种效果，但是单纯的字符串并不支持代码提示
 * 因此采用了对象的方式来做到代码路径模拟提示的效果
 * 需要注意的是，每当小程序新增页面或者需要引入文件时，必须在此文件夹内按照格式添加相应内容
 * 
 * 一般都会用到utils里面的文件 因此这个文件的路径引入必须存在 对与全局样式的引用也很常见
 * export const path = {
    "需要导入的根文件夹路径（比如utils）":{
      "文件夹1":{
        "文件夹1-1":{
          "文件名称":"根文件夹名称/文件夹1/文件夹1-1/文件名称"
        }
      }
    }
  }

  在其他文件夹 使用路由组件时
  const app = getApp() as IAppOption
  const { pages } = app.router.require('@/utils/path') // 首先需要引入这个路径文件
  var testRouter = app.router.require('@/'+pages.utils.Base64)
 */

export const pages = {
  utils:{
    Base64:"utils/Base64",
    depositSvg:"utils/depositSvg"
  },
}


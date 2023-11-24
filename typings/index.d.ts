/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    themeMode:string,
  }
  router:router
}

// router类型
interface router {
  pages:{[k: string]: any},
  require($uri:string):any,
  register(name:string, router:string):void,
  navigateTo(name:string):void
}

interface IResult<T> {
  code: number,
  msg: string
  data?: T
}

// 默认 tap 事件传递
interface ITapEvent<T = any> {
  currentTarget: { dataset: T; };
}

// 默认 tap 事件传递
interface IscrollEvent<T = any> {
  detail: {
    scrollLeft: T,
    scrollTop: T,
    scrollHeight: T,
    scrollWidth: T,
    deltaX: T,
    deltaY: T
  }
}

// 分页 page 参数
interface IPage<T = any> {
  currentPage: number,
  index: number | undefined,
  pageSize: number,
  totalPage?: number,
  totalCount?: number,
  list: Array<T>,
  params?: any,
  sortColumn?: string,
  sortMethod?: string
}

// 通用 string 对象类型
interface StringReflectI {
  [key: string]: string
}
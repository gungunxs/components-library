// components/DYWH-button/DYWH-button.ts
var app = getApp() as IAppOption

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 样式
    buttonStyle: {
      type:String,
      value:"primary"
    }, // primary secondary tertiary text
    // 尺寸
    Size: {
      type:String,
      value:"large" 
    }, // large medium small
    // 状态
    State: {
      type:String,
      value:"default"
    }, // default disabled loading
    // 文本
    Label: {
      type:String,
      value:"Label"
    },
    Background: {
      type:String,
      value:""
    },
    buttonColor:{
      type:String,
      value:""
    },
    borderColor:{
      type:String,
      value:""
    },
    theme:{
      type:String,
      value:app.globalData.themeMode
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    theme:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    disabled(){
      
    },
  },
  lifetimes:{
    attached() {
      this.setData({
        theme:app.globalData.themeMode
      })
    },
  }
})

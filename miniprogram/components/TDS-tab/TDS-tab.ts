// components/DYWH-tab/DYWH-tab.ts
var app = getApp() as IAppOption
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    theme:{
      type:String,
      value:app.globalData.themeMode
    },
    // 是否展示icon
    ShowIcon:{
      type:Boolean,
      value:false,
    },
    // 选中状态
    State: {
      type:String,
      value:"default", // default：未选中；active：选中
    },
    Label: {
      type:String,
      value:"Label"
    },
    IconPath:{
      type:String,
      value:"loading-primary"
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
    
  },
  lifetimes:{
    attached() {
      this.setData({
        theme:app.globalData.themeMode
      })
    },
  }
})
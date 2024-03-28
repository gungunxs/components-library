// components/TDS-tag/TDS-tag.ts
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
    /*
      颜色模式:背景色 文字色
      Background-Medium_Foreground-High
      Background-Medium_Foreground-Medium
      Background-Primary_Foreground-Primary
      Background-Secondary_Foreground-Secondary
      Background-Error_Foreground-Error
      Background-Tertiary_Foreground-Tertiary
      Foreground-Primary_Foreground-Low
      Foreground-Secondary_Foreground-Low
      Foreground-Error_Foreground-Low
      Foreground-Tertiary_Foreground-Low
     */ 
    Color:{
      type:String,
      value:"Background-Medium_Foreground-High"
    }, 
    // 是否显示icon
    showIcon:{
      type:Boolean,
      value:true,
    },
    // icon路径
    IconPath:{
      type:String,
      value:"loading_green_line"
    },
    // 是否开启固定宽度部分 默认开启
    FixedWidth:{
      type:Boolean,
      value:true,
    },
    // 固定宽度模块内容Label
    FixedLabel:{
      type:String,
      value:"22"
    },
    // 是否开启不定长宽度部分 默认开启
    AdaptiveWidth:{
      type:Boolean,
      value:false,
    },
    // 不定长宽度模块内容Label
    AdaptiveLabel:{
      type:String,
      value:"这是一个不定长文本区"
    }, 
    // 是否具有关闭功能
    Closeable:{
      type:Boolean,
      value:false,
    },
    IconSize:{
      type:String,
      value:'medium'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

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
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
      Foreground-Low-Contrast_Foreground-High
      Foreground-Low-Contrast_Foreground-Medium
      Green-10_Foreground-Primary
      Blue-10_Secondary-Blue
      Red-10_Secondary-Error
      Yellow-10_Secondary-Yellow
      Foreground-Primary_Foreground-Low-Contrast
      Secondary-Blue_Foreground-Low-Contrast
      Secondary-Error_Foreground-Low-Contrast
      Secondary-Yellow_Foreground-Low-Contrast
     */ 
    Color:{
      type:String,
      value:"Foreground-Low-Contrast_Foreground-High"
    }, 
    // 是否显示icon
    showIcon:{
      type:Boolean,
      value:true,
    },
    // icon路径
    IconPath:{
      type:String,
      value:"loading-primary"
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
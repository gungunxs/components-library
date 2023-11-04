// components/DYWH-button/DYWH-button.ts
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

  }
})

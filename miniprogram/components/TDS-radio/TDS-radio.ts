// components/TDS-checkbox/TDS-checkbox.ts
var app = getApp() as IAppOption
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // label所在位置
    LabelPlacement:{
      type: String,
      value: "without" // leading——label在icon前面、trailing——label在icon后面、without——没有label
    },
    // 状态
    State: {
      type: String,
      value: "default" // default——默认状态、selected——选中状态、error——错误状态
    },
    // 是否展示二级文字
    showCaption: {
      type: Boolean,
      value: false
    },
    // 二级问题Caption
    Caption: {
      type: String,
      value: "Caption"
    },
    // Label文字
    Label: {
      type: String,
      value:"Label"
    },
    theme:{
      type:String,
      value:app.globalData.themeMode
    },
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
    /**
     * 点击整个组件区域触发 使用时用bind:check
     */
    tap() {
      if(this.properties.State !== 'error') {
        this.triggerEvent('check')
      } else {
        console.log("error状态不可选择")
      }
    }
  },
  lifetimes:{
    attached() {
      this.setData({
        theme:app.globalData.themeMode
      })
    },
  }
})

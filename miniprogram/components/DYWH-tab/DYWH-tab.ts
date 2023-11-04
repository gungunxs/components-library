// components/DYWH-tab/DYWH-tab.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
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
      value:"/static/svg/loading"
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
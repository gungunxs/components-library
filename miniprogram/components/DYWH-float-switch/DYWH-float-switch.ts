// components/DYWH-float-switch.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    IconPath: {
      type:String,
      value:"sort/down"
    }, // icon路径
    Label1:{
      type:String,
      value:"降序"
    }, // label1
    Label2:{
      type:String,
      value:"用户时间"
    }, // label2
  },

  /**
   * 组件的初始数据
   */
  data: {
    IconPath:"sort/down",
    Label1:"降序",
    Label2:"用户时间"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    sort() {
      this.triggerEvent('sort')
    },
    time() {
      this.triggerEvent('time')
    }
  }
})
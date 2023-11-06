// components/DYWH-input/DYWH-input.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    // input标题
    Title:{
      type:String,
      value:"Label",
    },
    // Hint提示文字
    Hint:{
      type:String,
      value:"Hint or Error Message"
    },
    // 是否展示hint
    showHint:{
      type:Boolean,
      value:true,
    },
    // Icon排列位置
    IconPlacement:{
      type:String,
      value:"none", 
      // 默认是none：不显示icon；leading：icon在input前面；trailing：icon在input后面 
    },
    // input输入状态
    State:{
      type:String,
      value:"default",
      // 默认为default：默认状态；active：输入状态；filled：完成状态；readonly：只读状态；error：错误状态
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
    disabled(){
      
    }
  },
  // 启用插槽功能
  options: {
    multipleSlots:true
  }
})
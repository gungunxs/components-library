// pages/input/input.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFocus:false,
    inputValue:null,
    // State属性值
    inputListKey:[
      "default","active","filled","readonly","error"
    ],
    inputList:{
      "default":[
        // 是否显示hint
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:true,
          iconPlacement:"none",
          state:"default"
        },
        {
          title:"Label",
          hint:"可以自定义的hint文字",
          showHint:true,
          iconPlacement:"none",
          state:"default"
        },
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:true,
          iconPlacement:"leading",
          state:"default"
        },
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:true,
          iconPlacement:"trailing",
          state:"default"
        },
        // 无hint
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:false,
          iconPlacement:"none",
          state:"default"
        },
        // 无hint
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:false,
          iconPlacement:"leading",
          state:"default"
        },
        // 无hint
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:false,
          iconPlacement:"trailing",
          state:"default"
        },
      ],
      "active":[
        // 是否显示hint
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:true,
          iconPlacement:"none",
          state:"active"
        },
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:true,
          iconPlacement:"leading",
          state:"active"
        },
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:true,
          iconPlacement:"trailing",
          state:"active"
        },
        // 无hint
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:false,
          iconPlacement:"none",
          state:"active"
        },
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:false,
          iconPlacement:"leading",
          state:"active"
        },
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:false,
          iconPlacement:"trailing",
          state:"active"
        },
      ],
      "filled":[
        // 是否显示hint
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:true,
          iconPlacement:"none",
          state:"filled"
        },
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:true,
          iconPlacement:"leading",
          state:"filled"
        },
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:true,
          iconPlacement:"trailing",
          state:"filled"
        },
        // 无hint
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:false,
          iconPlacement:"none",
          state:"filled"
        },
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:false,
          iconPlacement:"leading",
          state:"filled"
        },
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:false,
          iconPlacement:"trailing",
          state:"filled"
        },
      ],
      "readonly":[
        // 是否显示hint
        {
          title:"Label",
          hint:"自定义hint",
          showHint:true,
          iconPlacement:"none",
          state:"readonly"
        },
        {
          title:"Label",
          hint:"自定义hint",
          showHint:true,
          iconPlacement:"leading",
          state:"readonly"
        },
        {
          title:"Label",
          hint:"自定义hint",
          showHint:true,
          iconPlacement:"trailing",
          state:"readonly"
        },
        // 无hint
        {
          title:"Label",
          hint:"自定义hint",
          showHint:false,
          iconPlacement:"none",
          state:"readonly"
        },
        {
          title:"Label",
          hint:"自定义hint",
          showHint:false,
          iconPlacement:"leading",
          state:"readonly"
        },
        {
          title:"Label",
          hint:"自定义hint",
          showHint:false,
          iconPlacement:"trailing",
          state:"readonly"
        },
      ],
      "error":[
        // 是否显示hint
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:true,
          iconPlacement:"none",
          state:"error"
        },
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:true,
          iconPlacement:"leading",
          state:"error"
        },
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:true,
          iconPlacement:"trailing",
          state:"error"
        },
        // 无hint
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:false,
          iconPlacement:"none",
          state:"error"
        },
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:false,
          iconPlacement:"leading",
          state:"error"
        },
        {
          title:"Label",
          hint:"Hint or Error Message",
          showHint:false,
          iconPlacement:"trailing",
          state:"error"
        },
      ]
    },
  },
  /**
   * 聚焦事件
   */
  focusInput(e: { detail: { value: any } }) {
    this.setData({
      isFocus:true,
      inputValue:e.detail.value
    })
  },
  /**
   * 失焦事件
   */
  unFoucsInput() {
    this.setData({
      isFocus:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
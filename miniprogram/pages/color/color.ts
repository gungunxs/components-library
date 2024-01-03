// pages/color/color.ts
var app = getApp() as IAppOption
Page({

  /**
   * 页面的初始数据
   */
  data: {
    theme:"",
    colorList:{
      "Foregrounds":[
        {colorVariable:"--Foreground-Primary",colorName:"Foreground-Primary"},
        {colorVariable:"--Foreground-Disabled",colorName:"Foreground-Disabled"},
        {colorVariable:"--Foreground-Secondary",colorName:"Foreground-Medium"},
        {colorVariable:"--Foreground-Tertiary",colorName:"Foreground-Tertiary"},
        {colorVariable:"--Foreground-High",colorName:"Foreground-High"},
        {colorVariable:"--Foreground-Medium",colorName:"Foreground-Medium"},
        {colorVariable:"--Foreground-Low",colorName:"Foreground-Low"},
        {colorVariable:"--Foreground-Error",colorName:"Foreground-Error"},
      ],
      "Backgrounds":[
        {colorVariable:"--Background-Quaternary",colorName:"Background-Quaternary"},
        {colorVariable:"--Background-Primary",colorName:"Background-Primary"},
        {colorVariable:"--Background-Secondary",colorName:"Background-Secondary"},
        {colorVariable:"--Background-Tertiary",colorName:"Background-Tertiary"},
        {colorVariable:"--Background-High",colorName:"Background-High"},
        {colorVariable:"--Background-Medium",colorName:"Background-Medium"},
        {colorVariable:"--Background-Low",colorName:"Background-Low"},
        {colorVariable:"--Background-Error",colorName:"Background-Error"},
      ],
      "Borders":[
        {colorVariable:"--Border-Bounds",colorName:"Border-Bounds"},
        {colorVariable:"--Border-Focus",colorName:"Border-Focus"},
        {colorVariable:"--Border-Error",colorName:"Border-Error"},
      ],
      "Masks":[
        {colorVariable:"--Mask",colorName:"Mask"}
      ],
      "Gradients":[
        {colorVariable:"--Gradients-Primary",colorName:"Thematic gradient"}
      ]
    },
    colorListKey:[
      "Foregrounds","Backgrounds","Borders","Masks","Gradients"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.setData({
      theme:app.globalData.themeMode
    })
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
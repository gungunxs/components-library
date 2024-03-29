// pages/index/index.ts
var app = getApp() as IAppOption
Page({

  /**
   * 页面的初始数据
   */
  data: {
    theme:"",
    themeList:['','DYWH','Cat'],
    themeNum:0,
    menuButtonTop:0,
    buttonList:[
      {
        buttonStyle:"secondary",
        size:"large",
        state:"default",
        label:"Typography 字体排印",
        url:"pages/typography/typography"
      },
      {
        buttonStyle:"secondary",
        size:"large",
        state:"default",
        label:"Color 主题颜色",
        url:"pages/color/color"
      },
      {
        buttonStyle:"secondary",
        size:"large",
        state:"default",
        label:"Gird 布局格式",
        url:"pages/grid/grid"
      },
      {
        buttonStyle:"primary",
        size:"large",
        state:"default",
        label:"Button 按钮",
        url:"pages/button/button"
      },
      {
        buttonStyle:"primary",
        size:"large",
        state:"default",
        label:"ButtonGroup 按钮组",
        url:"pages/buttonGroup/buttonGroup"
      },
      {
        buttonStyle:"primary",
        size:"large",
        state:"default",
        label:"Tag 标签",
        url:"pages/tag/tag"
      },
      {
        buttonStyle:"primary",
        size:"large",
        state:"default",
        label:"Card 卡片",
        url:"pages/card/card"
      },
      {
        buttonStyle:"primary",
        size:"large",
        state:"default",
        label:"Icon 图标格式",
        url:"pages/icon/icon"
      },
      {
        buttonStyle:"primary",
        size:"large",
        state:"default",
        label:"Input 输入框",
        url:"pages/input/input"
      },
      {
        buttonStyle:"primary",
        size:"large",
        state:"default",
        label:"Checkbox 多选框",
        url:"pages/checkbox/checkbox"
      },
      {
        buttonStyle:"primary",
        size:"large",
        state:"default",
        label:"Radio 单选框",
        url:"pages/radio/radio"
      },
      {
        buttonStyle:"primary",
        size:"large",
        state:"default",
        label:"Toast 矩形弹窗",
        url:"pages/toast/toast"
      },
      {
        buttonStyle:"primary",
        size:"large",
        state:"default",
        label:"Tabs 标签页",
        url:"pages/tabs/tabs"
      },
      {
        buttonStyle:"primary",
        size:"large",
        state:"default",
        label:"Dialog 弹窗",
        url:"pages/dialog/dialog"
      },
      {
        buttonStyle:"primary",
        size:"large",
        state:"default",
        label:"mypage 新功能",
        url:"pages/mypage/mypage"
      },
    ]
  },
  /**
   * switchMode 切换皮肤
   */
  switchMode() {
    let themeNum = this.data.themeNum
    let themeList = this.data.themeList
    themeNum++
    app.globalData.themeMode = themeList[themeNum%3]
    this.setData({
      themeNum:themeNum,
      theme:app.globalData.themeMode
    })
  },
  /**
   * 跳转至组件使用说明详情页
   */
  lookupExampleDetail(e: { currentTarget: { dataset: { type: string } } }) {
    wx.navigateTo({
      url:'/'+e.currentTarget.dataset.type
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const menuButton = wx.getMenuButtonBoundingClientRect()
      const menuButtonTop = menuButton.top;
      this.setData({
        menuButtonTop:menuButtonTop,
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
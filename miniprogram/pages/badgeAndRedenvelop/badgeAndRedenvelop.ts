// pages/badgeAndRedenvelop/badgeAndRedenvelop.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showRedenvelop:false, // 是否弹出红包
    isSuccess: false, // 是否还有徽章可以领取
    showBadgeDialog: false, // 是否弹出领取成功的徽章弹窗
  },
  /**
   * 弹出徽章
   */
  showBadgeDialog() {
    this.setData({
      showBadgeDialog:true
    })
  },
  /**
   * 弹出没有徽章的dialog
   */
  showNoBadgeDialog() {
    this.setData({
      isSuccess:false,
      showBadgeDialog:true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    let showRedenvelop = this.data.showRedenvelop
    showRedenvelop = true
    this.setData({
      showRedenvelop:showRedenvelop,
      isSuccess:Math.random() < 0.5,
      badgesNum:Math.floor(Math.random() * 100) + 1
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
// pages/dialog/dialog.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFocus:false,
    inputValue:null,
    showDialog:false,
    meetLength:true,
    showNormalDialog: false,
    showHalfScreenDialog: false,
  },

  /**
   * 聚焦事件
   */
  focusInput() {
    this.setData({
      isFocus:true,
    })
  },
  focusInputValue(e: { detail: { value: any } }) {
    let meetLength = this.data.meetLength
    if(e.detail.value && e.detail.value.length > 12) {
      meetLength = false
    } else {
      meetLength = true
    }
    this.setData({
      inputValue:e.detail.value,
      meetLength:meetLength
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
  closeDialog(){
    this.setData({
      showDialog:false
    })
  },
  openDialog() {
    this.setData({
      showDialog:true
    })
  },
  closeNormalDialog(){
    this.setData({
      showNormalDialog:false
    })
  },
  openNormalDialog() {
    this.setData({
      showNormalDialog:true
    })
  },
  closeHalfScreenDialog(){
    this.setData({
      showHalfScreenDialog:false
    })
  },
  openHalfScreenDialog() {
    this.setData({
      showHalfScreenDialog:true
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
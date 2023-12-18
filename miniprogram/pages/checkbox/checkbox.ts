// pages/checkbox/checkbox.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state:"default",
    checkboxList:[
      {
        LabelPlacement:"leading",
        State:"default",
        Label:"默认状态label前置无caption",
        showCaption:false,
        Caption:"555"
      },
      {
        LabelPlacement:"leading",
        State:"default",
        Label:"默认状态label前置无caption",
        showCaption:true,
        Caption:"Caption内容Caption内容Caption内容"
      },
      {
        LabelPlacement:"leading",
        State:"default",
        Label:"默认状态label前置有caption但Caption无内容",
        showCaption:true,
        Caption:""
      },
      {
        LabelPlacement:"leading",
        State:"selected",
        Label:"选中状态label前置无caption",
        showCaption:false,
        Caption:"555"
      },
      {
        LabelPlacement:"leading",
        State:"error",
        Label:"错误状态label前置无caption",
        showCaption:false,
        Caption:"555"
      },
      {
        LabelPlacement:"trailing",
        State:"default",
        Label:"默认状态label后置无caption",
        showCaption:false,
        Caption:"555"
      },
      {
        LabelPlacement:"trailing",
        State:"default",
        Label:"默认状态label后置无caption",
        showCaption:true,
        Caption:"Caption内容Caption内容Caption内容"
      },
      {
        LabelPlacement:"trailing",
        State:"default",
        Label:"默认状态label后置有caption但Caption无内容",
        showCaption:true,
        Caption:""
      },
      {
        LabelPlacement:"trailing",
        State:"selected",
        Label:"选中状态label后置无caption",
        showCaption:false,
        Caption:"555"
      },
      {
        LabelPlacement:"trailing",
        State:"error",
        Label:"错误状态label后置无caption",
        showCaption:false,
        Caption:"555"
      },
    ]
  },
  /**
   * 选择按钮
   */
  check() {
    let state = this.data.state
    state = state == 'default' ? 'selected' : 'default'
    this.setData({
      state:state
    })
  },
  /**
   * checkGroup 多选
   */
  checkGroup(e: { currentTarget: { dataset: { id: any } } }) {
    let id = e.currentTarget.dataset.id
    let checkboxList = this.data.checkboxList
    checkboxList[id].State = checkboxList[id].State == 'default' ? 'selected' : 'default' 
    this.setData({
      checkboxList:checkboxList
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
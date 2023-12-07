// pages/toast/toast.ts
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showToast1:false,
    showToast:false,
    toastListKey:[
      'icon','no-icon'
    ],
    toastList:{
      // 有icon
      "icon":[
        {
          Icon:true,
          iconPath:"loading-primary",
          message:"Message显示 Capition不显示 Icon显示且默认",
          caption:"",
          showCapition:false
        },
        {
          Icon:true,
          iconPath:"setting",
          message:"Message显示 Capition不显示 Icon显示为自定义",
          showCaption:false,
          caption:""
        },
        {
          Icon:true,
          iconPath:"loading-primary",
          message:"Message显示 Capition显示 Icon显示为默认",
          showCaption:true,
          caption:"Message显示 Capition显示 Icon显示为默认"
        },
        {
          Icon:true,
          iconPath:"setting",
          message:"Message显示 Capition不显示 Icon显示为自定义",
          showCaption:true,
          caption:"Message显示 Capition不显示 Icon显示为自定义"
        },
      ],
      // 无icon
      "no-icon":[
        {
          Icon:false,
          iconPath:"loading-primary",
          message:"Message显示 Capition不显示 Icon显示且默认",
          caption:"",
          showCapition:false
        },
        {
          Icon:false,
          iconPath:"setting",
          message:"Message显示 Capition不显示 Icon显示为自定义",
          showCaption:false,
          caption:""
        },
        {
          Icon:false,
          iconPath:"loading-primary",
          message:"Message显示 Capition显示 Icon显示为默认",
          showCaption:true,
          caption:"Message显示 Capition显示 Icon显示为默认"
        },
        {
          Icon:false,
          iconPath:"setting",
          message:"Message显示 Capition不显示 Icon显示为自定义",
          showCaption:true,
          caption:"Message显示 Capition不显示 Icon显示为自定义"
        },
      ],
    }
  },
  /**
   * 手动关闭toast的操作
   */
  showToast() {
    let toast = this.selectComponent("#mannerToast")
    this.setData({
      showToast:true
    })
    toast.showToast("手动触发toast 通过设置showToast方法，配合showToast赋值","需要通过showToast来延时控制，否则消失时无动画","loading-primary")
  },
  hiddenToast(){
    let toast = this.selectComponent("#mannerToast")
    toast.hiddenToast()
    setTimeout(()=>{
      this.setData({
        showToast:false,
      })
    },0.25*1000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    let toast = this.selectComponent("#autoToast");
    this.setData({
      showToast1:true
    })
    toast.showToastAuto("toast自动弹出，在onShow或onLoad中初始化，调用showToastAuto方法","关闭toast的延时为(duration+0.25)*1000","loading-primary",5)
    setTimeout(()=>{
      this.setData({
        showToast1:false
      })
    },10.25*1000)
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
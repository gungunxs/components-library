// pages/mypage/mypage.ts
var app = getApp() as IAppOption
Page({
  /**
   * 页面的初始数据
   */
  data: {
    featureTitle:"全新板块震撼登场！！", // 功能区标题
    enterLabel:"进入小程序", // 小程序跳转文本
    baseUrl: "https://fmin.oss-cn-hangzhou.aliyuncs.com/fmin-ad/", // 网络图片baseurl
    nanlilu22LogoUrl:"44d7ef7a-nanlilu22-logo.png", // 南李路22logo url
    nanliluChineseUrl:"5372cf3a-nanlilu-chinese.svg", // 南李鹿中文 url
    sccChineseUrl:"35a0a6e3-scc-chinese.svg", // 首上喵喵中文 url
    scLogoUrl:"3e50c6ed-sc-logo.png", // 首上喵喵logo url
    newyearBlessingChineseUrl:"acb55ec1-newyearBlessing-chinese.svg", // 新年祝福url
    spBlessingUrl:"89bca910-sp-blessing.png", // 首义祝福logo url
    smpChineseUrl:"ea4ac61c-smp-chinese.svg", // 首义地图中文 url
    smpLogoUrl:"b894d060-smp-logo.png", // 首义地图logo url
    rightUrl:"9eaad85c-right.svg", // 向右 url
    badgeNum:0, // 徽章数量
    nanliluLabel:"保护濒危动物\n需要你我共同参与",  // 南李鹿卡片文本
    scLabel:"梦幻联动\n猫咪的秘密基地", // 首上喵喵卡片文本
    blessLabel:"在陌生的角落\n总有专属于你的幸福", // 新年祝福卡片文本
    smpLabel:"寻宝之旅\n与SMP一同导航", // 首义地图卡片文本
    appidList:{
      'sc':'wx28a857959bc0b0fe',
      'smp':'wx24f7b6c19ab5ab2a'
    }, // appid对应值
    pagepathList:{
      'bless':"button"
    }, // 页面路径对应值
  },
  /**
   * 跳转至对应小程序
   */
  jumpToMini(e: { currentTarget: { dataset: { type: string } } }) {
    var mini = e.currentTarget.dataset.type 
    var appidList:any = this.data.appidList
    wx.navigateToMiniProgram({
      appId: appidList[mini],
      envVersion: 'release',
      success(res) {
        // 打开成功
        console.log(res)
      }
    })
  },
  /**
   * jumpToPage 跳转相应页面
   */
  jumpToPage(e: { currentTarget: { dataset: { type: string } } }) {
    var path = e.currentTarget.dataset.type
    var pagePathList:any = this.data.pagepathList
     app.router.navigateTo(pagePathList[path])
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
    // 根据openid获取勋章数
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
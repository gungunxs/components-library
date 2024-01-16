// pages/grid/grid.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardList:['','',''], // 用于控制卡片的个数
    gridList:[
      {
        gridName:"flex flex布局",
        gridValue:"flex"
      },
     {
      gridName:"flex-center flex布局+水平竖直居中",
      gridValue:"flex-center"
     },
     {
      gridName:"flex-spacebetween flex布局+平均分空间",
      gridValue:"flex-spacebetween fill-available"
     },
     {
      gridName:"stretch 居左对齐 需要配合flex布局以及fill-available使用",
      gridValue:"flex stretch fill-available"
     },
     {
      gridName:"row flex行排列 需要配合flex布局使用",
      gridValue:"flex row"
     },
     {
      gridName:"column flex列排列 需要配合flex布局使用",
      gridValue:"flex column"
     },
     {
      gridName:"fill 宽度百分百填充",
      gridValue:"fill"
     },
     {
      gridName:"fill-available 宽度自适应填充容器 可视范围内",
      gridValue:"fill-available"
     }
    ]
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
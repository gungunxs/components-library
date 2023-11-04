// pages/color/color.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorList:{
      "Primary":[
        {colorVariable:"--Primary",colorName:"Primary"}
      ],
      "Secondary":[
        {colorVariable:"--Secondary-Blue",colorName:"Secondary Blue"},
        {colorVariable:"--Secondary-Yellow",colorName:"Secondary Yellow"},
        {colorVariable:"--Secondary-Error",colorName:"Secondary Error"},
        {colorVariable:"--Secondary-Highlight",colorName:"Secondary Highlight"},
      ],
      "Foreground":[
        {colorVariable:"--Foreground-Primary",colorName:"Foreground Primary"},
        {colorVariable:"--Foreground-High",colorName:"Foreground-High"},
        {colorVariable:"--Foreground-Medium",colorName:"Foreground Medium"},
        {colorVariable:"--Foreground-Low",colorName:"Primary"},
        {colorVariable:"--Foreground-Medium-Contrast",colorName:"Foreground Medium Contrast"},
        {colorVariable:"--Foreground-Low-Contrast",colorName:"Foreground Low Contrast"},
        {colorVariable:"--Foreground-White",colorName:"Foreground White"},
        {colorVariable:"--Foreground-Negative",colorName:"Foreground Negative"},
      ],
      "Border-Natural":[
        {colorVariable:"--Border-Natural",colorName:"Border Natural"},
      ],
      "Placeholder-Color":[
        {colorVariable:"--Placeholder-Color",colorName:"Placeholder Color"},
      ],
      "Secondary-10":[
        {colorVariable:"--Blue-10",colorName:"Blue 10"},
        {colorVariable:"--Yellow-10",colorName:"Yellow 10"},
        {colorVariable:"--Red-10",colorName:"Red 10"},
        {colorVariable:"--Green-10",colorName:"Green 10"},
      ],
      "Masking-Color":[
        {colorVariable:"--Masking-Color",colorName:"Masking Color"}
      ],
      "Gradient":[
        {colorVariable:"--Dialog-Gradient",colorName:"Thematic gradient"}
      ]
    },
    colorListKey:[
      "Primary","Secondary","Foreground","Border-Natural","Placeholder-Color","Secondary-10","Masking-Color","Gradient"
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
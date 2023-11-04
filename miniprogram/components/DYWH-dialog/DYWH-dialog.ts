// components/DYWH-dialog/DYWH-dialog.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    // 一级标题
    headTitle: {
      type:String,
      value:""
    },
    // 一级标题
    subTitle: {
      type:String,
      value:""
    },
    // 一级标题
    isHead: {
      type:Boolean,
      value:true
    },
    // 一级标题
    isSub: {
      type:Boolean,
      value:true
    },
    // 是否展示
    showDialog: {
      type: Boolean,
      value: false
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    animationName:"fadeInGrow",
    maskAnimationName:"fadeIn",
    showOut:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    close(){
      this.triggerEvent('tapBg');
      // this.setData({
      //   showOut:false,
      //   animationName:"fadeOutShrink",
      //   maskAnimationName:"fadeOut"
      // })
    },
    // 用于防止像父组件冒泡事件
    catch(){
    },
    // 用于防止页面滑动
    true(){

    }
  },
  observers:{
    'showDialog':function(showDialog){
      var that = this;
      if(showDialog){
        that.setData({
          showOut:true,
          animationName:"fadeInGrow",
          maskAnimationName:"fadeIn"
        })
      }else if(!showDialog && this.data.showOut){
        that.setData({
          animationName:"fadeOutShrink",
          maskAnimationName:"fadeOut"
        },function(){
          setTimeout(() => {
            that.setData({
              showOut:false,
            })
          },0.1 * 1000)
        })
      }else{
        that.setData({
          showOut:false,
          animationName:"fadeOutShrink",
          maskAnimationName:"fadeOut"
        })
      }
    }
  },

  lifetimes: {
    // 生命周期函数
    ready: function() {

    },
  },
})
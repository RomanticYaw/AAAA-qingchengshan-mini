Page({
  data: {
    imgList: [
      "/images/scene1.jpg",
      "/images/scene2.jpg",
      "/images/scene3.jpg"
    ],
    index: 0,
    currentImg: "",
    animationData: {}
  },

  onLoad() {
    this.setData({
      currentImg: this.data.imgList[0]
    })
    this.animation = wx.createAnimation({
      duration: 350,
      timingFunction: "ease"
    })
  },

  changeImage(newIndex) {
    this.animation.opacity(0).step()
    this.setData({
      animationData: this.animation.export()
    })
    setTimeout(() => {
      this.setData({
        index: newIndex,
        currentImg: this.data.imgList[newIndex]
      })
      this.animation.opacity(1).step()
      this.setData({
        animationData: this.animation.export()
      })
    }, 180)
  },

  prevPage() {
    let idx = this.data.index - 1
    if (idx < 0) idx = this.data.imgList.length - 1
    this.changeImage(idx)
  },

  nextPage() {
    let idx = this.data.index + 1
    if (idx >= this.data.imgList.length) idx = 0
    this.changeImage(idx)
  },

  startExplore() {
    wx.showToast({
      title: "开启青城山之旅",
      icon: "none"
    })
  }
})
const request = ({ url, data = null, method = 'GET' }) => {
  wx.showLoading({
    title: 'Loading...', //提示的内容,
    mask: true, //显示透明蒙层，防止触摸穿透,
  });

  return new Promise((resolve, reject) =>
    wx.request({
      url, //开发者服务器接口地址",
      data, //请求的参数",
      method,
      dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: res => resolve(res.data),
      fail: (err) => reject(err),
      complete: () =>
        wx.hideLoading()
    })
  )
}

export default request;

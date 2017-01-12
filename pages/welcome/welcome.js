Page({
    onTap: function (event) {
        // wx.navigateTo({
        //     url:"../posts/post"
        // });
        
        wx.redirectTo({
            url: "../movies/movies"
        });
        
    },
     onShareAppMessage: function () {
        return {
        title: '找好电影推荐',
        desc: '进入搜索电影吧',
        path: '/pages/welcome/welcome'
        }
  }
})
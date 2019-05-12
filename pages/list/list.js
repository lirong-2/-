Page({
  data:{
    imgurls:[
      'http://p3.music.126.net/bKFfzVVNmdLTaRN5uHHPqA==/18786255672743757.jpg',
      'http://p4.music.126.net/n15ddawhY4cyIzFu23CSJA==/1401877341861315.jpg',
      'http://p3.music.126.net/zMwH3zh33TAacyh2_4RjXw==/1375489062675977.jpg'
    ],
    songs: [
      {
        id: "363488",
        name: "爱不爱我",
        album: {
          picUrl: "http://p4.music.126.net/Frbn2mQ18NswoanBk-O1wg==/106652627910743.jpg",
          name: "永恒的起点"
        },
        artists: "零点"
      },
      {
        id: "186385",
        name: "别怕我伤心",
        album: {
          picUrl: "http://p4.music.126.net/ns4zt4X5JPRf42h5q4F7wA==/841126395248902.jpg",
          name: "张信哲精选"
        },
        artists: "张信哲"
      },
      {
        id: "108251",
        name: "当你",
        album: {
          picUrl: "http://p4.music.126.net/tUapZaR1iT5XTX2QcAc0DA==/96757023257715.jpg",
          name: "她说 概念自选辑"
        },
        artists: "林俊杰"
      },
      {
        id: "363488",
        name: "爱不爱我",
        album: {
          picUrl: "http://p4.music.126.net/Frbn2mQ18NswoanBk-O1wg==/106652627910743.jpg",
          name: "永恒的起点"
        },
        artists: "零点"
      },
      {
        id: "186385",
        name: "别怕我伤心",
        album: {
          picUrl: "http://p4.music.126.net/ns4zt4X5JPRf42h5q4F7wA==/841126395248902.jpg",
          name: "张信哲精选"
        },
        artists: "张信哲"
      },
      {
        id: "108251",
        name: "当你",
        album: {
          picUrl: "http://p4.music.126.net/tUapZaR1iT5XTX2QcAc0DA==/96757023257715.jpg",
          name: "她说 概念自选辑"
        },
        artists: "林俊杰"
      },
      {
        id: "1293886117",
       name: "李荣浩", "picUrl": null, "alias": []
      }
    ]
  },
  gotoPlay: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../play/play?id=' + id
    });

  }
})
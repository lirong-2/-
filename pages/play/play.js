Page({
   data:{
     jd:0
        },
 onLoad:function(options){
  //  接收从播放页面传过来的音乐id
    const mid=options.id;
    this.setData({id:mid});
    // 根据当前的音乐id获取此音乐的详细信息
    wx.request({
      url: 'http://music.163.com/api/song/detail?id='+mid+'&ids=['+mid+']',
      success:this.playmusic.bind(this)
               });
     },
    playmusic:function(res){
         var song=res.data.songs[0];
         this.setData({song:song});
        this.player = wx.createInnerAudioContext();
      // 将当前的音乐url设置给播放器
        this.player.src = "https://music.163.com/song/media/outer/url?id="+this.data.id;
      // 让播放器进入播放状态
       this.player.play();//让音乐播放
       this.setData({ state: "play" });//用于记录音乐播放器状态
    },
    xuanzhuan:function(){
      if(this.data.state=="play"){
      this.setData({jd:this.data.jd+1});
      }
      setTimeout("xuanzhuan()",10);
    },
   onUnload:function(){
     this.player.pause();//退出播放页面时音乐暂停
   },
  //  音乐中间播放按钮控制播放和暂停
  playorpause:function(){
    if(this.data.state=="play"){
      this.player.pause();
      this.setData({state:'pause'});
    }
    else{
      this.player.play();
      this.setData({state:'play'});
    }
  }

  
})
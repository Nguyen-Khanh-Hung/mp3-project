// Tab UI
TAB_ITEMS.forEach(function (item, index) {
    item.addEventListener('click', function (e) {
        const body_music = TAB_BODY[index];
        document.querySelector('.js-item.active').classList.remove('active');
        document.querySelector('.body-music.active').classList.remove('active');
        this.classList.add('active');
        body_music.classList.add('active');
        e.preventDefault();
    })
})
// Render songs
function render(){

}
render()

const app={
    currentIndex: 0,
    isPlaying: false,
    songs: [
        {
          name: "Hai phút hơn",
          title:"Hai phút hơn",
          singer: "Pháo, 2T",
          path: "./assets/Album_mp3/2-Phut-Hon-Phao-Mouse-T-Wack.mp3",
          image: "./assets/personal-song-lists/2 phút hơn.webp"
        },
        {
          name: "Đâu ai chung tình được mãi",
          title:"Đâu ai chung tình được mãi",
          singer: "Đinh Tùng Huy, ACV Remix",
          path: "./assets/Album_mp3/Ai Chung Tinh Duoc Mai - Dinh Tung Huy.mp3",
          image: "./assets/personal-song-lists/aichungtinhduocmai.webp"
        },
        {
          name: "Anh mắt ta chạm nhau",
          title:"Anh mắt ta chạm nhau",
          singer: "Ngô Lan Hương, Đại Mèo remix",
          path: "./assets/Album_mp3/AnhCoMuonDuaEmVeKhongOrinnEDMRemix-NgoLanHuong-7021715.mp3",
          image: "./assets/personal-song-lists/Ánh mắt ta chạm nhau.webp"
        },
        {
          name: "Chạy về nơi phía anh",
          title:"Chạy về nơi phía anh",
          singer: "Khắc Việt",
          path: "./assets/Album_mp3/Chay Ve Noi Phia Anh - Khac Viet.mp3",
          image: "./assets/personal-song-lists/chay ve noi phia anh.webp"
        },
        {
          name: "Yêu đi đừng sợ",
          title:"Yêu đi đừng sợ",
          singer: "Only C",
          path: "./assets/Album_mp3/Yeu Di Dung So - OnlyC.mp3",
          image: "./assets/personal-song-lists/yêu đừng sợ đâu.jpeg"
        },
        {
          name: "Cô đơn dành cho ai",
          title:"Cô đơn dành cho ai",
          singer: "NAL, LEE KEN, Orinn Remix",
          path: "./assets/Album_mp3/Co Don Danh Cho Ai - Lee Ken_ Nal.mp3",
          image: "./assets/personal-song-lists/cô đơn dành cho ai.webp"
        },
        {
          name: "Gieo quẻ",
          title:"Gieo quẻ",
          singer: "Hoàng Thùy Linh",
          path: "./assets/Album_mp3/Gieo Que - Hoang Thuy Linh_ Den.mp3",
          image: "./assets/personal-song-lists/chay ve noi phia anh.webp"
        }
      ],
    render: function(songs){
    var htmls= this.songs.map(function(song,index){
      console.log(this.currentIndex);
      
          return ` <div class="album-songs ${index === this.currentIndex ? 'active' :''}">  
          <div class="song_order">
           <div class="song_order-icon"><i class="fa-solid fa-music"></i></div>  
              <div class="song_thumbnail">
                  <div class="song_thumbnail-img"><img src="${song.image}" alt=""></div>
                  <div class="song_thumbnail-detail">
                      <div class="song_thumbnail-name">${song.name}</div>
                      <div class="song_thumbnail-singer">${song.singer}</div>
                  </div>
              </div>
           </div>
          <div class="song_name">
              <p class="song_name-title">${song.title}</p>
          </div>
          <div class="song_time">
              <p>4p32s</p>
          </div>
      </div>`
      })
      document.querySelector('#row_songs').innerHTML=htmls.join('');

    },
    defineProperties: function(){
        Object.defineProperty(this, 'currentSong',{
            get: function(){
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvents: function(){
      const _this=this;
        play_btn.addEventListener('click',function(){
          if(_this.isPlaying){
            audio.pause()
          }
          else{
            audio.play()
          }
        })
        // Xử lý khi play
        audio.onplay=function(){
          _this.isPlaying=true;
          document.querySelector('.footer_list-function').classList.add('playing')
        }
          // Xử lý khi pause
        audio.onpause=function(){
          _this.isPlaying=false;
           document.querySelector('.footer_list-function').classList.remove('playing')
        }
        // Xử lý range chạy theo tiến độ bài hát
        audio.ontimeupdate=function(){
          if(audio.duration){
            const progressPercentage = Math.floor(audio.currentTime/audio.duration*100)
           rangeInput.value=progressPercentage
          }
        }
        // Xử lý khi tua bài hát
        rangeInput.onchange=function(e){
          const seekTime=audio.duration/100*e.target.value
          audio.currentTime=seekTime
        }
        // next Song
        btn_next_song.onclick=function(){
          _this.nextSong()
          audio.play()
        }
        btn_prev_song.onclick=function(){
          _this.prevSong()
          audio.play()
        }
        audio.onended=function(){
          btn_next_song.click()
        }
        btn_random.onclick=function(){
          _this.randomSong()
          console.log( _this.randomSong());
          
          audio.play()
        }
    },
    loadCurrentSong: function(){
        heading.textContent=this.currentSong.name
        singer.textContent=this.currentSong.singer
        thumb.setAttribute("src",`${this.currentSong.image}`);
        audio.src=this.currentSong.path  
    },
    randomSong: function(){
      Math.floor(Math.random() * app.songs.length)
    },
    nextSong: function(){
      this.currentIndex++
      if(this.currentIndex>=this.songs.length){
          this.currentIndex=0
      }
      this.loadCurrentSong();
    },
    prevSong: function(){
      this.currentIndex--
      if(this.currentIndex<0){
        this.currentIndex=this.songs.length-1
    }
      this.loadCurrentSong();
    },
    start:function(){
        // Địng nghĩa các thuộc tính cho Object
        this.defineProperties();
        // Render bài hát ra giao diện
        this.render();
        // Xử lý sự kiện
        this.loadCurrentSong()
        this.handleEvents();
    }
}
app.start()


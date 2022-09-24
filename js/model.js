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
const app={
    currentIndex: 0,
    isPlaying: false,
    songs: [
        {
          id:1,
          name: "Hai phút hơn",
          title:"Hai phút hơn",
          singer: "Pháo, 2T",
          path: "./assets/Album_mp3/2-Phut-Hon-Phao-Mouse-T-Wack.mp3",
          image: "./assets/personal-song-lists/2 phút hơn.webp"
        },
        {
          id:2,
          name: "Đâu ai chung tình được mãi",
          title:"Đâu ai chung tình được mãi",
          singer: "Đinh Tùng Huy, ACV Remix",
          path: "./assets/Album_mp3/Ai Chung Tinh Duoc Mai - Dinh Tung Huy.mp3",
          image: "./assets/personal-song-lists/aichungtinhduocmai.webp"
        },
        {
          id:3,
          name: "Anh mắt ta chạm nhau",
          title:"Anh mắt ta chạm nhau",
          singer: "Ngô Lan Hương, Đại Mèo remix",
          path: "./assets/Album_mp3/AnhCoMuonDuaEmVeKhongOrinnEDMRemix-NgoLanHuong-7021715.mp3",
          image: "./assets/personal-song-lists/Ánh mắt ta chạm nhau.webp"
        },
        {
          id:4,
          name: "Chạy về nơi phía anh",
          title:"Chạy về nơi phía anh",
          singer: "Khắc Việt",
          path: "./assets/Album_mp3/Chay Ve Noi Phia Anh - Khac Viet.mp3",
          image: "./assets/personal-song-lists/chay ve noi phia anh.webp"
        },
        {
          id:5,
          name: "Yêu đi đừng sợ",
          title:"Yêu đi đừng sợ",
          singer: "Only C",
          path: "./assets/Album_mp3/Yeu Di Dung So - OnlyC.mp3",
          image: "./assets/personal-song-lists/yêu đừng sợ đâu.jpeg"
        },
        {
          id:6,
          name: "Cô đơn dành cho ai",
          title:"Cô đơn dành cho ai",
          singer: "NAL, LEE KEN, Orinn Remix",
          path: "./assets/Album_mp3/Co Don Danh Cho Ai - Lee Ken_ Nal.mp3",
          image: "./assets/personal-song-lists/cô đơn dành cho ai.webp"
        },
        {
          id:7,
          name: "Gieo quẻ",
          title:"Gieo quẻ",
          singer: "Hoàng Thùy Linh",
          path: "./assets/Album_mp3/Gieo Que - Hoang Thuy Linh_ Den.mp3",
          image: "./assets/personal-song-lists/gieo quẻ.webp"
        }
      ],
    render: function(songs){
      const __this=this
    var htmls= this.songs.map(function(song,index){
          return `<div class="album-songs ${index === __this.currentIndex ? 'active' :''}" data-index="${index}">  
          <div class="song_order">
           <div class="song_order-icon"><i class="fa-solid fa-music"></i></div>  
              <div class="song_thumbnail">
                  <div class="song_thumbnail-img"><img class="thumbnail-path" src="${song.image}" alt=""></div>
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
          _this.render()
        }
        btn_prev_song.onclick=function(){
          _this.prevSong()
          audio.play()
          _this.render()
        }
        audio.onended=function(){
          btn_next_song.click()
        }
        btn_random.onclick=function(){
          _this.randomSong()
        }
        playList.onclick=function(e){
        const songNode= e.target.closest('.album-songs:not(.active');
        if(songNode){
          _this.currentIndex=Number(songNode.getAttribute('data-index')) 
          _this.loadCurrentSong()
          _this.render()
          let tasks = _this.getLocalStorage();
          _this.renderRecentSongs(tasks)
          audio.play()
        }
        var thumbnail_path= songNode.querySelector('.thumbnail-path')
        var imagePath=thumbnail_path.getAttribute('src');
        var dataPath=songNode.getAttribute('data-index');
        var song_name= songNode.querySelector('.song_thumbnail-name').textContent
        var songSinger= songNode.querySelector('.song_thumbnail-singer').textContent
        let tasks = _this.getLocalStorage();
      var objectSongs={
        dataPath,
        imagePath,
        name_title: song_name,
        singer_title: songSinger,
      }
        tasks.push(objectSongs);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      _this.renderRecentSongs(tasks)
      e.preventDefault();
        }
        playListRecently.onclick=function(e){
        const songNode= e.target.closest('.album-songs:not(.active');
        if(songNode){
          _this.currentIndex=Number(songNode.dataset.index) 
          _this.loadCurrentSong()
        let tasks = _this.getLocalStorage();
          _this.renderRecentSongs(tasks)
          audio.play()
        }
        }
        document.querySelector(".search").onkeyup=function(e){
        let valueSearchInput = e.target.value;
        console.log(valueSearchInput);
        var filterTasks= _this.songs.filter(function(value) {
        return value.name.toLowerCase().includes(valueSearchInput)}
        )
        console.log(filterTasks);
        _this.render(filterTasks)
        _this.loadCurrentSong()
        }    
    },
    loadCurrentSong: function(){
        heading.textContent=this.currentSong.name
        singer.textContent=this.currentSong.singer
        thumb.setAttribute("src",`${this.currentSong.image}`);
        audio.src=this.currentSong.path  
    },
    randomSong: function(){
      let newIndex
      do{
        newIndex=Math.floor(Math.random() * app.songs.length)
      }while(newIndex===this.currentIndex)
      this.currentIndex=newIndex
      this.loadCurrentSong()
      audio.play()
      this.render()
    },
    renderRecentSongs:function(tasks){
        let content = "";
        tasks.forEach(function(task, index) {
          return content += `<div class="album-songs ${task.dataPath===this.currentIndex ? 'active' :''}" data-index="${task.dataPath}">  
          <div class="song_order">
           <div class="song_order-icon"><i class="fa-solid fa-music"></i></div>  
              <div class="song_thumbnail">
                  <div class="song_thumbnail-img"><img class="thumbnail-path" src="${task.imagePath}" alt=""></div>
                  <div class="song_thumbnail-detail">
                      <div class="song_thumbnail-name">${task.name_title}</div>
                      <div class="song_thumbnail-singer">${task.singer_title}</div>
                  </div>
              </div>
           </div>
          <div class="song_name">
              <p class="song_name-title">${task.name_title}</p>
          </div>
          <div class="song_time">
              <p>4p32s</p>
          </div>
      </div> `;
        });
        document.querySelector(".recent-songs").innerHTML = content;
      },
    nextSong: function(){
      this.currentIndex++
      if(this.currentIndex>=this.songs.length){
          this.currentIndex=0
      }
      this.loadCurrentSong();
    },
    getLocalStorage:function() {
      return localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")): [];
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
        let tasks = this.getLocalStorage();
        this.renderRecentSongs(tasks);
    }
}
app.start()


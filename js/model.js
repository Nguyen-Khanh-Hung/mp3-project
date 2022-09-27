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
    isMute: false,
    isReapeating: false,
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
          name: "Waiting for you",
          title:"Waiting for you",
          singer: "MONO",
          path: "./assets/Album_mp3/WaitingForYou-MONOOnionn-7733882.mp3",
          image: "./assets/personal-song-lists/mono.jpg"
        },
        {
          id:3,
          name: "Vài câu nói có khiến người thay đổi",
          title:"Vài câu nói có khiến người thay đổi",
          singer: "Grey D",
          path: "./assets/Album_mp3/y2mate.com - vaicaunoicokhiennguoithaydoi  GREY D  Hương Mùa Hè show tập 1.mp3",
          image: "./assets/personal-song-lists/vaicaunoicokhiennguoithaydoi.jpg"
        },
        {
          id:4,
          name: "Thắc mắc",
          title:"Thắc mắc",
          singer: "Thịnh Suy",
          path: "./assets/Album_mp3/y2mate.com - Thắc Mắc MĐX.mp3",
          image: "./assets//personal-song-lists/thịhsuy.webp"
        },
        {
          id:5,
          name: "Mai mình xa",
          title:"Mai mình xa",
          singer: "Thịnh Suy",
          path: "./assets/Album_mp3/y2mate.com - MAI MÌNH XA.mp3",
          image: "./assets/personal-song-lists/thịhsuy.webp"
        },
        {
          id:6,
          name: "Tiny Love",
          title:"Tiny Love",
          singer: "Thịnh Suy",
          path: "./assets/Album_mp3/y2mate.com - tiny love.mp3",
          image: "./assets/personal-song-lists/thịhsuy.webp"
        },
        {
          id:7,
          name: "Lời đường mật",
          title:"Lời đường mật",
          singer: "HIEUTHUHAI",
          path: "./assets/Album_mp3/Loiduongmat.mp3",
          image: "./assets/personal-song-lists/loiduongmat.jpg"
        },
        {
          id:8,
          name: "Bật nhạc lên",
          title:"Bật nhạc lên",
          singer: "HieuThuHai",
          path: "./assets/Album_mp3/bậtnhacjlen.mp3",
          image: "./assets/personal-song-lists/batnhac.jpg"
        },
        {
          id:9,
          name: "Doremon Xuka",
          title:"Doremon Xuka",
          singer: "Lê Dương Bảo Lâm",
          path: "./assets/Album_mp3/Doremon Nobita.mp3",
          image: "./assets/personal-song-lists/le-duong-bao-lam-2114.png"
        },
        {
          id:10,
          name: "Đâu ai chung tình được mãi",
          title:"Đâu ai chung tình được mãi",
          singer: "Đinh Tùng Huy, ACV Remix",
          path: "./assets/Album_mp3/Ai Chung Tinh Duoc Mai - Dinh Tung Huy.mp3",
          image: "./assets/personal-song-lists/aichungtinhduocmai.webp"
        },
        {
          id:11,
          name: "Anh mắt ta chạm nhau",
          title:"Anh mắt ta chạm nhau",
          singer: "Ngô Lan Hương, Đại Mèo remix",
          path: "./assets/Album_mp3/AnhCoMuonDuaEmVeKhongOrinnEDMRemix-NgoLanHuong-7021715.mp3",
          image: "./assets/personal-song-lists/Ánh mắt ta chạm nhau.webp"
        },
        {
          id:12,
          name: "Chạy về nơi phía anh",
          title:"Chạy về nơi phía anh",
          singer: "Khắc Việt",
          path: "./assets/Album_mp3/Chay Ve Noi Phia Anh - Khac Viet.mp3",
          image: "./assets/personal-song-lists/chay ve noi phia anh.webp"
        },
       
        {
          id:13,
          name: "Cô đơn dành cho ai",
          title:"Cô đơn dành cho ai",
          singer: "NAL, LEE KEN, Orinn Remix",
          path: "./assets/Album_mp3/Co Don Danh Cho Ai - Lee Ken_ Nal.mp3",
          image: "./assets/personal-song-lists/cô đơn dành cho ai.webp"
        },
        {
          id:14,
          name: "Gieo quẻ",
          title:"Gieo quẻ",
          singer: "Hoàng Thùy Linh",
          path: "./assets/Album_mp3/Gieo Que - Hoang Thuy Linh_ Den.mp3",
          image: "./assets/personal-song-lists/gieo quẻ.webp"
        },
       
      ],
    render: function(){
      const __this=this
    var htmls= this.songs.map(function(song,index){
          return `<div class="album-songs ${song.id-1=== __this.currentIndex ? 'active' :''}" data-index="${song.id-1}">  
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
          footer_list.classList.add('playing')
        }
          // Xử lý khi pause
        audio.onpause=function(){
          _this.isPlaying=false;
          footer_list.classList.remove('playing')
        }
        // Xử lý range chạy theo tiến độ bài hát
        audio.ontimeupdate=function(){
          if(audio.duration){
            const progressPercentage = Math.floor(audio.currentTime/audio.duration*100)
           rangeInput.value=progressPercentage
          }
        }
        // Xử lý khi tua bài hát
        rangeInput.oninput=function(e){
          const seekTime=audio.duration/ 100 *e.target.value
          audio.currentTime=seekTime
          audio.play();
        }
        btn_volume.onclick=function(){
          if(_this.isMute){
              volume_input.value = 100;
              audio.volume = 1;
              _this.isMute = false
             btn_volume.classList.remove('mute')
          }
          else{
              volume_input.value = 0;
              audio.volume = 0;
              _this.isMute = true;
             btn_volume.classList.add('mute')
          }
        }
        volume_input.oninput=function(e){
          const seekVolume =  Number(e.target.value/100);
          audio.volume = seekVolume
          if(seekVolume==0){
           btn_volume.classList.add('mute')
          }
          else{
           btn_volume.classList.remove('mute')
          }
        }
        // next Song
        btn_next_song.onclick=function(){
          _this.nextSong()
          audio.play()
          _this.render()
        }
        // prev Song
        btn_prev_song.onclick=function(){
          _this.prevSong()
          audio.play()
          _this.render()
        }
        // xử lý khi bài hát kết thúc
        audio.onended=function(){
          btn_next_song.click()
        }
        // Xử lý bật random bài hát
        btn_random.onclick=function(){
          _this.randomSong()
        }
        // bật bài hát ở home
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
        if(tasks.length==1){
          tasks.push(objectSongs);
          console.log(1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        }
        else{
            let checkArrray=tasks.some(item=>
            item.dataPath==objectSongs.dataPath)
            if(checkArrray){
            }
            else{
              tasks.push(objectSongs)
          localStorage.setItem("tasks", JSON.stringify(tasks));
            }
        }
        _this.renderRecentSongs(tasks)
        localStorage.setItem("tasks", JSON.stringify(tasks));
        e.preventDefault();
        }
        // bật bài hát ở Tab Recently
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
        // Search bài hát
        play_tab_recommend.onclick=function(e){
          const songNode= e.target.closest('.album-songs:not(.active');
          e.stopPropagation();
          if(songNode){
            _this.currentIndex=Number(songNode.dataset.index) 
            _this.loadCurrentSong()
          let tasks = _this.getLocalStorage();
            _this.renderRecentSongs(tasks)
            audio.play()
          }
        }
        // Search bài hát theo đánh chữ
        search_input.onkeyup=function(e){
          let valueSearchInput = e.target.value.trim();
          var filterTasks= _this.songs.filter(function(value) {
          return value.name.toUpperCase().includes(valueSearchInput.toUpperCase())}
          )
            if(e.keyCode==32){
              if(_this.isPlaying){
                audio.pause()
              }
              else{
                audio.play()
              }
            }
          localStorage.setItem('recomend', JSON.stringify(filterTasks));
          if(valueSearchInput){
            play_tab_recommend.classList.add('active')
          }
          else{
            play_tab_recommend.classList.remove('active')
          }
          _this.renderRecommendSongs(filterTasks)
          }
         // Dừng hoặc phát bài hát bằng nút spacebar
        window.onkeyup = function (event) { 
            if (event.keyCode === 32) {
                audio.paused ? audio.play() : audio.pause();
          }
        };
        search_input.onclick=function(e){
          e.stopPropagation();
        }
        document.querySelector('.music').onclick=function(){
          play_tab_recommend.classList.remove('active')
          search_input.value=''
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
    renderRecommendSongs:function(filterTasks){
      let content = "";
      filterTasks.forEach(function(recomend, index) {
        return content += `<div class="album-songs ${recomend.id-1===this.currentIndex ? 'active' :''}" data-index="${recomend.id-1}">  
        <div class="song_order recommend">
         <div class="song_order-icon"><i class="fa-solid fa-music"></i></div>  
            <div class="song_thumbnail">
                <div class="song_thumbnail-img"><img class="thumbnail-path" src="${recomend.image}" alt=""></div>
                <div class="song_thumbnail-detail">
                    <div class="song_thumbnail-name active">${recomend.name}</div>
                    <div class="song_thumbnail-singer">${recomend.singer}</div>
                </div>
            </div>
         </div>
    </div> `;
      });
      document.querySelector(".music-search-recommend").innerHTML = content;
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
        // this.lists()
        let filterTasks = this.getLocalStorage();
        // this.renderRecommendSongs(filterTasks)
    }
}
app.start()


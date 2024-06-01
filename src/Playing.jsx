function Playing() {
return(
    <>
    <div className="container">
    <div className="heading">
      <div className="downarrow">
        <i className="fa-solid fa-angle-down fa-2x" />
      </div>
      <div className="play">"Tum Hi Ho in search"</div>
      <div className="dot">
        <i className="fa-solid fa-ellipsis-vertical fa-2x" />
      </div>
    </div>
    <div className="pic" />
    <div className="song-name">Tum hi ho</div>
    <marquee>
      <div className="artist-name">Mithoon,Arijith Singh</div>
    </marquee>
    <progress className="load" max={100} value={10} />
    <div className="player">
      <div className="shuffle-icon">
        <i className="fa-solid fa-shuffle fa-2x" />
      </div>
      <div className="prev-icon">
        <i className="fa-solid fa-backward-step fa-2x" />
      </div>
      <div className="pause-play-icon">
        <i className="fa-regular fa-circle-play fa-3x" />
      </div>
      <div className="next-icon">
        <i className="fa-solid fa-forward-step fa-2x" />
      </div>
      <div className="timer">
        <i className="fa-solid fa-stopwatch-20 fa-2x" />
      </div>
    </div>
    <div className="cast">
      <div className="mirror-icon">
        <i className="fa-brands fa-chromecast fa-2x" />
      </div>
      <div className="share-icon">
        <i className="fa-solid fa-share-nodes fa-2x" />
      </div>
    </div>
  </div>
</>

);    
}
export default Playing;
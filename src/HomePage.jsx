import { useState } from 'react';
import './HomePage.css';

function HomePage() {
    // State for the playlist
    const [playlist, setPlaylist] = useState([
      { id: 1, title: 'Song 1', src: 'song1.mp3', artist: 'Artist 1' },
      { id: 2, title: 'Song 2', src: 'song2.mp3', artist: 'Artist 2' },
      { id: 3, title: 'Song 3', src: 'song3.mp3', artist: 'Artist 3' },
      // Add more songs as needed
    ]);
  
    const [audioSrc, setAudioSrc] = useState('');
  
    // Function to add a new song to the playlist
    const addSongToPlaylist = () => {
      const newSong = { id: playlist.length + 1, title: 'New Song', src: 'newSong.mp3', artist: 'New Artist' };
      setPlaylist([...playlist, newSong]);
    };
  
    const playSong = (src) => {
      setAudioSrc(src);
    };
  

return(
<>

  <div className="big-container">
    {playlist.map((song)=>(
    <div className={`song-box1${song.id}`} key={song.id}>
      <div className={`card-1${song.id}`} />
      <div className="cont">
        < div className="song" onClick={() => playSong(song.src)} >Song 1</div>
        <marquee>
          <div className="art">Artist 1</div>
        </marquee>
      </div>
    </div>
    ))}
    {/* <div className={`song-box2${song.id}`} key={song.id}>
      <div className={`card-2${song.id}`} />
      <div className="cont">
        <div className="song">Chand Sifarish-MassTamilan.com</div>
        <marquee>
          <div className="art">Jatlin-Lalit,-MassTamilan.com</div>
        </marquee>
      </div>
    </div>
    <div className={`song-box3${song.id}`} key={song.id}>
      <div className={`card-3${song.id}`} />
      <div className="cont">
        <div className="song">Damaku damaku-MassTamilan.com</div>
        <marquee>
          <div className="art">Benny Dayal-MassTamilan.com</div>
        </marquee>
      </div>
    </div>
    <div className={`song-box4${song.id}`} key={song.id}>
      <div className={`card-4${song.id}`} />
      <div className="cont">
        <div className="song">Dora Dora-MassTamilan.com</div>
        <marquee>
          <div className="art">Balram,Kalyani Nair-MassTamilan.com</div>
        </marquee>
      </div>
    </div>
    <div className={`song-box5${song.id}`} key={song.id}>
      <div className={`card-5${song.id}`} />
      <div className="cont">
        <div className="song">Idhu dhan-MassTamilan.com</div>
        <marquee>
          <div className="art">Naresh Iyer,Shasha-MassTamilan.com</div>
        </marquee>
      </div>
    </div>
    <div className={`song-box6${song.id}`} key={song.id}>
      <div className={`card-6${song.id}`} />
      <div className="cont">
        <div className="song">Lajjavathiye-MassTamilan.com</div>
        <marquee>
          <div className="art">Jessie Gift-MassTamilan.com</div>
        </marquee>
      </div>
    </div>
    <div className={`song-box7${song.id}`} key={song.id}>
      <div className={`card-7${song.id}`} />
      <div className="cont">
        <div className="song">Manike Hindi-MassTamilan.com</div>
        <marquee>
          <div className="art">
            Tanisk Bagchi,Yohani,jubinNautial-MassTamilan.com
          </div>
        </marquee>
      </div>
    </div>
    <div className={`song-box8${song.id}`} key={song.id}>
      <div className={`card-8${song.id}`} />
      <div className="cont">
        <div className="song">Mannipaya-MassTamilan.com</div>
        <marquee>
          <div className="art">
            A.R.Rahman &amp; Shreya Gosal-MassTamilan.com
          </div>
        </marquee>
      </div>
    </div>
    <div className={`song-box9${song.id}`} key={song.id}>
      <div className={`card-9${song.id}`} />
      <div className="cont">
        <div className="song">Mannipaya-MassTamilan.com</div>
        <marquee>
          <div className="art">
            A.R.Rahman &amp; Shreya Gosal-MassTamilan.com
          </div>
        </marquee>
      </div>
    </div>
    <div className={`song-box1${song.id}`} key={song.id}>
       <div className={`card-10${song.id}`} />
       <div className="cont">
        <div className="song">Mannipaya-MassTamilan.com</div>
        <marquee>
          <div className="art">
            A.R.Rahman &amp; Shreya Gosal-MassTamilan.com
          </div>
        </marquee>
      </div>
    </div>
    <div className={`song-box1${song.id}`} key={song.id}>
      <div className={`card-11${song.id}`} />
      <div className="cont">
        <div className="song">Mannipaya-MassTamilan.com</div>
        <marquee>
          <div className="art">
            A.R.Rahman &amp; Shreya Gosal-MassTamilan.com
          </div>
        </marquee>
      </div>
    </div>
    <div className={`song-box1${song.id}`} key={song.id}>
      <div className={`card-12${song.id}`} />
      <div className="cont">
        <div className="song">Mannipaya-MassTamilan.com</div>
        <marquee>
          <div className="art">
            A.R.Rahman &amp; Shreya Gosal-MassTamilan.com
          </div>
        </marquee>
      </div>
    </div>
    <div className={`song-box1${song.id}`} key={song.id}>
      <div className={`card-13${song.id}`} />
      <div className="cont">
        <div className="song">Mannipaya-MassTamilan.com</div>
        <marquee>
          <div className="art">
            A.R.Rahman &amp; Shreya Gosal-MassTamilan.com
          </div>
        </marquee>
      </div>
    </div>
    <div className="playlist">
      <div className="card" />
      <div className="cont-1">
        <div className="song-1">
          <a href="./styles/playlist.html">Tum Hi-MassTamilan.com</a>
        </div>
        <marquee>
          <div className="singer">Mithoon,Arijith-MassTamilan.com</div>
        </marquee>
      </div>
    </div>
     */}
  </div>
  <audio src={audioSrc} controls autoPlay />
  <header>
    <div className="circ">
      <i className="fa-solid fa-s fa-3x" />
    </div>
    <div className="head-in">Music</div>
    <div className="head-in1">Podcast</div>
  </header>
  <footer>
    <div className="home">
      <i className="fa-solid fa-house fa-2x" />
      <br />
    </div>
    <div className="search">
      <i className="fa-solid fa-magnifying-glass fa-2x" />
    </div>
    <div className="library">
      <i className="fa-solid fa-list fa-2x" />
    </div>
    <div className="premium">
      <i className="fa-brands fa-spotify fa-2x" />
    </div>
    <button onClick={addSongToPlaylist}>Add Song</button>
  </footer>
</>
)
}
export default HomePage;
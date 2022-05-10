import React, {useState, useEffect} from 'react'
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import "../Styles/MainContainer.css";
import {MusicPlayer} from './MusicPlayer';
import {Songs} from "./Songs";

function AudioList() {

    const [songs, setSongs] = useState(Songs);
    const [song, setSong] = useState(Songs[0].song);
    const [img, setImage] = useState(Songs[0].imgSrc);

    useEffect(() => {
        const songs = document.querySelectorAll(".songs");
    
        function changeMenuActive() {
          songs.forEach((n) => n.classList.remove("active"));
          this.classList.add("active");
        }
    
        songs.forEach((n) => n.addEventListener("click", changeMenuActive));
      }, []);

    const changeFavourite = (id) => {
        Songs.forEach((song) => {
            if(song.id == id) {
                song.favourite = !song.favourite;
            }
        });

        setSongs([...Songs]);  //this will create a new instance of Songs array for the setSongs from the previous version. So this setSongs will update songs inside const[songs] and that will be rerendered and we will get instant changes as we click on like and unlike songs btn
    };

    // here on click event setMainSong function is called with values like array index of song src and img src.
    // initially on line 9 we have set first song to be the song at 0th index using 'setSong' variable, but it will update as soon as there is a click event
    // therefore the value of setSong will be now updated to songSrc 
    //same for image thing.
    const setMainSong = (songSrc, imgSrc) =>{
        setSong(songSrc);
        setImage(imgSrc);
    }

    
  return (
    <div className="AudioList">
        <h2 className="title">
            The List <span>{`${Songs.length} songs`}</span>
        </h2>

        <div className="songsContainer">
            {
            Songs && Songs.map((song, index) =>(
                <div className='songs' key={song.id}
                    onClick = {() => setMainSong(song?.song, song?.imgSrc)}>
                <div className='count'>{index+1}</div>
                <div className='song'>

                    <div className='imgBox'>
                        <img src={song?.imgSrc} alt='' />
                    </div>

                    <div className='section'>
                        <p className='songName'>
                            {song?.songName}
                        <span className='spanArtist'>{song?.artist}</span>
                        </p>

                         <div className='hits'>
                             <p className='hit'>
                                 <i>
                                     <FaHeadphones />
                                 </i>
                                 95,45,247
                             </p>

                             <p className='duration'>
                                 <i><FaRegClock /></i>
                                 03.40
                             </p>
                             
                             <div className='favourite'
                             onClick={() => changeFavourite(song?.id)}>

                                 {
                                     song?.favourite ?
                                     <i>
                                     <FaHeart />
                                     </i>
                                     :
                                        (<i>
                                            <FaRegHeart />
                                        </i>
                                       )
                                 }
                                     
                                
                                 
                             </div>
                         </div>
                    </div>
                </div>
            </div>
                ))}
            
        </div>

        <MusicPlayer song={song} imgSrc={img}/> 
        {/* these values are nothing but the state line 10 11 */}
    </div>
  )
}

export {AudioList};
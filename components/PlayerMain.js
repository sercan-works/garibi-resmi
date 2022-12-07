import React from 'react';
import {AudioPlayerControlSprite, AudioPlayer, TrackType} from 'react-audio-player-pro';

import reactAudioPlayerProStyle from 'react-audio-player-pro/dist/style.css';
import mp3_file from '../assets/music/berceste.mp3'


// import music from '../assets/music/berceste.mp3'

const audioTrackList = [
  {
      // string - path to audio file, required
      src: '../assets/music/berceste.mp3',

      // string - 'none' | 'metadata' | 'auto', default: 'auto', optional
      preload: 'auto',

      // duration - number, default: 0, optional
      // will updated automatically when track started or metadata loaded
      duration: 100,

      // JSX.Element - custom content instead of title, optional, deafult: <title> or <src>
      // content: <CustomContent/>,

      // MediaMetadata - media meta data, see `mediaMetadata` above
      // https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata/MediaMetadata
      // optional
      mediaMetadata: {
          title: 'Lesser Faith',
          artist: 'J. Syreus Bach',
          album: 'Ability to Break ~ Energetic Tracks',
          artwork: [
              {src: '/path/to/image/64px/64px', sizes: '64x64', type: 'image/png'},
              {src: '/path/to/image/128px/128px', sizes: '128x128', type: 'image/png'},
          ],
      },
  },
  // other tracks here...
];


const PlayerMain = () => {


  return (

    <div className='absolute bottom-10 left-10 ring-2 ring-gray-500 border-4 rounded-xl '>
{/* <div> */}

<AudioPlayerControlSprite/>
            <AudioPlayer
                // Array<TrackType> - list of track, see `audioTrackList` above, required
                trackList={audioTrackList}

                // string - wrapper's class name, optional, deafult: ''
                className="my-class-name"

                // callback function - called on did mount, optional, default: noop
                onDidMount={console.log}

                // default player state, optional
                defaultState={{
                    // boolean - is player muted, optional, default: false
                    isMuted: false,

                    // number - active song index, optional, default: 0
                    activeIndex: 0,

                    // boolean - is shuffle on, optional, default: false
                    isShuffleOn: false,

                    // boolean - is track list open, optional, default: true
                    isTrackListOpen: true,

                    // string: 'none' | 'all' | 'one' - repeating state, optional, default: 'none'
                    repeatingState: 'none',
                }}
            />
    </div>
    
  )
}

export default PlayerMain
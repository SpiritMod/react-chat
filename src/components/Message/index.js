import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Time, IconReaded } from '../';

import { convertCurrentTime } from 'utils/helpers';

import waveSvg from 'assets/img/wave.svg';
import playSvg from 'assets/img/play.svg';
import pauseSvg from 'assets/img/pause.svg';

import './Message.scss';

const MessageAudio = ({audioSrc}) => {
  const audioElem = useRef(null);
  const [isPlaying, setIsplaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    audioElem.current.volume = "0.1";


    audioElem.current.addEventListener('playing', () => {
      setIsplaying(true);
    }, false);

    audioElem.current.addEventListener('ended', () => {
      setIsplaying(false);
      setCurrentTime(0);
      setProgress(0);
    }, false);

    audioElem.current.addEventListener('pause', () => {
      setIsplaying(false);
    }, false);

    audioElem.current.addEventListener('timeupdate', () => {
      const duration = (audioElem.current && audioElem.current.duration) || 0;

      setCurrentTime(audioElem.current.currentTime);
      setProgress((audioElem.current.currentTime / duration) * 100);
    }, false);

    return () => {

    };
  }, []);

  const togglePlay = () =>  {
    if (!isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  };

  return (
    <div className="message__audio">
      <audio ref={audioElem} src={audioSrc} preload="auto" />
      <div className="message__audio-progress" style={{ width: progress + '%' }}></div>
      <div className="message__audio-info">
        <div className="message__audio-btn">
          <button onClick={togglePlay}>
            {
              isPlaying ? <img src={pauseSvg} alt="Pause svg"/> : <img src={playSvg} alt="Play svg"/>
            }
          </button>
        </div>
        <div className="message__audio-wave"><img src={waveSvg} alt="Wave svg"/></div>
        <span className="message__audio-duration">{ convertCurrentTime(currentTime) }</span>
      </div>
    </div>
  )
};

const Message = ({
    avatar,
    user,
    text,
    date,
    audio,
    isMe,
    isReaded,
    attachments,
    isTyping
  }) => {

  return (
    <div className={classNames('message', {
      'message__isme' : isMe,
      "message__is-typing": isTyping,
      "message__image": attachments && attachments.length === 1,
      "message__is-audio": audio
    } )}>
      <div className="message__content">
        <IconReaded isMe={isMe} isReaded={isReaded} />
        <div className="message__avatar">
          <img src={avatar} alt={`Avatar ${user.fullname}`}/>
        </div>
        <div className="message__info">
          {
            ( audio || text || isTyping) && (
              <div className="message__bubble">
                {text && <p className='message__text'>{text}</p>}
                {
                  isTyping &&
                  <div className="message__typing">
                    <span />
                    <span />
                    <span />
                  </div>
                }

                {
                  audio && <MessageAudio audioSrc={audio}/>
                }
              </div>
            )
          }


          { attachments && (
            <div className="message__attachments">
              {
                attachments.map((item, i) => (
                  <div className="message__attachments-item" key={i} >
                    <img src={item.url} alt={item.filename} />
                  </div>
                ))
              }
            </div>
          )}

          {date && <span className="message__date"><Time date={date} /></span>}
        </div>
      </div>
    </div>
  )
};

// const Message1 = ({
//                    avatar,
//                    user,
//                    text,
//                    date,
//                    audio,
//                    isMe,
//                    isReaded,
//                    attachments,
//                    isTyping
//                  }) => (
//   <div className={classNames('message', {
//     'message__isme' : isMe,
//     "message__is-typing": isTyping,
//     "message__image": attachments && attachments.length === 1,
//     "message__is-audio": audio
//   } )}>
//     <div className="message__content">
//       <IconReaded isMe={isMe} isReaded={isReaded} />
//       <div className="message__avatar">
//         <img src={avatar} alt={`Avatar ${user.fullname}`}/>
//       </div>
//       <div className="message__info">
//         {
//           (text || isTyping) && (
//             <div className="message__bubble">
//               {text && <p className='message__text'>{text}</p>}
//               {
//                 isTyping &&
//                 <div className="message__typing">
//                   <span />
//                   <span />
//                   <span />
//                 </div>
//               }
//             </div>
//           )
//         }
//
//         <div className="message__attachments">
//           {
//             attachments &&
//             attachments.map(item => (
//               <div className="message__attachments-item" >
//                 <img src={item.url} alt={item.filename} />
//               </div>
//             ))
//           }
//         </div>
//         {date && <span className="message__date"><Time date={date} /></span>}
//       </div>
//     </div>
//   </div>
// );

Message.defaultProps = {
  user: {
    fullname: 'Вася Пупкін'
  },
  isMe: false,
  isReaded: false,
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  audio: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  isTyping: PropTypes.bool,
};

export default Message;

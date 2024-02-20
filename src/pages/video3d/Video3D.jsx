
import React, { useEffect, useState } from 'react'
import "./Video3D.css";
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { addAudio, clearAudio, disableSound, enableSound } from '../../redux/appSlice';

const Video3D = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lessons = useSelector((state) => state.app.lessons);
  const audios = useSelector((state) => state.app.audios);
  const soundEnable = useSelector((state) => state.app.soundEnable);
  const [started, setStarted] = useState(false);
  const dispatch = useDispatch();
  const getLesson = (id) => {
    return lessons.find(lesson => lesson.id === id);
  }

  const getLessonIndex = (id) => {
    const index = lessons.findIndex(lesson => lesson.id === id);
    return index;
  }

  const lesson = getLesson(id);
  const getImg = (path) => {
    return process.env.PUBLIC_URL + "/imgs/" + path;
  }
  const handleOnClickBack = () => {
    let maxSection = lesson.sections.length;
    navigate("/lessons/" + id + "/" + maxSection);
  }
  const goToHome = () => {
    navigate("/");
  }

  const handleOnClick3D = () => {
    navigate("/lessons/" + lesson.id + "/1");
  }

  const getSound = (path) => {
    return process.env.PUBLIC_URL + "/sounds/" + path;
  }
  const switchSound = () => {
    if (soundEnable == true) {
      dispatch(disableSound());
    } else {
      dispatch(enableSound());
    }
  }

  useEffect(() => {
    if (!started) {
      return;
    }
    if (soundEnable) {
      playAudio();
    } else {
      stopAllAudio();
    }
  }, [soundEnable]);

  useEffect(() => {
    setStarted(true);
  }, []);

  const playAudio = () => {
    try {
      const audio = new Audio(getSound(lesson.sound));
      audio.play();
      dispatch(addAudio(audio));
    } catch (err) {
      console.error(err);
    }
  }


  const stopAllAudio = () => {
    for (let i = 0; i < audios.length; i++) {
      const sound = audios[i];
      sound.pause();
    }
    dispatch(clearAudio());

  }


  return (
    <div className='video3d'
      style={
        {
          backgroundImage: `url(${getImg("background-3d.png")})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }
      }>

      <div className="navbar">
        <ul className="navbar-left">
          <li><a href="../../" onClick={(e) => { e.preventDefault(); goToHome() }} ><img src={getImg("back-arrow.png")} alt="" /> กลับหน้าแรก</a></li>
        </ul>
        <div className="navbar-center">
          <span>{lesson.title}</span>
        </div>
        <ul className="navbar-right">
          <li>
            <span className='sound-volumne' onClick={switchSound}>
              <div>
                {
                  soundEnable == true ?
                    <img src={getImg("volume-icon.png")} alt="" /> :
                    <img src={getImg("volume-icon-disable.png")} alt="" />
                }
              </div>
              <div>
                เสียงบรรยาย
              </div>
            </span>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); handleOnClick3D() }} >
              <div>
                <img src={getImg("3d-icon.png")} alt="" />
              </div>
              <div>
                เปิดโหมด 3 มิติ
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="youtube">
        <iframe width="822px" height="464px" src={"https://www.youtube.com/embed/" + lesson.videoLink + "?si=iOD1ul6IA1lcv4Dm"} title="YouTube video player" frameborder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="on"></iframe>
      </div>
    </div>
  )
}

export default Video3D
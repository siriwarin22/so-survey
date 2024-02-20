import React, { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import "./Lesson.css";
import { addAudio, clearAudio, disableSound, enableSound, resetAnswer } from '../../redux/appSlice';

const Lesson = () => {
  let { id, page } = useParams();
  page = parseInt(page);
  const lessons = useSelector((state) => state.app.lessons);
  const viewType = useSelector((state) => state.app.viewType);
  const soundEnable = useSelector((state) => state.app.soundEnable);
  const audios = useSelector((state) => state.app.audios);

  const dispatch = useDispatch();

  const getLesson = (id) => {
    return lessons.find(lesson => lesson.id === id);
  }

  const getLessonIndex = (id) => {
    const index = lessons.findIndex(lesson => lesson.id === id);
    return index;
  }
  const lesson = getLesson(id);
  const sections = lesson.sections;
  const sectionIndex = (page - 1);
  const section = sections[sectionIndex];
  const navigate = useNavigate();

  /* Sound */
  /* */
  const getImg = (path) => {
    return process.env.PUBLIC_URL + "/imgs/" + path;
  }
  const getSound = (path) => {
    return process.env.PUBLIC_URL + "/sounds/" + path;
  }

  const goToHome = () => {
    navigate("/");
  }

  const handleOnClick3D = () => {
    if (lesson.videoLink != "") {
      navigate("/3d/" + lesson.id);
    }
  }

  const handleOnClickNext = () => {
    if (id == "1") {
      navigate("/lessons/2/1");
    } else {
      const currentIndex = getLessonIndex(id);
      if ((sectionIndex + 1) >= sections.length) {
        if ((currentIndex + 1) >= lessons.length) {

          dispatch(resetAnswer())
          navigate("/quiz/1");
        } else {
          const nextLesson = lessons[currentIndex + 1];
          navigate("/lessons/" + nextLesson.id + "/" + (1));
        }
      } else {
        navigate("/lessons/" + id + "/" + (page + 1));
      }
    }
  }

  const handleOnClickBack = () => {
    if (sectionIndex >= 1) {
      navigate("/lessons/" + id + "/" + (page - 1));
    } else {
      const currentIndex = getLessonIndex(id);
      if (currentIndex == 0) {
        navigate("/");
      } else {
        const previousLesson = lessons[currentIndex - 1];

        navigate("/lessons/" + previousLesson.id + "/" + previousLesson.sections.length);
      }
    }
  }

  const switchLesson = () => {
    if (id == "1") {
      if (sectionIndex == 0) {
        navigate("/lessons/1/2");
      } else {
        navigate("/lessons/1/1");
      }
    }
  }

  const background = viewType === "mobile" ? section.backgroundMobileImg : section.backgroundImg;

  const getBarStyle = () => {
    const currentIndex = getLessonIndex(id);
    const percentSection = (sectionIndex / sections.length) * 10;
    let percent = ((currentIndex - 1) / 9) * 100;
    percent = percentSection + percent;
    return {
      width: percent + "%"
    };
  }
  const getRocketStyle = () => {
    const currentIndex = getLessonIndex(id);
    const percentSection = (sectionIndex / sections.length) * 10;
    let percent = ((currentIndex - 1) / 9) * 100;
    percent = percentSection + percent;
    return {
      left: percent + "%"
    };
  }

  const switchSound = () => {
    if (soundEnable == true) {
      dispatch(disableSound());
    } else {
      dispatch(enableSound());
    }

  }


  useEffect(() => {
    stopAllAudio();
  }, [id]);

  useEffect(() => {
    if (soundEnable) {
      playAudio();
    } else {
      stopAllAudio();
    }
  }, [soundEnable, id]);

  const playAudio = () => {
    try {
      if (audios.length >= 1) {
        const lastedAudio = audios[audios.length - 1];
        if (lastedAudio.src.endsWith(lesson.sound)) {
          return;
        }
      }
      const audio = new Audio(getSound(lesson.sound));
      audio.play();
      dispatch(addAudio(audio));
    } catch (err) {
      console.error(err);
    }
  }

  const stopAllAudio = () => {
    if (soundEnable) {
      if (audios.length >= 1) {
        const lastedAudio = audios[audios.length - 1];
        if (lastedAudio.src.endsWith(lesson.sound)) {
          return;
        }
      }
    }
    for (let i = 0; i < audios.length; i++) {
      const sound = audios[i];
      sound.pause();
    }
    dispatch(clearAudio());
  }

  return (
    <div className='lesson'
      style={
        {
          backgroundImage: `url(${getImg(background)})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }
      }>
      <img className="rocket-decoration" src={getImg("rocket-decoration.png")} alt='' />

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
            <a href="#" onClick={(e) => { e.preventDefault(); handleOnClick3D() }}>
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
      <div className="lesson-content">
        <div className="subtitle">
          {
            section.subtitle == "bar" ? (
              <div className='rocket-bar-section'>
                <img className='rocket-bar' src={getImg("rocket-bar-section.png")} alt='' />
                <img className='rocket-bar-item' src={getImg("rocket-bar-item.png")} style={getRocketStyle()} alt='' />
                <div className='rocket-bar-background' style={getBarStyle()}>

                </div>
              </div>

            ) :

              <span style={{ cursor: "pointer" }} onClick={() => { switchLesson(); }}>
                {section.subtitle}
              </span>

          }

        </div>
        <div className="text">
          {section.text}
          <a href='#' className="next-section-mobile" onClick={(e) => { e.preventDefault(); handleOnClickNext() }}>
            <span>กดเพื่อไปต่อ</span>
            <img src={getImg("next-section-mobile.png")} alt="" />
          </a>
        </div>
        <a href='#' className="next-section" onClick={(e) => { e.preventDefault(); handleOnClickNext() }}>
          <span>กดเพื่อไปต่อ</span>
          <img src={getImg("next-arrow.png")} alt="" />
        </a>
      </div>
      <div className="buttons">
        <div className="previous-section">
          <a href="#" onClick={(e) => { e.preventDefault(); handleOnClickBack() }}>
            <img src={getImg("previous-section.png")} alt="" />
          </a>
        </div>
        <div className="next-section">
          <a href="#" onClick={(e) => { e.preventDefault(); handleOnClickNext() }}>
            <img src={getImg("next-section.png")} alt="" />
          </a>
        </div>
      </div>
      {
        (lesson.meteorite && lesson.meteorite == true) ? (
          <>
            <img className='meteorite-lesson-1' src={getImg("meteorite-lesson-1.png")} alt="" />
            <img className='meteorite-lesson-2' src={getImg("meteorite-lesson-2.png")} alt="" />
          </>

        ) : ""
      }
    </div>
  )
}

export default Lesson
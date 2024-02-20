import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import "./Quiz.css";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { addAnswer, forceStopAllAudion, increaseQuizScore } from '../../redux/appSlice';

const Quiz = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quizs = useSelector((state) => state.app.quizs);
  const answers = useSelector((state) => state.app.answers);
  const quizScore = useSelector((state) => state.app.quizScore);
  let page = parseInt(id);

  const quiz = quizs[page - 1];
  const getImg = (path) => {
    return process.env.PUBLIC_URL + "/imgs/" + path;
  }
  const handleOnClickBack = () => {
    if (page == 1) {
    } else {
      navigate("/quiz/" + (page - 1));
    }
  }
  const goToHome = () => {
    navigate("/");
  }

  const handleOnClickAnswer = (option) => {
    if (answers.length >= page) {
      withReactContent(Swal).fire({
        title: "คุณได้ตอบคำถามไปแล้ว!",
        text: "จึงไม่สามารถตอบคำถามซ้ำได้",
        icon: "warning"
      })
      return;
    }
    dispatch(addAnswer(option));
    if (quiz.answer == option) {
      dispatch(increaseQuizScore());
      withReactContent(Swal).fire({
        title: "ยินดีด้วย!",
        text: "คุณตอบคำถามถูก",
        icon: "success"
      })
    } else {
      withReactContent(Swal).fire({
        title: "น่าเสียดาย!",
        text: "คุณตอบคำถามผิด",
        icon: "error"
      })
    }
  }
  const handleOnClickNext = () => {
    if (page == quizs.length) {
      withReactContent(Swal).fire({
        title: "ยินดีด้วย!",
        text: "คุณทำได้ทั้งหมด " + quizScore + " คะแนน!",
        icon: "success"
      }).then(() => {
        goToHome();
      });
    } else {
      if (answers.length < page) {
        withReactContent(Swal).fire({
          title: "ขออภัย!",
          text: "โปรดตอบคำถามก่อน!",
          icon: "error"
        })
        return;
      } else {
        navigate("/quiz/" + (page + 1));
      }

    }
  }
  useEffect(() => {
    dispatch(forceStopAllAudion());
  }, []);
  return (
    <div className='quiz'
      style={
        {
          backgroundImage: `url(${getImg("background-quiz.png")})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }
      }>

      <div className="navbar">
        <ul className="navbar-left">
          <li><a href="../../" onClick={(e) => { e.preventDefault(); goToHome(); }} ><img src={getImg("back-arrow.png")} alt="" /> กลับหน้าแรก</a></li>
        </ul>
        <div className="navbar-center opacity-0">
          <span></span>
        </div>
        <ul className="navbar-right opacity-0">
          <li>
          </li>
          <li>
            <div>
              <img src={getImg("3d-icon.png")} alt='' />
            </div>
            <div>
              เปิดโหมด 3 มิติ
            </div>
          </li>
        </ul>
      </div>
      <div className="quiz-card">
        <div className="title">Quiz</div>
        <div className="question">
          {quiz.question}
        </div>
        <div className="answer">

          {
            quiz.options.map((option, index) => (

              <button key={index} className="answer-item" onClick={() => handleOnClickAnswer(option)}>
                <span className="answer-number">
                  {index + 1}
                </span>
                <span className='answer-label'>
                  {option}
                </span>
              </button>
            ))
          }
        </div>
        <div className="buttons">
          <button className='btn-recheck' onClick={(e) => { e.preventDefault(); handleOnClickBack(); }}>ทบทวนเนื้อหา</button>
          <button className={(answers.length >= page) ? 'btn-next' : "btn-recheck btn-recheck-opposite"} onClick={handleOnClickNext} >หน้าต่อไป</button>
        </div>
        <img className="spuknik" src={getImg("spuknik.png")} />
      </div>
    </div>
  )
}

export default Quiz
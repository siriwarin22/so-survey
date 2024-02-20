import React, { useEffect, useRef, useState } from 'react'
import "./Home.css";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import "../../library/Star.css"
import { forceStopAllAudion, resetAnswer } from '../../redux/appSlice';

const Home = () => {
  const viewType = useSelector((state) => state.app.viewType);
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getImg = (path) => {
    return process.env.PUBLIC_URL + "/imgs/" + path;
  }
  const goToLesson = (id) => {
    navigate("/lessons/" + id + "/1");
  }
  const goToQuiz = () => {
    dispatch(resetAnswer())
    navigate("/quiz/1");
  }
  const switchShowNavbar = () => {
    setShowNavbar(!showNavbar);
  }
  const background = viewType === "mobile" ? `url(${getImg("background-mobile.png")})` : `url(${getImg("background.png")})`;

  useEffect(() => {
    dispatch(forceStopAllAudion());
  }, []);
  return (
    <div className='home' >
      <div className="background" style={{
        backgroundImage: background,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
        <div className="navbar-wrapper">
          <div className={"navbar" + (showNavbar ? " navbar-show" : "")}>
            <ul className="navbar-left">
              <li><a href="">หน้าแรก</a></li>
              <li><a href="#lesson">บทเรียน</a></li>
            </ul>
            <ul className="navbar-right">
              <li><a href="https://www.narit.or.th/" target="_blank">เกี่ยวกับ</a></li>
              <li><a href="#footer">ติดต่อเรา</a></li>
            </ul>
            <div className="hamburger">
              <img onClick={switchShowNavbar} src={getImg("hamburger.png")} alt="" />
            </div>
            <div className="navbar-center">
              <div className="logo">
                <img src="imgs/logo.png" alt="Logo" />
              </div>
            </div>
          </div>
          <div className="hero">
            <div className="title">So-survey Easy Learning</div>
            <div className="subtitle">
              เริ่มต้นการเรียนรู้ระบบสุริยะขึ้นพื้นฐานได้แล้วพร้อมกันที่ <span className="subtitle-2">โซเซอร์เวย์เว็บส่งเสริมการเรียนรู้ระบบสุริยะในรูปแบบเว็บไซต์</span>
            </div>
          </div>
        </div>
        <div className="rocket-btn-wrapper">
          <button className="rocket-btn" onClick={() => goToLesson(1)}>
            เริ่มต้น
          </button>
        </div>
        <img className='meteor-left' src={getImg("meteor-left.png")} alt="" />
        <img className='meteor-right' src={getImg("meteor-right.png")} alt="" />
        <img className='rocket-img' src={getImg("rocket-2.png")} alt="" />
        <section className="star-effect">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </section>
      </div>
      <div className="content-section">
        <div className="content">
          <div className="lesson">
            <div className="title">
              บทเรียน
            </div>
            <div className="subtitle">
              จักรวาลหรือเอกภพ คือห้วงอากาศอันกว้างใหญ่ที่ไม่มีขอบเขตแน่นอน ประกอบด้วย ดวงดาว ฝุ่น และ แก๊สต่าง ๆ จำนวนมหาศาล
            </div>
          </div>
          <div className="stars">
            <div className="star">
              <div className="img-star">
                <img src={getImg("star-1.png")} alt="" />
              </div>
              <div className="title">
                ดาวเสาร์
              </div>
              <div className="subtitle">
                ราชาวงแหวนแห่งระบบสุริยะ
              </div>
            </div>
            <div className="star">
              <div className="img-star">
                <img src={getImg("star-2.png")} alt="" />
              </div>
              <div className="title">
                ดาวอังคาร
              </div>
              <div className="subtitle">
                ในอดีตนักดาราศาสตร์เชื่อว่าดาวอังคารเคยมีสภาพที่เอื้อต่อสิ่งมีชีวิตมากกว่านี้
              </div>
            </div>
            <div className="star">
              <div className="img-star">
                <img src={getImg("star-3.png")} alt="" />
              </div>
              <div className="title">
                โลก
              </div>
              <div className="subtitle">
                พื้นผิวโลกมีส่วนที่เป็นน้ำมากถึง 71 เปอร์เซ็นต์
              </div>
            </div>
          </div>
          <div id="lesson" className="explores">
            <div className="explore">
              <img src={getImg("explore-1.png")} alt="" />
              <div className="explore-content">
                <div className="title">
                  ระบบสุริยะ
                </div>
                <button className='explore-btn' onClick={() => goToLesson(1)}>
                  เริ่มสำรวจ
                </button>
              </div>
            </div>
            <div className="explore">
              <img src={getImg("explore-2.png")} alt="" />
              <div className="explore-content">
                <div className="title">
                  แบบทดสอบ
                </div>
                <button className='explore-btn' onClick={() => goToQuiz()}>
                  ทำแบบทดสอบ
                </button>
              </div>
            </div>
            <section className="star-effect">
              <div id="stars"></div>
              <div id="stars2"></div>
              <div id="stars3"></div>
            </section>
          </div>
        </div>
      </div>
      <div id="footer" className="footer">
        <div className="footer-content">
          <div className="footer-flex">
            <div className="left-side">
              <div className="title">
                SOSURVEY
              </div>
              <div className="subtitle">
                Solar System
              </div>
            </div>
            <div className="right-side">
              <div className="column">
                <div className="column-title">
                  About us
                </div>
                <div className="column-link">
                  siriwarin.ra@gmail.com
                </div>
                <div className="column-link">
                  Siriwarin Raksarn
                </div>
              </div>
              <div className="column">
                <div className="column-title">
                  Learn
                </div>
                <div className="column-link">
                  <a href="https://www.nasa.gov/" target='_blank'>Nasa</a>
                </div>
                <div className="column-link">
                  <a href="https://www.narit.or.th/" target='_blank'>
                    ค้นคว้าเพิ่มเติม
                  </a>

                </div>
              </div>
              <div className="column">
                <div className="column-title">
                  Contact
                </div>
                <div className="column-link">
                  <a href="https://www.facebook.com/Priewsama/" target='_blank'>
                    Facebook
                  </a>
                </div>
                <div className="column-link">
                  <a href="https://www.instagram.com/priewwr/" target='_blank'>
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="privacy">
            Privacy Policy Term of  Use
          </div>
        </div>
        <section className="star-effect">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </section>
      </div>
    </div >
  )
}

export default Home
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";
import Home from './Pages/Home';
import About from './Pages/About';
import './App.css';
import Login from './Pages/Login';
import CreateId from './Pages/CreateId';
import HistoryTalesScreen from './Pages/HistoryTalesScreen';
import LikedVideosScreen from './Pages/LikedVideosScreen'

const logo = 'https://firebasestorage.googleapis.com/v0/b/capstone-ac206.appspot.com/o/%EC%9B%B9%ED%99%88%EB%9D%BC%EB%B2%A8.jpg?alt=media&token=63425a12-b57b-4035-aa33-f5b11a2f5067'

const App = () => {
  const userEmail = localStorage.getItem('userEmail');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    alert('로그아웃 되었습니다.');
    navigate("/");
  };

  return (
    <div>
      <div className="header">
        <Link to="/"><img src={logo} alt="Logo" /></Link>
        <div className="right-align">
          {userEmail ? (
            <>
              <span>{userEmail}님 환영합니다. </span>
              <button className="white-background-button" onClick={handleLogout}>
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="white-background-button">
                로그인
              </Link>
              <Link to="/createId" className="white-background-button">
                회원가입
              </Link>
            </>
          )}
          <FiAlignJustify style={{ fontSize: '2rem' }} />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createId" element={<CreateId />} />
        <Route path="/historyTales" element={<HistoryTalesScreen userEmail={userEmail} />} />
        <Route path="/likedVideos" element={<LikedVideosScreen userEmail={userEmail} />} />
      </Routes>
    </div>
  )
}

export default App;

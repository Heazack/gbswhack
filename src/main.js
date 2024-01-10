import './main.css';
import banner from './img/banner.png'

function Main() {
  return (
    <div>
      <header className="all">
        <div>
          <div className="head-box">
            <div className="head-text"><a href="/">BLOOD DONETION</a></div>
          </div>
          <div class="top_text-box">
            <div className="top_text"><a href="/login.js">로그인</a></div>
            <div className="top_text">ㅣ</div>
            <div className="top_text">회원가입</div>
          </div>
        </div>
      </header>
      <section className="all">
        <div>
          <ul className="section_container">
            <li className="section_banner">
              <div className="banner"></div>
            </li>
            <li className="section_user">
              <div className="user">
                <div className="user_text">최성욱님이 헌혈한 양</div>
                <div className="user_prograssbar">
                  <div className="user_prograssbar_t"></div>
                </div>
                <div className='done_cou'>
                  <div>400ml/1000ml</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Main;

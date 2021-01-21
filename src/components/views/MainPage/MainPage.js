import React from 'react'
// import './Main.css'
function MainPage() {
    return(
        <body>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="sidenav">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"> &times;</a>
                <a href="#">NEW</a>
                <a href="#">BEST 100</a>
                <a href="#">BASIC</a>
                <a href="#">OUTER</a>
                <a href="#">TOP</a>
                <a href="#">DRESS/SKIRT</a>
                <a href="#">PANT</a>
                <a href="#">LEGGINGS</a>
                <a href="#">SET</a>
                <a href="#">ACC</a>
                <div className="width"></div>
            </div>   
            <div className='main'>
                <nav className="topNav">
                    <div className="icon-bar">
                        <a href="#" class="active-btn"></a>
                        <div class="container" onClick="openMenu(this)">
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                        <span className="logo"> I LoveJ</span>
                    </div> 
                    <div className="nav-center">
                        <li><a href="/auth/login" className="actvie" onmouseover="this.innerText='로그인'" onmouseout="this.innerText='LOGIN'"id="login">LOGIN</a></li>
                        <li><a href="/auth/register" id="join" onmouseover="this.innerText='회원가입'" onmouseout="this.innerText='JOIN'">JOIN</a></li>
                        <li><a href="#" id="cart" onmouseover="this.innerText='장바구니'" onmouseout="this.innerText='CART'">CART</a></li>
                        <li><a href="#" id="mypage" onmouseover="this.innerText='마이페이지'" onmouseout="innerText='MYPAGE'">MYPAGE</a></li>
                    </div>
                    <div className="sns">
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                    </div>
                </nav>
                <div class="slidWrap">
                    <div class="slideNav">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="item-wrap">
                    <div class='minSizeWrap'>
                        <div class='info'>
                            <div class="bn left-banner">
                                <a href=""><img src="./views/images/banner1.png"/></a>
                            </div>
                            <div class="bn right-banner">
                                <a href=""><img src="./views/images/banner2.png"/></a>
                            </div>
                        </div> 
                    </div>
                    <div id="product1" class="product1">
                        <ul>
                        </ul>
                    </div>
                    <div class="t-item">
                        <p>아이러브 <b>베이직</b></p> 
                    </div>
                    <div id="product2" class="product1">
                        <ul>
                        </ul>
                    </div>
                    <div class="t-item">
                        <p>반응좋은 <b>베스트</b></p> 
                    </div>
                    <div id="product3" class="product1">
                        <ul>
                        </ul>
                    </div>
                </div>
                <div class="back">
                    <div class="caption">
                        <span class="border">I Love J</span>
                    </div>
                </div> 
                <div class="infomation">
                    <div class="text-info">
                        <span><b>CUSTOMER SERVICE</b></span>
                        <br/><br/><br/>
                        <p >0000-0000</p>
                        <p>AM 10:00 - PM:5:00 MON-FRI(HOLIDAY OFF)</p>
                        <p>LUNCH PM12:00 - 1:00</p>
                    </div>
                    <div class="bank-info">
                        <p><b>BANK ACCOUNT</b></p>
                        <br/><br/>
                        <p>농협 000-00000-00</p>
                        <p>국민 00000-00-00000</p>
                        <p>(주)제이스타일코리아</p>
                    </div>
                    <div class="return">
                        <p><b>RETURN</b></p>
                        <br/><br/>
                        <span>반품주소</span>
                        <span>CJ 대한통운 이용시:00 000 000 000</span>
                        <p>타택배 이용시 : oo oooo oo ooo</p>
                    </div>
                </div>
                <div class="footer">
                    <ul class="ul1">
                        <li><a href="#">ABOUT COMPANY</a></li>
                        <li><a href="#">TERMS OF USE</a></li>
                        <li><a href="#">USER GUIDE</a></li>
                        <li><a href="#">개인정보 취급방침</a></li>
                    </ul>
                    <div class="footer-infos">
                        <ul class="ul2">
                            <li>TRADE NAME 아이러브제이 &#124;</li>
                            <li> COMPANY (주)제이스타일 코리아 &#124;</li>
                            <li> OWNER ooo &#124;</li>
                            <li> BUSINESS LICENCE 000-00-000</li>
                        </ul>
                        <ul class="ul3">
                            <li>ONLINE BUSINESS LICENSE 000-00-000 &#124;</li>
                            <li>ADDRESS ooooo oo oooo &#124;</li>
                            <li>CALL CENTER 0000-0000 &#124;</li>
                            <li>E-MAIL 00000@0000.com</li>
                        </ul>
                    </div>
                </div> 
            </div>
        </body>
    )
}

export default MainPage
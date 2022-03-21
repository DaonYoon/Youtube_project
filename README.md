2022-3-21

알림기능

node i express-flash 이용

서버.js에 app.use(flash()); 사용선언
그리고 사용할곳에 req.flash("종류", "메시지내용")



export const protectorMiddleware = (req, res, next) => {
    if(req.session.loggedIn) {
        next();               
    } else {
        req.flash("error", "Login First")           <--로그인이 필요한 주소에 필요한 메세지 전송

        return res.redirect("/login");
    };
}


컨트롤러에서 사용할경우 똑같이 사용할 함수에다가 넣어줌

그다음 base.pug에서 사용

mixin message(kind, text)
    div.message(class=kind)
        span=text

      if messages.error
            +message("error", messages.error)              
        if messages.info
            +message("info", messages.info)
        if messages.success
            +message("success", messages.success)
2022-3-15

express.js 이해하기

express는 html form을 이해못하기때문에
app.use(express.urlencoded({ extended: true})); 설정을 해줘야함
그리고 name 설정을 반드시 해야 req.body에서 input 값 읽어올수있음

------------------------------------------------------------------

mongoose 기능
----------------------------------------
cd C:\Program Files\MongoDB\Server\5.2\bin (mongodb folder)
db.videos.find() = db찾아짐

----------------
검색조건 레귤러식

title: {
    $regex: new RegExp(`^${keyword}`, i), -- 키워드로 시작하는 문자열만 ex) 검색 s => sub , sucess
    (`${keyword}$`, i) 끝나는단어만 ex) s => abs, us
}
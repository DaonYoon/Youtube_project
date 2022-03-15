2022-3-15

express.js 이해하기

express는 html form을 이해못하기때문에
app.use(express.urlencoded({ extended: true})); 설정을 해줘야함
그리고 name 설정을 반드시 해야 req.body에서 input 값 읽어올수있음

------------------------------------------------------------------

Mongodb설치

 -> npm i mongoose  
 -> mongoose.connect("mongodb://127.0.0.1:27017/wetube") 내 어드레스 연결

 -------------
 callback 방식보단 promise 방법많이사용 async await으로 자바스크립트에게 기다리게할수있음


----------------------------------------
cd C:\Program Files\MongoDB\Server\5.2\bin (mongodb folder)
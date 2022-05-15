2022-03-22

---------
프론트단에서 폼의 데이터를 받아 백엔드로 전달해줄때

app.use(express.text()); 를써서 text도 이해가능하게 해준다
하지만 여러개의 값을 보내줄떈 JSON을 사용해야 하기떄문에
app.use(express.json()); 를 사용함

 body: JSON.stringify({ text: "i like it" , rating: "5"}), 
 -> 스트링으로 바꿔줘서 백엔드로 전달


  body: JSON.parse({ text: "i like it" , rating: "5" <- 스트링값 >}),
  text: "i like it" , rating: "5"



  etch(`/api/videos/${videoId}/comment`,{
        method: "POST",
        headers: {                                                       헤더는 req 기본정보
            "Content-Type": "application/json",                  <<- 백엔드에선 JSon 으로 파일을 받는걸 모르기떄문에 헤더에다가 제이슨으로 보낸다고 정보전달
        },
        body: JSON.stringify({ text: "i like it" , rating: "5"}),
    })

---------------------------------------------------------------------------------------------------------------------------
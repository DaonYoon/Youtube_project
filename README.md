2022-03-20 
비디오 녹화기능
프론트엔드단에서 async 사용하기위해 npm i regeneratpor-runtime 설치


    let stream; // 함수 바깥에서에서도 사용하기위해 전역변수
    let recorder;
    let videoFile;


    stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
    });
        video.srcObject = stream;  video라는 파일의 오브젝트를 stream으로하겠다는뜻
        video.play(); 비디오 시작
}

   ! 미디어디바이스는 카메라,마이크 같은 장비에 접근가능하게해줌 !

   카메라가 실시간으로 stream을 받아서 video로 넣어주기때매 실시간 스트리밍가능

    const handleStart = () => {
    startBtn.innerText = "Stop Recording";
    startBtn.removeEventListener("click", handleStart); //버튼 하나로 두가지 기능하기위해
    startBtn.addEventListener("click", handleStop);
    recorder = new MediaRecorder(stream. {mimeType: "video/webm"}); 
    recorder.ondataavailable = (event) => { event.data(녹화파일)
        console.log(event)
        videoFile = URL.createObjectURL(event.data); //브라우저 메모리에있는 파일에 접근
        video.srcObject = null; //비디오 미리보기 제거
        video.src = videoFile; 
        video.loop = true; //반복재생
        video.play(); 
    }
    recorder.start();
    }
    


const handleStop = () => {
    startBtn.innerText = "Download Recording"
    startBtn.removeEventListener("click", handleStop);
    startBtn.addEventListener("click", handleDownload);
    recorder.stop() /녹화종료하고 다운로드 함수로
}

const handleDownload = () => {
    const a = document.createElement("a");
    a.href = videoFile; // 링크지정
    a.download = "My Recording.webm"
    document.body.appendChild(a); // body에 링크가 존재해야 클릭가능하기때문에 넣어줌
    a.click(); // 사용자말고 우리가 대신클릭
}

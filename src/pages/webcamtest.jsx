import React, {useRef, useState, useCallback} from "react";
import Webcam from "react-webcam";

const WebcamStreamCapture = () => {
  const video = document.querySelector(".videoPreview")
  const mirror = document.querySelector(".mirror")
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [previewUrl, setPreviewUrl] = useState("")

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);

    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/mp4"
      });
      const url = URL.createObjectURL(blob);
      setPreviewUrl()
    }

  }, [mediaRecorderRef, webcamRef, setCapturing]);


  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm"
      });
      const url = URL.createObjectURL(blob);
      // const a = document.createElement("a");
      // document.body.appendChild(a);
      // a.style = "display: none";
      // a.href = url;
      // a.download = "react-webcam-stream-capture.webm";
      // a.click();
      // window.URL.revokeObjectURL(url);
      // setRecordedChunks([]);
      return (
        <>
          <video controls loop className="videoPreview" src={url}></video>
          <button>retake</button>
        </>
      )
    }
  }, [recordedChunks]);

  const handleRetake = useCallback(() => {})

  return (
    <>
      {/* <video controls className="videoPreview" src={}></video> */}

      {handleDownload()}

      <Webcam audio={false} ref={webcamRef} className="mirror" />
      {capturing ? (
        <button onClick={handleStopCaptureClick}>Stop Capture</button>
      ) : (
        <button onClick={handleStartCaptureClick}>Start Capture</button>
      )}
      {recordedChunks.length > 0 && (
        <button onClick={handleDownload}>Preview</button>
      )}
    </>
  );
};

export default WebcamStreamCapture;
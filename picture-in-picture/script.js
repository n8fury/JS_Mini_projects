const video = document.getElementById('video');
const video_button = document.getElementById("button");

// purpose of this function is to wait for the media stream to pass video element and play it
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play();
    }
  } catch (error) {
    console.log("error is ", error);
  }
}


video_button.addEventListener('click', async () => {
  video_button.disabled = true;
  await video.requestPictureInPicture(); // request picture in picture
  video_button.disabled = false;
});


selectMediaStream();
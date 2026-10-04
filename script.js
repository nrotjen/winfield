document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".video");
  const placeholder = document.querySelector(".placeholder");

  if (!video || !placeholder) return;

  const showVideo = () => {
    if (video.readyState >= 2) {
      video.classList.add("ready");
      placeholder.classList.add("hidden");
    }
  };

  video.addEventListener("loadeddata", showVideo, { once: true });
  video.addEventListener("canplay", showVideo, { once: true });

  video.addEventListener("error", () => {
    video.classList.remove("ready");
    placeholder.classList.remove("hidden");
  });

  showVideo();
});

const channels = {
  channel1: {
    title: 'Channel 1',
    videoIds: ['py5lunOxo7w', 'n2INC1cQZSw', 'JBm1aaSFXS8']
  },
  channel2: {
    title: 'Channel 2',
    videoIds: ['IeOJm025RlE', 'voPxA5l95L4', 'etp46Aca_UM']
  },
  channel3: {
    title: 'Channel 3',
    videoIds: ['ktR7P0p6KcE', 'eKFTSSKCzWA', 'ipf7ifVSeDU']
  }
};

const channel1Button = document.getElementById("channel1");
const channel2Button = document.getElementById("channel2");
const channel3Button = document.getElementById("channel3");
const tvElement = document.getElementById("tv");

channel1Button.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * channels.channel1.videoIds.length);
  const randomVideoId = channels.channel1.videoIds[randomIndex];
  const iframe = createIframe(randomVideoId);
  tvElement.innerHTML = "";
  tvElement.appendChild(iframe);
});

channel2Button.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * channels.channel2.videoIds.length);
  const randomVideoId = channels.channel2.videoIds[randomIndex];
  const iframe = createIframe(randomVideoId);
  tvElement.innerHTML = "";
  tvElement.appendChild(iframe);
});

channel3Button.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * channels.channel3.videoIds.length);
  const randomVideoId = channels.channel3.videoIds[randomIndex];
  const iframe = createIframe(randomVideoId);
  tvElement.innerHTML = "";
  tvElement.appendChild(iframe);
});

function createIframe(videoId) {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoId);
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("frameborder", "0");
  return iframe;
}

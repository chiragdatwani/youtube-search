import axios from "axios";

const youtube = axios.create({
  baseURL: " https://youtube.googleapis.com/youtube/v3",

  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: "AIzaSyARpia-9zllHP7Y15AYYVakoeDGlQqhjps",
  },
});

export default youtube;

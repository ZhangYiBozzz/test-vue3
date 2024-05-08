import request from "./request";

export const getHomepageData = () => request.get("/homepage/block/page");

export const getDragonball = () => request.post("/homepage/dragon/ball");
// 推荐歌单/recommend/resource
export const recommendSong = (params) =>
  request.get("/personalized", { params });
// 新碟 /album/new
export const getalbumnew = (params) => request.get("/album/new", { params });
// mv榜/top/mv
// export const gettopmv = (params) => request.get("/top/mv", { params });
// 热门话题
export const gethottopic = (params) => request.get("/hot/topic", { params });
// 音乐日历 /calenda
export const getcalendar = () =>
  request.get("/calendar?startTime=1606752000000&endTime=1609430399999");
// 歌单/playlist/detail
export const getplaylistdetail = (params) =>
  request.get("/playlist/detail", { params });

<template>
  <div class="bg-[#84b672]">
    <div class="h-[67vw] px-[4vw]">
      <!-- 有js的歌单 -->
      <div class="flex justify-between h-[12vw] text-[5vw] text-white">
        <div class="flex justify-around items-center">
          <van-icon name="arrow-left" /><span class="text-[4vw]">{{
            Playlists.name
          }}</span>
        </div>
        <div class="w-[14vw] flex justify-around items-center">
          <van-icon name="search" /><van-icon name="ellipsis" />
        </div>
      </div>
      <!-- 照片 -->
      <div class="h-[30vw] flex items-center mt-[5vw]">
        <div class="w-[32vw] h-[36vw] relative">
          <div
            class="w-[27vw] h-[1.4vw] bg-[rgba(0,0,0,.4)] rounded-t-[1vw] m-auto"
          ></div>
          <div class="w-[31vw] h-[31vw] bg-red-500 rounded-[1vw] m-auto">
            <img :src="Playlists.coverImgUrl" alt="" />
          </div>
          <van-icon
            name="like-o"
            class="absolute top-[11vw] left-[10vw] text-white text-[12vw]"
          />
          <div class="absolute top-[2vw] right-[2vw] text-white text-[3vw]">
            <van-icon name="play" />
            <span>{{ Playlists.shareCount }}万</span>
          </div>
        </div>
        <!-- 又 -->
        <div class="h-[40vw] w-full pl-[2vw] pt-[2vw]">
          <div class="flex justify-between items-center">
            <div class="text-[3.5vw] w-[50vw] text-white">
              {{ Playlists.name }}
            </div>
            <div
              class="w-[6vw] h-[6vw] leading-[6vw] bg-[rgba(255,255,255,.2)] rounded-[50%] text-center text-white"
            >
              <van-icon name="arrow-down" />
            </div>
          </div>
          <div class="flex items-center h-[8vw] mt-[2vw]">
            <img
              :src="Playlists.creator.avatarUrl"
              alt=""
              class="w-[8vw] rounded-[50%]"
            />
            <span
              class="text-[rgba(255,255,255,.6)] text-[3vw] ml-[2vw] mr-[2vw]"
              >{{ Playlists.creator.nickname }}</span
            >
            <div
              class="w-[12vw] h-[7vw] text-[3vw] text-[rgba(255,255,255,.6)] bg-[rgba(255,255,255,.2)] rounded-[2vw] flex items-center justify-center"
            >
              <van-icon name="plus" />
              <span>关注</span>
            </div>
          </div>
          <div class="flex justify-between w-[46vw] mt-[2vw]">
            <div
              v-for="items in Playlists.tags"
              :key="items"
              class="h-[6vw] px-[2vw] text-[3vw] text-white bg-[rgba(255,255,255,.2)] rounded-[2vw] flex items-center justify-center"
            >
              <span>{{ items }}</span>
              <van-icon name="arrow" />
            </div>
          </div>
        </div>
      </div>
      <div class="h-[5vw] flex justify-between mt-[1vw]">
        <div
          class="text-[3vw] w-[80vw] h-[5vw] overflow-hidden text-[rgba(255,255,255,.6)]"
        >
          {{ Playlists.description }}
        </div>
        <van-icon name="arrow" class="text-white" />
      </div>
      <!-- 三个园 -->
      <div class="flex justify-between mt-[2vw]">
        <div
          class="w-[28vw] h-[10vw] flex items-center justify-center bg-[rgba(255,255,255,.2)] rounded-[6vw] text-white text-[4vw]"
        >
          <van-icon name="share" />
          <span class="ml-[2vw]">{{ Playlists.shareCount }}</span>
        </div>
        <div
          class="w-[28vw] h-[10vw] flex items-center justify-center bg-[rgba(255,255,255,.2)] rounded-[6vw] text-white text-[4vw]"
        >
          <van-icon name="chat" />
          <span class="ml-[2vw]">{{ Playlists.commentCount }}</span>
        </div>
        <div
          class="w-[28vw] h-[10vw] flex items-center justify-center bg-[#ff2658] rounded-[6vw] text-white text-[4vw]"
        >
          <van-icon name="star" />
          <span class="ml-[2vw]">{{ Playlists.subscribedCount }}</span>
        </div>
      </div>
    </div>
    <!-- 歌单 -->
    <div class="bg-red-500 h-[100vw] rounded-t-[3vw]"></div>
  </div>
</template>

<script>
import { ref } from "vue";
import { getplaylistdetail } from "../service";
export default {
  setup() {
    const Playlists = ref([]); //歌单
    console.log(Playlists);
    (async () => {
      try {
        Playlists.value = await (
          await getplaylistdetail({ id: 2863346054 })
        ).data.playlist;
      } catch (error) {
        console.log(error);
      }
    })();
    return { Playlists };
  },
};
</script>

<style></style>

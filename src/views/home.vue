<template>
  <div
    :class="[
      'opacity-0.2 ',
      checked
        ? 'bg-gradient-to-b from-[#34304b] to-[#403246] text-[white]'
        : 'bg-gradient-to-b  from-[#c8c8ed] to-[#f1f1f1] text-[#403246]',
    ]"
  >
    <div
      class="w-[100vw] h-[20vw] py-[3vw] px-[1vw] flex justify-between items-center"
    >
      <!-- 抽屉 -->
      <div>
        <van-cell title="展示弹出层" is-link @click="showPopup" />
        <div @click="showPopup">
          <van-icon name="wap-nav" class="text-[8vw]" />
        </div>
        <van-popup
          v-model:show="show"
          position="left"
          :style="{ width: '78%', height: '100%' }"
          :class="[
            'px-[4vw] pt-[10vw]',
            checked
              ? 'h-[20vw] w-full bg-[#403246]'
              : 'h-[20vw] w-full bg-[#f1f1f1]',
          ]"
        >
          <!-- 登录 -->
          <div class="w-full h-[7vw] flex items-center justify-between">
            <div
              class="h-[7vw] flex items-center"
              @click="$router.push('/login')"
            >
              <van-image round width="7vw" height="7vw" src="" fit="cover" />
              <span class="ml-[3vw] text-[4vw]"
                >立即登录<van-icon name="arrow"
              /></span>
            </div>
            <div><van-icon name="enlarge" class="text-[30px]" /></div>
          </div>
          <div
            class="mx-auto mt-[4vw] h-[27.66vw] bg-gradient-to-r from-[#3b3b3b] to-[#5f5050] px-[3.96vw] text-[#9e8f8f] rounded-[20px]"
            style="pointer-events: auto"
          >
            <div class="h-[10vw] flex justify-between items-center">
              <h1 class="text-[3.6vw] text-[#ffeeeb]">开通黑胶VIP</h1>
              <div
                class="w-[15.78vw] h-[6.56vw] leading-[6vw] text-center rounded-[100px] border-[1px] border-[#9e8f8f] text-[2.5vw] mt-[3vw]"
              >
                会员中心
              </div>
            </div>
            <div class="h-[7vw] border-b-[1px] border-[#494443]">
              <p class="text-[2.73vw]">点击恢复超21项专属特权</p>
            </div>
            <div
              class="h-[11vw] leading-[11vw] flex justify-between items-center mr-[4.45vw]"
            >
              <div class="text-[2.5vw] h-[11vw]">
                受邀专享，黑胶VIP低至0.27元/天!
              </div>
              <div class="scale-50 w-[8vw]">
                <div
                  class="w-[22vw] h-[22vw] rounded-[10px] bg-[#e54701] text-[#fff] pl-[3vw] text-[8vw] scale-50"
                >
                  受邀专享
                </div>
              </div>
            </div>
          </div>
          <!-- 深夜模式 -->
          <div
            class="rounded-[15px] mt-[5vw] mx-auto"
            :class="[
              checked ? 'bg-[#3c3c3c] text-white' : 'bg-white text-[#333] ',
            ]"
            style="pointer-events: auto"
          >
            <div
              class="text-[3vw] px-[4vw] py-[3vw] border-b-[0.35vw] border-b-[#E8e8e8]"
            >
              其他
            </div>
            <div class="px-[4vw]">
              <div
                class="flex items-center justify-between h-[12vw] px-[3.6vw]"
              >
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="font-[800] w-[4vw] h-[4vw] iconify iconify--ri"
                  >
                    <path
                      fill="currentColor"
                      d="m12 1l9.5 5.5v11L12 23l-9.5-5.5v-11zm0 2.311L4.5 7.653v8.694l7.5 4.342l7.5-4.342V7.653zM12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
                    ></path>
                  </svg>
                  <span class="text-[3.5vw] ml-[2.73vw]">设置</span>
                </div>
                <div class="flex items-center">
                  <!---->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path
                        d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                      ></path>
                    </g>
                  </svg>
                  <!---->
                </div>
              </div>
              <div
                class="flex items-center justify-between h-[12vw] px-[3.6vw]"
              >
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="font-[800] w-[4vw] h-[4vw] iconify iconify--line-md"
                  >
                    <g fill="currentColor" fill-opacity="0">
                      <path
                        d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z"
                      >
                        <animate
                          id="iconifyVue1"
                          fill="freeze"
                          attributeName="fill-opacity"
                          begin="0.7s;iconifyVue1.begin+6s"
                          dur="0.4s"
                          values="0;1"
                        ></animate>
                        <animate
                          fill="freeze"
                          attributeName="fill-opacity"
                          begin="iconifyVue1.begin+2.2s"
                          dur="0.4s"
                          values="1;0"
                        ></animate>
                      </path>
                      <path
                        d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"
                      >
                        <animate
                          fill="freeze"
                          attributeName="fill-opacity"
                          begin="iconifyVue1.begin+3s"
                          dur="0.4s"
                          values="0;1"
                        ></animate>
                        <animate
                          fill="freeze"
                          attributeName="fill-opacity"
                          begin="iconifyVue1.begin+5.2s"
                          dur="0.4s"
                          values="1;0"
                        ></animate>
                      </path>
                      <path
                        d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"
                      >
                        <animate
                          fill="freeze"
                          attributeName="fill-opacity"
                          begin="iconifyVue1.begin+0.4s"
                          dur="0.4s"
                          values="0;1"
                        ></animate>
                        <animate
                          fill="freeze"
                          attributeName="fill-opacity"
                          begin="iconifyVue1.begin+2.8s"
                          dur="0.4s"
                          values="1;0"
                        ></animate>
                      </path>
                      <path
                        d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z"
                      >
                        <animate
                          fill="freeze"
                          attributeName="fill-opacity"
                          begin="iconifyVue1.begin+3.4s"
                          dur="0.4s"
                          values="0;1"
                        ></animate>
                        <animate
                          fill="freeze"
                          attributeName="fill-opacity"
                          begin="iconifyVue1.begin+5.6s"
                          dur="0.4s"
                          values="1;0"
                        ></animate>
                      </path>
                    </g>
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-dasharray="56"
                      stroke-dashoffset="56"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.6s"
                        values="56;0"
                      ></animate>
                    </path>
                  </svg>
                  <span class="text-[3.5vw] ml-[2.73vw]">深色模式</span>
                </div>
                <div class="flex items-center">
                  <van-switch
                    v-model="checked"
                    active-color="#ff3836"
                    inactive-color="#dcdee0"
                  />
                </div>
              </div>
              <div
                class="flex items-center justify-between h-[12vw] px-[3.6vw]"
              >
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="font-[800] w-[4vw] h-[4vw] iconify iconify--mdi"
                  >
                    <path
                      fill="currentColor"
                      d="M12 20a7 7 0 0 1-7-7a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7m0-16a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9m.5 4H11v6l4.75 2.85l.75-1.23l-4-2.37zM7.88 3.39L6.6 1.86L2 5.71l1.29 1.53zM22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86z"
                    ></path>
                  </svg>
                  <span class="text-[3.5vw] ml-[2.73vw]">定时关闭</span>
                </div>
                <div class="flex items-center">
                  <!---->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path
                        d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                      ></path>
                    </g>
                  </svg>
                  <!---->
                </div>
              </div>
              <div
                class="flex items-center justify-between h-[12vw] px-[3.6vw]"
              >
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    class="font-[800] w-[4vw] h-[4vw] iconify iconify--ph"
                  >
                    <path
                      fill="currentColor"
                      d="m245.68 64.73l-51.77-28.24A4 4 0 0 0 192 36h-32a4 4 0 0 0-4 4a28 28 0 0 1-56 0a4 4 0 0 0-4-4H64a4 4 0 0 0-1.9.5L10.32 64.73a11.79 11.79 0 0 0-5 15.89l19.28 36.81a12.37 12.37 0 0 0 11 6.57H60v84a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-84h24.33a12.37 12.37 0 0 0 11-6.57l19.28-36.81a11.79 11.79 0 0 0-4.93-15.89M35.67 116a4.46 4.46 0 0 1-4-2.28L12.44 76.91a3.79 3.79 0 0 1 1.71-5.15L60 46.74V116ZM188 208a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4V44h24.22a36 36 0 0 0 71.56 0H188Zm55.56-131.09l-19.27 36.81a4.46 4.46 0 0 1-4 2.28H196V46.74l45.85 25a3.79 3.79 0 0 1 1.71 5.17"
                    ></path>
                  </svg>
                  <span class="text-[3.5vw] ml-[2.73vw]">个性装扮</span>
                </div>
                <div class="flex items-center">
                  <!---->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path
                        d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                      ></path>
                    </g>
                  </svg>
                  <!---->
                </div>
              </div>
              <div
                class="flex items-center justify-between h-[12vw] px-[3.6vw]"
              >
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="font-[800] w-[4vw] h-[4vw] iconify iconify--iconoir"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12 13v5m0 3.01l.01-.011M4 13.5l-.485.121A2 2 0 0 0 2 15.561v1.877a2 2 0 0 0 1.515 1.94l1.74.436A.6.6 0 0 0 6 19.23v-5.463a.6.6 0 0 0-.746-.582zm0 0V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5m0 0l.485.121A2 2 0 0 1 22 15.561v1.877a2 2 0 0 1-1.515 1.94l-1.74.436A.6.6 0 0 1 18 19.23v-5.463a.6.6 0 0 1 .745-.582z"
                    ></path>
                  </svg>
                  <span class="text-[3.5vw] ml-[2.73vw]">边听边存</span>
                </div>
                <div class="flex items-center">
                  <span class="text-[color:#a7a7a7] text-[3vw]">未开启</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path
                        d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                      ></path>
                    </g>
                  </svg>
                  <!---->
                </div>
              </div>
              <div
                class="flex items-center justify-between h-[12vw] px-[3.6vw]"
              >
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="font-[800] w-[4vw] h-[4vw] iconify iconify--iconoir"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12 13v5m0 3.01l.01-.011M4 13.5l-.485.121A2 2 0 0 0 2 15.561v1.877a2 2 0 0 0 1.515 1.94l1.74.436A.6.6 0 0 0 6 19.23v-5.463a.6.6 0 0 0-.746-.582zm0 0V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5m0 0l.485.121A2 2 0 0 1 22 15.561v1.877a2 2 0 0 1-1.515 1.94l-1.74.436A.6.6 0 0 1 18 19.23v-5.463a.6.6 0 0 1 .745-.582z"
                    ></path>
                  </svg>
                  <span class="text-[3.5vw] ml-[2.73vw]">在线听歌免流量</span>
                </div>
                <div class="flex items-center">
                  <!---->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path
                        d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                      ></path>
                    </g>
                  </svg>
                  <!---->
                </div>
              </div>
              <div
                class="flex items-center justify-between h-[12vw] px-[3.6vw]"
              >
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
                  >
                    <g fill="none" stroke="currentColor" stroke-width="1.5">
                      <path
                        d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        d="M10 16H6m8 0h-1.5M2 10h20"
                      ></path>
                    </g>
                  </svg>
                  <span class="text-[3.5vw] ml-[2.73vw]">音乐黑名单</span>
                </div>
                <div class="flex items-center">
                  <span class="text-[color:#a7a7a7] text-[3vw]">未开启</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path
                        d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                      ></path>
                    </g>
                  </svg>
                  <!---->
                </div>
              </div>
              <div
                class="flex items-center justify-between h-[12vw] px-[3.6vw]"
              >
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 1024 1024"
                    class="font-[800] w-[4vw] h-[4vw] iconify iconify--ant-design"
                  >
                    <path
                      fill="currentColor"
                      d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372c0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884m288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372c0 89-31.3 170.8-83.5 234.8"
                    ></path>
                  </svg>
                  <span class="text-[3.5vw] ml-[2.73vw]">青少年模式</span>
                </div>
                <div class="flex items-center">
                  <span class="text-[color:#a7a7a7] text-[3vw]">未开启</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path
                        d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                      ></path>
                    </g>
                  </svg>
                  <!---->
                </div>
              </div>
              <div
                class="flex items-center justify-between h-[12vw] px-[3.6vw]"
              >
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 1024 1024"
                    class="font-[800] w-[4vw] h-[4vw] iconify iconify--ep"
                  >
                    <path
                      fill="currentColor"
                      d="M512 832a320 320 0 1 0 0-640a320 320 0 0 0 0 640m0 64a384 384 0 1 1 0-768a384 384 0 0 1 0 768"
                    ></path>
                    <path
                      fill="currentColor"
                      d="m292.288 824.576l55.424 32l-48 83.136a32 32 0 1 1-55.424-32zm439.424 0l-55.424 32l48 83.136a32 32 0 1 0 55.424-32zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128z"
                    ></path>
                  </svg>
                  <span class="text-[3.5vw] ml-[2.73vw]">音乐闹钟</span>
                </div>
                <div class="flex items-center">
                  <!---->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                    style="color: rgb(181, 181, 181)"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path
                        d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                      ></path>
                    </g>
                  </svg>
                  <!---->
                </div>
              </div>
            </div>
          </div>
          <!-- 推出登录 -->
          <div
            :class="[
              checked ? '  bg-[#3c3c3c] text-white' : ' bg-white text-[#333] ',
            ]"
            class="h-[12vw] px-[3.6vw] mt-[4vw] rounded-[15px] mx-auto leading-[12vw] text-center text-[3.6vw] text-[#ef4239]"
            style="pointer-events: auto"
          >
            关闭云音乐
          </div>
        </van-popup>
      </div>
      <!-- input框 -->
      <div>
        <div></div>
        <input
          type="text"
          placeholder="Love Is Gone (Acoustic)"
          :class="[
            'text-[4.47vw] pl-[8vw] opacity-0.2 w-[75vw] h-[10vw] border-2 rounded-[25px] text-[#8189A1]',
            checked
              ? 'bg-gradient-to-r from-[#34304b] to-[#403246] '
              : 'bg-gradient-to-r from-[#d9ddfd] to-[#f3d9ef] border-[#CCCEF7]',
          ]"
        />
      </div>
      <div>
        <van-icon name="audio" class="text-[8vw]" />
      </div>
    </div>
    <!-- banner -->
    <div class="px-[4vw] h-[35.5vw]">
      <van-swipe
        class="rounded-[15px] w-[93vw] h-[34vw]"
        :autoplay="3000"
        indicator-color="white"
      >
        <van-swipe-item
          v-for="item in homepageData?.[0]?.extInfo?.banners"
          :key="item.bannerId"
        >
          <van-image width="100%" height="100%" :src="item.pic" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 下面 -->
    <div>
      <BetterScroll
        style="height: 24vw"
        :option="{ scrollX: true, click: true }"
        :dep="homepageDragonball"
        class="relative"
      >
        <div
          v-for="item in homepageDragonball"
          :key="item.id"
          class="w-[19vw] h-[20vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]"
        >
          <img :src="item.iconUrl" alt="" class="imgred" />
          <p
            class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]"
          >
            {{ item.name }}
          </p>
        </div>
        <span class="absolute top-[7vw] left-[8vw] text-white text-[5vw]">{{
          currentDate
        }}</span>
      </BetterScroll>
      <!-- 推荐歌单 -->
      <div class="w-[100vw] h-[50vw]">
        <div class="h-[10vw] flex items-center justify-between px-[4vw]">
          <span class="text-[4vw]">推荐歌单</span>
          <van-icon name="good-job-o" class="text-[6vw]" />
        </div>
        <BetterScroll
          :option="{ scrollX: true, click: true }"
          class="w-[100vw]"
          :dep="homerecommendSong6"
        >
          <van-swipe
            style="height: 41vw; width: 40vw"
            vertical
            :autoplay="3000"
            :show-indicators="false"
            :touchable="false"
            class="pl-[2vw]"
          >
            <van-swipe-item
              v-for="item in homerecommendSong3"
              :key="item.bannerId"
            >
              <div class="w-[32vw] h-[36vw] relative">
                <div
                  class="w-[27vw] h-[1.4vw] bg-[#ccc] rounded-t-[1vw] m-auto"
                ></div>
                <div class="w-[31vw] h-[31vw] bg-red-500 rounded-[1vw] m-auto">
                  <img :src="item.picUrl" alt="" />
                </div>
                <p class="text-[3vw]">{{ item.name }}</p>
                <van-icon
                  name="play"
                  class="absolute top-[26vw] right-0 text-white text-[6vw]"
                />
                <div
                  class="absolute top-[2vw] right-[2vw] text-white text-[3vw]"
                >
                  <van-icon name="play" />
                  <span>{{ item.trackCount }}万</span>
                </div>
              </div>
            </van-swipe-item>
          </van-swipe>
          <div
            v-for="item in homerecommendSong6"
            :key="item.id"
            class="h-[41vw] w-[40vw] flex justify-between"
          >
            <div class="w-[32vw] h-[36vw] relative">
              <div
                class="w-[27vw] h-[1.4vw] bg-[#ccc] rounded-t-[1vw] m-auto"
              ></div>
              <div class="w-[31vw] h-[31vw] bg-red-500 rounded-[1vw] m-auto">
                <img :src="item.picUrl" alt="" />
              </div>
              <p class="text-[3vw]">{{ item.name }}</p>
              <van-icon
                name="play"
                class="absolute top-[26vw] right-0 text-white text-[6vw]"
              />
              <div class="absolute top-[2vw] right-[2vw] text-white text-[3vw]">
                <van-icon name="play" />
                <span>{{ item.trackCount }}万</span>
              </div>
            </div>
          </div>
        </BetterScroll>
      </div>
      <!-- 新歌新碟 -->
      <div class="w-[100vw] h-[50vw] mt-[4vw]">
        <div class="h-[10vw] flex items-center justify-between px-[4vw]">
          <span class="text-[4vw]">新歌新碟/数字专辑</span>
          <van-icon name="fire" class="text-[6vw] text-red-400" />
        </div>
        <!-- 歌单 -->
        <BetterScroll
          :option="{ scrollX: true, click: true }"
          style="height: 50vw"
          :dep="mynum"
        >
          <div
            v-for="items in mynum"
            :key="items"
            class="h-[50vw] w-[80vw] flex flex-col justify-around"
          >
            <div
              v-for="items in homealbumnew"
              :key="items"
              class="h-[15vw] px-[2vw] flex items-center"
            >
              <img :src="items.picUrl" alt="" class="w-[14vw]" />
              <div class="ml-[2vw]">
                <p class="text-[4vw]">{{ items.name }}</p>
                <p class="text-[3vw]">{{ items.company }}</p>
              </div>
            </div>
          </div>
        </BetterScroll>
      </div>
      <!-- 排行榜 -->
      <div class="w-[100vw] h-[88vw] mt-[10vw]">
        <div class="h-[10vw] flex items-center justify-between px-[4vw]">
          <span class="text-[4vw]">排行榜</span>
          <van-icon name="fire" class="text-[6vw] text-red-400" />
        </div>
        <div
          class="w-[98vw] pt-[1vw] pl-[2vw] overflow-hidden border-[#EBEDF2]"
        >
          <BetterScroll :option="{ scrollX: true }">
            <div class="flex justify-around w-[540vw]">
              <ul
                class="w-[87vw] h-[70vw] rounded-[2.5vw] flex flex-col justify-around"
                :class="[checked ? 'bg-[#3c3c3c] text-white' : 'bg-white']"
                v-for="item in homepageData[3]?.creatives"
                :key="item"
              >
                <li>
                  <div class="flex px-[2vw] justify-between">
                    <div class="flex items-center">
                      <span class="text-[4vw]"
                        >{{ item.uiElement.mainTitle.title
                        }}<van-icon name="arrow"
                      /></span>
                    </div>
                    <span class="text-[#939BA1]">{{
                      item.uiElement.mainTitle.titleDesc
                    }}</span>
                  </div>
                </li>
                <li
                  v-for="(i, index) in item.resources"
                  :key="index"
                  class="mt-[2vw] pl-[2vw]"
                >
                  <div class="flex">
                    <img
                      :src="i.uiElement.image.imageUrl"
                      class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                      alt=""
                    />
                    <div
                      class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
                    >
                      <div
                        class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[3vw]"
                      >
                        {{ index + 1 }}
                      </div>
                      <div class="w-[40vw]">
                        <h4 class="text-[4vw]">
                          {{ i.uiElement.mainTitle.title }}
                        </h4>
                        <p class="text-[3vw]">
                          {{ i.resourceExtInfo?.artists[0].name }}
                        </p>
                      </div>
                      <div class="leading-[14vw] flex-3 ml-[4vw] text-[3vw]">
                        <span v-if="i.uiElement.labelText.text === '新晋'">
                          <span class="text-[#39B184]">新晋</span>
                        </span>
                        <span v-else>
                          <span class="text-[#FF3836]">{{
                            i.uiElement.labelText.text
                          }}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </BetterScroll>
        </div>
      </div>
      <!-- 热门主题 -->
      <div class="w-[100vw] h-[40vw]">
        <div class="h-[10vw] flex items-center justify-between px-[4vw]">
          <span class="text-[4vw]">热门话题</span>
          <van-icon name="fire" class="text-[6vw] text-red-400" />
        </div>
        <BetterScroll
          :option="{ scrollX: true, click: true }"
          style="height: 50vw"
          :dep="mynum"
        >
          <div class="flex justify-around w-[260vw]">
            <div
              v-for="(item, index) in mynum"
              :key="index"
              :style="{ backgroundColor: generateColor(index) }"
              class="h-[27vw] w-[62vw] flex flex-col justify-around"
            ></div>
          </div>
        </BetterScroll>
      </div>
      <!-- 音乐日历 -->
      <div class="w-[100vw] h-[50vw]">
        <div class="h-[10vw] flex items-center justify-between px-[4vw]">
          <span class="text-[4vw]">音乐日历</span>
          <van-icon name="fire" class="text-[6vw] text-red-400" />
        </div>
        <div
          class="h-[26vw] rounded-[2vw] mx-[2vw] flex items-center justify-around"
          :class="[checked ? 'bg-[#3c3c3c] text-white' : 'bg-white']"
        >
          <div>
            <p class="text-[3vw]">
              {{ homecalendar.calendarEvents?.[0].title }}
            </p>
          </div>
          <div class="w-[20vw]">
            <img
              :src="homecalendar.calendarEvents?.[0].imgUrl"
              alt=""
              class="rounded-[2vw]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 标签兰 -->
  <div
    class="fixed bottom-0 left-0 w-full h-12 z-50 flex items-center justify-center bg-[#403246]"
  >
    <van-tabbar
      v-model="active"
      active-color="#ee0a24"
      :class="[checked ? '  bg-[#403246] text-white' : '  bg-[#c8c8ed]']"
    >
      <van-tabbar-item
        icon="music-o"
        :class="[checked ? '  bg-[#403246] text-white' : '  bg-[#c8c8ed]']"
        >首页</van-tabbar-item
      >
      <van-tabbar-item
        icon="bar-chart-o"
        :class="[checked ? '  bg-[#403246] text-white' : '  bg-[#c8c8ed]']"
        >排行榜</van-tabbar-item
      >
      <van-tabbar-item
        icon="audio"
        :class="[checked ? '  bg-[#403246] text-white' : '  bg-[#c8c8ed]', ,]"
        >我的</van-tabbar-item
      >
      <van-tabbar-item
        icon="contact-o"
        :class="[checked ? '  bg-[#403246] text-white' : '  bg-[#c8c8ed]']"
        >关注</van-tabbar-item
      >
      <van-tabbar-item
        icon="wechat"
        :class="[checked ? '  bg-[#403246] text-white' : '  bg-[#c8c8ed]']"
        >社区</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
import { ref } from "vue";
import {
  getHomepageData,
  getDragonball,
  recommendSong,
  getalbumnew,
  gethottopic,
  getcalendar,
} from "../service";
import BetterScroll from "../components/BetterScroll.vue";

export default {
  components: { BetterScroll },
  setup() {
    const homepageData = ref({});
    const homepageDragonball = ref([]);
    const homerecommendSong3 = ref([]);
    const homerecommendSong6 = ref([]);
    const homealbumnew = ref([]); //新碟
    // const homegethottopic = ref([]); //热门话题
    const homecalendar = ref([]); //音乐日历
    console.log(homerecommendSong6);
    (async () => {
      try {
        homepageData.value = (await getHomepageData()).data.data.blocks;
        homepageDragonball.value = (await getDragonball()).data.data;
        homerecommendSong3.value = (
          await recommendSong({ limit: 3 })
        ).data.result;
        homerecommendSong6.value = (
          await recommendSong({ limit: 6 })
        ).data.result;
        homealbumnew.value = (await getalbumnew({ limit: 3 })).data.albums;
        // homegethottopic.value = await gethottopic();
        homecalendar.value = (await getcalendar()).data.data;
      } catch (error) {
        console.log(error);
      }
    })();
    // 抽屉
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    const value = ref("");
    // 深夜开关
    const checked = ref(false);
    // 日期
    const currentDate = ref(new Date().getDate());
    // 标签
    const active = ref(0);
    return {
      homepageData,
      homepageDragonball,
      show,
      showPopup,
      value,
      checked,
      active, // 标签
      homerecommendSong3, //推荐
      homerecommendSong6, //推荐
      currentDate, //日期
      homealbumnew, //新碟
      // homegethottopic, //热门话题
      homecalendar, //音乐日历
    };
  },
  data() {
    return {
      mynum: [1, 2, 3, 4],
    };
  },
  methods: {
    generateColor(index) {
      // 在这里可以编写逻辑来动态生成颜色，这里简单示范一种方式
      const colors = ["#949494", "green", "blue", "yellow"];
      return colors[index % colors.length];
    },
  },
};
</script>
<style>
.imgred {
  filter: contrast(0%) sepia(100%) hue-rotate(-50deg) saturate(750%);
}
</style>

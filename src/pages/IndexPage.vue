<template>
  <div class="index-page">
    <a-input-search
      v-model:value="searchParams.searchText"
      placeholder="请输入搜索内容"
      enter-button="Search"
      size="large"
      @search="onSearch"
    />
  </div>
  <!--  {{ JSON.stringify(postList) }}-->
  <MyDivider />
  <a-tabs v-model:activeKey="activeKey" @change="onTabChange">
    <a-tab-pane key="post" tab="文章">
      <PostList :post-list="postList" />
    </a-tab-pane>
    <a-tab-pane key="picture" tab="图片">
      <PictureList :picture-list="pictureList" />
    </a-tab-pane>
    <a-tab-pane key="user" tab="用户">
      <UserList :user-list="userList" />
    </a-tab-pane>
  </a-tabs>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import PostList from "@/components/PostList.vue";
import PictureList from "@/components/PictureList.vue";
import UserList from "@/components/UserList.vue";
import MyDivider from "@/components/MyDivider.vue";
import { useRoute, useRouter } from "vue-router";
import myAxios from "@/plugins/myAxios";
import { PicData, Post, SearchData, UserData } from "@/types/Index";
import { AxiosResponse } from "axios";

const postList = ref<Post[]>([]);
const userList = ref<UserData[]>([]);
const pictureList = ref<PicData[]>([]);

// /**
//  * 加载数据
//  * @param params
//  */
// const loadData = (params: any) => {
//   const query = {
//     ...params,
//   };
//   console.log(query);
//   myAxios.post("/post/list/page/vo", query).then((res: any) => {
//     postList.value = res.records as Post[];
//   });
//
//   myAxios.post("/user/list/page/vo", query).then((res: any) => {
//     userList.value = res.records as UserData[];
//   });
//
//   myAxios
//     .post("/pic/list/page/vo", {
//       ...query,
//       current: query.pageNum,
//     })
//     .then((res: any) => {
//       pictureList.value = res.records as PicData[];
//     });
// };

/**
 * 加载数据(聚合请求，统一发起请求)
 * @param params
 */
const loadData = (params: any) => {
  const query = {
    ...params,
  };
  myAxios.post("/search/all", query).then((res: any) => {
    res = res as SearchData;
    console.log(res);
    postList.value = res.postPage.records as Post[];
    userList.value = res.userPage.records as UserData[];
    pictureList.value = res.picturePage.records as PicData[];
  });
};

const router = useRouter();
const route = useRoute();
const activeKey = route.params.category; // 动态路由相匹配

const initSearchParams = {
  searchText: "",
  pageSize: 10,
  current: 1,
};

const searchParams = ref(initSearchParams);
// 首次请求
loadData(searchParams.value);

watchEffect(() => {
  searchParams.value = {
    ...initSearchParams,
    searchText: route.query.searchText,
  } as any;
});

const onSearch = (value: string) => {
  // alert(value);
  router.push({
    query: searchParams.value,
  });
  // 根据条件查询
  loadData(searchParams.value);
};

const onTabChange = (key: string) => {
  router.push({
    path: `/${key}`,
    query: searchParams.value,
  });
};
</script>

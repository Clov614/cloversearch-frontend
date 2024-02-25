<script setup lang="ts">
import landscape from "../assets/landscape.png";
import { Post, UserData } from "@/types";
import { defineProps, withDefaults } from "vue";

interface Props {
  userList: UserData[];
}

const props = withDefaults(defineProps<Props>(), {
  userList: () => [],
});
</script>

<template>
  <a-page-header title="用户列表">
    <a-list item-layout="horizontal" :data-source="props.userList">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-card hoverable style="width: 240px">
            <template #cover>
              <img alt="example" :src="landscape" />
            </template>
            <a-card-meta :title="item.userName">
              <template #description>{{ item.userProfile }}</template>
            </a-card-meta>
          </a-card>
        </a-list-item>
      </template>
    </a-list>
  </a-page-header>
</template>

<style scoped>
.landscape {
  width: 200px;
}
</style>

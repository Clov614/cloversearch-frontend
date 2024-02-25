<script setup lang="ts">
import landscape from "../assets/landscape.png";
import { Post } from "@/types";
import { defineProps, withDefaults } from "vue";

interface Props {
  postList: Post[];
}

const props = withDefaults(defineProps<Props>(), {
  postList: () => [],
});
</script>

<template>
  <a-page-header title="用户列表">
    <img :src="landscape" alt="landscape" class="landscape" />
    <a-list item-layout="horizontal" :data-source="postList">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta :description="item.content">
            <template #title>
              <a href="https://www.antdv.com/">{{ item.title }}</a>
            </template>
            <template #avatar>
              <a-avatar :src="landscape" />
            </template>
          </a-list-item-meta>
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

<script setup lang="ts">
import { PicData } from "@/types";
import { defineProps, withDefaults } from "vue";

interface Props {
  pictureList: PicData[];
}

const props = withDefaults(defineProps<Props>(), {
  pictureList: () => [],
});
</script>

<template>
  <a-page-header title="图片列表">
    <a-list
      item-layout="horizontal"
      :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }"
      :data-source="props.pictureList"
    >
      <template #renderItem="{ item }">
        <a-list-item>
          <a-card hoverable>
            <template #cover>
              <img alt="example" :src="item.url" />
            </template>
            <a-card-meta :title="item.title" />
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

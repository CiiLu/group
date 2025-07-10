<template>
  <div class="flex flex-col items-center justify-center h-screen gap-4">
    <h1>请选择你要查看的内容</h1>
    <UButton to="/notice/tip" class="text-xl px-6 py-4" icon="lucide:bookmark" size="xl" label="群公告" />
    <UButton to="/solve" class="text-xl px-6 py-4" icon="lucide:list" size="xl" label="解决方案" />
  </div>
</template>

<script lang="ts" setup>
useHead({ title: "主页" })
</script>
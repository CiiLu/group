<script setup lang="ts">
import { ref } from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'
useHead({ title: "群公告" })
const items = ref<NavigationMenuItem[]>([
  {
    label: '必读注意事项',
    icon: 'lucide:newspaper',
    to: '/notice/tip'
  },
  {
    label: '游戏崩溃',
    icon: 'lucide:shield-close',
    to: '/notice/crash'
  },
  {
    label: '游戏联机',
    icon: 'lucide:link',
    to: '/notice/link'
  },
  {
    label: '游戏未响应',
    icon: 'lucide:loader-circle',
    to: '/notice/stack'
  },
  {
    label: '游戏卡顿',
    icon: 'lucide:loader',
    to: '/notice/spark'
  },
  {
    label: '启动器问题',
    icon: 'lucide:shield',
    to: '/notice/launcher'
  },
])
</script>

<template>
  <UApp class="min-h-screen flex flex-col prose">
    <header class="sticky top-0 z-50 backdrop-blur-md shadow-sm w-full">
      <AppHeader />
    </header>

    <main class="flex-grow">
      <div class="leading-relaxed px-4 sm:px-8 py-6">
        <div class="flex h-full">
          <UNavigationMenu orientation="vertical" :items="items" class="w-48 p-4 border-b-gray-400" />

          <div class="flex-1 p-4">
            <NuxtPage />
          </div>
        </div>
      </div>
    </main>

    <footer class="mt-auto">
      <AppFooter />
    </footer>
  </UApp>
</template>
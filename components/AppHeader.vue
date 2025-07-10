<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const route = useRoute()

const isActive = (item: NavigationMenuItem): boolean => {
  if (item.to === '/notice/tip') {
    return route.path.startsWith('/notice')
  }
  return route.path === item.to
}

const items = ref<NavigationMenuItem[]>([
  {
    label: '主页',
    icon: 'lucide:home',
    to: '/',
    active: false
  },
  {
    label: '群公告',
    icon: 'lucide:bookmark',
    to: '/notice/tip',
    active: false
  },
  {
    label: '解决方案',
    icon: 'lucide:list',
    to: '/solve',
    active: false
  }
])

watchEffect(() => {
  items.value = items.value.map(item => ({
    ...item,
    active: isActive(item)
  }))
})
</script>

<template>
  <div class="container mx-auto px-4 py-4 flex items-center" style="height: 70px; max-height: 70px; border-bottom: 1px solid #e4e4e4">
    <div class="font-bold text-lg">MC 疑难杂症交流群</div>

    <div class="flex-1 flex justify-end">
      <UNavigationMenu
          :items="items"
          content-orientation="horizontal"
          class="w-full max-w-4xl justify-end"
          highlight
      />
    </div>
  </div>
</template>
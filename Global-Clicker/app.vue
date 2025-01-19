<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from './supabaseClient';

interface Clicks {
  id: number;
  count: number;
}

const count = ref(0)

async function getCount() {
  try {
    const { data, error } = await supabase.from<Clicks>('Clicks').select()
    if (error) {
      console.error(error)
      return
    }
    if (data && data.length > 0) {
      count.value = data[0].count || 0
    } else {
      count.value = 0
    }
  } catch (error) {
    console.error(error)
  }
}

async function updateCount() {
  try {
    count.value += 1
    const { error } = await supabase.from('Clicks').upsert({ id: 1, count: count.value })
    if (error) {
      console.error(error)
    }
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getCount()
})

</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">

    <h1 class="text-4xl">Global Clicker</h1>

    <p>Total number of clicks shown here: </p>

    <UButton @click="updateCount" class="mt-4">
      {{ count }}
    </UButton>
  </div>
</template>

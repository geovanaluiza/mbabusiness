<script setup lang="ts">
/**
 * Display shell for the NU School of Business welcome screen.
 * Fixed 1080×1920 portrait stage, scaled to fit any viewport.
 */
import { ref, onMounted, onUnmounted } from 'vue'

const TARGET_W = 1080
const TARGET_H = 1920
const stageEl = ref<HTMLElement | null>(null)

function fit() {
  if (!stageEl.value) return
  const vw = window.innerWidth
  const vh = window.innerHeight
  const s = Math.min(vw / TARGET_W, vh / TARGET_H)
  const x = (vw - TARGET_W * s) / 2
  const y = (vh - TARGET_H * s) / 2
  stageEl.value.style.transform = `translate(${x}px, ${y}px) scale(${s})`
}

let reloadTimer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  fit()
  window.addEventListener('resize', fit)
  window.addEventListener('orientationchange', fit)
  // Keep the screen fresh — reload every 5 minutes.
  reloadTimer = setInterval(() => { window.location.reload() }, 5 * 60 * 1000)
})
onUnmounted(() => {
  window.removeEventListener('resize', fit)
  window.removeEventListener('orientationchange', fit)
  if (reloadTimer) clearInterval(reloadTimer)
})
</script>

<template>
  <div class="app-root">
    <div ref="stageEl" class="stage">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
:root {
  --nu-blue:      #0068bb;
  --nu-navy:      #034c87;
  --nu-midnight:  #00263d;
  --nu-skylight:  #b4d4f0;
  --nu-tour:      #fbd945;
  --nu-powder:    #eaf4fb;
  --nu-wisp:      #f9f9f9;
  --font-serif:   'zenon', Georgia, serif;
  --font-sans:    'proxima-nova', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --ease-out-soft: cubic-bezier(0.22, 1, 0.36, 1);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body,
#__nuxt {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: var(--nu-midnight);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-sans);
  color: var(--nu-wisp);
  -webkit-tap-highlight-color: transparent;
  text-rendering: optimizeLegibility;
}

.app-root {
  position: fixed; inset: 0;
  background: var(--nu-midnight);
  overflow: hidden;
}
.stage {
  position: absolute;
  top: 0; left: 0;
  width: 1080px;
  height: 1920px;
  transform-origin: top left;
}
</style>

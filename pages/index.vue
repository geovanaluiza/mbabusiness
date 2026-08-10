<script setup lang="ts">
// === School of Business — Fall 2026 Cohort Welcome ===
// Full-screen welcome display (1080×1920 portrait kiosk).
// Alternates between the MBA and MSITM cohorts with a slow crossfade.
// Content from Dr. Cawthon's welcome email.

import { ref, computed, onMounted, onUnmounted } from 'vue'

const mba = [
  'Blake Prewit',
  'Jacob Weaver',
  'Rachel Antonescu',
  'Benjamin Vasta',
  'Richard Carlisi',
  'Jeicyane Alves de Oliveira',
  'Maryam Izadi',
  'Nayel Bereket',
  'Kaelen Childers',
  'Natalia Jimenez',
  'Edward Pace',
  'Kiir Deng',
  'Miriam Ashqui',
  'Benjamin Shoop',
  'Samuel Brendle',
  'Miciah Hagan'
]

const msitm = [
  'Yingjun Xiao',
  'Leonard Recardo',
  'Myrat Nazarov',
  'Trung Hai Duong',
  'Tuvshindelger Amarbat',
  'Jonida Durbaku',
  'Lucero Rodriguez',
  'Shiying Chen',
  'Xufeng Chen',
  'Stephanie Joyce Tayag'
]

const cohorts = [
  { title: 'MBA',   sub: 'Fall 2026 Cohort', names: mba },
  { title: 'MSITM', sub: 'Fall 2026 Cohort', names: msitm }
]

const active = ref(0)
const cohort = computed(() => cohorts[active.value])
const SLIDE_MS = 14_000
let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(() => { active.value = (active.value + 1) % cohorts.length }, SLIDE_MS)
})
onUnmounted(() => { if (timer) clearInterval(timer) })
</script>

<template>
  <div class="wb">
    <div class="glow glow-navy" aria-hidden="true" />
    <div class="glow glow-gold" aria-hidden="true" />

    <!-- Brand -->
    <header class="brand">
      <img class="shield" src="/images/northwest_shield.png" alt="Northwest University shield" width="84" height="89" />
      <div class="brand-text">
        <div class="brand-name">Northwest University</div>
        <div class="brand-sub">School of Business</div>
      </div>
    </header>

    <!-- Headline -->
    <div class="headline">
      <h1 class="title">
        <span class="title-line">Welcome to the School</span>
        <span class="title-line">of <span class="title-accent">Business!</span></span>
      </h1>
    </div>

    <!-- Cohort panels — crossfade -->
    <div class="stage">
      <transition name="xfade">
        <section :key="cohort.title" class="panel">
          <div class="panel-head">
            <h2 class="cohort-title">{{ cohort.title }}</h2>
            <div class="cohort-sub">{{ cohort.sub }}</div>
          </div>
          <ul class="names" :class="{ 'names--short': cohort.names.length <= 10 }">
            <li v-for="n in cohort.names" :key="n" class="name">
              <span class="name-dot" />{{ n }}
            </li>
          </ul>
        </section>
      </transition>

      <!-- progress dots -->
      <div class="dots" aria-hidden="true">
        <span
          v-for="(c, i) in cohorts"
          :key="c.title"
          class="dot"
          :class="{ active: i === active }"
        />
      </div>
    </div>

    <!-- Closing -->
    <footer class="closing">
      <span class="closing-rule" />
      <p class="closing-text">Here&rsquo;s to a year of learning, growth, and success!</p>
      <span class="closing-rule" />
    </footer>
  </div>
</template>

<style scoped>
.wb {
  position: relative;
  width: 1080px;
  height: 1920px;
  overflow: hidden;
  background:
    radial-gradient(1200px 800px at 85% -10%, rgba(0, 104, 187, 0.35) 0%, transparent 60%),
    radial-gradient(900px 700px at -10% 110%, rgba(3, 76, 135, 0.45) 0%, transparent 60%),
    var(--nu-midnight);
  display: flex;
  flex-direction: column;
  padding: 64px 64px 56px;
}

.glow { position: absolute; border-radius: 50%; pointer-events: none; }
.glow-navy {
  width: 700px; height: 700px;
  top: -240px; right: -200px;
  background: radial-gradient(circle, rgba(0, 104, 187, 0.28) 0%, transparent 70%);
}
.glow-gold {
  width: 520px; height: 520px;
  bottom: 6%; left: -220px;
  background: radial-gradient(circle, rgba(251, 217, 69, 0.10) 0%, transparent 70%);
}

/* === Brand === */
.brand {
  display: flex; align-items: center; gap: 22px;
  z-index: 1;
}
.shield {
  width: 84px; height: 89px; object-fit: contain;
  filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.35));
}
.brand-name {
  font-family: var(--font-serif);
  font-size: 34px; line-height: 1.05;
  color: var(--nu-wisp);
}
.brand-sub {
  margin-top: 6px;
  font-size: 15px; font-weight: 700;
  letter-spacing: 0.30em; text-transform: uppercase;
  color: var(--nu-tour);
}

/* === Headline === */
.headline { z-index: 1; margin-top: 48px; }
.title {
  margin: 0;
  font-family: var(--font-serif);
  font-size: 66px; line-height: 1.04;
  letter-spacing: -0.015em;
  color: var(--nu-wisp);
  text-shadow: 0 10px 50px rgba(0, 0, 0, 0.45);
}
.title-line { display: block; }
.title-accent { color: var(--nu-tour); }

/* === Stage / panels === */
.stage {
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 0;
  margin-top: 36px;
}
.panel {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  border-radius: 32px;
  padding: 48px 52px;
  background: rgba(255, 255, 255, 0.055);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 24px 60px rgba(0, 0, 0, 0.30);
  backdrop-filter: blur(8px);
}
.panel-head {
  padding-bottom: 30px;
  margin-bottom: 34px;
  border-bottom: 1px solid rgba(251, 217, 69, 0.25);
}
.cohort-title {
  margin: 0;
  font-family: var(--font-serif);
  font-size: 96px; line-height: 1;
  letter-spacing: 0.01em;
  color: var(--nu-tour);
}
.cohort-sub {
  margin-top: 12px;
  font-size: 20px; font-weight: 700;
  letter-spacing: 0.26em; text-transform: uppercase;
  color: var(--nu-skylight);
  opacity: 0.9;
}
.names {
  list-style: none;
  margin: 0; padding: 0;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  column-gap: 40px;
  align-content: stretch;
}
.name {
  display: flex; align-items: center; gap: 18px;
  font-size: 32px; font-weight: 500;
  color: var(--nu-wisp);
  white-space: nowrap;
}
.names--short .name { font-size: 38px; }
.name-dot {
  flex: 0 0 auto;
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--nu-tour);
}

/* dots */
.dots {
  position: absolute;
  left: 50%;
  bottom: 22px;
  transform: translateX(-50%);
  display: flex; gap: 14px;
  z-index: 3;
}
.dot {
  width: 12px; height: 12px; border-radius: 50%;
  background: rgba(255, 255, 255, 0.22);
  border: 1px solid rgba(255, 255, 255, 0.10);
  transition: background 0.4s, transform 0.4s;
}
.dot.active {
  background: var(--nu-tour);
  transform: scale(1.25);
  box-shadow: 0 0 16px rgba(251, 217, 69, 0.35);
}

/* crossfade */
.xfade-enter-active, .xfade-leave-active {
  transition: opacity 0.9s var(--ease-out-soft), transform 0.9s var(--ease-out-soft);
}
.xfade-enter-from { opacity: 0; transform: translateY(24px); }
.xfade-leave-to   { opacity: 0; transform: translateY(-24px); }
.xfade-leave-active { position: absolute; inset: 0; }

/* === Closing === */
.closing {
  z-index: 1;
  margin-top: 36px;
  display: flex; align-items: center; gap: 26px;
}
.closing-rule {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(251, 217, 69, 0.45), transparent);
}
.closing-text {
  margin: 0;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 30px;
  color: var(--nu-tour);
  white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
  .xfade-enter-active, .xfade-leave-active { transition: none; }
}
</style>

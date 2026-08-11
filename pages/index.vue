<script setup lang="ts">
// === School of Business — Fall 2026 Cohort Welcome ===
// Full-screen welcome display (1080×1920 portrait kiosk).
// One cohort at a time; names scroll continuously, movie-credits style.
// Content from Dr. Cawthon's welcome email.

import { ref, computed, onMounted, onUnmounted } from 'vue'

const ROW_H = 110 // px per name row — keep in sync with .name height

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

const SPEED = 30 // px/s — comfortable reading pace

function makeCohort(title: string, names: string[]) {
  const dist = names.length * ROW_H
  return { title, sub: 'Fall 2026 Cohort', names, dist, dur: Math.round(dist / SPEED) }
}

const cohorts = [makeCohort('MBA', mba), makeCohort('MSITM', msitm)]

const active = ref(0)
const cohort = computed(() => cohorts[active.value])
let timer: ReturnType<typeof setTimeout> | null = null

function arm() {
  // each slide stays up for one full scroll loop of its list
  timer = setTimeout(() => {
    active.value = (active.value + 1) % cohorts.length
    arm()
  }, cohorts[active.value].dur * 1000)
}
onMounted(arm)
onUnmounted(() => { if (timer) clearTimeout(timer) })
</script>

<template>
  <div class="wb">
    <div class="glow glow-navy" aria-hidden="true" />
    <div class="glow glow-gold" aria-hidden="true" />

    <!-- Brand -->
    <header class="brand">
      <img class="logo" src="/images/nu-logo-lockup-reverse.png" alt="Northwest University" />
    </header>

    <!-- Headline -->
    <div class="headline">
      <h1 class="title">Welcome to the <span class="title-accent">School of Business!</span></h1>
      <p class="lede">
        The School of Business is excited to welcome you as you begin this next chapter of your
        academic and professional journey. We are honored that you have chosen to join our community
        and look forward to supporting your growth as ethical, innovative, and impactful leaders.
      </p>
    </div>

    <!-- Cohort panel — crossfade, movie-credits scroll inside -->
    <div class="panel-stage">
      <transition name="xfade">
        <section :key="cohort.title" class="panel">
          <div class="panel-head">
            <h2 class="cohort-title">{{ cohort.title }}</h2>
            <div class="cohort-sub">{{ cohort.sub }}</div>
          </div>
          <div class="names-viewport">
            <ul
              class="names names--scroll"
              :style="{ '--dist': cohort.dist + 'px', '--dur': cohort.dur + 's' }"
            >
              <li v-for="(n, i) in [...cohort.names, ...cohort.names]" :key="i" class="name">{{ n }}</li>
            </ul>
          </div>
        </section>
      </transition>

    </div>

    <!-- Closing -->
    <footer class="closing">
      <p class="closing-text">We are excited to partner with you as you pursue your educational and professional goals. Here&rsquo;s to a year of learning, growth, and success!</p>
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  z-index: 1;
}
.logo {
  height: 96px;
  width: auto;
  filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.35));
}
/* === Headline === */
.headline { z-index: 1; margin-top: 44px; }
.title {
  margin: 0;
  font-family: var(--font-serif);
  font-size: 58px; line-height: 1.05;
  letter-spacing: -0.01em;
  white-space: nowrap;
  color: var(--nu-wisp);
  text-shadow: 0 10px 50px rgba(0, 0, 0, 0.45);
}
.title-accent { color: var(--nu-tour); }
.lede {
  margin: 22px 0 0;
  max-width: 52ch;
  font-size: 30px; line-height: 1.35;
  color: var(--nu-wisp);
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.30);
}

/* === Stage / panel === */
.panel-stage {
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
  padding: 48px 52px 0;
  background: rgba(255, 255, 255, 0.055);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 24px 60px rgba(0, 0, 0, 0.30);
  backdrop-filter: blur(8px);
  overflow: hidden;
}
.panel-head {
  flex: 0 0 auto;
  text-align: center;
  padding-bottom: 30px;
  margin-bottom: 10px;
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

/* === Movie-credits scroll === */
.names-viewport {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(180deg, transparent 0%, black 9%, black 88%, transparent 100%);
  mask-image: linear-gradient(180deg, transparent 0%, black 9%, black 88%, transparent 100%);
}
.names {
  list-style: none;
  margin: 0; padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.names--scroll {
  animation: scrollUp var(--dur) linear infinite;
  will-change: transform;
}
.name {
  display: flex; align-items: center; justify-content: center;
  height: 110px;
  flex: 0 0 110px;
  font-family: var(--font-serif);
  font-size: 60px; font-weight: 600;
  letter-spacing: 0.015em;
  color: var(--nu-wisp);
  font-style: italic;
  white-space: nowrap;
  text-shadow: 0 3px 18px rgba(0, 0, 0, 0.35);
}

@keyframes scrollUp {
  from { transform: translateY(0); }
  to   { transform: translateY(calc(-1 * var(--dist))); }
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
  display: flex;
  justify-content: center;
}
.closing-text {
  margin: 0;
  max-width: 62ch;
  font-size: 30px;
  line-height: 1.35;
  text-align: center;
  color: var(--nu-tour);
}

@media (prefers-reduced-motion: reduce) {
  .xfade-enter-active, .xfade-leave-active { transition: none; }
}
</style>

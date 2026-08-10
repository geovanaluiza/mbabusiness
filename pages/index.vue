<script setup lang="ts">
// === School of Business — Fall 2026 Cohort Welcome ===
// One-shot welcome screen (1080×1920 portrait kiosk).
// Content from Dr. Cawthon's welcome email.



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
</script>

<template>
  <div class="wb">
    <div class="glow glow-navy" aria-hidden="true" />
    <div class="glow glow-gold" aria-hidden="true" />

    <!-- Brand -->
    <header class="brand enter-fade-up">
      <img class="shield" src="/images/northwest_shield.png" alt="Northwest University shield" width="84" height="89" />
      <div class="brand-text">
        <div class="brand-name">Northwest University</div>
        <div class="brand-sub">School of Business</div>
      </div>
    </header>

    <!-- Headline -->
    <div class="headline">
      <div class="eyebrow enter-fade-up delay-1">
        <span class="ey-dot" /> Fall 2026 Cohorts
      </div>
      <h1 class="title enter-fade-up delay-2">
        <span class="title-line">Welcome to the School</span>
        <span class="title-line">of <span class="title-accent">Business!</span></span>
      </h1>
      <p class="lede enter-fade-up delay-3">
        We are excited to welcome you as you begin this next chapter of your
        academic and professional journey — growing as ethical, innovative,
        and impactful leaders.
      </p>
    </div>

    <!-- Cohorts -->
    <div class="cohorts">
      <section class="cohort enter-fade-up delay-4">
        <div class="cohort-head">
          <h2 class="cohort-title">MBA</h2>
          <div class="cohort-sub">Fall 2026 Cohort</div>
        </div>
        <div class="names-viewport">
          <ul class="names names--scroll" style="--dist: 704px; --dur: 24s">
            <li v-for="(n, i) in [...mba, ...mba]" :key="i" class="name">
              <span class="name-dot" />{{ n }}
            </li>
          </ul>
        </div>
      </section>

      <section class="cohort enter-fade-up delay-5">
        <div class="cohort-head">
          <h2 class="cohort-title">MSITM</h2>
          <div class="cohort-sub">Fall 2026 Cohort</div>
        </div>
        <div class="names-viewport">
          <ul class="names names--scroll" style="--dist: 440px; --dur: 15s">
            <li v-for="(n, i) in [...msitm, ...msitm]" :key="i" class="name">
              <span class="name-dot" />{{ n }}
            </li>
          </ul>
        </div>
      </section>
    </div>

    <!-- Closing -->
    <footer class="closing enter-fade-up delay-6">
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
.eyebrow {
  display: flex; align-items: center; gap: 12px;
  font-size: 17px; font-weight: 700;
  letter-spacing: 0.32em; text-transform: uppercase;
  color: var(--nu-skylight);
}
.ey-dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--nu-tour);
  box-shadow: 0 0 14px rgba(251, 217, 69, 0.55);
}
.title {
  margin: 26px 0 0;
  font-family: var(--font-serif);
  font-size: 68px; line-height: 1.02;
  letter-spacing: -0.015em;
  color: var(--nu-wisp);
  text-shadow: 0 10px 50px rgba(0, 0, 0, 0.45);
}
.title-line { display: block; }
.title-accent { color: var(--nu-tour); }
.lede {
  margin: 26px 0 0;
  max-width: 56ch;
  font-size: 22px; line-height: 1.5;
  color: var(--nu-powder);
  opacity: 0.92;
}

/* === Cohorts === */
.cohorts {
  z-index: 1;
  margin-top: 40px;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: minmax(0, 1fr);
  gap: 32px;
  min-height: 0;
}
.cohort {
  border-radius: 28px;
  padding: 36px 34px;
  background: rgba(255, 255, 255, 0.055);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 24px 60px rgba(0, 0, 0, 0.30);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
}
.cohort-head {
  flex: 0 0 auto;
  padding-bottom: 22px;
  margin-bottom: 22px;
  border-bottom: 1px solid rgba(251, 217, 69, 0.25);
}
.cohort-title {
  margin: 0;
  font-family: var(--font-serif);
  font-size: 44px; line-height: 1;
  letter-spacing: 0.01em;
  color: var(--nu-tour);
}
.cohort-sub {
  margin-top: 8px;
  font-size: 14px; font-weight: 700;
  letter-spacing: 0.24em; text-transform: uppercase;
  color: var(--nu-skylight);
  opacity: 0.85;
}
.names-viewport {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(180deg, transparent 0%, black 7%, black 93%, transparent 100%);
  mask-image: linear-gradient(180deg, transparent 0%, black 7%, black 93%, transparent 100%);
}
.names {
  list-style: none;
  margin: 0; padding: 0;
  display: flex; flex-direction: column;
}
.names--scroll {
  animation: scrollUp var(--dur) linear infinite;
  will-change: transform;
}
.name {
  display: flex; align-items: center; gap: 14px;
  height: 44px;
  flex: 0 0 44px;
  font-size: 21px; font-weight: 500;
  color: var(--nu-wisp);
}
.name-dot {
  flex: 0 0 auto;
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--nu-tour);
}

@keyframes scrollUp {
  from { transform: translateY(0); }
  to   { transform: translateY(calc(-1 * var(--dist))); }
}

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

/* === Entrance === */
.enter-fade-up { animation: fadeUp 0.9s var(--ease-out-soft) both; }
.delay-1 { animation-delay: 0.10s; }
.delay-2 { animation-delay: 0.20s; }
.delay-3 { animation-delay: 0.32s; }
.delay-4 { animation-delay: 0.45s; }
.delay-5 { animation-delay: 0.55s; }
.delay-6 { animation-delay: 0.70s; }

@media (prefers-reduced-motion: reduce) {
  .enter-fade-up { animation: none !important; }
  .names--scroll { animation-duration: calc(var(--dur) * 4); }
}
</style>

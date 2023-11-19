<script setup lang="ts">
import Robot from '../assets/robot.svg'
</script>

<template>
  <div class="card rotate">
    <div class="avatar">
      <img :src="Robot" w-200px alt="">
    </div>
    <!--
    <div class="description">
      @joaovictorfrs
    </div> -->
  </div>
</template>

<style scoped>
@property --ratio-x {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}
@property --ratio-y {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}
@property --deg {
  syntax: "<angle>";
  inherits: true;
  initial-value: 0deg;
}
@property --start {
  syntax: "<color>";
  inherits: true;
  initial-value: #75e4ee;
}
@property --end {
  syntax: "<color>";
  inherits: true;
  initial-value: #f85fbe;
}

.container {
    box-shadow: rgba(162, 89, 255, 0.25) 0px 50px 100px -20px, rgba(123, 40, 233, 0.3) 0px 30px 60px -30px, rgba(218, 223, 228, 0.15) 0px -2px 6px 0px inset;
}

.avatar {
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: inherit;
}
.avatar img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: inherit;
}

.description {
  margin-top: 1vmin;
  text-align: center;
  mix-blend-mode: overlay;
  letter-spacing: 0.04vmin;
  font-size: 2vmin;
}

.card {
  --start: #75e4ee;
  --end: #f85fbe;
  --deg: 45deg;
  --ratio-x: 0.8;
  --ratio-y: 0.4;
  padding: 2vmin;
  width: 32vmin;
  background: url(https://assets.codepen.io/907471/noise.svg), linear-gradient(var(--deg), var(--start), var(--end));
  -webkit-animation: surface 10s linear infinite;
          animation: surface 10s linear infinite;
  color: var(--labs-sys-color-on-surface);
  border-radius: 2vmin;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.2s linear;
  transform: rotateY(calc(-20deg * var(--ratio-x))) rotateX(calc(20deg * var(--ratio-y)));
  box-shadow: 0 0 0 0.25vmin rgba(255, 255, 255, 0.1), 0 0 0 2vmin rgba(255, 255, 255, 0.1);
}

.card.rotate {
  -webkit-animation: surface 10s linear infinite, rotate 6s linear infinite;
          animation: surface 10s linear infinite, rotate 6s linear infinite;
}

@-webkit-keyframes rotate {
  from {
    --ratio-x: 1.2;
    --ratio-y: 1.2;
  }
  50% {
    --ratio-x: -0.6;
    --ratio-y: -1;
  }
  to {
    --ratio-x: 1.2;
    --ratio-y: 1.2;
  }
}

@keyframes rotate {
  from {
    --ratio-x: 1.2;
    --ratio-y: 1.2;
  }
  50% {
    --ratio-x: -0.6;
    --ratio-y: -1;
  }
  to {
    --ratio-x: 1.2;
    --ratio-y: 1.2;
  }
}
@-webkit-keyframes surface {
  from {
    --deg: 45deg;
    --start: #75e4ee;
    --end: #f85fbe;
  }
  30% {
    --deg: 285deg;
    --start: #75e4ee;
    --end: #75e4ee;
  }
  50% {
    --deg: 145deg;
    --start: #eeda75;
    --end: #805ff8;
  }
  70% {
    --deg: 345deg;
    --start: #ee75d2;
    --end: #5ff8e6;
  }
  from {
    --deg: 45deg;
    --start: #75e4ee;
    --end: #f85fbe;
  }
}
@keyframes surface {
  from {
    --deg: 45deg;
    --start: #75e4ee;
    --end: #f85fbe;
  }
  30% {
    --deg: 285deg;
    --start: #75e4ee;
    --end: #75e4ee;
  }
  50% {
    --deg: 145deg;
    --start: #eeda75;
    --end: #805ff8;
  }
  70% {
    --deg: 345deg;
    --start: #ee75d2;
    --end: #5ff8e6;
  }
  from {
    --deg: 45deg;
    --start: #75e4ee;
    --end: #f85fbe;
  }
}
</style>

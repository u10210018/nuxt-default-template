<script setup lang="ts">
import { useMainStore } from "@/stores/main"
const store = useMainStore()

</script>

<template>
  <div>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">{{ store.title }}</h1>
          <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.hero {
  display: grid;
  width: 100%;
  place-items: center;
  background-size: cover;
  background-position: center;

  &-content {
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 80rem;
    gap: 1rem;
    padding: 1rem;
  }
}

.btn {
  display: inline-flex;
  flex-shrink: 0;
  cursor: pointer;
  user-select: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  text-align: center;
  transition: all .2s cubic-bezier(.4, 0, .2, 1);
  border-radius: 8px;
  height: 3rem;
  padding: 0 16px;
  font-size: 12px;
  line-height: 1.25em;
  line-height: 1em;
  min-height: 3em;
  gap: 8px;
  font-weight: 600;
}
</style>

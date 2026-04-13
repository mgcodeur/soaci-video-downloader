<script setup lang="ts">
import { EXTENSION_NAME, EXTENSION_VERSION } from "../shared/constants";
</script>

<template>
  <div class="popup">
    <div class="header">
      <img class="logo" src="/icons/icon48.png" alt="logo" />
      <h1>{{ EXTENSION_NAME }}</h1>
      <span class="version">v{{ EXTENSION_VERSION }}</span>
    </div>

    <p class="description">
      Survolez une vidéo sur
      <a href="https://soaci.mg" target="_blank" rel="noopener">soaci.mg</a>
      pour voir le bouton de téléchargement.
    </p>

    <footer>Open Source &mdash; MIT License</footer>
  </div>
</template>

<style scoped>
.popup {
  width: 300px;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: #fff;
  color: #444;
}

.header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.logo {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

h1 {
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  color: #333;
}

.version {
  font-size: 11px;
  background: #f0f0f0;
  color: #888;
  padding: 2px 8px;
  border-radius: 10px;
  margin-left: auto;
}

.description {
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
}

.description a {
  color: #6c63ff;
  text-decoration: none;
}

.description a:hover {
  text-decoration: underline;
}

footer {
  margin-top: 14px;
  font-size: 11px;
  text-align: center;
  color: #aaa;
}
</style>

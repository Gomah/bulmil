<template>
  <div class="container">
    <bm-button
      :color="color"
      :size="size"
      :is-light="light"
      :is-outlined="outlined"
      @click="changeMe"
    >
      Click Me!
    </bm-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    text: 'Click Me!',
    size: null,
    color: 'is-primary',
    outlined: false,
    light: false,
    colors: [
      'is-primary',
      'is-link',
      'is-info',
      'is-success',
      'is-danger',
      'is-warning',
      'is-white',
      'is-light',
      'is-dark',
      'is-black',
      'is-text',
      null
    ],
    sizes: ['is-large', 'is-medium', 'is-small', null]
  }),

  methods: {
    changeMe() {
      const sizes = this.sizes.filter(s => s !== this.size)
      const colors = this.colors.filter(c => c !== this.color)
      this.outlined = Math.floor(Math.random() * 10) >= 5
      this.light = Math.floor(Math.random() * 10) >= 5
      this.color = colors[Math.floor(Math.random() * colors.length)]
      this.size = sizes[Math.floor(Math.random() * sizes.length)]
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

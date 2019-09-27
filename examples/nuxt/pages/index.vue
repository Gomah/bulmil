<template>
  <div class="container">
    <b-button :color="color" :size="size" @click="changeMe">
      Click Me!
    </b-button>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },

  data: () => ({
    size: null,
    color: 'is-primary',
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
      this.color = this.colors[Math.floor(Math.random() * this.colors.length)]
      this.size = this.sizes[Math.floor(Math.random() * this.sizes.length)]
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

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

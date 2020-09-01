<template>
  <BmSection>
    <BmContainer>
      <BmButton color="is-primary">Button</BmButton>
    </BmContainer>
  </BmSection>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BmSection, BmContainer, BmButton } from '@bulmil/vue';

// Default theme.
import '@bulmil/core/dist/css/bulmil.min.css';

@Component({
  components: {
    BmSection,
    BmContainer,
    BmButton,
  },
})
export default class App extends Vue {
  // Obtain a ref if you need to call any methods.
}
</script>

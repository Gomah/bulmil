<script lang="ts">
  import { BmSection, BmContainer, BmButton } from '@bulmil/svelte';
</script>

<style>
  :global(html),
  :global(body) {
    width: 100%;
    height: 100%;
  }

  :global(body) {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<div>
  <BmSection>
    <BmContainer>
      <BmButton>Hi!</BmButton>
    </BmContainer>
  </BmSection>
</div>

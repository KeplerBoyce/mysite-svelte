<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import TagList from "../TagList.svelte";
  import Dot from "../Dot.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <enhanced:img
      src="$lib/images/placeholder.png"
      alt="Picture of placeholder"
      class="img-sm"
    />
  </div>

  <a slot="heading" href="/about" class="a-heading">
    <h2 class="heading-hover underline">
      keplerboyce.com
    </h2>
  </a>

  <div slot="subheading" class="dot-list subheading">
    <h4>
    October 2024 – ongoing
    </h4>
    <Dot />
    <a href="https://www.keplerboyce.com">
      keplerboyce.com
    </a>
  </div>

  <p slot="text" class="w-full">
    This website, where I showcase all of my projects! I originally made this with Next.js, but I wanted to try Svelte to learn something new. So far, I'm really enjoying the templating system and simpler-to-use props and state compared to React's props and hooks.
  </p>

  <TagList slot="after" entry="thisSite" />
</ImageBlock>

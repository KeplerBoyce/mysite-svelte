<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import TagList from "../TagList.svelte";
  import Dot from "../Dot.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <a href="https://github.com/KeplerBoyce/gunnhacks8" target="_blank">
      <enhanced:img
        src="$lib/images/kwordleold.png"
        alt="Picture of old kwordle website"
        class="img-sm border"
      />
    </a>
  </div>

  <h2 slot="heading">
    Online 1-on-1 Wordle (v1)
  </h2>

  <div slot="subheading" class="dot-list subheading">
    <h4>
      Feb 2022
    </h4>
    <Dot />
    <a href="https://github.com/KeplerBoyce/gunnhacks8">
      github.com/KeplerBoyce/gunnhacks8
    </a>
  </div>

  <p slot="text" class="w-full">
    A real-time 1v1 Wordle game made for the GunnHacks 8.0 hackathon. This was my first experience with web development, made as a fun way to tag along with the Wordle craze at the time.
  </p>

  <TagList slot="after" entry="kwordleOld" />
</ImageBlock>

<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <enhanced:img
      src="$lib/images/kepler.jpg"
      alt="Picture of Kepler"
      class="img-lg"
    />
  </div>

  <h1 slot="heading">
    Hi, I'm Kepler!
  </h1>

  <svelte:fragment slot="text">
    <p class="w-full">
      I'm a 4th-year computer science student at Georgia Tech, studying the Systems & Architecture and Intelligence concentrations. I am also minoring in robotics to gain the opportunity for some ECE courses.
    </p>
    <p class="w-full">
      This website showcases some of the projects that I have made in my free time. I love learning new programming languages and technologies, so many of these projects are ways for me to solve problems while learning cool things at the same time.
    </p>
  </svelte:fragment>
</ImageBlock>

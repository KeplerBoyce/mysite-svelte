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

  <div slot="text" class="paragraphs">
    <p>
      I'm a 2nd-year computer science student at Georgia Tech, studying the Systems & Architecture and Intelligence concentrations. I am also minoring in robotics, as I find the challenges of motion planning and autonomous control very interesting.
    </p>
    <p>
      This website showcases some of the projects that I have made in my free time. I enjoy learning new programming languages and frameworks, so many of these projects were ways for me to build something that I wanted to make while also learning something new at the same time. Several of these are also ongoing projects that I am still working on.
    </p>
  </div>
</ImageBlock>

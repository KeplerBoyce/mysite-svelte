<script lang="ts">
  import TagList from "$lib/components/TagList.svelte";
</script>

<h1 class="page">
  About This Site
</h1>

<TagList entry="thisSite" />

<div class="page page-body">
  <h2>
    Overview
  </h2>
  <p>
    I made this website with SvelteKit using Typescript and a combination of TailwindCSS and CSS for styling.
  </p>
  <p>
    <a href="https://github.com/KeplerBoyce/mysite-svelte">
      View source code on GitHub
    </a>
  </p>

  <h2>
    Choosing Svelte
  </h2>
  <p>
    I originally made this personal website with Next.js. While I was updating it, I wanted to learn another framework, as pretty much all of my webdev projects have been built with Next.js for the frontend. I had heard good things about other frameworks/libraries such as Vue, Solid, Svelte, HTMX, and Alpine.js. Of these many options, I ended up choose Svelte, as I thought that Svelte's approach to state, props, and templating looked very nice as compared to React.
  </p>

  <h3>
    Reactivity
  </h3>
  <p>
    React's hooks work, but being able to declare state variables as simple JS variables and have Svelte handle the reactivity is a much nicer development experience. From a performance perspective, Svelte also offers some great benefits—because Svelte compiles to JS that tracks UI changes with no need for virtual DOM diffing, it can simply edit the DOM directly whenever it needs to, resulting in more efficient updates and much smaller bundle sizes. My website is small and almost entirely static, so it doesn't really gain much from these benefits, but they will be great in future projects.
  </p>

  <h3>
    Props
  </h3>
  <p>
    Svelte's approach to props is almost exactly the same as React's but I do prefer Svelte's a little bit. Declaring all of the props simply as exports within the script tag is very convenient, and Svelte's slot system is extremely nice to use (though I believe it has been removed in favor of the new snippets system in Svelte 5). Initially I thought it was strange to not be able to pass components as props (like having a prop of type ReactNode), but I actually find the slot system much nicer to work with. You don't need to type out all of the components inside of the props (which I find a bit messy) and the slot system also automatically handles optional component props, which makes it very quick to prototype and work with.
  </p>

  <h3>
    Templating
  </h3>
  <p>
    Lastly, I have been really enjoying Svelte's templating system. React's JSX is a really smart idea for combining JS with HTML, but I find it a bit awkward to be limited by the constraint that all JSX content must be a valid JS expression. It is very intuitive for things like the map function to convert a list of data into a list of components, but having to use ternaries and && short circuiting for conditionals is quite weird and hard to write cleanly in my opinion. One of the reasons I like JSX is because it has no domain-specific templating language, but Svelte's templating language is simple enough (especially with an LSP and snippets) that I'm perfectly fine with it.
  </p>
</div>

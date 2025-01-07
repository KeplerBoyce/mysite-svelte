<script lang="ts">
  import TagList from "$lib/components/TagList.svelte";
</script>

<h1 class="page">
  gulpin.games
</h1>

<TagList entry="gulpin" />

<div class="page page-body">
  <h2>
    Overview
  </h2>
  <p>
    Gulpin.games is a website I have been working on with a friend for playing fun and silly real-time 1-on-1 games online with friends. We have currently implemented ultimate tic-tac-toe, chess, and connect-4, with plans for adding Pokémon Chess and other chess variants in the future. My friend has been working primarily on the frontend while I work on the backend.
  </p>
  <p>
    <a href="https://github.com/SVWEFSBRWHWBCOTSEID">
      View source code on GitHub
    </a>
  </p>

  <h2>
    Choosing our Stack
  </h2>
  <p>
    We decided to use Next.js with Typescript for the frontend because we both have used the framework in past projects and it also handles page routing, dynamic routes, caching, server-side rendering, etc. which we wanted/needed for this website. We used TailwindCSS for styling and deployed the frontend using Vercel.
  </p>
  <p>
    For the backend, I chose to use a Rust web framework called Actix since I wanted to get more practice with Rust. Rust also happens to be a great backend language in my opinion because of several features:
  </p>
  <ul>
    <li>
      A very strict and expressive type system and great JSON serialization with serde, making it very nice to work with the request/response bodies (struct variants on enums are particularly great for this)
    </li>
    <li>
      Async support with Tokio (and made very easy with Actix)
    </li>
    <li>
      Great performance and memory safety is a big plus
    </li>
    <li>
      Elegant ways to handle possibly nonexistent data (e.g. when querying the database) using Option, Result, match, if let/while let, etc.
    </li>
  </ul>
  <p>
    On top of these Rust features that make it a nice backend language, Actix in particular makes it very easy to set up and route endpoints and also include middleware for things like logging, handling user sessions, and so on.
  </p>
  <p>
    For user data, we used PostgreSQL with Prisma ORM, and for user sessions, we used a Redis cache. The backend (and both databases) are all deployed on fly.io with Docker to containerize the backend. For storing additional objects such as user profile pictures (in-progress feature), we are using an AWS S3 bucket.
  </p>
</div>

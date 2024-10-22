<h1 class="page">
  kwordle.app v2
</h1>

<div class="page page-body">
  <h2>
    Overview
  </h2>
  <p>
    Kwordle.app is an online, real-time Wordle game that you can play with up to 9 other players. You can create lobbies and send a link or the game code to your friends to let them join your lobby. During the game, you score points based on how many guesses it takes for you to find the answer as well as how fast you solve it. As a fun little extra element, you can see the colors on all of your friends' boards (but not their letters, of course) to get a sense of how far along everyone is, similar to Tetris 99.
  </p>
  <p>
    Before starting the game, the game host can edit some game settings within the lobby menu, which include the number of rounds and the timer duration for each round. I figured that some players may like a very fast paced game, while others may prefer longer rounds so that they can shoot for fewer guesses.
  </p>

  <h2>
    Implementation
  </h2>

  <h3>
    Frontend
  </h3>
  <p>
    I built the frontend in Typescript with Next.js, using TailwindCSS for styling. I chose to use these because I was familiar with them before, and I wanted this to be a quick update to the old version of kwordle.app as a small side project. If I were to make this project again I might choose another frontend framework like Vue/Nuxt to try something new (as by this point I had made several projects with Next.js), but I can always do that in future projects. I deployed the frontend on Vercel.
  </p>

  <h3>
    Backend
  </h3>
  <p>
    I chose to use Actix to build a REST API for the backend for similar reasons as my choice for the frontend—I had already used Actix while working on gulpin.games, and this website was a very similar application as gulpin.games. I have also just been enjoying Rust, and I think it's a nice language to use on the backend. Serde makes conversion between JSON data and strongly-typed Rust structs automatic, Rust's Result enum makes error handling simple, and with a framework like Actix, it's easy to make a very performant REST API.
  </p>
  <p>
    I decided to not use a database. Since we don't have any user data to store and aren't storing any past game results either, I figured that I could use either an in-memory database such as Redis or an in-memory cache in the form of a hashmap. Since my backend would not be distributed, using Redis seemed overkill to me, so I ended up just using a Rust hashmap.
  </p>
  <p>
    As the backend is a REST API, much of the client-server communication is done by just fetching the backend endpoints, but during games, we need a way for each player's actions to be transmitted to all other players in real time. For this, I decided to use server-sent events. In the old kwordle.app, I used WebSocket for this real-time communication, which I thought was a bit overkill, as the communication stream really only needs to be unidirectional.
  </p>
  <p>
    In the new kwordle.app, each client listens to an event stream, and when a player makes a guess, the client fetches the backend endpoint for making guesses and the backend will send an event representing that guess to every other player. Then, all of the other clients will parse that event and update correspondingly. When a client begins listening to the event stream, it is sent a "full game" event containing the full state of the game—in the event that somebody reloads their page or loses internet connection, this ensures that their client is synced with everybody else.
  </p>

  <h3>
    Designing the scoring system
  </h3>
  <p>
    I wanted to discourage players from rapid-firing series of pre-planned words to cover the alphabet (e.g. SPINE, LOATH, MURKY), so I wanted to design the scoring system such that going for fewer guesses would be much more reliable. Ideally, solving it in 5 or 6 guesses very quickly every round would give a decent score, but consistently solving it in 3 or 4 guesses would award far more points.
  </p>
  <p>
    After some testing, the scoring formula I landed on uses a base score of 100 points, a multiplier based on the number of guesses, a multiplier based on the time elapsed, and a flat bonus based on rank. The guess multipliers are equal to 4.0, 2.75, 2.0, 1.5, 1.25, and 1.0, for 1 through 6 guesses respectively. The time multiplier decays linearly from 1.0 down to 0.5 as the time elapses, meaning a guess at the very last second would be worth half as many points as a guess right at the start. The rank bonuses are 50, 25, and 10, for 1st, 2nd, and 3rd place respectively. The score is then calculated as (100 * guess_multiplier * time_multiplier) + rank_bonus.
  </p>

  <h2>
    Potential changes
  </h2>
  <p>
    This was a pretty quick and dirty project, so the code (primarily in the frontend) is quite messy. For example, several React components have dozens of useStates with some messy useEffects for updating several different timers. If I were to redo this project, I would definitely spend more time thinking through these parts of the code and finding a cleaner approach. I may also consider using some kind of global state manager like Jotai or using a different framework altogether, such as SvelteKit or HTMX + Alpine.js.
  </p>
</div>

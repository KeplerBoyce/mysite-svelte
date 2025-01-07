<script lang="ts">
  import TagList from "$lib/components/TagList.svelte";
</script>

<h1 class="page">
  Gamedev Projects
</h1>

<div class="mb-8">
  <TagList entry="gamedev" />
</div>

<div class="page page-body">
  <h2>
    Overview
  </h2>
  <p>
    I have worked on a few small projects with both the Unity and Godot game engines. These have all just been for fun, but I have been really enjoying Godot recently, so I plan to develop and release a full game with Godot at some point. At the moment, I'm still experimenting with different game ideas and trying to find something both unique and fun to play—as such, I have several unfinished projects from ideas that I prototyped and realized were either too ambitious or didn't make for a very enjoyable game. Below is a list of a few of my most interesting projects.
  </p>

  <h2>
    Isometric Roguelite Spells Game
  </h2>
  <h3>
    Idea
  </h3>
  <p>
    My most recent idea is a real-time deckbuilding combat game that would take place in a 2.5D isometric-view world. You play as a wizard, casting spells that come in the form of cards in a deck that you build. You have 4 cards in your hand at a given time, and when you play a card (cast a spell) that card will be placed back at the bottom of your deck and you draw the next card from the top of your deck.
  </p>
  <p>
    This idea was largely inspired by Clash Royale, as I think the deckbuilding aspect of Clash Royale is really fun and a great game mechanic. In Clash Royale, you need to choose 8 cards with no repeats for your deck, leading to interesting considerations like which cards synergize well with each other, the deck's average elixir cost (cheaper decks can cycle back to the same card again faster), and what archetype of deck you find fun to play.
  </p>
  <p>
    With that inspiration, I thought it would be cool to do a similar real-time deckbuilding game where instead of the cards being troops that you place down in the arena, you would have a character that you can control in real time with the cards being the spells that you cast. The spell cards could be attacks like a fireball or other utility spells like a teleport, healing, a spell that stuns enemies, and so on.
  </p>
  <p>
    With this, I was thinking that you could create some cool synergies and strategies with your deck—for example, there might be spells that are stronger against stunned enemies, a short-range high-damage spell that you could pair with a teleport spell, and so on. In addition, you would have to consider how large to make your deck and how many copies of each card to include—on one hand, you might want to play a certain strong card more often (or cycle back to it faster), but on the other hand, you want to be able to include a wide variety of spells for different scenarios and you don't want your hand to be starved of the card you need at a particular moment.
  </p>
  <p>
    My idea was for the game to have roguelite mechanics, where within each run of the game, the world would be procedurally generated in completely new ways: you would find different cards to add to your deck, encounter different combat scenarios, and so on. As such, you would have to build your deck based on whatever cards you happened to have access to, preventing you from using one particular playstyle repeatedly and forcing you to adapt based on the enemies you have to fight.
  </p>
  <h3>
    Prototyping
  </h3>
  <p>
    I began prototyping this game during the summer of 2024 using the Godot engine. I decided to build the game in a 2D pixel art (low resolution) scene for better performance and also because I thought this would be an interesting challenge and a great opportunity to learn how to write shaders. I would "fake" the 3D look by using an isometric tilemap world and by using custom shaders to implement realistic 3D lighting in the 2D scene.
  </p>
  <p>
    To do this, each tile in the tilemap includes several sprites of information: the first is the actual colors to draw on the screen, the second is a height map where the color data specifies the vertical height of each pixel (to allow for calculating lighting with 3D coordinates), and the third is a normal map where the color data specifies the direction that each pixel's surface is facing (also used for lighting calculations). With this, I created a shader that would extract the 3D coordinates of each pixel and perform the lighting calculations in 3D (computing the dot product of the normal vector and the vector between the light source and that pixel to determine the brightness).
  </p>
  <p>
    However, one more challenge was to incorporate moving characters and such into this 2D scene, as it would simply be too many sprites/heightmaps/normalmaps to draw for every angle and every position of every character. As such, a compromise I decided on was to include a simplified 3D scene, where this 3D scene would contain 3D meshes that I would design and animate in Blender which would be positioned and lit in 3D but rendered in low resolution on top of the 2D scene.
  </p>
  <p>
    All of this work on the graphics wasn't strictly related to this particular game idea—this just served as a framework for implementing this isometric, "fake 3D" art style that I think could be very performant, achieveable (with my novice art skills), and applicable for a lot of my game ideas.
  </p>
  <p>
    While prototyping this game, I realized that there were some fundamental flaws in my idea. The main issue I found was that it was difficult to implement a good control scheme—I couldn't figure out a good way for both keyboard and controller to be able to select from 4+ cards in your hand in real time while moving the character. This isn't an issue in Clash Royale since that game is played on a touchscreen and also because you don't have any character to move around at the same time. Since you need the mouse or right joystick for aiming the wand, the best ideas I could come up with were:
  </p>
  <ol>
    <li>
      Cap the hand size at 4 cards and use 4 different buttons to play the 4 different cards (e.g. the left/right triggers/bumpers on controller or left/right click and shift+left/right click on keyboard and mouse)
    </li>
    <li>
      Use only one button for playing the selected card and use 2 buttons for changing which card is selected (e.g. right trigger or left click for playing card, left/right bumpers or Q/E to move selection left or right within the hand)
    </li>
  </ol>
  <p>
    I suppose either of these controls schemes would work (particularly the second one, which is similar to Pikmin 4's control scheme for choosing which type of Pikmin to throw) but neither of them are really great. The first option is kind of clunky on keyboard due to the shift+left/right click, but using keyboard keys instead would be difficult. The second option would make the gameplay much slower than I was hoping for, as you would frequently need to select a different card. In Pikmin 4 this isn't a big issue, as you aren't switching your Pikmin selection too often.
  </p>
  <p>
    Because of this, I decided that this idea probably wouldn't work out as a fun game without some major modifications to the core concept. So, I decided to use this project simply as a way to develop the 3D-in-a-2D-scene graphics idea and I have been testing out some different ideas for a roguelite magic combat game to build out of this.
  </p>
</div>

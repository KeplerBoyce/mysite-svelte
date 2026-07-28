import type { ComponentType, SvelteComponent } from "svelte";
import gridlockedImg from "$lib/images/gridlocked.png?enhanced";
import kwordleImg from "$lib/images/kwordle2.png?enhanced";
import tetrisImg from "$lib/images/tetris.png?enhanced";
import minitimerImg from "$lib/images/minitimer.png?enhanced";
import cubeTrainerImg from "$lib/images/speedcubetrainer.png?enhanced";

import advent2025Img from "$lib/images/advent2025.png?enhanced";
import compilerImg from "$lib/images/compiler.png?enhanced";
import gulpinImg from "$lib/images/gulpin.png?enhanced";
import cubeScrambleImg from "$lib/images/cubescramble.png?enhanced";
import pokemonImg from "$lib/images/pokemon.png?enhanced";
import chordTrainerImg from "$lib/images/sightreading.png?enhanced";
import perfectPitchImg from "$lib/images/pitchtrainer.png?enhanced";
import kwordleOldImg from "$lib/images/kwordleold.png?enhanced";

import placeholderImg from "$lib/images/placeholder.png?enhanced";

export type Project = {
  id: string;
  title: string;
  date: string;
  link?: string;
  linkText?: string;
  text: string;
  imgSrc: string | any;
  imgAlt: string;
  imgClass: string;
};

export const MAIN_PROJECTS: Project[] = [
  {
    id: "gridlocked",
    title: "Multiplayer Crossword Platform",
    date: "Dec 2025 – ongoing",
    link: "https://www.gridlocked.dev",
    linkText: "gridlocked.dev",
    text: "A website for solving crossword puzzles together in real time. I made this to solve the lack of multiplayer support in the NYT Games app. Uses a custom .puz file parser supporting circled tiles and rebuses.",
    imgSrc: gridlockedImg,
    imgAlt: "Picture of gridlocked.dev crossword puzzle",
    imgClass: "img-md"
  },
  {
    id: "kwordle",
    title: "Online Head-to-Head Wordle",
    date: "May 2024",
    link: "https://www.kwordle.app",
    linkText: "kwordle.app",
    text: "An online Wordle game that supports lobbies of up to 10 players. I enjoy Wordle and wanted to play with friends, so I built this. Solving in fewer guesses gives drastically more points to discourage memorized opening sequences.",
    imgSrc: kwordleImg,
    imgAlt: "Picture of kwordle.app game",
    imgClass: "img-md border"
  },
  {
    id: "tetris",
    title: "Tetris Perfect Clear Trainer",
    date: "May – July 2025",
    link: "https://github.com/KeplerBoyce/tetris-tool",
    linkText: "github.com/KeplerBoyce/tetris-tool",
    text: "A simple program to practice perfect clear strategies for modern Tetris games. I always wanted to learn perfect clear openings and loops but couldn't find any good practice tools, so I built this all-in-one learning tool.",
    imgSrc: tetrisImg,
    imgAlt: "Picture of Tetris PC trainer",
    imgClass: "img-md"
  },
  {
    id: "minitimer",
    title: "Speedcubing Timer",
    date: "August 2023 – ongoing",
    link: "https://minitimer.vercel.app",
    linkText: "minitimer.vercel.app",
    text: "A modern, simple timer website and desktop app for speedcubers. Includes standard features such as keyboard timing, tracking solve times in sessions, saving personal records, and logging past scrambles.",
    imgSrc: minitimerImg,
    imgAlt: "Picture of Minitimer website",
    imgClass: "img-md border"
  },
  {
    id: "cubeTrainer",
    title: "Speedcubing Algorithm Trainer",
    date: "Jan – June 2025",
    link: "https://speedcubetrainer.vercel.app",
    linkText: "speedcubetrainer.vercel.app",
    text: "A simple algorithm trainer website for speedcubers. Uses spaced repetition and allows you to select the specific algorithms you want to train, drastically speeding up the learning process.",
    imgSrc: cubeTrainerImg,
    imgAlt: "Picture of algorithm trainer",
    imgClass: "img-md border"
  }
];

export const OTHER_PROJECTS: Project[] = [
  {
    id: "advent2025",
    title: "Advent of Code 2025 in OCaml",
    date: "Dec 2025",
    link: "https://github.com/KeplerBoyce/advent2025",
    linkText: "github.com/KeplerBoyce/advent2025",
    text: "OCaml solutions to the first 12 days of Advent of Code 2025, written mostly in pure functional style. I wanted to learn a functional language and figured this would be the perfect opportunity. OCaml was appealing as many of my favorite Rust features were borrowed from OCaml (Option enum, pattern matching, block expressions, etc.).",
    imgSrc: advent2025Img,
    imgAlt: "Picture of completed Advent of Code 2025 screen",
    imgClass: "img-sm"
  },
  {
    id: "toyCompiler",
    title: "Frontend Language Compiler",
    date: "Dec 2025",
    link: "https://github.com/KeplerBoyce/frontend-compiler",
    linkText: "github.com/KeplerBoyce/frontend-compiler",
    text: "A toy compiler which converts a simple reactive frontend language into JavaScript in a style similar to Svelte. Built as a way to play around with OCaml more after Advent of Code, in particular on a problem OCaml is well suited for with its ADTs, pattern matching, and static typing.",
    imgSrc: compilerImg,
    imgAlt: "Picture of simple custom frontend language example",
    imgClass: "img-sm"
  },
  {
    id: "gulpin",
    title: "1v1 Turn-Based Games Platform",
    date: "June – Dec 2023",
    link: "https://www.gulpin.games",
    linkText: "gulpin.games",
    text: "A website for playing online 1v1 games with friends, including chess, connect-4, ultimate tic-tac-toe, and more. Made in the style of Lichess, but for more kinds of turn-based games.",
    imgSrc: gulpinImg,
    imgAlt: "Picture of gulpin.games chess game",
    imgClass: "img-sm"
  },
  {
    id: "cubeScramble",
    title: "Random-State Cube Scrambler",
    date: "July – Aug 2022",
    link: "https://github.com/KeplerBoyce/cubescramble",
    linkText: "github.com/KeplerBoyce/cubescramble",
    text: "A program that generates random-state scrambles for the 3x3 Rubik's Cube. Made as a way to experiment with Rust and solve a problem that requires some interesting algorithms and optimization tricks.",
    imgSrc: cubeScrambleImg,
    imgAlt: "Picture of cubescramble CLI",
    imgClass: "img-sm"
  },
  {
    id: "pokemon",
    title: "Pokémon Type Trainer",
    date: "June 2023",
    link: "https://keplerboyce.github.io/pokemon-type-trainer",
    linkText: "keplerboyce.github.io/pokemon-type-trainer",
    text: "A very small and silly website to help myself remember Pokémon type interactions (such that I can make strategic moves in Pokémon Chess).",
    imgSrc: pokemonImg,
    imgAlt: "Picture of Pokémon type practice website",
    imgClass: "img-sm border"
  },
  {
    id: "chordTrainer",
    title: "Sight-Reading Trainer",
    date: "Jan 2023",
    link: "https://github.com/KeplerBoyce/gunnhacks9",
    linkText: "github.com/KeplerBoyce/gunnhacks9",
    text: "A website to practice sight-reading sheet music, built with a team for the GunnHacks 9.0 hackathon. Displays notes on a staff with either treble or bass clef, and you play the shown notes either using the on-screen piano or on a physical MIDI device that you connect.",
    imgSrc: chordTrainerImg,
    imgAlt: "Picture of sightreading practice website",
    imgClass: "img-sm"
  },
  {
    id: "perfectPitch",
    title: "Perfect Pitch Trainer",
    date: "Aug 2023",
    link: "https://github.com/KeplerBoyce/perfect-pitch",
    linkText: "github.com/KeplerBoyce/perfect-pitch",
    text: "A simple desktop app that generates pure sine waves for practicing pitch memory (to avoid distinguishing by timbre, as I might with the recorded piano notes used in other practice tools). I used JavaFX to practice for the CS 1331 advanced standing exam at GT, which included some JavaFX content.",
    imgSrc: perfectPitchImg,
    imgAlt: "Picture of pitch trainer app",
    imgClass: "img-sm border"
  },
  {
    id: "kwordleOld",
    title: "Online 1v1 Wordle (v1)",
    date: "Feb 2022",
    link: "https://github.com/KeplerBoyce/gunnhacks8",
    linkText: "github.com/KeplerBoyce/gunnhacks8",
    text: "A real-time 1v1 Wordle game made for the GunnHacks 8.0 hackathon. This was my first experience with web development, made as a fun way to tag along with the Wordle craze at the time.",
    imgSrc: kwordleOldImg,
    imgAlt: "Picture of old kwordle website",
    imgClass: "img-sm border"
  }
];

export const UNUSED_PROJECTS: Project[] = [
  {
    id: "gamedev",
    title: "Gamedev Projects",
    date: "Dec 2023 – ongoing",
    text: "A few side projects I have worked on using both the Unity and Godot game engines, including a couple of small 3D FPS games I built as test projects and a 2.5D roguelite deck-builder game that I am currently working on and hope to release in the future.",
    imgSrc: placeholderImg,
    imgAlt: "Picture of placeholder",
    imgClass: "img-sm"
  },
  {
    id: "thisSite",
    title: "keplerboyce.com",
    date: "October 2024 – ongoing",
    link: "https://www.keplerboyce.com",
    linkText: "keplerboyce.com",
    text: "This website, where I showcase all of my projects! I originally made this with Next.js, but I wanted to try Svelte to learn something new. So far, I'm really enjoying the templating system and simpler-to-use props and state compared to React's props and hooks.",
    imgSrc: placeholderImg,
    imgAlt: "Picture of placeholder",
    imgClass: "img-sm"
  }
];

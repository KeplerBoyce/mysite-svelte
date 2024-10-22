export const toTagClass = (text: string): string => {
    switch (text) {
        case "SvelteKit":
        case "Svelte":
            return "svelte-tag";
        case "Typescript":
            return "ts-tag";
        case "TailwindCSS":
            return "tailwind-tag";
        case "Next.js":
            return "nextjs-tag";
        case "React":
            return "react-tag";
        case "Rust":
        case "Actix":
            return "rust-tag";
        case "PostgreSQL":
            return "postgres-tag";
        case "Redis":
            return "redis-tag";
        case "Docker":
            return "docker-tag";
        case "Tauri":
            return "tauri-tag";
        case "Express":
            return "express-tag";
        case "Javascript":
            return "js-tag";
        case "HTML":
            return "html-tag";
        case "CSS":
            return "css-tag";
        case "Unity":
            return "unity-tag";
        case "C#":
            return "csharp-tag";
        case "Godot":
        case "GDScript":
            return "godot-tag";
        case "Blender":
            return "blender-tag";
        case "Java":
        case "JavaFX":
            return "java-tag";
        default:
            return "default-tag";
    }
}

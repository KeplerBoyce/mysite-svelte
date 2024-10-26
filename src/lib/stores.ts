import { browser } from "$app/environment";
import { writable, get } from "svelte/store";

export const dark = writable<boolean>(browser ? localStorage.dark && localStorage.dark === "true" : true);
dark.subscribe((value: boolean) => {
    if (!browser) return;
    localStorage.dark = JSON.stringify(value);
});

/// <reference types="vite/client" />

interface ImportMetaEnv{
    readonly VITE_API_URL: string;
    readonly VITE_BASE_URL: string;
    // Define other environment variables here if needed
}

// Optional: Define ImportMeta if you want to explicitly state the structure of import.meta
interface ImportMeta{
    readonly env: ImportMetaEnv;
}
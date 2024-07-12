import { ReactNode } from "react";

export interface Movie{
    name: string;
    description: string;
    thumbnail: string;
}

export interface Item{
    name: string;
    description: string;
    thumbnail: {
        path: string,
        extension: string
    };
}

export interface Props{
    height?: number,
    src?: string,
}

export interface PropsProvider{
    children: ReactNode,
}

export interface AppState{
    name: string;
    url: string;
    time: string;
}
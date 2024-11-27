import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function stringToObject(str:string){
    const pairs = str.split('-');
    const obj : any = {};

    pairs.forEach(pair => {
        const [key, value] = pair.trim().split(' ');
        obj[key] = value;
    })
    return obj
}


import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function backgrounds() {

  return [
    "https://i.pinimg.com/originals/4e/15/a9/4e15a9e296c03c97c417335a2fbe8f93.gif",

    "https://i.pinimg.com/originals/d3/f5/a4/d3f5a482144206255cf45f30fb4bfd4b.gif",

    "https://i.pinimg.com/originals/b3/9c/0c/b39c0c466fa2e880bcf8b904305041aa.gif",

    "https://i.pinimg.com/originals/0a/b8/ce/0ab8ce6d94dc4bd5183e953ad6ef797d.gif",

    "https://i.pinimg.com/originals/c4/0d/b6/c40db678aa354ba91257f6258a1521e1.gif",

    "https://i.pinimg.com/originals/c5/ed/de/c5edded5ab81c925e5287d3f01bc7c9a.gif",

    "https://i.pinimg.com/originals/0c/7b/7b/0c7b7bd6de1525cecb762d4f3de34ea1.gif",

    "https://i.pinimg.com/originals/eb/d2/1e/ebd21ea1fd579f25df76ebaf7f72fef5.gif",

    "https://i.pinimg.com/originals/36/52/4b/36524ba103c5812a53e8c37f7ed22179.gif"
  ]
}



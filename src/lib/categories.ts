
import { Category } from "./types";

export const CATEGORIES: Category[] = [
  {
    slug: "spiritual",
    name: "Spiritual",
    hero: { type: "video", url: "/videos/spiritual.mp4", poster: "/videos/spiritual.jpg" },
    experiences: [
      { id:"s1", title:"Forest Breathwork", summary:"Sunrise breathwork and meditation in old‑growth forest.", tags:["breathwork","nature","sunrise"], price:"$180", media:{ type:"image", url:"/images/forest.jpg", alt:"Forest" }},
      { id:"s2", title:"Mountain Silence Retreat", summary:"Three‑day guided silence with nightly fire circles.", tags:["retreat","silence"], price:"$1,200", media:{ type:"image", url:"/images/mountain.jpg" }},
    ]
  },
  {
    slug: "healing",
    name: "Healing",
    hero: { type: "video", url: "/videos/healing.mp4", poster: "/videos/healing.jpg" },
    experiences: [
      { id:"h1", title:"Somatic Reset", summary:"Hands‑on therapy and nervous‑system downshift.", tags:["somatic","nervous system"], price:"$220", media:{ type:"image", url:"/images/water.jpg" }},
    ]
  },
  {
    slug: "sexual",
    name: "Sexual",
    hero: { type: "video", url: "/videos/sexual.mp4", poster: "/videos/sexual.jpg" },
    experiences: [
      { id:"x1", title:"Connection & Touch Lab", summary:"Guided consent, communication, and touch exercises.", tags:["consent","connection"], price:"$120", media:{ type:"image", url:"/images/silk.jpg" }},
    ]
  },
  {
    slug: "psychedelic",
    name: "Psychedelic",
    hero: { type: "video", url: "/videos/psychedelic.mp4", poster: "/videos/psychedelic.jpg" },
    experiences: [
      { id:"p1", title:"Mushroom Journey Prep", summary:"Preparation and integration with licensed guides.", tags:["prep","integration"], price:"$360", media:{ type:"image", url:"/images/oil.jpg" }},
    ]
  }
];

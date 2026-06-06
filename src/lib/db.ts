export type Project = {
  id: string;
  title: string;
  releaseYear: number;
  phase: string;
  genre: string;
  runtime: number;
  director: string;
  revenue: number;
  roi: string;
  tone: "green" | "gold" | "neutral" | "crimson";
  budget: number;
  spent: number;
  theatrical: number;
  ottAdvance: number;
};

export type Distributor = {
  id: number;
  name: string;
  contact: string;
  email: string;
  phone: string;
  territory: string;
  type: "Theatrical" | "OTT" | "Satellite" | "International";
  activeDeals: number;
  totalValue: string;
  rating: number;
  status: "active" | "negotiating" | "inactive";
};

export const globalDb = {
  projects: [
    {
      id: "midnight-in-bombay",
      title: "Midnight in Bombay",
      releaseYear: 2025,
      phase: "Theatrical",
      genre: "Thriller",
      runtime: 142,
      director: "Vikram Sahni",
      revenue: 128,
      roi: "+212%",
      tone: "green",
      budget: 78,
      spent: 76,
      theatrical: 128,
      ottAdvance: 34,
    },
    {
      id: "aurora-falls",
      title: "Aurora Falls",
      releaseYear: 2024,
      phase: "OTT Window",
      genre: "Drama",
      runtime: 110,
      director: "Anaya Rao",
      revenue: 42,
      roi: "+88%",
      tone: "gold",
      budget: 22,
      spent: 21,
      theatrical: 28,
      ottAdvance: 14,
    },
    {
      id: "the-last-reel",
      title: "The Last Reel",
      releaseYear: 2026,
      phase: "Post-production",
      genre: "Sci-fi",
      runtime: 156,
      director: "Devraj Kumar",
      revenue: 0,
      roi: "Pre-release",
      tone: "neutral",
      budget: 14,
      spent: 12,
      theatrical: 0,
      ottAdvance: 0,
    },
    {
      id: "salt-and-smoke",
      title: "Salt & Smoke",
      releaseYear: 2023,
      phase: "Underperforming",
      genre: "Romance",
      runtime: 130,
      director: "Priya Iyer",
      revenue: 6,
      roi: "-34%",
      tone: "crimson",
      budget: 38,
      spent: 38,
      theatrical: 6,
      ottAdvance: 0,
    },
    {
      id: "neon-monsoon",
      title: "Neon Monsoon",
      director: "Kabir Mehta",
      genre: "Sci-fi",
      phase: "Production",
      releaseYear: 2025,
      runtime: 130,
      budget: 142,
      spent: 88,
      revenue: 0,
      theatrical: 0,
      ottAdvance: 0,
      roi: "0%",
      tone: "teal",
    },
    {
      id: "saffron-sky",
      title: "Saffron Sky",
      director: "Anika Reddy",
      genre: "Period",
      phase: "Pre-production",
      releaseYear: 2026,
      runtime: 160,
      budget: 64,
      spent: 9,
      revenue: 0,
      theatrical: 0,
      ottAdvance: 0,
      roi: "0%",
      tone: "neutral",
    },
    {
      id: "violet-hour",
      title: "The Violet Hour",
      director: "Ishaan Roy",
      genre: "Mystery",
      phase: "Distribution",
      releaseYear: 2024,
      runtime: 125,
      budget: 31,
      spent: 30,
      revenue: 71,
      theatrical: 50,
      ottAdvance: 21,
      roi: "+129%",
      tone: "green",
    },
  ] as Project[],

  distributors: [
    {
      id: 1,
      name: "PVR Inox",
      contact: "Rahul Mehta",
      email: "deals@pvrinox.com",
      phone: "+91 98100 11111",
      territory: "Pan-India Theatrical",
      type: "Theatrical",
      activeDeals: 4,
      totalValue: "₹182 Cr",
      rating: 5,
      status: "active",
    },
    {
      id: 2,
      name: "Netflix India",
      contact: "Shreya Bose",
      email: "content@netflix.in",
      phone: "+91 98100 22222",
      territory: "OTT Global SVOD",
      type: "OTT",
      activeDeals: 3,
      totalValue: "₹148 Cr",
      rating: 5,
      status: "active",
    },
    {
      id: 3,
      name: "Amazon Prime",
      contact: "Aman Joshi",
      email: "originals@amazon.in",
      phone: "+91 98100 33333",
      territory: "OTT IN + ME",
      type: "OTT",
      activeDeals: 2,
      totalValue: "₹64 Cr",
      rating: 4,
      status: "active",
    },
    {
      id: 4,
      name: "Star Network",
      contact: "Deepa Rao",
      email: "syndication@star.in",
      phone: "+91 98100 44444",
      territory: "Satellite India",
      type: "Satellite",
      activeDeals: 2,
      totalValue: "₹38 Cr",
      rating: 4,
      status: "negotiating",
    },
    {
      id: 5,
      name: "Zee Cinemas",
      contact: "Suresh Varma",
      email: "content@zee.in",
      phone: "+91 98100 55555",
      territory: "Satellite SE Asia",
      type: "Satellite",
      activeDeals: 1,
      totalValue: "₹22 Cr",
      rating: 3,
      status: "negotiating",
    },
    {
      id: 6,
      name: "Reliance Eros",
      contact: "Kamal Singh",
      email: "intl@erosnow.com",
      phone: "+91 98100 66666",
      territory: "International 40+ markets",
      type: "International",
      activeDeals: 3,
      totalValue: "₹74 Cr",
      rating: 4,
      status: "active",
    },
  ] as Distributor[],

  revenueData: [
    { m: "Jan", box: 12, ott: 6 },
    { m: "Feb", box: 18, ott: 8 },
    { m: "Mar", box: 25, ott: 11 },
    { m: "Apr", box: 32, ott: 14 },
    { m: "May", box: 28, ott: 18 },
    { m: "Jun", box: 41, ott: 22 },
    { m: "Jul", box: 52, ott: 26 },
    { m: "Aug", box: 47, ott: 30 },
    { m: "Sep", box: 58, ott: 34 },
  ],

  mixData: [
    { name: "Box Office", value: 58, fill: "rgba(96,165,250,0.8)" },
    { name: "OTT", value: 22, fill: "rgba(52,211,153,0.8)" },
    { name: "Satellite", value: 12, fill: "rgba(251,191,36,0.8)" },
    { name: "Music", value: 8, fill: "rgba(167,139,250,0.8)" },
  ],
};

// Simple pub/sub to trigger re-renders if needed
type Listener = () => void;
const listeners = new Set<Listener>();

export const dbSubscribe = (listener: Listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const dbNotify = () => {
  listeners.forEach((l) => l());
};

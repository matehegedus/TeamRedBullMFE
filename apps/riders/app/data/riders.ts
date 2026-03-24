export interface Rider {
  id: string;
  name: string;
  nationality: string;
  nationalityFlag: string;
  role: string;
  age: number;
  bio: string;
  stats: {
    grandTourWins: number;
    classicWins: number;
    stageWins: number;
    yearsWithTeam: number;
  };
}

export const riders: Rider[] = [
  {
    id: "alex-stenmark",
    name: "Alex Stenmark",
    nationality: "Swedish",
    nationalityFlag: "🇸🇪",
    role: "GC Leader",
    age: 27,
    bio: "The undisputed leader of the team. Alex dominates in the mountains and is a consistent Grand Tour contender. Known for his explosive climbing and calm tactical mind.",
    stats: {
      grandTourWins: 2,
      classicWins: 0,
      stageWins: 14,
      yearsWithTeam: 4,
    },
  },
  {
    id: "marco-deluca",
    name: "Marco De Luca",
    nationality: "Italian",
    nationalityFlag: "🇮🇹",
    role: "Classics Specialist",
    age: 30,
    bio: "A seasoned veteran of the cobbled classics, Marco has won multiple monuments and remains a constant threat in the spring Classics season.",
    stats: { grandTourWins: 0, classicWins: 5, stageWins: 8, yearsWithTeam: 6 },
  },
  {
    id: "lucas-bauer",
    name: "Lucas Bauer",
    nationality: "German",
    nationalityFlag: "🇩🇪",
    role: "Time Trial Specialist",
    age: 29,
    bio: "One of the fastest time trialists in the peloton, Lucas has broken multiple course records. He also supports the team leader in climbing stages.",
    stats: {
      grandTourWins: 0,
      classicWins: 1,
      stageWins: 11,
      yearsWithTeam: 3,
    },
  },
  {
    id: "jin-park",
    name: "Jin Park",
    nationality: "South Korean",
    nationalityFlag: "🇰🇷",
    role: "Domestique / Climber",
    age: 24,
    bio: "A rising talent who excels in the high mountains. Jin is a selfless domestique with the ability to go on solo breakaways when opportunity arises.",
    stats: { grandTourWins: 0, classicWins: 0, stageWins: 3, yearsWithTeam: 2 },
  },
  {
    id: "felix-mora",
    name: "Félix Mora",
    nationality: "Spanish",
    nationalityFlag: "🇪🇸",
    role: "Sprinter",
    age: 26,
    bio: "The fastest finisher on the team, Félix has an explosive sprint and reads race situations with precision. Dangerous on flat and semi-flat stages.",
    stats: {
      grandTourWins: 0,
      classicWins: 2,
      stageWins: 19,
      yearsWithTeam: 2,
    },
  },
  {
    id: "david-osei",
    name: "David Osei",
    nationality: "Ghanaian",
    nationalityFlag: "🇬🇭",
    role: "All-Rounder",
    age: 25,
    bio: "An exciting all-rounder capable of competing at every terrain. David's versatility makes him invaluable across all types of races.",
    stats: { grandTourWins: 0, classicWins: 1, stageWins: 6, yearsWithTeam: 1 },
  },
];

export function getRiderById(id: string): Rider | undefined {
  return riders.find((r) => r.id === id);
}

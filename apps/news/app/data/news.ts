export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  content: string;
}

export const articles: NewsArticle[] = [
  {
    id: "stenmark-tour-victory",
    title: "Stenmark Clinches Overall Victory at the Tour de Suisse",
    category: "Race Result",
    date: "2026-06-14",
    summary:
      "Alex Stenmark sealed a dominant overall victory at the Tour de Suisse, taking the yellow jersey on Stage 5 and defending it through a brutal final time trial.",
    content:
      "In a masterclass of stage racing, Alex Stenmark controlled every mountain stage and produced a scintillating time trial performance to win the Tour de Suisse overall by 1:47. The result underlines his form ahead of the upcoming Grand Tour season.",
  },
  {
    id: "deluca-paris-roubaix",
    title: "De Luca Storms to Paris-Roubaix Victory in the Rain",
    category: "Race Result",
    date: "2026-04-13",
    summary:
      "Marco De Luca powered through the cobbled sectors of northern France to claim a spectacular Paris-Roubaix victory — his sixth monument win.",
    content:
      "Rain lashed the roads of northern France, but it couldn't stop Marco De Luca. The Italian was in imperious form across all 29 cobbled sectors, riding away from the group in the final 10 km to arrive solo at the Vélodrome de Roubaix.",
  },
  {
    id: "new-season-kit-2026",
    title: "Team Red Bull Unveils the 2026 Season Race Kit",
    category: "Team News",
    date: "2026-01-20",
    summary:
      "Team Red Bull has revealed a bold new race kit for the 2026 season, featuring a deeper navy base with the iconic red accents and a new aerodynamic suit design.",
    content:
      "The new 2026 kit pushes aerodynamics to the next level with a body-mapped design developed in collaboration with our technical partners. The colorway stays true to the Red Bull identity while integrating subtle performance-enhancing details across the bib shorts and jersey.",
  },
  {
    id: "training-camp-mallorca",
    title: "Pre-Season Training Camp Wraps Up in Mallorca",
    category: "Team News",
    date: "2026-01-30",
    summary:
      "The full squad completed a two-week altitude training camp in Mallorca, with all riders reporting excellent early-season form.",
    content:
      'With 14 days of structured training, altitude sessions, and team-building activities behind them, the Team Red Bull roster is focused and motivated. Sports director Helena Voss said: "We\'ve hit every benchmark. The team is unity and performance — exactly what we need going into the Classics season."',
  },
  {
    id: "park-breakaway-criterium",
    title: "Jin Park Takes Solo Breakaway Win at Circuit de Wallonie",
    category: "Race Result",
    date: "2026-05-21",
    summary:
      "Jin Park showed his growing confidence with a 40 km solo breakaway that ended in a brilliant victory at the Circuit de Wallonie.",
    content:
      'Jin Park\'s audacious attack with 40 km to go left the peloton chasing shadows. The South Korean rode a perfectly measured solo effort to arrive at the finish with a 1:12 advantage. "I felt incredible all day," Park said. "The team gave me the confidence to go. I just believed."',
  },
  {
    id: "mora-sprint-giro",
    title: "Mora Bags Three Stage Wins in a Week at the Giro d'Italia",
    category: "Race Result",
    date: "2026-05-28",
    summary:
      "Félix Mora dominated the sprint stages at the Giro d'Italia, claiming three stage victories in a single week to emerge as the world's fastest sprinter.",
    content:
      "Stage 4, Stage 6, Stage 11 — Félix Mora was untouchable in the sprints as the Giro navigated northern Italy. The Spanish sprinter's lead-out train worked to perfection, and Mora's explosive final 200m left rivals with nothing to answer.",
  },
];

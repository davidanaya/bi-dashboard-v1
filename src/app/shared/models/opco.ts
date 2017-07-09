interface GlobalScore {
  id: string;
  name: string;
  score: string;
  grade: string;
  max_score: number;
  weight: string;
  difference: string;
}

interface Perspective {
  id: string;
  name: string;
  score: string;
  grade: string;
  max_score: number;
  weight: number;
  difference: string;
}

export interface Opco {
  id: string;
  name: string;
  level: string;
  picture: string;
  director_picture: string;
  stream: string;
  global_score: GlobalScore;
  directorate_id: string;
  perspectives: Perspective[];
}

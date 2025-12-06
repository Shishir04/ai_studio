export interface Author {
  name: string;
  role?: string;
  institution: string;
}

export interface StatData {
  name: string;
  mean: number;
  sd: number;
}

export interface Hypothesis {
  id: string;
  statement: string;
  result: 'Supported' | 'Not Supported';
  coefficient?: number;
}
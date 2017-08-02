export interface Page {
  title: string;
  id: string;
  link: string;
  order: number;
  type: string;
  parent: string;
  layout: string | null;
  widgets: string[] | null;
  dashboards?: Page[];
}

export interface Config {
  pages: Page[];
  widgets: any;
}

export interface Team {
  name: string;
  members: string[];
  $key?: string;
  $exists?: () => boolean;
}

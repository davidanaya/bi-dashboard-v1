export interface Member {
  $key: string;
  $exists: () => boolean;
}
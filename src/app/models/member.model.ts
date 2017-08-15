export interface Member {
  name: string;
  $key?: string;
  $exists?: () => boolean;
}

import { Member } from 'app/models/member.model';

export interface DataRoom {
  name: string;
  $key?: string;
  $exists?: () => boolean;
  members?: Member[];
}

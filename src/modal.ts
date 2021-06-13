import { RELATION_TYPE } from "./constant";

export interface contactdto {
  name: string;
  mail: string;
  phonenumber: string;
  edit: boolean;
  relation: RELATION_TYPE;
}

import { contactdto } from "./modal";

export const RELATION_TYPES = [
  "Friend",
  "Relative",
  "Family",
  "Unknown",
] as const;

export type RELATION_TYPE = typeof RELATION_TYPES[number];

export const initialData: Array<contactdto> = [
  {
    name: "Saida",
    mail: "saida419@gmail.com",
    phonenumber: "8374626043",
    edit: false,
    relation: RELATION_TYPES[1],
  },
  {
    name: "Shivani",
    mail: "shivani06@gmail.com",
    phonenumber: "7097743961",
    edit: false,
    relation: RELATION_TYPES[2],
  },
  {
    name: "Shravan Kumar",
    mail: "shravam.allamshetty@gmail.com",
    phonenumber: "9000810080",
    edit: false,
    relation: RELATION_TYPES[0],
  },
  {
    name: "Unknown",
    mail: "unknown@gmail.com",
    phonenumber: "*********",
    edit: false,
    relation: RELATION_TYPES[3],
  },
  {
    name: "Shiva",
    mail: "ramanujan.p@gmail.com",
    phonenumber: "9618868135",
    edit: false,
    relation: RELATION_TYPES[3],
  },
];

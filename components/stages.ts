export type StageId = "govern" | "scale" | "compound" | "steward";

export const stages: {
  id: StageId;
  label: string;
  entity: string;
  detail: string;
}[] = [
  {
    id: "govern",
    label: "Govern",
    entity: "Lodestone Global",
    detail: "Build the right foundation.",
  },
  {
    id: "scale",
    label: "Scale",
    entity: "E3 Scale Network",
    detail: "Strengthen and scale beyond the founder.",
  },
  {
    id: "compound",
    label: "Compound",
    entity: "Lodestone Capital",
    detail: "Deploy and compound capital.",
  },
  {
    id: "steward",
    label: "Steward",
    entity: "Lodestone Family Advisors",
    detail: "Steward wealth and values across generations.",
  },
];

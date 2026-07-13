export type StageId = "govern" | "scale" | "compound" | "steward";

export const stages: {
  id: StageId;
  label: string;
  entity: string;
  detail: string;
  color: string;
  colorText: string;
  colorBorder: string;
  colorBg: string;
}[] = [
  {
    id: "govern",
    label: "Govern",
    entity: "Lodestone Global",
    detail: "Build the right foundation.",
    color: "#101E2E",
    colorText: "text-navy",
    colorBorder: "border-navy",
    colorBg: "bg-navy",
  },
  {
    id: "scale",
    label: "Scale",
    entity: "E3 Scale Network",
    detail: "Strengthen and scale beyond the founder.",
    color: "#4B5D45",
    colorText: "text-moss",
    colorBorder: "border-moss",
    colorBg: "bg-moss",
  },
  {
    id: "compound",
    label: "Compound",
    entity: "Lodestone Capital",
    detail: "Deploy and compound capital.",
    color: "#9C7A42",
    colorText: "text-brass",
    colorBorder: "border-brass",
    colorBg: "bg-brass",
  },
  {
    id: "steward",
    label: "Steward",
    entity: "Lodestone Family Advisors",
    detail: "Steward wealth and values across generations.",
    color: "#5B4A5C",
    colorText: "text-plum",
    colorBorder: "border-plum",
    colorBg: "bg-plum",
  },
];

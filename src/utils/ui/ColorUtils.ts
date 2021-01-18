export type TextColor =
  | "text-primary-high"
  | "text-primary-low"
  | "text-secondary-high"
  | "text-secondary-low"
  | "text-white"
  | "text-danger";

export type BackgroundColor = "background-white" | "background-primary";

export type Shadow = "shadow-around";

const COLORS_BY_NAME = {
  "text-primary-high": "#141B1F",
  "text-primary-low": "#979FBD",
  "text-secondary-high": "#06C6A3",
  "text-secondary-low": "#C3FDF2",
  "text-white": "#FCFDFD",
  "text-danger": "#CA3C25",
  "background-white": "#FCFDFD",
  "background-primary": "#06B292",
  "shadow-around": "0px 10px 50px rgba(2, 6, 35, 0.05)",
} as const;

export const getColorValueFromColorName = (
  name: TextColor | BackgroundColor | Shadow
) => COLORS_BY_NAME[name];

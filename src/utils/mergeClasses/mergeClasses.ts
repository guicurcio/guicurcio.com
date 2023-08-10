import type { ClassValue} from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * mergeClasses
 */
export type mergeClassesArgs = ClassValue[];

/**
 *
 * @returns {string} a string of merged classes
 */
export default function mergeClasses(...inputs: mergeClassesArgs): string {
  return twMerge(clsx(inputs));
}

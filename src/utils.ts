/**
 * Helper function to narrow an unknown value to an object (i.e. a TypeScript record).
 *
 * Under the hood, this checks for `typeof variable === "object"`, `variable !== null`, and
 * `!Array.isArray(variable)`.
 */
export function isObject(
  variable: unknown,
): variable is Record<string, unknown> {
  return (
    typeof variable === "object" &&
    variable !== null &&
    !Array.isArray(variable)
  );
}

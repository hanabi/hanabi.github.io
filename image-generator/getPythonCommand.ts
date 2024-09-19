import commandExists from "command-exists";
import { execSync } from "node:child_process";

export function getPythonCommand(
  fatal: boolean,
): "python" | "python3" | undefined {
  if (commandExists.sync("python3") && doesCommandWork("python3")) {
    return "python3";
  }

  if (commandExists.sync("python") && doesCommandWork("python")) {
    return "python";
  }

  if (fatal) {
    console.error(
      "You must have Python installed and available in the PATH to run this program.",
    );
    process.exit(1);
  }

  return undefined;
}

/**
 * By default, "python" will exist on Windows, but it is not actually a real version of Python.
 * Running it will generating the following output:
 *
 * ```text
 * Python was not found; run without arguments to install from the Microsoft Store, or disable
 * this shortcut from Settings > Manage App Execution Aliases.
 * ```
 */
function doesCommandWork(command: string): boolean {
  try {
    const output = execSync(`${command} --version`, { encoding: "utf8" });
    return !output.includes("was not found");
  } catch {
    return false;
  }
}

import { $op, isMain } from "complete-node";
import path from "node:path";

if (isMain()) {
  const packageRoot = path.join(import.meta.dirname, "..");
  compilePlugin(packageRoot);
}

/** Compile the "image-generator" plugin. */
export function compilePlugin(packageRoot: string): void {
  const pluginDir = path.join(packageRoot, "image-generator", "plugin");
  const $$ = $op({ cwd: pluginDir });
  $$.sync`tsc`;
}

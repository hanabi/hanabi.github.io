import { $op, isDirectory, isMain } from "complete-node";
import path from "node:path";

if (isMain()) {
  const packageRoot = path.join(import.meta.dirname, "..");
  compilePlugin(packageRoot);
}

/** Compile the "hanabiDocusaurusPlugin" plugin. */
export function compilePlugin(packageRoot: string): void {
  const pluginDir = path.join(
    packageRoot,
    "plugins",
    "hanabiDocusaurusPlugin",
    "plugin",
  );
  if (!isDirectory(pluginDir)) {
    throw new Error(`The plugin directory does not exist: ${pluginDir}`);
  }

  const $$ = $op({ cwd: pluginDir });
  $$.sync`tsc`;
}

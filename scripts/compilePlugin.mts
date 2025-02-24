import { $, isDirectory, isMain } from "complete-node";
import path from "node:path";

if (isMain()) {
  const packageRoot = path.join(import.meta.dirname, "..");
  await compilePlugin(packageRoot);
}

/** Compile the "hanabiDocusaurusPlugin" plugin. */
export async function compilePlugin(packageRoot: string): Promise<void> {
  const pluginDir = path.join(
    packageRoot,
    "plugins",
    "hanabiDocusaurusPlugin",
    "plugin",
  );
  if (!isDirectory(pluginDir)) {
    throw new Error(`The plugin directory does not exist: ${pluginDir}`);
  }

  const $$ = $({ cwd: pluginDir });
  await $$`tsc`;
}

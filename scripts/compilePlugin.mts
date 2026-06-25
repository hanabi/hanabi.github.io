import { $, isDirectory } from "complete-node";
import path from "node:path";

if (import.meta.main) {
  const packageRoot = path.resolve(import.meta.dirname, "..");
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
  const pluginDirExists = await isDirectory(pluginDir);
  if (!pluginDirExists) {
    throw new Error(`The plugin directory does not exist: ${pluginDir}`);
  }

  const $$ = $({ cwd: pluginDir });
  await $$`tsc`;
}

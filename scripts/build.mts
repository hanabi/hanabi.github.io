import { $op, $s, buildScript } from "complete-node";
import path from "node:path";

const REPO_ROOT = path.join(import.meta.dirname, "..");

await buildScript(() => {
  // Compile the "image-generator" plugin.
  const pluginDir = path.join(REPO_ROOT, "image-generator", "plugin");
  const $$ = $op({ cwd: pluginDir });
  $$.sync`tsc`;

  $s`docusaurus clear`;
  $s`docusaurus build`;
});

import { $op, $s, buildScript } from "complete-node";
import path from "node:path";

await buildScript((packageRoot) => {
  // Compile the "image-generator" plugin.
  const pluginDir = path.join(packageRoot, "image-generator", "plugin");
  const $$ = $op({ cwd: pluginDir });
  $$.sync`tsc`;

  $s`docusaurus clear`;
  $s`docusaurus build`;
});

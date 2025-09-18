import { $, buildScript } from "complete-node";
import { compilePlugin } from "./compilePlugin.mjs";

await buildScript(import.meta.dirname, async (packageRoot) => {
  await compilePlugin(packageRoot);
  await $`docusaurus clear`;
  await $`docusaurus build`;
});

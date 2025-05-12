import { $, buildScript } from "complete-node";
import { compilePlugin } from "./compilePlugin.mjs";

await buildScript(async (packageRoot) => {
  await compilePlugin(packageRoot);
  await $`docusaurus clear`;
  await $`docusaurus build`;
});

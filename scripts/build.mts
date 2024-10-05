import { $s, buildScript } from "complete-node";
import { compilePlugin } from "./compilePlugin.mjs";

await buildScript((packageRoot) => {
  compilePlugin(packageRoot);
  $s`docusaurus clear`;
  $s`docusaurus build`;
});

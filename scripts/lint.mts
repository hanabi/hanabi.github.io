import { $, getPythonCommand, lintScript } from "complete-node";

const pythonCommand = getPythonCommand(true);

await lintScript(async () => {
  const promises = [
    // Use TypeScript to type-check the code.
    $`tsc --noEmit`,
    $`tsc --noEmit --project ./scripts/tsconfig.json`,

    // Use ESLint to lint the TypeScript code.
    // - "--max-warnings 0" makes warnings fail, since we set all ESLint errors to warnings.
    $`eslint --max-warnings 0 .`,

    // Use Prettier to check formatting.
    // - "--log-level=warn" makes it only output errors.
    $`prettier --log-level=warn --check .`,

    // Use CSpell to spell check every file.
    // - "--no-progress" and "--no-summary" make it only output errors.
    $`cspell --no-progress --no-summary .`,

    // Check for unused words in the CSpell configuration file.
    $`cspell-check-unused-words`,

    // Check for template updates.
    $`isaacscript check-ts --ignore build.ts,knip.config.js,LICENSE,lint.ts`,

    // Check for invalid YAML files.
    $`bash ./image-generator/check_valid.sh`,

    // Check for unused YAML files.
    $`${pythonCommand} ./image-generator/check_unused.py`,
  ];

  await Promise.all(promises);
});

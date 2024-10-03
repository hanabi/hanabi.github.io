import { $, lintScript } from "complete-node";

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

    // @template-customization-start

    checkValidYAMLFiles(),
    checkUnusedYAMLFiles(),

    // @template-customization-end
  ];

  await Promise.all(promises);
});

async function checkValidYAMLFiles() {
  // TODO
  /*

  SECONDS=0

cd "$DIR"

# Test to see if all of the YAML files are valid by manually invoking the "create_svg_cli.mjs" script on
# every YAML file.
# echo "Testing to see if all of the YAML files are valid..."
YAML_FILES=$(find "$DIR/yml" -name '*.yml' -type f)
for YAML_FILE in $YAML_FILES; do
  # echo "$YAML_FILE"
  node "$DIR/create_svg_cli.mjs" < "$YAML_FILE" > /dev/null
done

# echo "All the YAML files are valid. (It took $SECONDS seconds.)"

  */
}

async function checkUnusedYAMLFiles() {
  // TODO
  /*

DIR = os.path.dirname(os.path.realpath(__file__))
PATTERN = re.compile(r"import.*from.*@site/(image-generator/yml.*yml)")


def main():
    used_yaml_files = set()
    for markdown_file in glob.glob("docs/@@/*.mdx", recursive=True):
    with open(markdown_file, "r", encoding="utf-8") as file:
    for line in file.read_lines():
        match = PATTERN.match(line)
        if match:
            yaml_path = match.group(1)
            used_yaml_files.add(yaml_path)

all_yaml_files = set()
for yaml_file in glob.glob("image-generator/yml/@@/*.yml", recursive=True):
yaml_path = yaml_file
yaml_path = yaml_path.replace("\\", "/")  # Windows fix
all_yaml_files.add(yaml_path)

unused_yaml_files = all_yaml_files - used_yaml_files

if unused_yaml_files:
for yml in sorted(unused_yaml_files):
    printf("Unused YAML file:", yml)
error("Unused YML files found.")


def printf(*args):
print(*args, flush=True)


def error(msg: str):
print(f"Error: {msg}", file=sys.stderr, flush=True)
sys.exit(1)


if __name__ == "__main__":
main()

*/
}

/*

// Does the same thing as the loader, but without webpack.
// Useful for manual testing, and also for linter.

import create_svg from "./convertYAMLToSVG.js";

const chunks = [];
const readable = process.stdin;

readable.on("readable", () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on("end", () => {
  const content = chunks.join("");
  const data = create_svg(content);
  process.stdout.write(data);
});

*/

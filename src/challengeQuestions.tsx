import { useDocById } from "@docusaurus/plugin-content-docs/client";
import { createProgressComponent, getSidebarParts } from "./sidebarProgress";

export default function ChallengeQuestionProgress({
  level,
  id,
}: {
  level: number;
  id: string;
}): React.JSX.Element {
  const parts = getSidebarParts("Challenge Questions", `Level ${level}`);
  const ProgressComponent = createProgressComponent(
    parts,
    "challenge-questions",
  );
  return <ProgressComponent id={id} />;
}

/** Component for a single question link that uses useDocById to get the actual title. */
function QuestionLink({ path }: { path: string }): React.JSX.Element {
  const doc = useDocById(path);
  const href = path.replace("challenge-questions/", "");

  return (
    <li>
      <a href={href}>{doc.title}</a>
    </li>
  );
}

/**
 * Generates a Table of Contents for a challenge questions level page.
 *
 * @returns A React component displaying an enumerated list of questions.
 */
export function ChallengeQuestionToC({
  level,
}: {
  level: number;
}): React.JSX.Element {
  // Skip the first page, which is always the level introduction.
  const questionPaths = getSidebarParts(
    "Challenge Questions",
    `Level ${level}`,
  ).slice(1);

  return (
    <ol>
      {questionPaths.map((path) => (
        <QuestionLink key={path} path={path} />
      ))}
    </ol>
  );
}

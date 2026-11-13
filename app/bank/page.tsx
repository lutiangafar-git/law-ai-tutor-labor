import { BankDrill } from "@/components/BankDrill";
import { BANK_TOTAL, OUTLINE } from "@/lib/bank";
import { SUBJECT } from "@/lib/subject";

export const metadata = { title: `Question bank - ${SUBJECT.appName}` };

export default function BankPage() {
  const bar = OUTLINE.filter((o) => o.leaf && !o.code.startsWith("S-"));
  const lines = bar.length;
  const covered = bar.filter((o) => o.count > 0).length;
  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-display text-3xl text-ink">Question bank</h1>
        <p className="mt-1 text-muted">
          {BANK_TOTAL} original questions so far, on {covered} of the {lines} lines of the 2027 Bar syllabus for {SUBJECT.subjectName}: a
          basic question (short answer) and a bar problem (ALAC answer) for each line covered. More lines are being added.
        </p>
      </div>
      <p role="note" className="rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900">
        <strong>Draft questions: not yet lawyer-reviewed.</strong> Written from the Labor Code, special labor laws and Supreme Court decisions, with every quoted provision checked against LawPhil. Check the
        official source before relying on an answer.
      </p>
      <BankDrill outline={OUTLINE} />
    </div>
  );
}

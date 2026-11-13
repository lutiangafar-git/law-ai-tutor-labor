import { Suspense } from "react";
import Link from "next/link";
import { LandingClient } from "@/components/LandingClient";
import { loadAllReviewedTopics } from "@/lib/sources";

/** Landing page: the student identifies their year or bar status, then goes to /drills. */
export default function LandingPage() {
  const bankOnly = loadAllReviewedTopics().length === 0;
  return (
    <>
      {bankOnly && (
        <p role="note" className="mx-auto mt-4 max-w-2xl rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900">
          Drill topics for this subject are being prepared. For now, practise with the{" "}
          <Link href="/bank" className="underline">question bank</Link> (draft questions, not yet lawyer-reviewed).
        </p>
      )}
    <Suspense fallback={<p className="landing-green py-10 text-center text-sage">Loading…</p>}>
      <LandingClient />
    </Suspense>
    </>
  );
}

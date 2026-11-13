import { describe, expect, it } from "vitest";
import { BAR_EXAM } from "@/lib/barExam";
import { loadAllReviewedTopics } from "@/lib/sources";

/**
 * Scope lock: when BAR_EXAM.year changes (a new Bar Bulletin), every topic must be re-checked
 * against the new syllabus before the app can be published.
 */
describe(`every drill matches the ${BAR_EXAM.year} Bar syllabus`, () => {
  const topics = loadAllReviewedTopics();
  // New subject apps start with the question bank only; this runs once the first topic is added.
  it.skipIf(topics.length > 0)("has no drill topics yet (question bank only)", () => expect(topics.length).toBe(0));
  it.skipIf(topics.length === 0).each(topics.map((t) => [t.topicId, t] as const))(
    "%s was checked against the current syllabus year",
    (_id, topic) => {
      expect(topic.syllabusYear, `${topic.topicId}: re-check against ${BAR_EXAM.bulletin}`).toBe(BAR_EXAM.year);
      expect(topic.syllabusRef).not.toBe("");
    },
  );
});

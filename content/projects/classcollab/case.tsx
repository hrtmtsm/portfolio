// content/projects/classcollab/case.tsx
import type { CaseDef } from "@/types/case";
import { Section, Figure, Overview } from "@/components/case/CaseStudyLayout";

const classcollab: CaseDef = {
  slug: "classcollab",
  title: "ClassCollab — Compatibility-Based Team Formation",
  date: "PROJECT • 2025",
  hero: <img src="/images/classcollab-cover.png" alt="ClassCollab hero" />,
  meta: (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-8">
      <div>
        <div className="text-[11px] tracking-[0.16em] text-foreground/50 uppercase mb-2">Role</div>
        <div className="text-[15px] text-foreground/80">UX Research, UX/UI Design</div>
      </div>
      <div>
        <div className="text-[11px] tracking-[0.16em] text-foreground/50 uppercase mb-2">Skills</div>
        <div className="text-[15px] text-foreground/80">Secondary Research, Prototyping, Validation</div>
      </div>
      <div>
        <div className="text-[11px] tracking-[0.16em] text-foreground/50 uppercase mb-2">Context</div>
        <div className="text-[15px] text-foreground/80">8 weeks • Solo</div>
      </div>
      <div>
        <div className="text-[11px] tracking-[0.16em] text-foreground/50 uppercase mb-2">Focus</div>
        <div className="text-[15px] text-foreground/80">Team formation &amp; fit</div>
      </div>
    </div>
  ),
  toc: [
    { id: "overview", label: "Overview" },
    { id: "business-problem", label: "Problem & Outcomes" },
    { id: "solution", label: "Solution" },
    { id: "discover", label: "Research" },
    { id: "ideate", label: "Ideate" },
    { id: "prototyping", label: "Prototype & Test" },
    { id: "iterations", label: "Iterations" },
    { id: "reflection", label: "Reflection" },
  ],
  body: (
    <div className="space-y-12">
<Section
  id="overview"
  label="PROJECT INTRO"
  heading="Forming compatible student teams for better outcomes"
  noRule
>
  <p>
    <strong>Students often struggle with mismatched project teams</strong>, which leads to
    unclear goals, uneven workloads, and poor collaboration. This project tackled that by
    creating a <strong>smarter team formation process</strong> that matches students based on
    shared goals, working styles, and availability—while supporting stronger course outcomes
    for instructors and institutions.
  </p>
  <p className="mt-4">
    Using Lean UX, I ran secondary research, built rapid prototypes, and validated ideas with
    users over multiple iterations to maximize both <strong>user outcomes</strong> and{" "}
    <strong>business value</strong>.
  </p>
</Section>



      {/* BUSINESS PROBLEM */}
      <Section
        id="business-problem"
        label="BUSINESS PROBLEM"
        heading="Starting a team project can feel like a gamble"
      >
        <p>
          Teams are often assigned randomly or chosen by social ties. Instructors lack time and data to
          form balanced groups, and existing tools overlook <em>compatibility</em> in collaboration
          preferences and goals—producing friction, unclear expectations, and uneven work.
        </p>
      </Section>

      {/* BUSINESS OUTCOMES */}
      <Section
        id="business-outcomes"
        label="BUSINESS OUTCOMES"
        heading="Higher course satisfaction and improved academic outcomes"
      >
        <p>
          The goal is better collaboration and stronger project outcomes—raising course satisfaction,
          long-term program reputation, and retention. Success indicators include higher team
          satisfaction, balanced workload distribution, improved outcomes, and fewer team-change requests.
        </p>
      </Section>

      {/* SOLUTION */}
      <Section
        id="solution"
        label="SOLUTION"
        heading="A transparent process for compatibility-based team formation"
      >
        <p>
          The platform matches students by <strong>goals</strong>, <strong>skills</strong>,{" "}
          <strong>collaboration styles</strong>, and <strong>role preferences</strong>. It’s grounded in
          user needs and class context to improve fairness, clarity, and learning outcomes.
        </p>
        <div className="rounded-lg overflow-hidden">
          <video
            src="/images/classcollab-walkthrough-v2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />
        </div>
      </Section>

      {/* DISCOVER */}
      <Section
        id="discover"
        label="DISCOVER"
        heading="Literature review: team formation overlooks compatibility and balance"
      >
        <p>
          Academic literature showed that compatibility—collaboration preferences, goals, and availability—drives
          satisfaction and outcomes. Early alignment on <em>mindset</em> (not just skills) informed the
          onboarding inputs.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          <blockquote className="border-l-2 pl-4">
            Letting students <strong>freely choose teammates</strong> can cause <strong>poor matches</strong>. Balanced
            skills reduce friction and improve collaboration. <span className="text-muted">— Lopez et al., 2021</span>
          </blockquote>
          <blockquote className="border-l-2 pl-4">
            Current formation relies too much on chance; using goals, strengths, and availability can automate better
            matches. <span className="text-muted">— Lopez et al., 2021</span>
          </blockquote>
          <blockquote className="border-l-2 pl-4">
            Group strategies should consider <strong>skills, goals, and personality</strong>; availability and style
            influence cohesion. <span className="text-muted">— Odo et al., 2019</span>
          </blockquote>
        </div>
      </Section>

      {/* DEFINE */}
      <Section id="define" label="DEFINE" heading="Proto-personas & opportunity framing">
        <p>
          I created two proto-personas—<strong>Alex</strong> (CS undergrad) and <strong>Rachel</strong> (CogSci grad).
          Both experienced mismatched teams, unclear expectations, and uneven workloads. Alex wants strong portfolio
          projects; Rachel seeks meaningful research partnerships.
        </p>
        <div className="flex flex-col gap-4">
          <Figure src="/images/classcollab-personas-rachel.png" alt="Persona: Rachel" />
          <Figure src="/images/classcollab-personas-alex.png" alt="Persona: Alex" />
        </div>

      </Section>

      <Section id="opportunity" label="DEFINE" heading="Business Opportunity Statement">
        <div className="flex flex-col sm:flex-row items-stretch gap-3">
          <div className="flex-1 rounded-xl bg-neutral-100 p-5">
            <div className="text-2xl mb-3">😕</div>
            <div className="text-[11px] uppercase tracking-[0.14em] text-foreground/50 mb-2">Current State</div>
            <p className="text-[15px] text-foreground/80">The status quo relies on instructor assignments or self-selection, rarely considering goals, styles, availability, or work preferences.</p>
          </div>
          <div className="flex items-center justify-center text-foreground/30 text-xl px-1">→</div>
          <div className="flex-1 rounded-xl bg-neutral-100 p-5">
            <div className="text-2xl mb-3">🔍</div>
            <div className="text-[11px] uppercase tracking-[0.14em] text-foreground/50 mb-2">Gap</div>
            <p className="text-[15px] text-foreground/80">Products like CATME don’t provide a balanced, transparent process matching interpersonal fit and project goals.</p>
          </div>
          <div className="flex items-center justify-center text-foreground/30 text-xl px-1">→</div>
          <div className="flex-1 rounded-xl bg-neutral-100 border-2 border-neutral-800 p-5">
            <div className="text-2xl mb-3">✅</div>
            <div className="text-[11px] uppercase tracking-[0.14em] text-foreground/40 mb-2">Solution</div>
            <p className="text-[15px] text-foreground/80">Help students form better-matched teams with fair collaboration, clear roles, and stronger outcomes.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3 mt-3">
          <div className="rounded-xl bg-neutral-100 p-5">
            <div className="text-[11px] uppercase tracking-[0.14em] text-foreground/50 mb-1">🎯 Focus</div>
            <p className="text-[15px] text-foreground/80">Higher-ed students in project-based courses.</p>
          </div>
          <div className="rounded-xl bg-neutral-100 p-5">
            <div className="text-[11px] uppercase tracking-[0.14em] text-foreground/50 mb-1">🏆 Success</div>
            <p className="text-[15px] text-foreground/80">Better-matched teams, smoother teamwork, stronger results.</p>
          </div>
        </div>
      </Section>

      {/* VALIDATION PLAN */}
      <Section
        id="validation"
        label="VALIDATION PLAN"
        heading="Pirate Metrics → Outcome-to-Impact"
      >
        <p>
          I first used <strong>Pirate Metrics</strong> to validate the MVP necessity (focusing on acquisition), then
          layered in <strong>Outcome-to-Impact Mapping</strong> after observing retention/usage to connect student
          outcomes to institutional value.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-[800px] w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 pr-4">Stage</th>
                <th className="py-2 pr-4">What I’m Measuring</th>
                <th className="py-2 pr-4">What I’m Trying to Learn</th>
                <th className="py-2 pr-4">How I Might Measure</th>
                <th className="py-2">Success Criteria</th>
              </tr>
            </thead>
            <tbody className="text-foreground/85">
              <tr className="border-b">
                <td className="py-2 pr-4">🧲 Acquisition</td>
                <td className="py-2 pr-4">Interest & willingness to try</td>
                <td className="py-2 pr-4">Do students see value?</td>
                <td className="py-2 pr-4">Landing page with CTA</td>
                <td className="py-2">≥ 30% click CTA</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4">✅ Activation</td>
                <td className="py-2 pr-4">Experienced value</td>
                <td className="py-2 pr-4">Are teams satisfying?</td>
                <td className="py-2 pr-4">Post-match survey</td>
                <td className="py-2">≥ 70% satisfied at week 1</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4">🔒 Retention</td>
                <td className="py-2 pr-4">Stick with team & use system</td>
                <td className="py-2 pr-4">Is engagement sustained?</td>
                <td className="py-2 pr-4">Peer-review checkpoints</td>
                <td className="py-2">≥ 80% teams unchanged</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4">💰 Revenue</td>
                <td className="py-2 pr-4">Higher course evaluations</td>
                <td className="py-2 pr-4">Do outcomes improve?</td>
                <td className="py-2 pr-4">Compare to past cohorts</td>
                <td className="py-2">Avg. score +10%</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">🔁 Referral</td>
                <td className="py-2 pr-4">Willingness to reuse</td>
                <td className="py-2 pr-4">Do students want it again?</td>
                <td className="py-2 pr-4">NPS / end-of-course survey</td>
                <td className="py-2">≥ 60% would reuse</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* IDEATE */}
      <Section id="ideate" label="IDEATE" heading="How might we help students find compatible teammates?">
        <p>
          I ran a design studio exercise (6-up) to quickly explore options, then mapped features to user and
          business outcomes to prioritize.
        </p>
        <Figure
          src="/images/classcollab-design-studio-exercise.png"
          alt="Design studio exercise"
          caption="Rapid exploration to widen the solution space."
        />
      </Section>

      {/* HYPOTHESIS MAPPING */}
      <Section id="hypothesis" label="IDEATE" heading="Hypothesis Mapping">
        <p>
          Mapped each feature to a concrete user and business outcome to ensure everything we built had a reason to exist.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-[720px] w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 pr-4">Business outcome</th>
                <th className="py-2 pr-4">Persona</th>
                <th className="py-2 pr-4">User outcome</th>
                <th className="py-2">Feature</th>
              </tr>
            </thead>
            <tbody className="text-foreground/85">
              <tr className="border-b">
                <td className="py-2 pr-4">Higher course evals & performance</td>
                <td className="py-2 pr-4">Alex & Rachel</td>
                <td className="py-2 pr-4">Join a group with shared goals</td>
                <td className="py-2">Onboarding survey + past projects</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4">Improved institutional outcomes</td>
                <td className="py-2 pr-4">Alex & Rachel</td>
                <td className="py-2 pr-4">Enjoy group experience & learning</td>
                <td className="py-2">Prompt-based grouping</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4">Higher placement rates</td>
                <td className="py-2 pr-4">Alex & Rachel</td>
                <td className="py-2 pr-4">Work aligned to strengths</td>
                <td className="py-2">Interest-based channels</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4">Higher retention & experience</td>
                <td className="py-2 pr-4">Alex & Rachel</td>
                <td className="py-2 pr-4">Clear expectations up front</td>
                <td className="py-2">Course-embedded analysis</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Figure
          src="/images/classcollab-hypothesis-prioritization.png"
          alt="Hypothesis prioritization canvas"
          caption="Prioritizing for value vs. risk to pick the MVP."
        />
      </Section>

      {/* HYPOTHESIS PRIORITIZATION */}
      <Section id="hypothesis-priority" label="IDEATE" heading="Prioritized hypothesis & risky assumptions">
        <p>Evaluated two candidates against value and risk to decide what to build first.</p>

        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          {/* H1 — chosen */}
          <div className="rounded-xl bg-neutral-100 border-2 border-neutral-800 p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] tracking-[0.16em] uppercase text-foreground/40">Hypothesis 1</span>
              <span className="text-[11px] tracking-[0.12em] uppercase bg-neutral-900 text-white font-medium px-2 py-0.5 rounded-full">Selected</span>
            </div>
            <p className="text-[15px] leading-6">
              Higher team satisfaction via onboarding + past project compatibility
            </p>
            <div className="flex gap-3 mt-auto pt-2 border-t border-neutral-200">
              <div>
                <div className="text-[11px] text-foreground/40 uppercase tracking-widest">Value</div>
                <div className="text-[13px] font-medium">High</div>
              </div>
              <div>
                <div className="text-[11px] text-foreground/40 uppercase tracking-widest">Risk</div>
                <div className="text-[13px] font-medium">Low</div>
              </div>
              <div className="flex-1">
                <div className="text-[11px] text-foreground/40 uppercase tracking-widest">Rationale</div>
                <div className="text-[13px]">Uses existing data sources</div>
              </div>
            </div>
          </div>

          {/* H2 — not chosen */}
          <div className="rounded-xl bg-neutral-100 p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] tracking-[0.16em] uppercase text-foreground/40">Hypothesis 2</span>
            </div>
            <p className="text-[15px] leading-6 text-foreground/70">
              Stronger performance via prompt-based grouping
            </p>
            <div className="flex gap-3 mt-auto pt-2 border-t border-neutral-200">
              <div>
                <div className="text-[11px] text-foreground/40 uppercase tracking-widest">Value</div>
                <div className="text-[13px] font-medium">High</div>
              </div>
              <div>
                <div className="text-[11px] text-foreground/40 uppercase tracking-widest">Risk</div>
                <div className="text-[13px] font-medium text-red-500">High</div>
              </div>
              <div className="flex-1">
                <div className="text-[11px] text-foreground/40 uppercase tracking-widest">Rationale</div>
                <div className="text-[13px] text-foreground/70">Needs evidence of academic lift</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-xl bg-neutral-100 p-6">
          <div className="text-[11px] tracking-[0.16em] uppercase text-foreground/40 mb-3">Prioritized hypothesis</div>
          <p className="text-[16px] leading-7 text-foreground/85">
            We believe we can achieve <strong>higher course evaluations</strong> and{" "}
            <strong>stronger program performance</strong> through well-formed teams if students join groups with{" "}
            <strong>shared goals</strong> and <strong>interests</strong>, supported by compatibility data from{" "}
            <strong>past projects</strong> and an <strong>onboarding survey</strong>.
          </p>
        </div>

        <h4 className="font-semibold mt-10">Risky assumptions</h4>
        <p className="text-foreground/60 text-[15px] mt-1 mb-3">What the prioritized hypothesis depends on being true.</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Students care about being matched with compatible teammates.</li>
          <li>Students will complete onboarding.</li>
          <li>Compatibility (goals, projects, skills) drives satisfaction.</li>
          <li>Past performance predicts future team fit.</li>
          <li>Students trust the process.</li>
        </ul>
      </Section>

      {/* PROTOTYPING */}
      <Section id="prototyping" label="PROTOTYPING" heading="MVP development & walkthrough">
        <p>
          The landing page validated interest but didn’t communicate <em>how</em> it works. I built a clickable
          prototype to demonstrate onboarding and matching, and to validate the assumption that students would
          complete the flow.
        </p>

        <div className="rounded-lg overflow-hidden my-4">
          <video
            src="/images/classcollab-prototyping-walkthrough.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />
        </div>

        <h4 className="font-semibold">Design rationale</h4>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>Onboarding content grounded in insights:</strong> questions about goals, collaboration style,
            and roles reflect literature + survey feedback.
          </li>
          <li>
            <strong>Clearer concept communication:</strong> participants needed more context—prototype made value tangible.
          </li>
          <li>
            <strong>No prior tool familiarity required:</strong> flow is simple and self-explanatory.
          </li>
        </ol>
      </Section>

      {/* TEST */}
      <Section id="test" label="TEST" heading="Unmoderated online testing">
        <h4 className="font-semibold">Participants</h4>
        <p>Seven graduate students with recent team-based coursework (CS/Product Design).</p>

        <h4 className="font-semibold mt-4">Objectives</h4>
        <p>
          Move beyond concept interest to assess whether users <strong>understand and engage</strong> with the value,
          flow, and functionality: complete onboarding, understand matching, and feel confident joining a group.
        </p>

        <h4 className="font-semibold mt-4">Risky assumption under test</h4>
        <p>Students are willing and able to complete onboarding.</p>

        <h4 className="font-semibold mt-4">Research questions</h4>
        <ul className="list-disc pl-5">
          <li>Do users understand the purpose/value of onboarding?</li>
          <li>Is joining a group clear and satisfying?</li>
          <li>Does the team overview reduce uncertainty?</li>
        </ul>

        <h4 className="font-semibold mt-4">Tasks</h4>
        <ol className="list-decimal pl-5">
          <li>Complete onboarding (goals, collaboration style, roles, availability).</li>
          <li>Choose a recommended group.</li>
          <li>Explore the team overview and reflect on readiness.</li>
        </ol>
      </Section>

      {/* RESULTS */}
      <Section id="results" label="RESULTS" heading="Results & next steps">
        <div className="rounded-lg overflow-hidden">
          <video
            src="/images/classcollab-lp.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-6 text-center my-6">
          <div>
            <div className="text-3xl font-semibold">13</div>
            <div className="text-muted">unique visitors</div>
          </div>
          <div>
            <div className="text-3xl font-semibold">8</div>
            <div className="text-muted">unique clicks</div>
          </div>
          <div>
            <div className="text-3xl font-semibold">60%</div>
            <div className="text-muted">CTR</div>
          </div>
        </div>

        <h4 className="font-semibold">Key takeaways</h4>
        <ol className="list-decimal pl-5 space-y-4">
          <li>
            <strong>All participants completed onboarding.</strong> SUS averaged 82.5 → flow is intuitive and
            supports the assumption that students will complete it.
          </li>
          <li>
            <strong>Students want insight into teammate working style & communication.</strong> Added scenario-based
            questions (SJT-inspired) to capture behavior/ethic without lengthening the form.
          </li>
          <li>
            <strong>Students want more context before joining.</strong> Added a team preview (goals, roles, availability)
            with privacy-safe details to support confident selection.
          </li>
        </ol>
      </Section>

      {/* ITERATIONS */}
      <Section id="iterations" label="ITERATIONS" heading="Two major iterations">
        <h4 className="font-semibold">Scenario-based questions → richer insights, fewer steps</h4>
        <p>
          Replaced two direct questions with one scenario prompt to capture work ethic, communication, and personality—
          informed by SJT research—to keep the flow lightweight.
        </p>
        <Figure src="/images/classcollab-iterations-01.png" alt="Iteration: scenario-based questions" />

        <h4 className="font-semibold mt-6">Show member details earlier → more confident selection</h4>
        <p>
          Surfacing teammate info (goals, roles, availability) prior to joining improved confidence and reduced
          uncertainty.
        </p>
        <Figure src="/images/classcollab-iterations-02.png" alt="Iteration: early member details" />
      </Section>

      {/* REFLECTION */}
      <Section id="reflection" label="REFLECTION" heading="Reflection & what I’d do next">
        <h4 className="font-semibold">Quick-and-dirty, then iterate</h4>
        <p>
          Small, testable steps (LP → prototype → unmoderated tests) let me validate assumptions early and shape the
          solution to what students actually need.
        </p>

        <h4 className="font-semibold mt-4">Business POV</h4>
        <p>
          I framed decisions to maximize both user value and institutional outcomes—so the work ties to satisfaction,
          retention, and performance.
        </p>

        <h4 className="font-semibold mt-4">Future work</h4>
        <p>
          Run another usability round on the changes, then validate the assumption that compatibility (goals, past
          projects, skills) <em>increases</em> satisfaction over time.
        </p>
      </Section>
    </div>
  ),
};

export default classcollab;

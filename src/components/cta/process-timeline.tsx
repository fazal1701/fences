const steps = [
  {
    n: "01",
    title: "Tell us about your project",
    body: "Submit basic property and project information.",
  },
  {
    n: "02",
    title: "Site consultation",
    body: "Premier reviews the site, layout, goals and material options.",
  },
  {
    n: "03",
    title: "Design & quote",
    body: "Receive clear recommendations and project scope.",
  },
  {
    n: "04",
    title: "Professional installation",
    body: "Premier's installation team completes the project.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="section-y">
      <div className="container-site">
        <h2 className="max-w-2xl text-[32px] font-bold tracking-tight md:text-[48px]">
          From idea to installation.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.n} className="relative">
              {i < steps.length - 1 ? (
                <div className="absolute left-[28px] top-8 hidden h-px w-[calc(100%-28px)] bg-border md:block" />
              ) : null}
              <div className="flex gap-4 md:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-sm font-bold text-cedar">
                  {step.n}
                </div>
                <div className="md:mt-5">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-[15px] text-muted md:text-[16px]">
                    {step.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

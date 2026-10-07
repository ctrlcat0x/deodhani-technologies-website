import { TextReveal } from "@/components/text-reveal"
import { IconArrowUpRight } from "@tabler/icons-react"
export function DataOverview() {
  return (
    <section
      className="mx-auto grid w-[calc(100%-160px)] max-w-[1400px] grid-cols-2 gap-20 pt-25 pb-[90px] max-[1100px]:w-[calc(100%-80px)] max-[1100px]:gap-10 max-[700px]:w-[calc(100%-50px)] max-[700px]:grid-cols-1 max-[700px]:gap-[25px] max-[700px]:pt-[65px] max-[700px]:pb-[55px]"
      id="data-options"
      aria-labelledby="data-title"
    >
      <div>
        <span className="text-xs text-primary">
          The foundation for better AI
        </span>
        <TextReveal as="h2"
          id="data-title"
          className="mt-5 text-[40px] leading-[1.2] font-normal tracking-[-1.5px] max-[700px]:text-[33px]"
        >
          Every format.
          <br />A human understanding.
        </TextReveal>
      </div>
      <div className="min-w-0">
        <TextReveal as="p" className="mb-5 max-w-[430px] text-sm leading-[1.8] text-muted-foreground max-[700px]:text-[13px]">
          From the first label to a model-ready dataset, we help your team make
          sense of real-world data.
        </TextReveal>
        <div className="grid">
          {[
            "Image & video annotation",
            "Text & document annotation",
            "Speech & audio annotation",
          ].map((label) => (
            <a
              href="#contact"
              key={label}
              className="group flex items-center justify-between border-b border-border py-4 text-[13px] transition-colors hover:text-primary motion-reduce:transition-none"
            >
              {label}
              <IconArrowUpRight
                className="size-[17px] transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
        <div className="mt-[22px] flex gap-[25px]">
          <TextReveal as="p"
            id="datasets"
            className="flex-1 text-[11px] leading-[1.7] text-muted-foreground"
          >
            <strong className="mb-1 block text-xs font-medium text-foreground">
              Off-the-shelf datasets
            </strong>
            Start a conversation about the data your model needs.
          </TextReveal>
          <TextReveal as="p"
            id="enterprise"
            className="flex-1 text-[11px] leading-[1.7] text-muted-foreground"
          >
            <strong className="mb-1 block text-xs font-medium text-foreground">
              Enterprise data
            </strong>
            Discuss a tailored annotation workflow for your team.
          </TextReveal>
        </div>
      </div>
    </section>
  )
}

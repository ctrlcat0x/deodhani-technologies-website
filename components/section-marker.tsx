export function SectionMarker({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="mb-9 flex items-center gap-4 font-mono text-xs sm:text-sm">
      <span className="text-primary">{number}</span>
      <span className="h-px w-10 bg-primary/60 sm:w-16" />
      <span className="text-primary">{title}</span>
      <span className="mx-2 hidden flex-1 border-t-2 border-dotted border-border sm:block" />
      <span className="ml-auto text-right text-xs text-muted-foreground sm:text-sm">
        {description}
      </span>
    </div>
  )
}

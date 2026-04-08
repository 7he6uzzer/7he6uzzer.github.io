import FadeUp from "@/animation/FadeUp";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => {
  return (
    <FadeUp duration={0.6}>
      <div className="mb-14 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          <span className="h-1 w-1 rounded-full bg-primary" />
          {eyebrow}
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gradient sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </FadeUp>
  );
};

export default SectionHeader;

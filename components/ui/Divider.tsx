type DividerProps = {
  className?: string;
};

export function Divider({ className = "" }: DividerProps) {
  return (
    <hr
      className={`h-px w-full shrink-0 border-0 bg-accent-muted ${className}`}
      aria-hidden="true"
    />
  );
}

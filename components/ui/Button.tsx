import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "ghost";

type ButtonBaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseStyles =
  "inline-flex items-center justify-center px-3 py-3 font-body text-label font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-on-accent hover:bg-accent-muted",
  ghost: "border border-accent bg-transparent text-accent hover:bg-accent/10",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  href,
  ...props
}: ButtonProps) {
  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={styles} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={styles} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

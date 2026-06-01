import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonBaseProps = {
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const styles =
  "inline-flex items-center justify-center bg-accent px-4 py-4 text-base font-medium leading-5 text-on-accent transition-colors hover:bg-accent-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Button({ children, className = "", href, ...props }: ButtonProps) {
  if (href) {
    return (
      <a href={href} className={`${styles} ${className}`} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={`${styles} ${className}`} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

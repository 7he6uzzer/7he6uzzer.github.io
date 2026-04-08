import { Mail, Linkedin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 px-6 py-12 sm:px-14 md:px-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <div className="font-heading text-lg font-bold text-gradient-primary">
            Hariprasad K A
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Senior AppSec & Supply-Chain Architect
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="mailto:hariprasad.ka@hotmail.com"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/hariprasad-ka"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://hilinecreators.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
            aria-label="Website"
          >
            <Globe className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

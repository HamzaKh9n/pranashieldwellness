import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  crumbs: Crumb[];
};

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm" style={{ color: "var(--color-body)" }}>
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              {index > 0 && (
                <span className="text-xs text-[#526157] font-medium" aria-hidden="true">
                  /
                </span>
              )}
              {crumb.href && !isLast ? (
                <Link
                  href={crumb.href}
                  className="hover:underline transition-colors text-[#126336] hover:text-[#25834B]"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span
                  className={isLast ? "font-medium" : ""}
                  style={{ color: isLast ? "var(--color-heading)" : "inherit" }}
                >
                  {crumb.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

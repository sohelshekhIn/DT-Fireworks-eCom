import Link from "next/link";

const Breadcrumb = ({
  crumbs,
}: {
  crumbs: {
    name: string;
    href: string;
  }[];
}) => {
  return (
    <div className="w-full flex space-x-2 px-2 py-2 md:py-4">
      {crumbs.map((crumb, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Link
            href={crumb.href}
            className="text-sm text-black hover:text-primary hover:underline transition-colors"
          >
            {crumb.name}
          </Link>
          {index < crumbs.length - 1 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-secondaryDark"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export { Breadcrumb };

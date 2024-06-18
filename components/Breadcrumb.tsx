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
    <div className="my-5 flex w-full space-x-2 px-2 py-2 md:mt-0 md:py-4">
      <Link
        href="/"
        className="text-sm text-black transition-colors hover:text-primary hover:underline dark:text-white dark:hover:text-primaryDark"
      >
        Home
      </Link>
      <CrumbArrow />
      {crumbs.map((crumb, index) => (
        <div key={index} className="flex items-center space-x-2">
          {index == crumbs.length - 1 ? (
            <span className="text-sm text-black dark:text-white">
              {crumb.name}
            </span>
          ) : (
            <Link
              href={crumb.href}
              className="text-sm text-black transition-colors hover:text-primary hover:underline dark:text-white dark:hover:text-primaryDark dark:hover:underline"
            >
              {crumb.name}
            </Link>
          )}
          {index < crumbs.length - 1 && <CrumbArrow />}
        </div>
      ))}
    </div>
  );
};

const CrumbArrow = () => {
  return (
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
  );
};

export { Breadcrumb };

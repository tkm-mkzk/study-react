import classes from "./Links.module.css";

const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation →;",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn →;",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/examples",
    title: "Examples →;",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/deploy",
    title: "Deploy →;",
    description: "Find in-depth information about Next.js features and API.",
  },
];

export function Links() {
  return (
    <div className={classes.grid}>
      {ITEMS.map((item) => {
        return (
          <a key={item.href} href={item.href} className={classes.card}>
            <h3 className={classes.title}>{item.title}</h3>
            <p className={classes.description}>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}

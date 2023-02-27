import { compileMDX } from "next-mdx-remote/rsc";

export default async function Home() {
  const { content, frontmatter } = await compileMDX({
    source: `
      ---
      title: RSC Frontmatter Example
      ---
      This is from Server Components!
    `,
    options: { parseFrontmatter: true },
  });
  return (
    <>
      <h1>{frontmatter.title}</h1>
      {content}
    </>
  );
}

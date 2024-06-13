import NextLink from "next/link";

const Link = (props: React.ComponentProps<typeof NextLink>) => {
  const isExternal = props.href.toString().startsWith("https");

  return (
    <NextLink
      rel={isExternal ? "noopener noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
      {...props}
    />
  );
};

export default Link;

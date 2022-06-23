type TStyle = string | undefined;

export const filterStyles = (styles: TStyle[]) => {
  const result = styles.filter((style) => style !== undefined).join(" ");
  if (result) return result;
};

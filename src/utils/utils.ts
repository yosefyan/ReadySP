export const centerItem = (...flexProps: string[]) => {
  const [justify, items] = flexProps;
  return `flex ${justify || "justify-center"} ${items || "items-center"}`;
};

export const grid = (...gridProps: string[]) => {
  const [column, row, justify] = gridProps;
  return `grid ${column || ""} ${row || ""} ${
    justify || "justify-items-center"
  }`;
};

export const cardWidthHeight = (): string => "w-[30vw] h-[100vh]";

export const gradient = (isText: boolean, ...colors: string[]): string => {
  const [fst, snd] = colors;
  return `${
    isText ? "bg-clip-text text-transparent" : ""
  } bg-gradient-to-tl ${fst} ${snd}`;
};

export const inputStyles = (bgColor: string, ...sizes: string[]) => {
  const [width, height, borderSize, borderColor] = sizes;
  return `${width} ${height} ${borderSize} ${borderColor} ${bgColor}`;
};

export const triangleStyles = (
  upsideDown: boolean,
  height?: string,
  color?: string
) => {
  return `w-0 h-0 border-l-[12rem] border-l-transparent ${
    upsideDown ? "border-b-[7rem]" : `${height || "border-t-[7rem]"} `
  } ${color} ${
    upsideDown ? `border-b-red-500/15` : `border-t-green-500/15`
  } border-r-[12rem] border-r-transparent`;
};

export const buttonStyles = (fontSize?: string) => {
  return `w-[25vw] text-center p-4 ${
    fontSize || "text-4xl"
  } text-white/25 font-black tracking-widest cursor-pointer select-none hover:scale-95 transition-all`;
};

export const titleStyles = (fontSize?: string) => {
  return `${fontSize || "text-4xl"} text-center font-black tracking-widest`;
};

export const labelStyles: string =
  "text-6xl text-white/50 absolute transition-all blur-3xl scale-0 tShadow";

export const shadowEffects: string = `rotateSpace tShadow bg-sky-500/5 shadow-lg rounded-full shadow-white/25 transition-all`;

export const iconStyles = (size?: string) => {
  return `${size || "text-5xl"} font-black cursor-pointer`;
};
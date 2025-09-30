// Global type declarations for CSS imports

// For CSS modules (named imports)
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.sass" {
  const classes: { [key: string]: string };
  export default classes;
}

// For side-effect CSS imports (like './globals.css')
declare module "*.css" {
  const content: void;
}

declare module "*.scss" {
  const content: void;
}

declare module "*.sass" {
  const content: void;
}

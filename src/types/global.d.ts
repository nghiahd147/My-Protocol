declare module "*.png"; 
declare module "*.jpg"; 
declare module "*.jpeg"; 
declare module "*.svg"; 
declare module "*.gif"; 

declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}
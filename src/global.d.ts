//css module을 사용하기 위한 모듈 형식 선언.
declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.css" {
  const content: { [className: string]: string };
  export = content;
}

//css module을 사용하기 위한 모듈 형식 선언.
declare module "*.jpeg";
declare module "*.svg";

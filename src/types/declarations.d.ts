declare module 'next' {
  export interface Metadata {
    title?: string | { default: string; template: string };
    description?: string;
    keywords?: string[] | string;
    authors?: Array<{ name: string; url?: string }>;
    openGraph?: any;
    twitter?: any;
    icons?: any;
    alternates?: any;
    robots?: any;
  }
  export type ResolvingMetadata = Promise<Metadata>;
  export type ResolvingViewport = Promise<any>;
  export interface NextConfig {
    [key: string]: any;
  }
}

declare module 'next/image' {
  import * as React from 'react';
  export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    priority?: boolean;
    quality?: number;
    sizes?: string;
    className?: string;
    unoptimized?: boolean;
  }
  const Image: React.FC<ImageProps>;
  export default Image;
}

declare module 'next/link' {
  import * as React from 'react';
  export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    children?: React.ReactNode;
  }
  const Link: React.FC<LinkProps>;
  export default Link;
}

declare module 'next/font/google' {
  export function Geist(options?: any): { variable: string; className: string };
  export function Geist_Mono(options?: any): { variable: string; className: string };
  export function Montserrat(options?: any): { variable: string; className: string };
  export function Inter(options?: any): { variable: string; className: string };
  export function Plus_Jakarta_Sans(options?: any): { variable: string; className: string };
}

declare module 'next/types.js' {
  export type ResolvingMetadata = Promise<any>;
  export type ResolvingViewport = Promise<any>;
}

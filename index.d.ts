import { Plugin } from 'vite';

export interface Options {
  fileRegex: RegExp;
}

declare const markdownRawPlugin: (options?: Options) => Plugin;

export default markdownRawPlugin;

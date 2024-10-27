declare module '@glidejs/glide' {
  export default class Glide {
    constructor(target: string | HTMLElement, options?: GlideOptions);
    mount(): void;
    destroy(): void;
    on(events: string | string[], callback: (event: string) => void): void;
    index: number;
  }
}

interface GlideOptions {
  type?: string;
  startAt?: number;
  perView?: number;
  focusAt?: number | string;
  gap?: number;
  autoplay?: number | boolean;
  hoverpause?: boolean;
  keyboard?: boolean;
  bound?: boolean;
  swipeThreshold?: number | boolean;
  dragThreshold?: number | boolean;
  perTouch?: number | boolean;
  touchRatio?: number;
  touchAngle?: number;
  animationDuration?: number;
  rewind?: boolean;
  rewindDuration?: number;
  animationTimingFunc?: string;
  direction?: 'ltr' | 'rtl';
  peek?: number | { before?: number; after?: number };
  breakpoints?: Record<number, Partial<GlideOptions>>;
}

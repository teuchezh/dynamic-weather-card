// Globals the bundler injects at build time (see build.ts)
(globalThis as unknown as { __VERSION__: string }).__VERSION__ = 'test';

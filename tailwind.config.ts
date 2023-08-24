import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        body: 'auto 1fr auto',
        chat: '1fr auto',
      },
      gridTemplateColumns: {
        section: 'auto 1fr',
      },
    },
  },
  plugins: [],
}

export default config

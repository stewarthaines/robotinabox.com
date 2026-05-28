import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://robotinabox.com',
  integrations: [
    starlight({
      title: 'SEED Docs',
      description: 'Simple EPUB Editor — the simplest way to create EPUB books',
      logo: {
        src: './public/img/RobotInaBox-trademark_logo.png',
        alt: 'RobotInaBox',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'docs/introduction' },
          ],
        },
      ],
      customCss: [],
    }),
  ],
});

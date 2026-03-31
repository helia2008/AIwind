import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '首页',
      href: '/',
    },
    {
      text: 'AI 工具',
      href: '/tools',
    },
    {
      text: '最新洞见',
      href: '/blog',
    },
    {
      text: '关于我们',
      href: '/about',
    },
  ],
  actions: [
    {
      text: '免费体验 AI',
      href: '/tools',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: '产品',
      links: [
        { text: 'AI 工具大全', href: '/tools' },
        { text: '最新更新', href: '/blog' },
      ],
    },
    {
      title: '关于',
      links: [
        { text: '关于我们', href: '/about' },
        { text: '联系方式', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: '条款', href: getPermalink('/terms') },
    { text: '隐私政策', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/helia2008/AIwind' },
  ],
  footNote: `
    © 2026 AIwind · 由 AstroWind 驱动
  `,
};

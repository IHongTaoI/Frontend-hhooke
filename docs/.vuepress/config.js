module.exports = {
  title: '洪涛的传奇生涯',
  description: '技术只是浮云，生活才是真正的追求。我们要做的就是好好生活顺便把事干好。',
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }],
    ['meta', { content: 'text/html;charset=utf-8', 'http-equiv': 'Content-Type' }],
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      {
        text: '博文',
        items: [
          { text: 'Android', link: '/android/' },
          { text: 'ios', link: '/ios/' },
          { text: 'Web', link: '/web/' }
        ]
      },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://www.github.com/codeteenager' },
    ],
    sidebar: {
      '/android/': [
        "",
        "android1",
      ],
      "/ios/": [
        "",
        "ios1",
      ],
      "/web/": [
        "",
        "web1",
      ],
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
  },
  dest: './page',
  ga: '',
  evergreen: true
}
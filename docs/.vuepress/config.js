module.exports = {
  base: '/hhooke/',
  dest: './page',
  title: '洪涛的传奇生涯',
  description: "技术只是浮云，生活才是真正的追求。我们要做的就是好好生活顺便把事干好。",
  lastUpdated: '最近更新',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      {
        text: '学习笔记',
        items: [
          { text: '关于git', link: '/study/git/' },
          // { text: 'Java', link: '/study/java/' },
          // { text: 'SpringBoot', link: '/study/springboot/' },
          // { text: 'SpringCloud', link: '/study/springcloud/' },
          // { text: 'Linux', link: '/study/linux/' },
          // { text: 'Javascript', link: '/study/javascript/' },
          // { text: 'Vue', link: '/study/vue/' },
          // { text: 'Docker', link: '/study/docker/' },
          { text: '填坑指南', link: '/study/other/' },
        ]
      },
      { text: '收藏工具', link: '/favorite/' },
      {
        text: '我的博客', items: [
          { text: '掘金', link: 'https://juejin.im/user/5a16ce4f5188254dd9361351' },
          { text: '简书', link: 'https://www.jianshu.com/u/d842c79cf424' },
          { text: '个人网站', link: 'http://www.hhooke.cn' }
        ]
      },
    ],
    sidebar: {
      '/study/git/': getGitSidebar(),
      '/study/java/': getJavaSidebar("Java", "更多"),
      '/study/docker/': getDockerSidebar("Docker", "更多"),
      '/study/javascript/': getJavascriptSidebar("Javascript", "更多"),
      '/study/linux/': getLinuxSidebar("Linux", "更多"),
      '/study/springboot/': getSBSidebar("Spring", "更多"),
      '/study/springcloud/': getSCSidebar("SpringCloud", "更多"),
      '/study/vue/': getVueSidebar("Vue", "更多"),
      '/study/other/': getOtherSidebar("填坑指南", ""),
      '/favorite/': ['']
    },
    base: '/',
    dest: './docs/.vuepress/dist',
    // 假定 GitHub。也可以是一个完整的 GitLab URL。
    repo: 'https://github.com/IHongTaoI',
    // 自定义项目git remote add origin https://github.com/DuebassLei/vuepress-blog.git仓库链接文字
    // 默认根据 `themeConfig.repo` 中的 URL 来自动匹配是 "GitHub"/"GitLab"/"Bitbucket" 中的哪个，如果不设置时是 "Source"。
    repoLabel: 'github',
    // 以下为可选的 "Edit this page" 链接选项
    editLinks: false,
    // 自定义编辑链接的文本。默认是 "Edit this page"
    editLinkText: '帮助我们改进页面内容！'
  }
}
function getDockerSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        ''
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'About'
      ]
    }
  ]
}

function getGitSidebar(groupA, groupB) {
  return [
    {
      title: '基础',
      collapsable: false,
      children: [
        '',
        'question'
      ]
    },
    {
      title: '',
      collapsable: false,
      children: [
        'more'
      ]
    }
  ]
}

function getJavaSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        ''
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'About'
      ]
    }
  ]
}
function getJavascriptSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'js-tools'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'About'
      ]
    }]
}
function getLinuxSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'SetProxy',
        'Git-Qs',
        'IosVpn',
        'InstallTools'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'About'
      ]
    }]
}
function getSBSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'poi-excel',
        'vue-excel'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'About'
      ]
    }]
}
function getSCSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        ''
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'About'
      ]
    }]
}
function getVueSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'Moment',
        'arrayConvertTree'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'About'
      ]
    }]
}
function getOtherSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        'weixinpub'
      ]
    }]
}

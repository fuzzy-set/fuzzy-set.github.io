module.exports = {
    title: 'fuzzy-set的博客',
    description: '////',
	dest:'./docs/.vuepress/dist',
	repo:'git@github.com:fuzzy-set/fuzzy-set.github.io.git',
    port: '7777',
    head: [
      ['link', {rel: 'icon', href: '/logo.jpg'}]
  ],
  markdown: {
      lineNumbers: true
  },
  themeConfig: {
      nav: [{
          text: '最近更新', link: '/gengxin/'
      },
	  { text: '学习笔记', link: '/guide/'},
	  { text: '网上冲浪', link: '/think/'},	  
	  ],
      sidebar: {'/guide/':[
          {
                title:'新手指南',
                collapsable: true,
                children:[
                  '/guide/notes/one',
                ]
              },
              {
                title:'知码学院',
                collapsable: true,
                children:[
                  '/guide/notes/two',
                ]
              }
          ]
      },
      sidebarDepth: 2,
      lastUpdated: 'Last Updated',
      searchMaxSuggestoins: 10,
      serviceWorker: {
          updatePopup: {
              message: "有新的内容.",
              buttonText: '更新'
          }
      },
      editLinks: true,
      editLinkText: '在 GitHub 上编辑此页 ！'
  }
  }
  
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/MyStudyBlog/",
  title: "小伟の学习Blog",
  description: "A VitePress Site",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/MyStudyBlog/../public/images/avatar.jpg",
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'vue系列', items: [
          { text: "Vue2系列", link: '/MyStudyBlog/../vue/vue2.md' },
          { text: "Vue3系列", link: '/MyStudyBlog/../vue/vue3.md' }
        ]
      },
      { text: 'uniapp系列', link: '/MyStudyBlog/../uniapp/index.md' }
    ],

    sidebar: [
      {
        text: 'vue系列',
        link: '/MyStudyBlog/../vue/index.md',
        collapsed: false,
        items: [
          { text: "Vue2系列", link: '/MyStudyBlog/../vue/vue2.md' },
          { text: "Vue3系列", link: '/MyStudyBlog/../vue/vue3.md' }
        ]
      },
      {
        text: 'uniapp系列',
        collapsed: false,
        link: '/MyStudyBlog/../uniapp/index.md',
        items: [
          { text: 'uniapp系列', }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LiTouWei' }
    ]
  }
})

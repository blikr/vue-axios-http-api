/*
 * @Descripttion:
 * @Author: beiwangshan
 * @version:
 * @Date: 2022-04-10 04:25:02
 * @LastEditors: beiwangshan
 * @LastEditTime: 2022-05-04 20:49:52
 */
const axios = require('axios')
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: '贵州忠进科技有限公司官网',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge,Chrome=1"
      },
      {
        name: "renderer",
        content: "webkit"
      },
      {
        name: 'viewport',
        content: 'width=device-width,height=device-height,maximum-scale=1.0,user-scalable=no'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        name: 'keywords',
        content: ''
      },
      {
        name: 'description',
        content: ''
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: '/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/animate.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/swiper.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/style.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/main.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/iconfont.css'
      },
    ],
    script: [{
        src: '/js/jquery-1.11.3.min.js',
        ssr: true
      },
      {
        src: '/js/bootstrap.min.js',
        ssr: true
      },
      {
        src: '/js/swiper.min.js',
        ssr: true
      },
      {
        src: '/js/iconfont.js',
        ssr: true
      }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    {
      src: '~plugins/mavon-editor',
      ssr: true
    },
    {
      src: '~/plugins/store.js',
      ssr: false
    },
    {
      src: '~/plugins/copy.js',
      ssr: true
    },
    {
      src: '@/plugins/dateformat',
      ssr: true
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/sitemap'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    },
  },
  proxy: {
    '/sys/': {
      target: 'http://localhost:8091',
    },
    '/post': {
      target: 'http://localhost:8091',
    },
    '/login/': {
      target: 'http://localhost:8091',
    },
    '/category': {
      target: 'http://localhost:8091',
    },
    '/upload': {
      target: 'http://localhost:8091',
    },
    '/file': {
      target: 'http://localhost:8091',
    },
  },
  axios: {
    proxy: true
  },
  sitemap: {
    path: '/sitemap.xml', // sitemap path，不用改
    hostname: 'https://www.zjkjgs.com/', // sitemap网址的前缀
    cacheTime: 60 * 60 * 6, //  更新频率，只在 generate: false有用
    gzip: true, // 生成 .xml.gz 压缩的 sitemap
    generate: false, // 允许使用 nuxt generate 生成
    // 排除不要页面
    exclude: [
      '/login',
      '/edit',
    ],
  }
}

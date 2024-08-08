// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TAB = "Satxm";
export const SITE_TITLE = "Satxm";
export const SITE_DESCRIPTION = "Satxm's Home";
export const DATE_FORMAT = "YYYY-MM-DD";

// User profile information
export const USER_NAME = "Satxm";
export const USER_AVATAR = "/imgs/profile.jpg";

// Server and transition settings
export const SERVER_URL = "https://www.satxm.top";
export const TRANSITION_API = true;

// Some informative text on the site
export const infoTest = {
  tag: "标签：",
  noTag: "None",
  tagPage: "标签 - ",
  noCategory: "None",
  categoriesPage: "分类",
  categoryPage: "分类 - ",
  link: "链接：",
  prevPage: "上一页",
  nextPage: "下一页",
};

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "主页", href: "/", svg: "home", target: "_self" }, // Home page
  { id: "about", text: "关于", href: "/about", svg: "about", target: "_self" }, // About page
  {
    id: "blog",
    text: "文章",
    href: "/blog",
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "所有文章",
        href: "/blog",
        svg: "post",
        target: "_self",
      }, // All blog
      {
        id: "tech",
        text: "技术文章",
        href: "/blog/categories/技术",
        svg: "cube",
        target: "_self",
      }, // Technology category
      {
        id: "life",
        text: "日常随笔",
        href: "/blog/categories/日常",
        svg: "heart",
        target: "_self",
      }, // Life category
      {
        id: "categories",
        text: "所有类别",
        href: "/blog/categories",
        svg: "categories",
        target: "_self",
      }, // All categories
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    text: "项目",
    href: "/project",
    svg: "project",
    target: "_self",
  }, // Projects page
  {
    id: "friend",
    text: "友链",
    href: "/friend",
    svg: "friend",
    target: "_self",
  }, // Friends page
  {
    id: "contact",
    text: "联系我",
    href: "mailto:Satxm@outlook.com", // Contact email
    target: "_blank", // Open in a new tab
    svg: "contact",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://github.com/Satxm",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "https://gitee.com/satxm",
    ariaLabel: "Gitee",
    title: "Gitee",
    svg: "gitee",
  },
  {
    href: "https://space.bilibili.com/350697357",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "bilibili",
  },
  {
    href: "https://modrinth.com/user/satxm",
    ariaLabel: "Modrinth",
    title: "Modrinth",
    svg: "modrinth",
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "rss",
  },
];

// Category Information
export const categoriesInfo = [
  { title: "技术", desc: "技术文章", target: "_self" },
  { title: "日常", desc: "日常随笔", target: "_self" },
];

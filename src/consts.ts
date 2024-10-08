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
export const SERVER_URL = "https://www.sat911.top";
export const WALIINE_URL = "https://waline.sat911.top"
export const ICP_INFO = "陕ICP备19013534号"

// Some informative text on the site
export const infoText = {
  tag: "标签：",
  noTag: "None",
  tagCard: "标签",
  tagPage: "标签 - ",
  noCategory: "None",
  categoryCard: "分类",
  categoryPage: "分类 - ",
  link: "链接：",
  prevPage: "上一页",
  nextPage: "下一页",
};

// Menu items for navigation
export const menuItems = [
  { id: "主页", text: "主页", href: "/", svg: "home", target: "_self" },
  { id: "文章", text: "文章", href: "/posts", svg: "blog", target: "_self", subItems: [
    { id: "文章", text: "所有文章", href: "/posts", svg: "post", target: "_self", },
    { id: "技术", text: "技术文章", href: "/技术", svg: "cube", target: "_self", },
    { id: "日常", text: "日常随笔", href: "/日常", svg: "heart", target: "_self", },
  ], },
  { id: "项目", text: "项目", href: "/project", svg: "project", target: "_self", },
  { id: "友链", text: "友链", href: "/friend", svg: "friend", target: "_self", },
  { id: "关于", text: "关于", href: "/about", svg: "about", target: "_self", },
  { id: "RSS", text: "RSS", href: "/rss.xml", svg: "bookmark", target: "_blank", },
];

// Social media and contact icons
export const socialIcons = [
  { href: "https://github.com/Satxm", ariaLabel: "Github", title: "Github", svg: "github", },
  { href: "https://gitee.com/satxm", ariaLabel: "Gitee", title: "Gitee", svg: "gitee", },
  { href: "https://space.bilibili.com/350697357", ariaLabel: "BiliBili", title: "BiliBili", svg: "bilibili", },
  { href: "https://modrinth.com/user/satxm", ariaLabel: "Modrinth", title: "Modrinth", svg: "modrinth", },
  { href: "https://steamcommunity.com/id/sat911/", ariaLabel: "Steam", title: "Steam", svg: "steam", },
];

// Category Information
export const categoriesInfo = [
  { title: "技术", desc: "技术文章", target: "_self" },
  { title: "日常", desc: "日常随笔", target: "_self" },
];

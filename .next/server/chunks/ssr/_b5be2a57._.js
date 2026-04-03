module.exports = {

"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/not-found.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/.content-collections/generated/allBlogs.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = [
    {
        "content": "这篇文章包含markdown语法基本的内容。\r\n\r\n在markdown里可以使用 \\ 对特殊符号进行转义。  \r\n\r\n# 1. 标题\r\n\r\n**语法**\r\n```md\r\n# This is an <h1> tag\r\n## This is an <h2> tag\r\n### This is an <h3> tag\r\n#### This is an <h4> tag\r\n```\r\n\r\n**实例**\r\n\r\n# This is an h1 tag\r\n## This is an h2 tag\r\n### This is an h3 tag\r\n#### This is an h4 tag\r\n\r\n# 2. 强调和斜体\r\n\r\n**语法**\r\n```md\r\n*This text will be italic*\r\n_This will also be italic_\r\n\r\n**This text will be bold**\r\n__This will also be bold__\r\n```\r\n\r\n**实例**\r\n\r\n*This text will be italic*\r\n_This will also be italic_\r\n\r\n**This text will be bold**\r\n__This will also be bold__\r\n\r\n# 3. 有序列表和无序列表\r\n\r\n**语法**\r\n```md\r\n* Item 1\r\n* Item 2\r\n* Item 3\r\n\r\n1. Item 1\r\n2. Item 2\r\n3. Item 3\r\n```\r\n\r\n**实例**\r\n* Item 1\r\n* Item 2\r\n* Item 3\r\n\r\n1. Item 1\r\n2. Item 2\r\n3. Item 3\r\n\r\n# 4. 图片\r\n\r\n**语法**\r\n```\r\n![img-name](img-url)\r\n```\r\n\r\n**实例**\r\n![微信公众号](https://storage.guangzhengli.com/images/wechat-official-account.png)\r\n\r\n# 5. 超链接\r\n\r\n**语法**\r\n```\r\n[link-name](link-url)\r\n```\r\n\r\n**实例**\r\n\r\n[微信公众号链接](https://storage.guangzhengli.com/images/wechat-official-account.png)\r\n\r\n# 6. 引用\r\n\r\n**语法**\r\n```md\r\n> 引用本意是引用别人的话之类  \r\n```\r\n\r\n**实例**\r\n\r\n> If you please draw me a sheep!  \r\n> 不想当将军的士兵, 不是好士兵.  \r\n\r\n# 7. 单行代码\r\n\r\n**语法**\r\n```\r\n`This is an inline code.`\r\n```\r\n\r\n**实例**\r\n\r\n`同样的单行代码, 我经常用来显示特殊名词`\r\n\r\n# 8. 多行代码\r\n\r\n**语法**\r\n\r\n```md\r\n​```js\r\nfor (var i=0; i<100; i++) {\r\n    console.log(\"hello world\" + i);\r\n}\r\n​```\r\n```\r\n\r\n**实例**\r\n\r\n```js\r\nfor (var i=0; i<100; i++) {\r\n    console.log(\"hello world\" + i);\r\n}\r\n```\r\n\r\n也可以通过缩进来显示代码, 下面是示例:  \r\n\r\n    console.loe(\"Hello_World\");\r\n\r\n# 9. 表格\r\n\r\n## Table\r\n\r\n| Table Header 1 | Table Header 2 | Table Header 3 |\r\n| - | - | - |\r\n| Division 1 | Division 2 | Division 3 |\r\n| Division 1 | Division 2 | Division 3 |\r\n| Division 1 | Division 2 | Division 3 |\r\n\r\n# 参考链接\r\n\r\n- https://guides.github.com/features/mastering-markdown/  \r\n- https://help.github.com/articles/basic-writing-and-formatting-syntax/",
        "title": "Markdown 基本用法",
        "date": "2025-04-05T20:10:00+08:00",
        "updated": "2025-04-05T20:10:00+08:00",
        "featured": true,
        "summary": "这篇文章包含markdown语法基本的内容。",
        "keywords": [
            "hello",
            "world"
        ],
        "_meta": {
            "filePath": "hello-world.md",
            "fileName": "hello-world.md",
            "directory": ".",
            "extension": "md",
            "path": "hello-world"
        },
        "slug": "hello-world"
    },
    {
        "content": "这是一个 Nextjs 博客模板，本文会介绍这个模板的一些基本用法。\r\n\r\n## 1. 如何编写博客\r\n\r\n这个仓库的博客文件需要放在 `src/content/blog` 目录下，可以是 markdown 文件，也可以是 mdx 文件。\r\n\r\n有以下这些元数据需要用户自行根据需要进行配置：\r\n\r\n- `title`: 博客标题\r\n- `date`: 博客发布日期\r\n- `updated`: 博客更新日期\r\n- `keywords`: 博客关键词，优化 SEO\r\n- `featured`: 是否放在首页\r\n- `summary`: 博客摘要\r\n\r\n## 2. 博客配置\r\n\r\n博客的所有配置都集中在 `src/lib/config.ts` 文件中，这样做的好处是：\r\n\r\n1. 集中管理：所有配置都在一个文件中，方便维护和修改\r\n2. 类型安全：使用 TypeScript 可以获得类型检查和自动补全\r\n3. 复用性：避免重复的配置散落在各个文件中\r\n4. 一致性：确保所有地方使用相同的配置值\r\n\r\n### 2.1 站点基本配置\r\n\r\n```typescript\r\nsite: {\r\n  title: \"你的博客标题\",\r\n  name: \"你的博客名称\",\r\n  description: \"博客描述\",\r\n  keywords: [\"关键词1\", \"关键词2\"],\r\n  url: \"https://你的域名.com\",\r\n  baseUrl: \"https://你的域名.com\",\r\n  image: \"https://你的域名.com/og-image.png\",\r\n  favicon: {\r\n    ico: \"/favicon.ico\",\r\n    png: \"/favicon.png\",\r\n    svg: \"/favicon.svg\",\r\n    appleTouchIcon: \"/favicon.png\",\r\n  },\r\n  manifest: \"/site.webmanifest\",\r\n}\r\n```\r\n\r\n这些配置用于：\r\n- 网站的基本信息展示\r\n- SEO 优化\r\n- 浏览器标签页图标\r\n- 社交媒体分享预览\r\n\r\n### 2.2 作者信息配置\r\n\r\n```typescript\r\nauthor: {\r\n  name: \"你的名字\",\r\n  email: \"你的邮箱\",\r\n  bio: \"个人简介\",\r\n}\r\n```\r\n\r\n作者信息会用于：\r\n- 首页展示\r\n- RSS 订阅源信息\r\n- 博客文章的作者信息\r\n\r\n### 2.3 社交媒体配置\r\n\r\n```typescript\r\nsocial: {\r\n  github: \"https://github.com/你的用户名\",\r\n  x: \"https://x.com/你的用户名\",\r\n  xiaohongshu: \"https://www.xiaohongshu.com/user/profile/你的ID\",\r\n  wechat: \"你的微信二维码图片链接\",\r\n  buyMeACoffee: \"https://www.buymeacoffee.com/你的用户名\",\r\n}\r\n```\r\n\r\n这些链接会显示在：\r\n- 首页的社交媒体链接区域\r\n- 导航栏的社交媒体图标\r\n\r\n### 2.4 评论系统配置\r\n\r\n```typescript\r\ngiscus: {\r\n  repo: \"你的GitHub仓库名\",\r\n  repoId: \"仓库ID\",\r\n  categoryId: \"分类ID\",\r\n}\r\n```\r\n\r\n使用 Giscus 作为评论系统，需要：\r\n1. 在 GitHub 上安装 Giscus 应用\r\n2. 在你的仓库中启用 Discussions\r\n3. 获取配置信息并填入这里\r\n\r\n### 2.5 导航菜单配置\r\n\r\n```typescript\r\nnavigation: {\r\n  main: [\r\n    { \r\n      title: \"文章\", \r\n      href: \"/blog\",\r\n    },\r\n    // 可以添加更多导航项\r\n  ],\r\n}\r\n```\r\n\r\n这里配置网站的导航菜单，支持：\r\n- 普通链接\r\n- 带子菜单的下拉菜单\r\n\r\n### 2.6 SEO 配置\r\n\r\n```typescript\r\nseo: {\r\n  metadataBase: new URL(\"https://你的域名.com\"),\r\n  alternates: {\r\n    canonical: './',\r\n  },\r\n  openGraph: {\r\n    type: \"website\" as const,\r\n    locale: \"zh_CN\",\r\n  },\r\n  twitter: {\r\n    card: \"summary_large_image\" as const,\r\n    creator: \"@你的推特用户名\",\r\n  },\r\n}\r\n```\r\n\r\n这些配置用于：\r\n- 搜索引擎优化\r\n- 社交媒体分享卡片\r\n- 网站元数据\r\n\r\n### 2.7 RSS 订阅配置\r\n\r\n```typescript\r\nrss: {\r\n  title: \"你的博客标题\",\r\n  description: \"博客描述\",\r\n  feedLinks: {\r\n    rss2: \"/rss.xml\",\r\n    json: \"/feed.json\",\r\n    atom: \"/atom.xml\",\r\n  },\r\n}\r\n```\r\n\r\n这些配置用于生成：\r\n- RSS 2.0 订阅源\r\n- JSON Feed\r\n- Atom 订阅源\r\n\r\n## 3. 如何修改配置\r\n\r\n1. 打开 `src/lib/config.ts` 文件\r\n2. 根据你的需求修改相应的配置项\r\n3. 保存文件后，Next.js 会自动重新构建并应用新的配置\r\n\r\n注意事项：\r\n- 确保所有 URL 都是有效的\r\n- 图片链接应该是可访问的\r\n- 社交媒体链接要填写完整的 URL\r\n- 配置修改后，建议检查网站的：\r\n  - 首页展示\r\n  - 导航菜单\r\n  - SEO 信息\r\n  - 社交媒体分享效果\r\n  - RSS 订阅源\r\n\r\n## 4. 如何生成 RSS 订阅源\r\n\r\n修改 scripts/generate-rss.js 文件中的配置，然后运行：\r\n\r\n```bash\r\nnpm run generate-rss\r\n```\r\n\r\n## 5. 如何生成 Sitemap\r\n\r\n修改 scripts/generate-sitemap.js 文件中的配置，然后运行：\r\n\r\n```bash\r\nnpm run generate-sitemap\r\n```",
        "title": "博客模板使用介绍",
        "date": "2025-04-05T21:10:00+08:00",
        "updated": "2025-04-05T21:10:00+08:00",
        "featured": true,
        "summary": "这是一个 Nextjs 博客模板，本文会介绍这个模板的一些基本用法",
        "keywords": [
            "hello",
            "world"
        ],
        "_meta": {
            "filePath": "intro.md",
            "fileName": "intro.md",
            "directory": ".",
            "extension": "md",
            "path": "intro"
        },
        "slug": "intro"
    }
];
}}),
"[project]/.content-collections/generated/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// generated by content-collections at Fri Apr 03 2026 21:01:48 GMT+0800 (中国标准时间)
__turbopack_context__.s({});
;
;
}}),
"[project]/.content-collections/generated/index.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$content$2d$collections$2f$generated$2f$allBlogs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.content-collections/generated/allBlogs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$content$2d$collections$2f$generated$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.content-collections/generated/index.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/.content-collections/generated/allBlogs.js [app-rsc] (ecmascript) <export default as allBlogs>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "allBlogs": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$content$2d$collections$2f$generated$2f$allBlogs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$content$2d$collections$2f$generated$2f$allBlogs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.content-collections/generated/allBlogs.js [app-rsc] (ecmascript)");
}}),
"[project]/src/lib/utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "absoluteUrl": (()=>absoluteUrl),
    "cn": (()=>cn),
    "formatDate": (()=>formatDate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function absoluteUrl(path) {
    return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}
function formatDate(date) {
    const [year, month, day] = new Date(date).toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }).split('/');
    return `${year}年${month}月${day}日`;
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$content$2d$collections$2f$generated$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/.content-collections/generated/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$content$2d$collections$2f$generated$2f$allBlogs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__allBlogs$3e$__ = __turbopack_context__.i("[project]/.content-collections/generated/allBlogs.js [app-rsc] (ecmascript) <export default as allBlogs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$word$2d$count$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/word-count/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
function Home() {
    const blogs = __TURBOPACK__imported__module__$5b$project$5d2f2e$content$2d$collections$2f$generated$2f$allBlogs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__allBlogs$3e$__["allBlogs"].filter((blog)=>blog.featured === true).sort((a, b)=>new Date(b.date).getTime() - new Date(a.date).getTime());
    const socialLinks = [
        // { name: "赞赏", key: "buyMeACoffee" },
        // { name: "X", key: "x" },
        // { name: "小红书", key: "xiaohongshu" },
        // { name: "微信公众号", key: "wechat" },
        {
            name: "",
            key: ""
        }
    ].map((item)=>({
            name: item.name,
            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["config"].social && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["config"].social[item.key]
        })).filter((link)=>!!link.href);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-3xl mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-16 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["config"].site.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-md text-gray-600",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["config"].author.bio
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    socialLinks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-2 text-gray-600",
                        children: socialLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mx-1",
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        className: "underline underline-offset-4",
                                        children: link.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, link.name, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-8",
                        children: "推荐阅读"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: blogs.map((blog)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/blog/${blog.slug}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-semibold underline underline-offset-4",
                                                        children: blog.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-500",
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDate"])(blog.date),
                                                            " · ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$word$2d$count$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(blog.content),
                                                            " 字"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 54,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 line-clamp-2",
                                                children: blog.summary
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 62,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this)
                            }, blog.slug, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_b5be2a57._.js.map
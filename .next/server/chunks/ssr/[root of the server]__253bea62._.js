module.exports = {

"[project]/.next-internal/server/app/blog/[...slug]/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
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
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/node:path [external] (node:path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}}),
"[externals]/node:path [external] (node:path, cjs) <export default as minpath>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "minpath": (()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
}}),
"[externals]/node:process [external] (node:process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}}),
"[externals]/node:process [external] (node:process, cjs) <export default as minproc>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "minproc": (()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
}}),
"[externals]/node:url [external] (node:url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}}),
"[externals]/node:url [external] (node:url, cjs) <export fileURLToPath as urlToPath>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "urlToPath": (()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"])
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
}}),
"[project]/src/lib/toc.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// @ts-nocheck
__turbopack_context__.s({
    "getTableOfContents": (()=>getTableOfContents)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$toc$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-toc/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/unist-util-visit/lib/index.js [app-rsc] (ecmascript) <locals>");
;
;
;
const textTypes = [
    "text",
    "emphasis",
    "strong",
    "inlineCode"
];
function flattenNode(node) {
    const p = [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(node, (node)=>{
        if (!textTypes.includes(node.type)) return;
        p.push(node.value);
    });
    return p.join(``);
}
function getItems(node, current) {
    if (!node) {
        return {};
    }
    if (node.type === "paragraph") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(node, (item)=>{
            if (item.type === "link") {
                current.url = item.url;
                current.title = flattenNode(node);
            }
            if (item.type === "text") {
                current.title = flattenNode(node);
            }
        });
        return current;
    }
    if (node.type === "list") {
        current.items = node.children.map((i)=>getItems(i, {}));
        return current;
    } else if (node.type === "listItem") {
        const heading = getItems(node.children[0], {});
        if (node.children.length > 1) {
            getItems(node.children[1], heading);
        }
        return heading;
    }
    return {};
}
const getToc = ()=>(node, file)=>{
        const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$toc$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toc"])(node);
        const items = getItems(table.map, {});
        file.data = items;
    };
async function getTableOfContents(content) {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["remark"])().use(getToc).process(content);
    return result.data;
}
}}),
"[project]/src/components/toc.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DashboardTableOfContents": (()=>DashboardTableOfContents)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const DashboardTableOfContents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DashboardTableOfContents() from the server but DashboardTableOfContents is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/toc.tsx <module evaluation>", "DashboardTableOfContents");
}}),
"[project]/src/components/toc.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DashboardTableOfContents": (()=>DashboardTableOfContents)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const DashboardTableOfContents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DashboardTableOfContents() from the server but DashboardTableOfContents is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/toc.tsx", "DashboardTableOfContents");
}}),
"[project]/src/components/toc.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toc$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/toc.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toc$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/toc.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toc$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[project]/src/components/mdx-components.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "components": (()=>components)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
const components = {
    h1: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("font-heading mt-8 mb-8 scroll-m-20 text-[3.2rem] leading-[3.6rem] font-semibold tracking-tight", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 9,
            columnNumber: 5
        }, this),
    h2: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("font-heading mt-8 mb-8 scroll-m-20 text-[1.6rem] leading-[2.4rem] font-semibold tracking-tight", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 18,
            columnNumber: 5
        }, this),
    h3: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("font-heading mt-8 mb-8 scroll-m-20 text-[1.4rem] leading-[2.2rem] font-semibold tracking-tight", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 27,
            columnNumber: 5
        }, this),
    h4: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("font-heading mt-8 mb-8 scroll-m-20 text-[1.2rem] leading-[2rem] font-semibold tracking-tight", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 36,
            columnNumber: 5
        }, this),
    h5: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("font-heading mt-8 mb-8 scroll-m-20 text-[1rem] leading-[1.8rem] font-semibold tracking-tight", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 45,
            columnNumber: 5
        }, this),
    h6: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("font-heading mt-8 mb-8 scroll-m-20 text-[0.8rem] leading-[1.6rem] font-semibold tracking-tight", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 54,
            columnNumber: 5
        }, this),
    a: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("font-medium text-black transition-all duration-300 ease-in-out underline underline-offset-3", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 63,
            columnNumber: 5
        }, this),
    p: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("my-4 text-[1.1rem] leading-[2rem]", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 72,
            columnNumber: 5
        }, this),
    strong: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("font-bold", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 81,
            columnNumber: 5
        }, this),
    ul: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("my-6 ml-6 list-disc", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 84,
            columnNumber: 5
        }, this),
    ol: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("my-6 ml-6 list-decimal", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 87,
            columnNumber: 5
        }, this),
    li: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("mt-2 ml-4 text-[1.1rem] leading-[1.6em]", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 90,
            columnNumber: 5
        }, this),
    blockquote: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("my-6 border-l-[3px] border-[#343a40] pl-4", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 93,
            columnNumber: 5
        }, this),
    img: ({ className, alt, ...props })=>// eslint-disable-next-line @next/next/no-img-element
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("max-w-full rounded-md", className),
            alt: alt,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 107,
            columnNumber: 5
        }, this),
    hr: ({ ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
            className: "my-4 md:my-8",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 110,
            columnNumber: 5
        }, this),
    table: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "my-6 w-full overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("mx-auto mb-12 w-full border-collapse border-spacing-0 text-left", "text-[1.1rem]", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/mdx-components.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 113,
            columnNumber: 5
        }, this),
    tr: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("m-0", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 125,
            columnNumber: 5
        }, this),
    th: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("border-b border-solid border-[#ced4da] p-4 text-left font-semibold", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 131,
            columnNumber: 5
        }, this),
    td: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("border-b border-dashed border-[#ced4da] p-4 text-left leading-[1.5]", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 140,
            columnNumber: 5
        }, this),
    pre: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-[0.8rem] mt-4", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 149,
            columnNumber: 5
        }, this),
    code: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("w-max-2xl rounded-[0.6rem] bg-[#ededeb] px-[0.3rem] py-[0.2rem]", "font-mono text-[1.0rem] font-normal text-[#ed4759]", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 158,
            columnNumber: 5
        }, this),
    small: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-[70%]", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 168,
            columnNumber: 5
        }, this),
    Image: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    Link: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("font-medium text-blue-600 no-underline transition-all duration-300 ease-in-out hover:underline", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 175,
            columnNumber: 5
        }, this),
    LinkedCard: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/mdx-components.tsx",
            lineNumber: 184,
            columnNumber: 5
        }, this)
};
;
}}),
"[project]/src/components/giscus-comments.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/giscus-comments.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/giscus-comments.tsx <module evaluation>", "default");
}}),
"[project]/src/components/giscus-comments.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/giscus-comments.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/giscus-comments.tsx", "default");
}}),
"[project]/src/components/giscus-comments.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$giscus$2d$comments$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/giscus-comments.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$giscus$2d$comments$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/giscus-comments.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$giscus$2d$comments$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/components/go-to-top.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GoToTop": (()=>GoToTop)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const GoToTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call GoToTop() from the server but GoToTop is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/go-to-top.tsx <module evaluation>", "GoToTop");
}}),
"[project]/src/components/go-to-top.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GoToTop": (()=>GoToTop)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const GoToTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call GoToTop() from the server but GoToTop is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/go-to-top.tsx", "GoToTop");
}}),
"[project]/src/components/go-to-top.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$go$2d$to$2d$top$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/go-to-top.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$go$2d$to$2d$top$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/go-to-top.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$go$2d$to$2d$top$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/blog/[...slug]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BlogPage),
    "generateMetadata": (()=>generateMetadata),
    "generateStaticParams": (()=>generateStaticParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$content$2d$collections$2f$generated$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/.content-collections/generated/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$content$2d$collections$2f$generated$2f$allBlogs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__allBlogs$3e$__ = __turbopack_context__.i("[project]/.content-collections/generated/allBlogs.js [app-rsc] (ecmascript) <export default as allBlogs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$toc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/toc.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toc$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/toc.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$mdx$2d$remote$2d$client$2f$dist$2f$rsc$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-mdx-remote-client/dist/rsc/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$mdx$2d$remote$2d$client$2f$dist$2f$rsc$2f$MDXRemote$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-mdx-remote-client/dist/rsc/MDXRemote.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$word$2d$count$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/word-count/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mdx$2d$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/mdx-components.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$math$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-math/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$katex$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rehype-katex/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$highlight$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rehype-highlight/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$slug$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rehype-slug/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$giscus$2d$comments$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/giscus-comments.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$go$2d$to$2d$top$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/go-to-top.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const options = {
    mdxOptions: {
        remarkPlugins: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$math$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
        ],
        rehypePlugins: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$katex$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$highlight$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$slug$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
        ]
    }
};
async function getBlogsFromParams(slugs) {
    const slug = slugs?.join("/") || "";
    const blog = __TURBOPACK__imported__module__$5b$project$5d2f2e$content$2d$collections$2f$generated$2f$allBlogs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__allBlogs$3e$__["allBlogs"].find((blog)=>blog.slug === slug);
    if (!blog) {
        return null;
    }
    return blog;
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const blog = await getBlogsFromParams(slug);
    if (!blog) {
        return {};
    }
    return {
        title: blog.title,
        description: blog.title,
        keywords: blog.keywords,
        openGraph: {
            title: blog.title,
            description: blog.title,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["config"].seo.openGraph.type,
            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])("/" + blog.slug),
            images: [
                {
                    url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["config"].site.image
                }
            ]
        },
        twitter: {
            card: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["config"].seo.twitter.card,
            title: blog.title,
            description: blog.title,
            images: [
                {
                    url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["config"].site.image
                }
            ],
            creator: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["config"].seo.twitter.creator
        }
    };
}
async function generateStaticParams() {
    // @ts-ignore
    return __TURBOPACK__imported__module__$5b$project$5d2f2e$content$2d$collections$2f$generated$2f$allBlogs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__allBlogs$3e$__["allBlogs"].map((blog)=>({
            slug: blog.slug.split('/')
        }));
}
async function BlogPage(props) {
    const { slug } = await props.params;
    const blog = await getBlogsFromParams(slug);
    if (!blog) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const toc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$toc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTableOfContents"])(blog.content);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative py-6 max-w-full md:max-w-6xl mx-auto lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto w-full px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "my-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-[32px] font-bold",
                            children: blog.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/[...slug]/page.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/[...slug]/page.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "my-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDate"])(blog.date),
                                " · ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$word$2d$count$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(blog.content),
                                " 字"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/blog/[...slug]/page.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/[...slug]/page.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$mdx$2d$remote$2d$client$2f$dist$2f$rsc$2f$MDXRemote$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MDXRemote"], {
                            source: blog.content,
                            components: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mdx$2d$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["components"],
                            options: options
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/[...slug]/page.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/[...slug]/page.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$giscus$2d$comments$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/blog/[...slug]/page.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blog/[...slug]/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden text-sm xl:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-16 -mt-6 h-[calc(100vh-3.5rem)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full overflow-auto pb-10 flex flex-col justify-between mt-16 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toc$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DashboardTableOfContents"], {
                                toc: toc
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/[...slug]/page.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$go$2d$to$2d$top$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoToTop"], {}, void 0, false, {
                                fileName: "[project]/src/app/blog/[...slug]/page.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/blog/[...slug]/page.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/[...slug]/page.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[...slug]/page.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/blog/[...slug]/page.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/blog/[...slug]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/blog/[...slug]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__253bea62._.js.map
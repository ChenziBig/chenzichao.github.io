(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_b6a0d815._.js", {

"[project]/src/hooks/use-mounted.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useMounted": (()=>useMounted)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useMounted() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMounted.useEffect": ()=>{
            setMounted(true);
        }
    }["useMounted.useEffect"], []);
    return mounted;
}
_s(useMounted, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/toc.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// @ts-nocheck
__turbopack_context__.s({
    "DashboardTableOfContents": (()=>DashboardTableOfContents)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mounted$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-mounted.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
function DashboardTableOfContents({ toc }) {
    _s();
    const itemIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardTableOfContents.useMemo[itemIds]": ()=>toc.items ? toc.items.flatMap({
                "DashboardTableOfContents.useMemo[itemIds]": (item)=>[
                        item.url,
                        item?.items?.map({
                            "DashboardTableOfContents.useMemo[itemIds]": (item)=>item.url
                        }["DashboardTableOfContents.useMemo[itemIds]"])
                    ]
            }["DashboardTableOfContents.useMemo[itemIds]"]).flat().filter(Boolean).map({
                "DashboardTableOfContents.useMemo[itemIds]": (id)=>id?.split("#")[1]
            }["DashboardTableOfContents.useMemo[itemIds]"]) : []
    }["DashboardTableOfContents.useMemo[itemIds]"], [
        toc
    ]);
    const activeHeading = useActiveItem(itemIds);
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mounted$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMounted"])();
    if (!toc?.items?.length) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tree, {
            tree: toc,
            activeItem: activeHeading
        }, void 0, false, {
            fileName: "[project]/src/components/toc.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/toc.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(DashboardTableOfContents, "xApPtLRMLarTt5n31dDwD1uRPl0=", false, function() {
    return [
        useActiveItem,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mounted$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMounted"]
    ];
});
_c = DashboardTableOfContents;
function useActiveItem(itemIds) {
    _s1();
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useActiveItem.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "useActiveItem.useEffect": (entries)=>{
                    entries.forEach({
                        "useActiveItem.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                setActiveId(entry.target.id);
                            }
                        }
                    }["useActiveItem.useEffect"]);
                }
            }["useActiveItem.useEffect"], {
                rootMargin: `0% 0% -80% 0%`
            });
            itemIds?.forEach({
                "useActiveItem.useEffect": (id)=>{
                    const element = document.getElementById(id);
                    if (element) {
                        observer.observe(element);
                    }
                }
            }["useActiveItem.useEffect"]);
            return ({
                "useActiveItem.useEffect": ()=>{
                    itemIds?.forEach({
                        "useActiveItem.useEffect": (id)=>{
                            const element = document.getElementById(id);
                            if (element) {
                                observer.unobserve(element);
                            }
                        }
                    }["useActiveItem.useEffect"]);
                }
            })["useActiveItem.useEffect"];
        }
    }["useActiveItem.useEffect"], [
        itemIds
    ]);
    return activeId;
}
_s1(useActiveItem, "pJ3h3JYrLkpIUWDqhHtZztvl5yA=");
function Tree({ tree, level = 1, activeItem }) {
    return tree?.items?.length && level < 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("m-2 list-none", {
            "pl-4": level !== 1
        }),
        children: tree.items.map((item, index)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-0 pt-2"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: item.url,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-block no-underline transition-colors hover:text-foreground", item.url === `#${activeItem}` ? "font-medium text-foreground" : "text-muted-foreground"),
                        children: item.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/toc.tsx",
                        lineNumber: 88,
                        columnNumber: 13
                    }, this),
                    item.items?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tree, {
                        tree: item,
                        level: level + 1,
                        activeItem: activeItem
                    }, void 0, false, {
                        fileName: "[project]/src/components/toc.tsx",
                        lineNumber: 100,
                        columnNumber: 15
                    }, this) : null
                ]
            }, index, true, {
                fileName: "[project]/src/components/toc.tsx",
                lineNumber: 87,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/toc.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this) : null;
}
_c1 = Tree;
var _c, _c1;
__turbopack_context__.k.register(_c, "DashboardTableOfContents");
__turbopack_context__.k.register(_c1, "Tree");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/giscus-comments.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GiscusComments)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$giscus$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@giscus/react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.ts [app-client] (ecmascript)");
"use client";
;
;
;
function GiscusComments() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$giscus$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: "comments",
        repo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].giscus.repo,
        repoId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].giscus.repoId,
        category: "Announcements",
        categoryId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].giscus.categoryId,
        mapping: "pathname",
        reactionsEnabled: "1",
        emitMetadata: "0",
        inputPosition: "top",
        theme: "light",
        lang: "en",
        loading: "lazy"
    }, void 0, false, {
        fileName: "[project]/src/components/giscus-comments.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = GiscusComments;
var _c;
__turbopack_context__.k.register(_c, "GiscusComments");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/go-to-top.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "GoToTop": (()=>GoToTop)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function GoToTop() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoToTop.useEffect": ()=>{
            const toggleVisibility = {
                "GoToTop.useEffect.toggleVisibility": ()=>{
                    if (window.scrollY > 800) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                }
            }["GoToTop.useEffect.toggleVisibility"];
            window.addEventListener('scroll', toggleVisibility);
            return ({
                "GoToTop.useEffect": ()=>{
                    window.removeEventListener('scroll', toggleVisibility);
                }
            })["GoToTop.useEffect"];
        }
    }["GoToTop.useEffect"], []);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        "aria-label": "Go to top",
        onClick: scrollToTop,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-full p-3 w-12', 'bg-gray-100/50 backdrop-blur-sm', 'hover:bg-white transition-all duration-300 cursor-pointer', isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none', 'md:right-16'),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "text-gray-500 hover:text-gray-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.5376 22.7916C11.0152 22.7207 22.5795 21.1781 22.0978 10.4211C22.0536 9.43274 21.9303 8.53367 21.7387 7.71865M10.5376 22.7916C16.876 22.3728 20.0969 19.8899 21.5383 16.9142M10.5376 22.7916C9.7707 22.9055 8.97982 22.8964 8.19743 22.7725M21.7387 7.71865C21.4988 6.69828 21.1518 5.80967 20.7188 5.04257M21.7387 7.71865C22.6022 10.1105 23.0542 13.7848 21.5383 16.9142M20.7188 5.04257C17.1684 -1.24629 7.83127 0.632493 4.27577 5.04257C2.88063 6.77451 -0.0433281 11.1668 1.38159 16.6571C2.27481 20.0988 5.17269 22.2936 8.19743 22.7725M20.7188 5.04257C22.0697 6.9404 24.0299 11.3848 22.3541 15.4153M21.5383 16.9142C21.8737 16.4251 22.1428 15.9235 22.3541 15.4153M8.19743 22.7725C12.1971 23.4683 20.6281 22.971 22.3541 15.4153M14 10.945C13.3836 10.289 12.003 8.63215 11.2034 7.04814C11.1703 6.98257 11.0247 6.98456 10.9937 7.05061C10.5221 8.05496 9.07362 9.92941 8 10.945M11.0333 7.44444C10.9392 9.86549 11 15 12 17",
                stroke: "currentColor",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/go-to-top.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/go-to-top.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/go-to-top.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(GoToTop, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = GoToTop;
var _c;
__turbopack_context__.k.register(_c, "GoToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_b6a0d815._.js.map
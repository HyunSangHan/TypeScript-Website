import { NavItem } from "../components/layout/Sidebar"

export const oldHandbookNavigation: NavItem[] = [
  {
    title: "Tutorials",
    id: "tutorials",
    directory: "handbook",
    index: "typescript-in-5-minutes",
    items: [
      { id: "typescript-in-5-minutes", title: "TypeScript in 5 minutes" },
      { id: "asp-net-core", title: "ASP.NET Core" },
      { id: "gulp", title: "Gulp" },
      { id: "migrating-from-javascript", title: "Migrating from JavaScript" },
      { id: "react-&-webpack", title: "React & Webpack" },
    ],
  },
  {
    title: "What's New",
    id: "whats-new",
    directory: "handbook/release-notes",
    index: "overview",
    items: [
      { id: "overview", title: "Overview" },
      { id: "typescript-3-7", title: "TypeScript 3.7" },
      { id: "typescript-3-6", title: "TypeScript 3.6" },
      { id: "typescript-3-5", title: "TypeScript 3.5" },
      { id: "typescript-3-4", title: "TypeScript 3.4" },
      { id: "typescript-3-3", title: "TypeScript 3.3" },
      { id: "typescript-3-2", title: "TypeScript 3.2" },
      { id: "typescript-3-1", title: "TypeScript 3.1" },
      { id: "typescript-3-0", title: "TypeScript 3.0" },
      { id: "typescript-2-9", title: "TypeScript 2.9" },
      { id: "typescript-2-8", title: "TypeScript 2.8" },
      { id: "typescript-2-7", title: "TypeScript 2.7" },
      { id: "typescript-2-6", title: "TypeScript 2.6" },
      { id: "typescript-2-5", title: "TypeScript 2.5" },
      { id: "typescript-2-4", title: "TypeScript 2.4" },
      { id: "typescript-2-3", title: "TypeScript 2.3" },
      { id: "typescript-2-2", title: "TypeScript 2.2" },
      { id: "typescript-2-1", title: "TypeScript 2.1" },
      { id: "typescript-2-0", title: "TypeScript 2.0" },
      { id: "typescript-1-8", title: "TypeScript 1.8" },
      { id: "typescript-1-7", title: "TypeScript 1.7" },
      { id: "typescript-1-6", title: "TypeScript 1.6" },
      { id: "typescript-1-5", title: "TypeScript 1.5" },
      { id: "typescript-1-4", title: "TypeScript 1.4" },
      { id: "typescript-1-3", title: "TypeScript 1.3" },
      { id: "typescript-1-1", title: "TypeScript 1.1" },
    ],
  },
  {
    title: "Handbook",
    id: "handbook",
    directory: "handbook",
    "index": "basic-types",
    items: [
      { id: "basic-types", title: "Basic Types" },
      { id: "variable-declarations", title: "Variable Declarations" },
      { id: "interfaces", title: "Interfaces" },
      { id: "classes", title: "Classes" },
      { id: "functions", title: "Functions" },
      { id: "generics", title: "Generics" },
      { id: "enums", title: "Enums" },
      { id: "type-inference", title: "Type Inference" },
      { id: "type-compatibility", title: "Type Compatibility" },
      { id: "advanced-types", title: "Advanced Types" },
      { id: "symbols", title: "Symbols" },
      { id: "iterators-and-generators", title: "Iterators and Generators" },
      { id: "modules", title: "Modules" },
      { id: "namespaces", title: "Namespaces" },
      { id: "namespaces-and-modules", title: "Namespaces and Modules" },
      { id: "module-resolution", title: "Module Resolution" },
      { id: "declaration-merging", title: "Declaration Merging" },
      { id: "jsx", title: "JSX" },
      { id: "decorators", title: "Decorators" },
      { id: "mixins", title: "Mixins" },
      { id: "triple-slash-directives", title: "Triple-Slash Directives" },
      {
        id: "type-checking-javascript-files",
        title: "Type Checking JavaScript Files",
      },
      { id: "utility-types", title: "Utility Types" },
    ],
  },
  {
    title: "Declaration Files",
    id: "declaration-files",
    directory: "handbook/declaration-files",
    index: "introduction",
    items: [
      { id: "introduction", title: "Introduction" },
      { id: "library-structures", title: "Library Structures" },
      { id: "by-example", title: "By Example" },
      { id: "do-s-and-don-ts", title: "Do's and Don'ts" },
      { id: "deep-dive", title: "Deep Dive" },
      { id: "templates", title: "Templates" },
      { id: "publishing", title: "Publishing" },
      { id: "consumption", title: "Consumption" },
    ],
  },
  {
    title: "Project Configuration",
    id: "project-config",
    directory: "handbook",
    index: "compiler-options",
    items: [
      { id: "tsconfig-json", title: "tsconfig.json" },
      { id: "compiler-options", title: "Compiler Options" },
      { id: "project-references", title: "Project References" },
      {
        id: "compiler-options-in-msbuild",
        title: "Compiler Options in MSBuild",
      },
      {
        id: "integrating-with-build-tools",
        title: "Integrating with Build Tools",
      },
      { id: "nightly-builds", title: "Nightly Builds" },
    ],
  },
]

import { RegistryEntry } from "./scripts/schema";

const registry: RegistryEntry[] = [
  {
    name: "accordion",
    type: "registry:ui",

    // shadcn-ui components that this component depends on
    registryDependencies: [],

    // npm dependencies that this component depends on
    dependencies: [],
    devDependencies: [],

    // Tailwind CSS config
    tailwind: {
      config: {},
    },

    // CSS variables
    cssVars: {},

    // Files that make up this component in your src/components/ui folder
    files: ["accordion.tsx"],
  },
  {
    name: "button",
    type: "registry:ui",

    // shadcn-ui components that this component depends on
    registryDependencies: [],

    // npm dependencies that this component depends on
    dependencies: [],
    devDependencies: [],

    // Tailwind CSS config
    tailwind: {
      config: {},
    },

    // CSS variables
    cssVars: {},

    // Files that make up this component in your src/components/ui folder
    files: ["button.tsx"],
  },
  {
    name: "card",
    type: "registry:ui",

    // shadcn-ui components that this component depends on
    registryDependencies: [],

    // npm dependencies that this component depends on
    dependencies: [],
    devDependencies: [],

    // Tailwind CSS config
    tailwind: {
      config: {},
    },

    // CSS variables
    cssVars: {},

    // Files that make up this component in your src/components/ui folder
    files: ["card.tsx"],
  },
  {
    name: "input",
    type: "registry:ui",

    // shadcn-ui components that this component depends on
    registryDependencies: [],

    // npm dependencies that this component depends on
    dependencies: [],
    devDependencies: [],

    // Tailwind CSS config
    tailwind: {
      config: {},
    },

    // CSS variables
    cssVars: {},

    // Files that make up this component in your src/components/ui folder
    files: ["input.tsx"],
  },
  {
    name: "input",
    type: "registry:ui",

    // shadcn-ui components that this component depends on
    registryDependencies: [],

    // npm dependencies that this component depends on
    dependencies: [],
    devDependencies: [],

    // Tailwind CSS config
    tailwind: {
      config: {},
    },

    // CSS variables
    cssVars: {},

    // Files that make up this component in your src/components/ui folder
    files: ["input.tsx"],
  },
  {
    name: "label",
    type: "registry:ui",

    // shadcn-ui components that this component depends on
    registryDependencies: [],

    // npm dependencies that this component depends on
    dependencies: [],
    devDependencies: [],

    // Tailwind CSS config
    tailwind: {
      config: {},
    },

    // CSS variables
    cssVars: {},

    // Files that make up this component in your src/components/ui folder
    files: ["label.tsx"],
  },
  {
    name: "login-form",
    type: "registry:ui",

    // shadcn-ui components that this component depends on
    registryDependencies: [
      "https://raw.githubusercontent.com/BigChangeApps/shadcn-registry/main/registry/input.json",
      "https://raw.githubusercontent.com/BigChangeApps/shadcn-registry/main/registry/card.json",
      "https://raw.githubusercontent.com/BigChangeApps/shadcn-registry/main/registry/label.json",
      "https://raw.githubusercontent.com/BigChangeApps/shadcn-registry/main/registry/button.json"
    ],

    // npm dependencies that this component depends on
    dependencies: [],
    devDependencies: [],

    // Tailwind CSS config
    tailwind: {
      config: {},
    },

    // CSS variables
    cssVars: {},

    // Files that make up this component in your src/components/ui folder
    files: ["blocks/login-form.tsx"],
  },
];
export default registry;

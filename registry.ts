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
];
export default registry;

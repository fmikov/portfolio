export interface Project {
  title: string;
  year: string;
  description: string;
  tags: string[];
  slug?: string;
  externalUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'Physically Based Renderer',
    year: '2024',
    description: 'Realistic ray tracer with global illumination using Monte-Carlo methods in C++. Features octree acceleration for fast triangle intersections and homogeneous volumetric rendering.',
    tags: ['C++', 'Ray Tracing', 'Monte Carlo'],
    slug: 'pbr-renderer',
  },
  {
    title: 'Extending Image-to-Sketch to 3D',
    year: '2025',
    description: 'Adapting an image-to-sketch ML model to 3D, generating models composed of Bézier curves in 3D space using NeRFs, CLIP, and differentiable rasterization.',
    tags: ['Python', 'PyTorch', 'NeRF', 'CLIP'],
    externalUrl: 'https://tarhanefe.github.io/CLIPasso3DWebsite/',
  },
  {
    title: 'Hex Tactics',
    year: '2025',
    description: 'Tactical game developed in Godot in a team of 2. Features custom shaders for captivating visuals and local multiplayer support.',
    tags: ['Godot', 'Game Dev', 'Shaders'],
    slug: 'hex-tactics',
  },
  {
    title: 'Line-by-Line Atmospheric Solver',
    year: '2024–2025',
    description: 'Computes absorption coefficients for atmospheric gases using the Dr.Jit library for high parallelization, with spectral line data from the HITRAN database.',
    tags: ['Python', 'Dr.Jit', 'Scientific Computing'],
  },
  {
    title: 'Geometric Optimization',
    year: '2024',
    description: 'Transforming meshes to reach equilibrium under gravity. Computing minimal surfaces using mean curvature flow.',
    tags: ['C++', 'Geometry Processing'],
  },
  {
    title: 'Unity Light Field Framework',
    year: '2023',
    description: 'Improved an existing Unity framework to support point clouds for use in high-immersion light field monitors, adding user interaction capabilities.',
    tags: ['Unity', 'C#', 'Point Clouds'],
    slug: 'unity-light-field',
  },
  {
    title: 'MEDIAR',
    year: '2023–2024',
    description: 'Exploring and adapting a challenge-winning cell segmentation deep learning model, finetuned for yeast cell segmentation.',
    tags: ['Python', 'Deep Learning', 'Segmentation'],
  },
  {
    title: 'Movie Trends Analysis',
    year: '2024',
    description: 'Data-driven exploration of CMU and Box Office Mojo movie datasets in a team of 4, analyzing revenue and language trends with clear visualizations.',
    tags: ['Python', 'Data Science'],
    externalUrl: 'https://mhli14.github.io/ada-pandalysts/datastory/',
  },
  {
    title: 'DishDelish',
    year: '2023',
    description: 'Recipe sharing Android app built in a team of 5 using Agile Scrum. Features step-by-step guided cooking, shopping cart, and personal ingredients list.',
    tags: ['Java', 'Android', 'Agile'],
    slug: 'dish-delish',
  },
];

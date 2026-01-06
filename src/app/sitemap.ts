import { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://abner.dev";

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projetos/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projetos`,
      lastModified: new Date(),
    },
    ...projectRoutes,
  ];
}

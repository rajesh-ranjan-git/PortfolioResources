import { projectsHeader } from '../../../../portfolio';

export const advancedSlides = projectsHeader.projects.map((project,key)=>({
  src:project.image,
  title:project.title,
  description:project.subtitle,
  filter: project.filter
}))
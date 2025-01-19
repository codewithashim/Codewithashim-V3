import { useNotionBase } from './useNotionBase';
import { getNotionTable } from '../utils/notion';

export const useBlogNotion = () => {
  const { data, fetchData } = useNotionBase<any[]>();

  const fetchBlogTable = (blogId: string) => {
    fetchData(() => getNotionTable(blogId));
  };

  return { blogData: data, fetchBlogTable };
};

export const useProjectsNotion = () => {
  const { data, fetchData } = useNotionBase<any[]>();

  const fetchProjectsTable = (projectsId: string) => {
    fetchData(() => getNotionTable(projectsId));
  };

  return { projectsData: data, fetchProjectsTable };
};

export const useExperienceNotion = () => {
  const { data, fetchData } = useNotionBase<any[]>();

  const fetchExperienceTable = (experienceId: string) => {
    fetchData(() => getNotionTable(experienceId));
  };

  return { experienceData: data, fetchExperienceTable };
};
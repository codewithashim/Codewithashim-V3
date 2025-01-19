import { useBlogNotion, useProjectsNotion, useExperienceNotion } from './useNotionHooks';
import { useCallback } from 'react';
import { getPageBlocks, getPageViews, getDateStr } from '../utils/notion';
import { BlockMapType } from "react-notion";
import { useNotionBase } from './useNotionBase';

const useNotion = () => {
  const { blogData, fetchBlogTable } = useBlogNotion();
  const { projectsData, fetchProjectsTable } = useProjectsNotion();
  const { experienceData, fetchExperienceTable } = useExperienceNotion();
  
  const { data: pageBlocks, fetchData: fetchPageBlocksData } = useNotionBase<BlockMapType>();
  const { data: pageViews, fetchData: fetchPageViewsData } = useNotionBase<number>();

  const fetchPageBlocks = useCallback((pageId: string) => {
    fetchPageBlocksData(() => getPageBlocks(pageId));
  }, [fetchPageBlocksData]);

  const fetchPageViews = useCallback((path: string) => {
    fetchPageViewsData(() => getPageViews(path));
  }, [fetchPageViewsData]);

  

  const formatDate = useCallback((date: Date | string) => {
    return getDateStr(date);
  }, []);

  return {
    blogData,
    projectsData,
    experienceData,
    pageBlocks,
    pageViews,
    fetchBlogTable,
    fetchProjectsTable,
    fetchExperienceTable,
    fetchPageBlocks,
    fetchPageViews,
    formatDate,
  };
};

export default useNotion;
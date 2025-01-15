/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { BlockMapType } from "react-notion";

// Base URLs for APIs
const NOTION_API_BASE = "https://notion-api.splitbee.io/v1";
const SPLITBEE_API_BASE = "https://api.splitbee.io/public";

// Axios instance for Notion API
const notionAxios = axios.create({
  baseURL: NOTION_API_BASE,
});

// Fetch a blog table by its ID
export const getBlogTable = async (blogId: string): Promise<any[]> => {
  try {
    const { data } = await notionAxios.get(`/table/${blogId}`);
    return data;
  } catch (error) {
    console.error("Error fetching blog table:", error);
    throw new Error(`Failed to fetch blog table: ${error}`);
  }
};

// Fetch page blocks by its ID
export const getPageBlocks = async (pageId: string): Promise<BlockMapType> => {
  try {
    const { data } = await notionAxios.get(`/page/${pageId}`);
    return data;
  } catch (error) {
    console.error("Error fetching page blocks:", error);
    throw new Error(`Failed to fetch page blocks: ${error}`);
  }
};

// Axios instance for Splitbee API
const splitbeeAxios = axios.create({
  baseURL: SPLITBEE_API_BASE,
});

// Fetch page views using the Splitbee API
export const getPageViews = async (path: string): Promise<number> => {
  try {
    const { data } = await splitbeeAxios.get(`/timo.sh`, {
      params: { path },
    });
    return data.count || 0;
  } catch (error) {
    console.error("Error fetching page views:", error);
    return 0; // Return a default value in case of an error
  }
};

// Format a date as a readable string
export const getDateStr = (date: Date | string): string => {
  try {
    return new Date(date).toLocaleString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });
  } catch (error) {
    console.error("Error formatting date:", error);
    return ""; // Return an empty string in case of an error
  }
};

import { BlockMapType } from "react-notion";
 ;
import { MapImageUrl } from 'react-notion';
import { notionAxios, splitbeeAxios } from "../lib/network";

export const toNotionImageUrl: MapImageUrl = (url, block) => {
  const imageUrl = new URL(
    url?.startsWith('https://www.notion.so')
      ? url
      : `https://www.notion.so${
          url.startsWith('/image') ? url : `/image/${encodeURIComponent(url)}`
        }`
  );

  if (block) {
    const table =
      block.value.parent_table === 'space' ? 'block' : block.value.parent_table;
    imageUrl.searchParams.set('table', table);
    imageUrl.searchParams.set('id', block.value.id);
    imageUrl.searchParams.set('cache', 'v2');
  }

  return imageUrl.toString();
};

// Fetch a table by its ID
export const getNotionTable = async (tableId: string): Promise<any[]> => {
  try {
    const { data } = await notionAxios.get(`/table/${tableId}`);
    return data;
  } catch (error) {
    console.error("Error fetching table:", error);
    throw new Error(`Failed to fetch table: ${error}`);
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


// Fetch page views using the Splitbee API
export const getPageViews = async (path: string): Promise<number> => {
  try {
    const { data } = await splitbeeAxios.get(`/timo.sh`, {
      params: { path },
    });
    
    console.log("🚀 ~ getPageViews ~ data:", data)
    return data?.count || 0;
  } catch (error) {
    console.error("Error fetching page views:", error);
    return 0; 
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
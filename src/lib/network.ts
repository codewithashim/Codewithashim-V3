import axios from "axios";
import { envConfig } from "../config/envConfig";

// Base URLs for APIs
const NOTION_API_BASE = envConfig.NOTION_API_BASE_URL;

const SPLITBEE_API_BASE = envConfig.SPLITBEE_API_BASE_URL;

// Axios instance for Notion API
export const notionAxios = axios.create({
  baseURL: NOTION_API_BASE,
});


// Axios instance for Splitbee API
export const splitbeeAxios = axios.create({
  baseURL: SPLITBEE_API_BASE,
});

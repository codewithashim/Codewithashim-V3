'use client'
import axios from "axios";

const BASE_URL = "http://localhost:10003/wp-json/wp/v2";

// Fetch Blog Posts
export const fetchPosts = async () => {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response.data;
};

// Fetch Blog Details by ID
export const fetchPostById = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/posts/${id}`);
  return response.data;
};

// Fetch Projects
export const fetchProjects = async () => {
  const response = await axios.get(`${BASE_URL}/projects`);
  return response.data;
};

// Fetch Experience
export const fetchExperience = async () => {
  const response = await axios.get(`${BASE_URL}/experience`);
  return response.data;
};

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// the point of schema is to give some type safety
export default defineSchema({
  posts: defineTable({
    slug: v.string(),       // Unique slug for routing
    image: v.string(),      // URL or path to the image
    header: v.string(),     // Blog post title/header
    text: v.string(),       // Blog post content
    createdAt: v.number(),  // Timestamp (e.g., Date.now())
  }),
});
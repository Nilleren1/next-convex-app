import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// the point of schema is to give some type safety
export default defineSchema({
  todos: defineTable({ text: v.string()}),
});
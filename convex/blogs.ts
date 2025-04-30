import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createPost = mutation({
    args: {
        slug: v.string(),
        image: v.string(),
        header: v.string(),
        text: v.string(),
        createdAt: v.number(),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("posts", {
            slug: args.slug,
            image: args.image,
            header: args.header,
            text: args.text,
            createdAt: args.createdAt,
        });
    },
});

export const getPosts = query({
    handler: async (ctx) => {
        return ctx.db.query("posts").collect();
    },
})
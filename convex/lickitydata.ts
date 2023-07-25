import { query } from "./_generated/server";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("lickitydata").collect();
  },
});


export const createlickity = mutation({
  args: { text: v.string(), datetime: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("lickitydata", { text: args.text, datetime: args.datetime  });
    // do something with `taskId`
  },
});
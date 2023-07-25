import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  lickitydata: defineTable({
    text: v.string(),
    datetime: v.string(),
  }),
});
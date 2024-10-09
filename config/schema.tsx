import { json, pgTable , serial, text, varchar } from "drizzle-orm/pg-core";

export const VerseData = pgTable('verseData', {
    id: serial('id').primaryKey(),
    verseId: varchar('verseId'),
    verseSubject: text('verseSubject'),
    verseType: varchar('verseType'),
    ageGroup: varchar('ageGroup'),
    imageStyle: varchar('imageStyle'),
    output:json('output'),
    coverImage: varchar('coverImage'),
    userEmail: varchar('userEmail'),
    userName: varchar('userName'),
    userImage: varchar('userImage'),
})
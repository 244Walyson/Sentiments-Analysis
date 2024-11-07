/*
  Warnings:

  - Added the required column `commentId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "postId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Comment" ("content", "createdAt", "id", "postId") SELECT "content", "createdAt", "id", "postId" FROM "Comment";
DROP TABLE "Comment";
ALTER TABLE "new_Comment" RENAME TO "Comment";
CREATE UNIQUE INDEX "Comment_commentId_key" ON "Comment"("commentId");
CREATE TABLE "new_Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "postId" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "network" TEXT NOT NULL,
    "postUrl" TEXT,
    "content" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "engagementScore" INTEGER,
    "sentimentScore" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Post_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("companyId", "content", "createdAt", "engagementScore", "id", "isActive", "network", "postUrl", "sentimentScore") SELECT "companyId", "content", "createdAt", "engagementScore", "id", "isActive", "network", "postUrl", "sentimentScore" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE UNIQUE INDEX "Post_postId_key" ON "Post"("postId");
CREATE UNIQUE INDEX "Post_postUrl_key" ON "Post"("postUrl");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

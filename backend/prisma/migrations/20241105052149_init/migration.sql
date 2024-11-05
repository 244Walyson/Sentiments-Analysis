/*
  Warnings:

  - You are about to drop the column `average_reactions` on the `AudienceByNetwork` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `AudienceByNetwork` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `img_url` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `instagram_url` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `is_active` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `website_url` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `x_url` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Engagement` table. All the data in the column will be lost.
  - You are about to drop the column `improvement_percentage` on the `Engagement` table. All the data in the column will be lost.
  - You are about to drop the column `total_reactions` on the `Engagement` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `is_read` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `engagement_score` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `is_active` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `post_url` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `sentiment_score` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `SentimentByNetwork` table. All the data in the column will be lost.
  - You are about to drop the column `total_mentions` on the `SentimentByNetwork` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `SentimentByPost` table. All the data in the column will be lost.
  - You are about to drop the column `total_comments` on the `SentimentByPost` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `SentimentTrend` table. All the data in the column will be lost.
  - You are about to drop the column `trend_score` on the `SentimentTrend` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `img_url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `instagram_url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `is_active` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `last_login` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `x_url` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AudienceByNetwork" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "postId" TEXT NOT NULL,
    "network" TEXT NOT NULL,
    "averageReactions" INTEGER,
    "reach" INTEGER,
    "impressions" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AudienceByNetwork_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_AudienceByNetwork" ("id", "impressions", "network", "postId", "reach") SELECT "id", "impressions", "network", "postId", "reach" FROM "AudienceByNetwork";
DROP TABLE "AudienceByNetwork";
ALTER TABLE "new_AudienceByNetwork" RENAME TO "AudienceByNetwork";
CREATE TABLE "new_Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "instagramUrl" TEXT,
    "xUrl" TEXT,
    "websiteUrl" TEXT,
    "industry" TEXT,
    "location" TEXT,
    "imgUrl" TEXT,
    "bio" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Company" ("bio", "cnpj", "id", "industry", "location", "name") SELECT "bio", "cnpj", "id", "industry", "location", "name" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
CREATE UNIQUE INDEX "Company_cnpj_key" ON "Company"("cnpj");
CREATE TABLE "new_Engagement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "improvementPercentage" INTEGER,
    "totalReactions" INTEGER,
    "period" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Engagement_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Engagement_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Engagement" ("companyId", "id", "period", "postId") SELECT "companyId", "id", "period", "postId" FROM "Engagement";
DROP TABLE "Engagement";
ALTER TABLE "new_Engagement" RENAME TO "Engagement";
CREATE TABLE "new_Notification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Notification" ("id", "message", "userId") SELECT "id", "message", "userId" FROM "Notification";
DROP TABLE "Notification";
ALTER TABLE "new_Notification" RENAME TO "Notification";
CREATE TABLE "new_Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
INSERT INTO "new_Post" ("companyId", "content", "id", "network") SELECT "companyId", "content", "id", "network" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE UNIQUE INDEX "Post_postUrl_key" ON "Post"("postUrl");
CREATE TABLE "new_SentimentByNetwork" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "network" TEXT NOT NULL,
    "positive" INTEGER,
    "negative" INTEGER,
    "neutral" INTEGER,
    "totalMentions" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SentimentByNetwork_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_SentimentByNetwork" ("companyId", "id", "negative", "network", "neutral", "positive") SELECT "companyId", "id", "negative", "network", "neutral", "positive" FROM "SentimentByNetwork";
DROP TABLE "SentimentByNetwork";
ALTER TABLE "new_SentimentByNetwork" RENAME TO "SentimentByNetwork";
CREATE TABLE "new_SentimentByPost" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "postId" TEXT NOT NULL,
    "network" TEXT NOT NULL,
    "positive" INTEGER,
    "negative" INTEGER,
    "neutral" INTEGER,
    "totalComments" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "companyId" TEXT NOT NULL,
    CONSTRAINT "SentimentByPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "SentimentByPost_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SentimentByPost" ("companyId", "id", "negative", "network", "neutral", "positive", "postId") SELECT "companyId", "id", "negative", "network", "neutral", "positive", "postId" FROM "SentimentByPost";
DROP TABLE "SentimentByPost";
ALTER TABLE "new_SentimentByPost" RENAME TO "SentimentByPost";
CREATE TABLE "new_SentimentTrend" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "network" TEXT NOT NULL,
    "positive" INTEGER,
    "negative" INTEGER,
    "neutral" INTEGER,
    "trendScore" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SentimentTrend_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_SentimentTrend" ("companyId", "date", "id", "negative", "network", "neutral", "positive") SELECT "companyId", "date", "id", "negative", "network", "neutral", "positive" FROM "SentimentTrend";
DROP TABLE "SentimentTrend";
ALTER TABLE "new_SentimentTrend" RENAME TO "SentimentTrend";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "birthday" DATETIME,
    "gender" TEXT,
    "phoneNumber" TEXT,
    "instagramUrl" TEXT,
    "xUrl" TEXT,
    "imgUrl" TEXT,
    "bio" TEXT,
    "cpf" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastLogin" DATETIME,
    "isActive" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_User" ("bio", "birthday", "cpf", "email", "gender", "id", "name", "password", "username") SELECT "bio", "birthday", "cpf", "email", "gender", "id", "name", "password", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

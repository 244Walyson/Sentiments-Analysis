/*
  Warnings:

  - The primary key for the `AudienceByNetwork` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Company` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Engagement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Notification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SentimentByNetwork` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SentimentByPost` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SentimentTrend` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserCompany` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `companyId` on table `SentimentByPost` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AudienceByNetwork" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "postId" TEXT NOT NULL,
    "network" TEXT NOT NULL,
    "average_reactions" INTEGER,
    "reach" INTEGER,
    "impressions" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AudienceByNetwork_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_AudienceByNetwork" ("average_reactions", "created_at", "id", "impressions", "network", "postId", "reach") SELECT "average_reactions", "created_at", "id", "impressions", "network", "postId", "reach" FROM "AudienceByNetwork";
DROP TABLE "AudienceByNetwork";
ALTER TABLE "new_AudienceByNetwork" RENAME TO "AudienceByNetwork";
CREATE TABLE "new_Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "instagram_url" TEXT,
    "x_url" TEXT,
    "website_url" TEXT,
    "industry" TEXT,
    "location" TEXT,
    "img_url" TEXT,
    "bio" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Company" ("bio", "cnpj", "created_at", "id", "img_url", "industry", "instagram_url", "is_active", "location", "name", "updated_at", "website_url", "x_url") SELECT "bio", "cnpj", "created_at", "id", "img_url", "industry", "instagram_url", "is_active", "location", "name", "updated_at", "website_url", "x_url" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
CREATE UNIQUE INDEX "Company_cnpj_key" ON "Company"("cnpj");
CREATE TABLE "new_Engagement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "improvement_percentage" INTEGER,
    "total_reactions" INTEGER,
    "period" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Engagement_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Engagement_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Engagement" ("companyId", "created_at", "id", "improvement_percentage", "period", "postId", "total_reactions") SELECT "companyId", "created_at", "id", "improvement_percentage", "period", "postId", "total_reactions" FROM "Engagement";
DROP TABLE "Engagement";
ALTER TABLE "new_Engagement" RENAME TO "Engagement";
CREATE TABLE "new_Notification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Notification" ("created_at", "id", "is_read", "message", "userId") SELECT "created_at", "id", "is_read", "message", "userId" FROM "Notification";
DROP TABLE "Notification";
ALTER TABLE "new_Notification" RENAME TO "Notification";
CREATE TABLE "new_Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "network" TEXT NOT NULL,
    "post_url" TEXT NOT NULL,
    "content" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "engagement_score" INTEGER,
    "sentiment_score" INTEGER,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Post_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("companyId", "content", "created_at", "engagement_score", "id", "is_active", "network", "post_url", "sentiment_score") SELECT "companyId", "content", "created_at", "engagement_score", "id", "is_active", "network", "post_url", "sentiment_score" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE UNIQUE INDEX "Post_post_url_key" ON "Post"("post_url");
CREATE TABLE "new_SentimentByNetwork" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "network" TEXT NOT NULL,
    "positive" INTEGER,
    "negative" INTEGER,
    "neutral" INTEGER,
    "total_mentions" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SentimentByNetwork_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_SentimentByNetwork" ("companyId", "created_at", "id", "negative", "network", "neutral", "positive", "total_mentions") SELECT "companyId", "created_at", "id", "negative", "network", "neutral", "positive", "total_mentions" FROM "SentimentByNetwork";
DROP TABLE "SentimentByNetwork";
ALTER TABLE "new_SentimentByNetwork" RENAME TO "SentimentByNetwork";
CREATE TABLE "new_SentimentByPost" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "postId" TEXT NOT NULL,
    "network" TEXT NOT NULL,
    "positive" INTEGER,
    "negative" INTEGER,
    "neutral" INTEGER,
    "total_comments" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "companyId" TEXT NOT NULL,
    CONSTRAINT "SentimentByPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "SentimentByPost_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SentimentByPost" ("companyId", "created_at", "id", "negative", "network", "neutral", "positive", "postId", "total_comments") SELECT "companyId", "created_at", "id", "negative", "network", "neutral", "positive", "postId", "total_comments" FROM "SentimentByPost";
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
    "trend_score" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SentimentTrend_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_SentimentTrend" ("companyId", "created_at", "date", "id", "negative", "network", "neutral", "positive", "trend_score") SELECT "companyId", "created_at", "date", "id", "negative", "network", "neutral", "positive", "trend_score" FROM "SentimentTrend";
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
    "phone_number" TEXT,
    "instagram_url" TEXT,
    "x_url" TEXT,
    "img_url" TEXT,
    "bio" TEXT,
    "cpf" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "last_login" DATETIME,
    "is_active" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_User" ("bio", "birthday", "cpf", "created_at", "email", "gender", "id", "img_url", "instagram_url", "is_active", "last_login", "name", "password", "phone_number", "updated_at", "username", "x_url") SELECT "bio", "birthday", "cpf", "created_at", "email", "gender", "id", "img_url", "instagram_url", "is_active", "last_login", "name", "password", "phone_number", "updated_at", "username", "x_url" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "User_phone_number_key" ON "User"("phone_number");
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");
CREATE TABLE "new_UserCompany" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "UserCompany_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserCompany_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_UserCompany" ("companyId", "id", "isAdmin", "userId") SELECT "companyId", "id", "isAdmin", "userId" FROM "UserCompany";
DROP TABLE "UserCompany";
ALTER TABLE "new_UserCompany" RENAME TO "UserCompany";
CREATE UNIQUE INDEX "UserCompany_userId_companyId_key" ON "UserCompany"("userId", "companyId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateTable
CREATE TABLE "sentiment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "commentId" TEXT NOT NULL,
    "polarity" INTEGER NOT NULL,
    "confidence" REAL NOT NULL,
    "probabilities" TEXT NOT NULL,
    "classPredicted" INTEGER NOT NULL,
    "logits" TEXT NOT NULL,
    "numTokens" INTEGER NOT NULL,
    "inference_time" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "sentiment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

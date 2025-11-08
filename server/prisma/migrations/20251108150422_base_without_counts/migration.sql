/*
  Warnings:

  - You are about to drop the column `commentCount` on the `Convention` table. All the data in the column will be lost.
  - You are about to drop the column `likeCount` on the `Convention` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Convention" DROP COLUMN "commentCount",
DROP COLUMN "likeCount";

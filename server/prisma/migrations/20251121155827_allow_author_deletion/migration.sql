/*
  Warnings:

  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_conventionId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "Convention" DROP CONSTRAINT "Convention_authorId_fkey";

-- AlterTable
ALTER TABLE "Convention" ALTER COLUMN "authorId" DROP NOT NULL;

-- DropTable
DROP TABLE "Comment";

-- AddForeignKey
ALTER TABLE "Convention" ADD CONSTRAINT "Convention_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

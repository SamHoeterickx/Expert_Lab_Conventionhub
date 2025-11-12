/*
  Warnings:

  - Added the required column `category` to the `Convention` table without a default value. This is not possible if the table is not empty.
  - Made the column `contentHtml` on table `Convention` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Convention" ADD COLUMN     "category" TEXT NOT NULL,
ALTER COLUMN "contentHtml" SET NOT NULL;

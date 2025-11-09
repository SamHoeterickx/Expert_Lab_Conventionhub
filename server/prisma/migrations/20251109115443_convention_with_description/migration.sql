/*
  Warnings:

  - Added the required column `description` to the `Convention` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Convention" ADD COLUMN     "description" TEXT NOT NULL;

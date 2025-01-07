/*
  Warnings:

  - Added the required column `title` to the `community_posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "community_posts" ADD COLUMN     "title" TEXT NOT NULL;

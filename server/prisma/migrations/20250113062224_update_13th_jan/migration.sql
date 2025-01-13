-- AlterTable
ALTER TABLE "community_posts" ADD COLUMN     "caption" TEXT;

-- AlterTable
ALTER TABLE "progress" ADD COLUMN     "uploadAsPost" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "workout" ADD COLUMN     "uploadAsPost" BOOLEAN NOT NULL DEFAULT false;

/*
  Warnings:

  - The values [Tip,Plan,Q_A] on the enum `PostType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `newsfeed` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PostType_new" AS ENUM ('Tips', 'Workout', 'Progress');
ALTER TABLE "community_posts" ALTER COLUMN "post_type" TYPE "PostType_new" USING ("post_type"::text::"PostType_new");
ALTER TYPE "PostType" RENAME TO "PostType_old";
ALTER TYPE "PostType_new" RENAME TO "PostType";
DROP TYPE "PostType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "community_posts" DROP CONSTRAINT "community_posts_user_id_fkey";

-- DropForeignKey
ALTER TABLE "newsfeed" DROP CONSTRAINT "newsfeed_user_id_fkey";

-- DropForeignKey
ALTER TABLE "progress" DROP CONSTRAINT "progress_user_id_fkey";

-- DropForeignKey
ALTER TABLE "workout" DROP CONSTRAINT "workout_user_id_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "updated_at" DROP NOT NULL;

-- DropTable
DROP TABLE "newsfeed";

-- DropEnum
DROP TYPE "NewsfeedType";

-- AddForeignKey
ALTER TABLE "workout" ADD CONSTRAINT "workout_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "progress" ADD CONSTRAINT "progress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "community_posts" ADD CONSTRAINT "community_posts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

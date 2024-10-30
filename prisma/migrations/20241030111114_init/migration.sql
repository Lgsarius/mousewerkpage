-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "notes" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'pending';

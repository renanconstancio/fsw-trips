-- AlterTable
ALTER TABLE "Trip" ALTER COLUMN "locationDescription" DROP DEFAULT;

-- AlterTable
ALTER TABLE "TripReservation" ADD COLUMN     "guests" INTEGER NOT NULL DEFAULT 0;

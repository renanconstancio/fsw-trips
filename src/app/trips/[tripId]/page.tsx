import { prisma } from '@/lib/prisma'

interface TripDetailsProps {
	tripId: string
}

const getTrip = async (tripId: string) => {
	const trip = await prisma.trip.findFirst({
		where: {
			id: tripId,
		},
	})

	return trip
}

const TripDetails: React.FC<{ params: TripDetailsProps }> = async ({
	params,
}) => {
	const trip = await getTrip(params.tripId)
	console.log({ trip })
	return (
		<div className="container mx-auto">
			<div className="relative h-[300px] w-full"></div>
		</div>
	)
}

export default TripDetails

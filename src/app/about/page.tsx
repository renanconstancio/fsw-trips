import { prisma } from "@/lib/prisma"

const getTrips = async () => {
    const trips = await prisma.trip.findMany({})

    return trips
}


const About = async () => {
  const trips = await getTrips()

  console.log({ trips })

  return (<div className="">Teste</div>)
}

export default About

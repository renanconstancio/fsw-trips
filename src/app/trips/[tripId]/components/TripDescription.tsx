interface TripDescriptionProps {
	description: string
}

const TripDescription: React.FC<TripDescriptionProps> = ({ description }) => {
	return (
		<div className="flex flex-col p-5">
			<h2 className="font-semibold text-primaryDarker">Sobre a viagem</h2>
			<p className="text-xs leading-5 text-primaryDarker mt-1">{description}</p>
		</div>
	)
}

export default TripDescription

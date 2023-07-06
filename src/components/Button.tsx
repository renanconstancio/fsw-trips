import { ComponentPropsWithoutRef } from 'react'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	variant?: 'primary' | 'outlined'
}

const Button: React.FC<ButtonProps> = ({
	className,
	variant = 'primary',
	...props
}) => {
	const variantClasses = {
		primary: 'bg-primary text-white hover:bg-primaryDarker',
		outlined: 'bg-transparent border-2 border-primary text-primary',
	}

	const _className = [
		variantClasses[variant],
		'appearance-none rounded-lg p-2 text-sm font-medium shadow transition-all',
		className,
	].join(' ')

	return (
		<button className={_className} {...props}>
			{props.children}
		</button>
	)
}

export default Button

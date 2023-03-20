import React from 'react';
import MiniLoader from '../components/MiniLoader';
// import './styles.scss';

interface ButtonInterface {
        base?: any,
        buttonText: string,
        disabled?: boolean,
        loading: any,
        onClick?: any,
        type?: any,
        fullwidth?: any,
        inverted?: any,
        className?: string

}

export const Button = ({ base, buttonText, disabled, loading, onClick, type, fullwidth, inverted, className }:ButtonInterface) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			type={type}
			className={`${
				loading ? 'pointer-events-none opacity-60 pl-12 pr-7' : `${base ? 'px-8' : 'px-12'}`
			} py-3 rounded-md font-semibold relative custom-btn outline-none focus:outline-none ${fullwidth && 'w-full'} ${
				inverted ? 'text-gray-800 border border-gray-800 bg-transparent' : 'text-white bg-gray-800'
			} ${className} text-sm md:text-base`}
		>
			{loading && (
				<span className="absolute top-1.5 left-5">
					<MiniLoader />
				</span>
			)}
			{loading ? 'Processing...' : buttonText}
		</button>
	);
};

import { Flex, Image, Text } from '@chakra-ui/react';

import appleImg from '../../assets/apple-logo.svg';
import googlePlayImg from '../../assets/google-play-logo.svg';

interface DownloadAppProps {
	store: 'Google' | 'Apple';
}

export const DownloadApp = ({ store }: DownloadAppProps) => {
	return (
		<Flex
			bg='black'
			maxW='273px'
			h={['50px', '75px', '75px']}
			align='center'
			justify='center'
			gap='2.5'
			borderRadius='xl'
			padding='4'
			textAlign='center'
			_hover={{
				cursor: 'pointer',
			}}
		>
			<Image
				src={store === 'Google' ? googlePlayImg : appleImg}
				w={['20px', '30px', '50px']}
			/>
			<Text
				fontSize={['14', '16', '18']}
				fontWeight='medium'
				fontFamily='Work Sans, sans-serif'
				color='white'
			>
				{store === 'Google' ? 'Baixe na Play Store' : 'Baixe na App Store'}
			</Text>
		</Flex>
	);
};

import { Flex, Text } from '@chakra-ui/react';
import { DownloadApp } from '../DownloadApp';

export const Footer = () => {
	return (
		<Flex
			align='center'
			justify='space-between'
			gap={4}
			flexDirection={['column', 'column', 'column', 'row']}
			w={['90%', '90%', '90%', '90%', '100%']}
			maxW='1272px'
			h={['auto', 'auto', 'auto', '60']}
			bg='blue.100'
			m='0 auto'
			mt='32'
			mb='14'
			pt={4}
			pb={4}
			paddingInline={['4', '4', '4', '12']}
			borderRadius='xl'
		>
			<Text
				fontSize={['22', '30', '40', '48']}
				fontWeight='bold'
				color='white'
				w={['90%', '90%', '90%', '55%']}
			>
				Se junte na nossa missão e melhore melhore sua vida financeira
			</Text>

			<Flex flexDirection={['row', 'row', 'row', 'column']} gap='6'>
				<DownloadApp store='Apple' />
				<DownloadApp store='Google' />
			</Flex>
		</Flex>
	);
};

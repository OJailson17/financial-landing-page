import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

import heroImg from '../../assets/hero-phones.png';
import { DownloadApp } from '../DownloadApp';

export const Hero = () => {
	const isMobile = useBreakpointValue({
		base: true,
		lg: false,
	});

	return (
		<Flex
			m='0 auto'
			mt='20'
			bg='blue.500'
			w={['90%', '90%', '90%', '90%', '100%']}
			maxW='1271px'
			borderRadius='3xl'
			align='center'
			justify='space-between'
			flexDirection={['column', 'column', 'column-reverse', 'row', 'row']}
			paddingInline={[4, 4, 4, 4, 14]}
		>
			<Box
				w={['90%', '90%', '90%', '45%', '45%']}
				mt='14'
				mb='14'
				position='relative'
				left={isMobile ? '0' : '50px'}
			>
				<Text
					as='h1'
					fontSize={['35', '55', '55']}
					fontWeight='bold'
					fontFamily='epilogue, sans-serif'
					color='white'
				>
					Ganhar recompensas nunca foi tão fácil
				</Text>

				<Flex gap='6' mt='9'>
					<DownloadApp store='Apple' />
					<DownloadApp store='Google' />
				</Flex>
			</Box>

			<Image
				src={heroImg}
				w={['600px', '600px', '450px', '510px', '697px']}
				display={isMobile ? 'none' : ''}
			/>
		</Flex>
	);
};

import { Box, Flex, Image, Text } from '@chakra-ui/react';

import heroImg from '../../assets/hero-phones.png';
import { DownloadApp } from '../DownloadApp';

export const Hero = () => {
	return (
		<Flex
			m='0 auto'
			mt='20'
			bg='blue.500'
			maxW='1271px'
			borderRadius='3xl'
			align='center'
			justify='space-between'
			paddingInline={14}
		>
			<Box w='45%' mt='14' mb='14' position='relative' left='50px'>
				<Text
					as='h1'
					fontSize='55'
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

			<Image src={heroImg} />
		</Flex>
	);
};

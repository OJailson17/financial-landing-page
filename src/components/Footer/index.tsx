import { Flex, Text, VStack } from '@chakra-ui/react';
import { DownloadApp } from '../DownloadApp';

export const Footer = () => {
	return (
		<Flex
			align='center'
			justify='space-between'
			w='1272px'
			h='60'
			bg='blue.100'
			m='0 auto'
			mt='32'
			mb='14'
			paddingInline='12'
			borderRadius='xl'
		>
			<Text fontSize='48' fontWeight='bold' color='white' w='55%'>
				Se junte na nossa missão e melhore melhore sua vida financeira
			</Text>

			<VStack spacing='6'>
				<DownloadApp store='Apple' />
				<DownloadApp store='Google' />
			</VStack>
		</Flex>
	);
};

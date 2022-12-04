import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

import quoteImg from '../../assets/quote.svg';
import invertedQuoteImg from '../../assets/invert-quote.svg';

export const Testimonials = () => {
	return (
		<Box id='testimonials' as='section' mt='20'>
			<Text
				textAlign='center'
				fontSize='30'
				fontFamily='Work Sans, sans-serif'
				color='blue.600'
			>
				O que dizem
			</Text>
			<Text
				fontSize='48'
				fontWeight='bold'
				textAlign='center'
				maxW='550px'
				m='0 auto'
			>
				O que nossos clientes dizem sobre nós?
			</Text>

			<Box mt='6' bg='blue.100' textAlign='center' pt='28' pb='8'>
				<Flex w='60%' m='0 auto' justify='center' align='flex-start'>
					<Image src={quoteImg} />
					<Text
						fontSize='43'
						fontFamily='Work Sans, sans-serif'
						fontWeight='bold'
						color='#2F2E41'
					>
						Era bem difícil me disciplinar antes. As recompensas definitivamente
						me ajudaram a alcançar meus objetivos.
					</Text>
					<Image src={invertedQuoteImg} alignSelf='flex-end' />
				</Flex>
				<Text
					mt='6'
					fontFamily='Work Sans, sans-serif'
					fontWeight='bold'
					fontSize='30'
				>
					~ Mary do Canadá
				</Text>

				<Flex mt='4' align='center' justify='space-between' w='50%' m='0 auto'>
					<Flex align='center' justify='center' gap='3.5'>
						<Flex
							w='14'
							h='14'
							bg='blue.500'
							align='center'
							justify='center'
							borderRadius='full'
						>
							<ArrowLeft size={30} />
						</Flex>

						<Text fontWeight='300' fontSize='24'>
							Anterior
						</Text>
					</Flex>

					<Flex align='center' justify='center' gap='3.5'>
						<Text fontWeight='300' fontSize='24'>
							Próximo
						</Text>
						<Flex
							w='14'
							h='14'
							bg='blue.500'
							align='center'
							justify='center'
							borderRadius='full'
						>
							<ArrowRight size={30} />
						</Flex>
					</Flex>
				</Flex>
			</Box>
		</Box>
	);
};

import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

import trackImg from '../../assets/track-saving.png';
import goalsImg from '../../assets/goals.png';
import rewardImg from '../../assets/rewards.png';

export const HowWorksSection = () => {
	const isTablet = useBreakpointValue({
		base: false,
		md: true,
		lg: false,
	});

	return (
		<Box
			id='how-works'
			as='section'
			mt='20'
			paddingInline={['6', '6', '10', '16', '16']}
		>
			<Text
				textAlign='center'
				fontSize={['24', '24', '30']}
				fontFamily='Work Sans, sans-serif'
				color='blue.600'
			>
				Como funciona
			</Text>
			<Text
				fontSize={['30', '30', '48']}
				fontWeight='bold'
				textAlign='center'
				maxW='523px'
				m='0 auto'
			>
				Como nosso produto funciona?
			</Text>

			<Flex
				mt='6'
				justify='space-between'
				align='center'
				flexWrap='wrap'
				textAlign='center'
				flexDirection={['column', 'column', 'row']}
			>
				<Box w={['70%', '90%', '50%']} maxW='293px'>
					<Image src={trackImg} />
					<Text fontSize='20' fontWeight='bold'>
						Gerencie suas{' '}
						<Text as='span' color='blue.100'>
							economias
						</Text>
					</Text>
					<Text fontSize='20' fontFamily='Work Sans, sans-serif' mt='6'>
						Acompanhe suas economias e crie melhores hábitos de consumo
					</Text>
				</Box>

				<Box w={['70%', '90%', '50%']} maxW='293px'>
					<Image src={goalsImg} />
					<Text fontSize='20' fontWeight='bold'>
						Cumpra suas{' '}
						<Text as='span' color='blue.100'>
							metas
						</Text>
					</Text>
					<Text fontSize='20' fontFamily='Work Sans, sans-serif' mt='6'>
						Cumpra suas metas de economia
					</Text>
				</Box>

				<Box
					w={['70%', '90%', '50%']}
					maxW='293px'
					m={isTablet ? '0 auto' : ''}
				>
					<Image src={rewardImg} />
					<Text fontSize='20' fontWeight='bold'>
						Resgatar{' '}
						<Text as='span' color='blue.100'>
							recompensas
						</Text>
					</Text>
					<Text fontSize='20' fontFamily='Work Sans, sans-serif' mt='6'>
						Resgate recompensas quando atingir suas metas de economia
					</Text>
				</Box>
			</Flex>
		</Box>
	);
};

import { forwardRef, Box, Heading, Text, BoxProps } from '@chakra-ui/react'

export interface CardProps extends BoxProps {
  sign?: string
  href: string
  title: string
  description: string
}

const Card = forwardRef<CardProps, 'div'>((props, ref) => (
  <Box
    m="1rem"
    p="1.5rem"
    textAlign="left"
    color="inherit"
    ref={ref}
    _hover={{
      color: '#0070f3',
      borderColor: '#0070f3',
    }}
    {...props}
  >
    <Heading as="h2" fontSize="1.5rem" mb="1rem">
      {props.title} {props.sign}
    </Heading>
    <Text m={0} fontSize="1.25rem" lineHeight={1.5}>
      {props.description}
    </Text>
  </Box>
))

export default Card

import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box border="1px" borderColor="gray.200" borderRadius="md" overflow="hidden">
      <Image src={imageSrc} alt={title} />

      <VStack align="start" p={4}>
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <HStack justifyContent="space-between" width="100%">
          <Text color="blue.500">Read More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;

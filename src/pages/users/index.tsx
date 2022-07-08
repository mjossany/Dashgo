import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />

        <Box
          bg="gray.800"
          p="8"
          flex="1"
          borderRadius={8}
        >
          <Flex
            mb="8"
            justify="space-between"
            alignItems="center"
          >
            <Heading
              size="lg"
              fontWeight="normal"
            >
              Users
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Create new user
            </Button>
          </Flex>

          <Table
            colorScheme="whiteAlpha"
          >
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>
                  User
                </Th>
                <Th>
                  Subscription date
                </Th>
                <Th w="8">

                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text
                      fontWeight="bold"
                    >
                      Jossany Moura
                    </Text>
                    <Text
                      fontSize="sm"
                      color="gray.300"
                    >
                      mjossany@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>
                  July 8, 2022
                </Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Edit
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text
                      fontWeight="bold"
                    >
                      Jossany Moura
                    </Text>
                    <Text
                      fontSize="sm"
                      color="gray.300"
                    >
                      mjossany@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>
                  July 8, 2022
                </Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Edit
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text
                      fontWeight="bold"
                    >
                      Jossany Moura
                    </Text>
                    <Text
                      fontSize="sm"
                      color="gray.300"
                    >
                      mjossany@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>
                  July 8, 2022
                </Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Edit
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  )
}
import React, { useState } from "react";
import { Box, Flex, Heading, Text, Input, Button, Image, Grid, Menu, MenuButton, MenuList, MenuItem, IconButton, Badge } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0fGVufDB8fHx8MTcxMjcwMTY3MXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwcm9kdWN0fGVufDB8fHx8MTcxMjcwMTY3MXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxwcm9kdWN0fGVufDB8fHx8MTcxMjcwMTY3MXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState(0);

  const handleSearch = () => {
    // Perform search logic here
    console.log("Searching for:", searchTerm);
  };

  const handleAddToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <Box>
      {/* Header */}
      <Flex as="header" align="center" justify="space-between" padding={4} bg="white" borderBottom="1px" borderColor="gray.200">
        <Heading as="h1" size="xl" color="red.500">
          Sauce
        </Heading>
        <Flex align="center">
          <Input placeholder="Search products..." mr={4} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <Button leftIcon={<FaSearch />} colorScheme="red" variant="solid" onClick={handleSearch}>
            Search
          </Button>
        </Flex>
        <Flex align="center">
          <Menu>
            <MenuButton as={IconButton} aria-label="Categories" icon={<FaUser />} variant="outline" colorScheme="red" mr={4} />
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Orders</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
          <Button leftIcon={<FaShoppingCart />} colorScheme="red" variant="outline">
            Cart
            <Badge ml={2} colorScheme="red">
              {cartItems}
            </Badge>
          </Button>
        </Flex>
      </Flex>

      {/* Banner */}
      <Box bg="red.500" color="white" py={20} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>
          Welcome to Sauce
        </Heading>
        <Text fontSize="xl">Buy and sell products with ease</Text>
      </Box>

      {/* Products */}
      <Grid templateColumns="repeat(3, 1fr)" gap={8} p={8}>
        {products.map((product) => (
          <Box key={product.id} borderWidth={1} borderRadius="lg" overflow="hidden" bg="white" boxShadow="md">
            <Image src={product.image} alt={product.name} />
            <Box p={4}>
              <Heading as="h3" size="lg" mb={2}>
                {product.name}
              </Heading>
              <Text fontSize="xl" fontWeight="bold" color="red.500">
                ${product.price}
              </Text>
              <Button mt={4} colorScheme="red" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;

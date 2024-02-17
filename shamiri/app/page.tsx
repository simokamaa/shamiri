import { Flex, Text, Button } from '@radix-ui/themes';
import ResidentCard from './components/ResidentCard'

export default function MyApp() {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello </Text>
      <Button>Let's go</Button>
      <ResidentCard/>
    </Flex>
  );
}
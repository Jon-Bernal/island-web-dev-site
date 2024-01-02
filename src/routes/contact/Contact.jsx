import {
  TextInput,
  Textarea,
  Group,
  Button,
  Box,
  Fieldset,
  Space,
} from "@mantine/core";
import { useForm } from "@mantine/form";
// import styles from "./contact.module.css";

export default function Contact() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validate: {
      name: (value) => value !== "",
      email: (value) =>
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)
          ? null
          : "Invalid email",
      message: (value) => value !== "",
    },
  });

  return (
    <Box maw={340} mx="auto">
      <Space h="xl" />
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Fieldset legend="Message Whidbey Island Web Dev">
          <TextInput
            size="sm"
            radius="sm"
            label="Name"
            withAsterisk
            placeholder="John Smith"
            {...form.getInputProps("name")}
          />
          <TextInput
            size="sm"
            radius="sm"
            label="Email"
            withAsterisk
            placeholder="example@provider.com"
            {...form.getInputProps("email")}
            type="email"
          />
          <Textarea
            label="Message"
            withAsterisk
            {...form.getInputProps("message")}
            placeholder="Input placeholder"
            autodsize
            minRows={3}
          />
          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </Fieldset>
      </form>
    </Box>
  );
}

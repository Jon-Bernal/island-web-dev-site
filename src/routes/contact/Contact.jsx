import { Input } from "@chakra-ui/react";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div>
      <Input placeholder="name" isRequired={true} variant="outline" />
      <Input
        placeholder="example@provider.com"
        type="email"
        isRequired={true}
      />
      <Input placeholder="message" isRequired={true} />
    </div>
  );
}

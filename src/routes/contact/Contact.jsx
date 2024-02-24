import styles from "./contact.module.css";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  TextInput,
  TextArea,
} from "grommet";

export default function Contact() {
  const [msg, setMsg] = useState({
    initialValues: { name: "", email: "", message: "" },
  });
  // function validate(name, email, message) {
  //   let isValid = true;
  //   if (name === "") isValid = false;
  //   if (message === "") isValid = false;
  //   if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) isValid = false;
  //   return isValid;
  // }

  return (
    <Card height="medium" width="large" background="dark-2">
      <CardHeader pad="medium">
        <h2>Contact Me</h2>
      </CardHeader>
      <CardBody pad="medium">
        <form
          onSubmit={(values) => console.log(values)}
          className={styles.contact_form}
        >
          <TextInput
            placeholder="John Smith"
            value={msg.name}
            onChange={(event) => setMsg({ ...msg, name: event.target.value })}
          />
          <TextInput
            placeholder="example@provider.com"
            value={msg.email}
            className={styles.input}
            onChange={(event) => setMsg({ ...msg, email: event.target.value })}
          />
          <TextArea
            placeholder="Write your message here."
            value={msg.message}
            className={styles.input}
            onChange={(event) =>
              setMsg({ ...msg, message: event.target.value })
            }
          />
          <Button
            primary
            type="submit"
            label="Submit"
            alignSelf="end"
            color={"#0488ff"}
            margin={{ top: "20px" }}
          />
        </form>
      </CardBody>
    </Card>
  );
}

// import styles from "./contact.module.css";

import { useState } from "react";

export default function Contact() {
  useState({ initialValues: { name: "", email: "", message: "" } });
  // function validate(name, email, message) {
  //   let isValid = true;
  //   if (name === "") isValid = false;
  //   if (message === "") isValid = false;
  //   if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) isValid = false;
  //   return isValid;
  // }

  return (
    <form onSubmit={(values) => console.log(values)}>
      {/* <Fieldset legend="Message Whidbey Island Web Dev"> */}
      <input
        type="text"
        // size="sm"
        // radius="sm"
        // label="Name"
        // withAsterisk
        placeholder="John Smith"
      />
      <input
        // size="sm"
        // radius="sm"
        // label="Email"
        // withAsterisk
        placeholder="example@provider.com"
        type="email"
      />
      <textarea
        name="message"
        // label="Message"
        // withAsterisk
        // placeholder="Input placeholder"
        // autodsize
        // minRows={3}
      />
      {/* <Group justify="flex-end" mt="md"> */}
      <button type="submit">Submit</button>
      {/* </Group> */}
      {/* </Fieldset> */}
    </form>
  );
}

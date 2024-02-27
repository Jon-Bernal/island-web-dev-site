import styles from "./contact.module.css";
import { useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Button,
  TextInput,
  TextArea,
  FormField,
} from "grommet";
import emailjs from "@emailjs/browser";

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

  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     "service_d440m1m",
    //     "service_d440m1m",
    //     document.querySelector(".contact_form"),
    //     "qm9_mgZliduEpYnoW"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       console.log("message sent!");
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       console.log("error sending message, try again!");
    //     }
    //   );
  };

  return (
    <div className={styles.center}>
      <Card background="dark-2">
        {/* <CardHeader pad="medium"></CardHeader> */}
        <CardBody pad="medium">
          <h2>Contact Me</h2>
          <form onSubmit={sendEmail} className={styles.contact_form}>
            <input
              name="user_email"
              type="email"
              placeholder="Email"
              required
            />
            <textarea
              name="user_message"
              placeholder="Write message..."
              required
            ></textarea>
            {/* <FormField label="Name"> */}
            {/* <TextInput
                placeholder="John Smith"
                value={msg.name}
                onChange={(event) =>
                  setMsg({ ...msg, name: event.target.value })
                }
              /> */}
            {/* </FormField> */}
            {/* <div className={styles.spacer}></div> */}
            {/* <FormField label="Email">
              <TextInput
                placeholder="example@provider.com"
                value={msg.email}
                onChange={(event) =>
                  setMsg({ ...msg, email: event.target.value })
                }
              />
            </FormField>
            <div className={styles.spacer}></div> */}
            {/* <FormField label="Message">
              <TextArea
                placeholder="Write your message here."
                value={msg.message}
                className={styles.input}
                onChange={(event) =>
                  setMsg({ ...msg, message: event.target.value })
                }
              />
            </FormField> */}
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
    </div>
  );
}

import * as Yup from "yup";

export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const contactSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter email"),
  message: Yup.string().required("Send a message to us"),
} as Record<keyof ContactFormValues, Yup.AnySchema>);

import { Formik } from "formik";
import Label from "@/components/ui/label";
import { contactSchema } from "@/schema/contact-schema";
import TextInput from "@/components/custom/text-input";
import CustomButton from "@/components/custom/button";
import MessagesTextInput from "@/components/custom/message-text-input";

const Contact = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const handleSendMessage = async () => {
    console.log("message sent");
  };

  return (
    <div>
      <div className="w-[20vw] h-[100%] bg-hoverLGray fixed top-0 right-0 z-[-5]" />
      <div className="fixed w-[5rem] h-[5rem] bg-hoverLGray bottom-[15rem] left-0 z-[-5]" />
      <section className="grid md:grid-cols-2 grid-cols-1 gap-8 my-20 md:px-20 px-5">
        <div className="flex justify-center order-2 md:order-1">
          <Formik
            initialValues={initialValues}
            validate={() => contactSchema}
            onSubmit={() => handleSendMessage()}
          >
            {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
              <div className="flex flex-col gap-5 py-12 md:py-0">
                <div className="flex flex-col md:flex-row gap-5">
                  <TextInput
                    title={"First Name"}
                    type={"string"}
                    name={"firstName"}
                    value={values.firstName}
                    error={errors?.firstName ?? null}
                    onChange={handleChange("firstName")}
                    onBlur={handleBlur("firstName")}
                  />
                  <TextInput
                    title={"Last Name"}
                    type={"string"}
                    name={"lastName"}
                    value={values.lastName}
                    error={errors.lastName ?? null}
                    onChange={handleChange("lastName")}
                    onBlur={handleBlur("lastName")}
                  />
                </div>
                <TextInput
                  title={"Email"}
                  type={"email"}
                  name={"email"}
                  value={values.email}
                  error={errors.email ?? null}
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
                <MessagesTextInput
                  title={"Message"}
                  name={"message"}
                  value={values.message}
                  error={errors.message ?? null}
                  onChange={handleChange("message")}
                  onBlur={handleBlur("message")}
                />

                <CustomButton
                  title={"Send message"}
                  onClick={() => handleSubmit()}
                  style={
                    "bg-primary border-primary p-2 px-4 rounded-md cursor-pointer"
                  }
                />
              </div>
            )}
          </Formik>
        </div>

        <div className="relative md:block-[1px] bg-white border-primary-100 rounded p-6 md:px-12 order-1 md:order-2 shadow-md">
          <div className="absolute top-[-2rem] left-[-2rem] h-[4rem] w-[4rem] bg-accent" />
          <div>
            <Label label={`contact us`} />
            <h1 className="font-bold md:leading-normal leading-normal tracking-wide uppercase text-4xl md:text-5xl pb-3">
              Get in touch with us!{" "}
              <span className="text-primary">
                We cannot wait to hear from you
              </span>
              .
            </h1>
            <p className="font-thin">
              Reach out to us about your concerns and ideas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import { Formik } from "formik";
import Label from "@/components/ui/label";
import { contactSchema } from "@/schema/contact-schema";
import TextInput from "@/components/custom/text-input";
import CustomButton from "@/components/custom/button";
import MessagesTextInput from "@/components/custom/message-text-input";
import { Mail, Phone, MapPin } from "lucide-react";

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
    <div className="md:px-20 px-5 py-16">
      <section className="grid md:grid-cols-2 grid-cols-1 gap-12 items-start">
        {/* Contact info */}
        <div className="order-1">
          <Label label="contact us" />
          <h1 className="font-black leading-tight uppercase text-3xl md:text-4xl pb-4 text-gray-800">
            Get in touch with us!{" "}
            <span className="text-primary-500">
              We cannot wait to hear from you
            </span>
            .
          </h1>
          <p className="text-gray-500 mb-8">
            Reach out to us about your concerns, ideas, or partnership
            opportunities.
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary-500" size={18} />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Email</p>
                <p className="text-gray-500 text-sm">
                  caritaschristianelders@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary-500" size={18} />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Phone</p>
                <p className="text-gray-500 text-sm">+234 802 322 9907</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary-500" size={18} />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Address</p>
                <p className="text-gray-500 text-sm">
                  No 1 Bishop Moynagh Pastoral Centre Lane,
                  <br />
                  Uyo, Akwa Ibom State, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="order-2 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <Formik
            initialValues={initialValues}
            validate={() => contactSchema}
            onSubmit={() => handleSendMessage()}
          >
            {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
              <div className="flex flex-col gap-5">
                <div className="flex flex-col md:flex-row gap-5">
                  <TextInput
                    title="First Name"
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    error={errors?.firstName ?? null}
                    onChange={handleChange("firstName")}
                    onBlur={handleBlur("firstName")}
                    placeholder="John"
                  />
                  <TextInput
                    title="Last Name"
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    error={errors.lastName ?? null}
                    onChange={handleChange("lastName")}
                    onBlur={handleBlur("lastName")}
                    placeholder="Doe"
                  />
                </div>
                <TextInput
                  title="Email"
                  type="email"
                  name="email"
                  value={values.email}
                  error={errors.email ?? null}
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                  placeholder="you@example.com"
                />
                <MessagesTextInput
                  title="Message"
                  name="message"
                  value={values.message}
                  error={errors.message ?? null}
                  onChange={handleChange("message")}
                  onBlur={handleBlur("message")}
                  placeholder="How can we help you?"
                />
                <CustomButton
                  title="Send message"
                  onClick={() => handleSubmit()}
                  style="p-3 w-full"
                />
              </div>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
};

export default Contact;

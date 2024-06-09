import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
});

const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const numberId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    onAdd({ id: nanoid(), ...values });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div className={css.input}>
          <label htmlFor={nameId}>Name</label>
          <Field className={css.field} id={nameId} type="text" name="name" />
          <ErrorMessage name="name" as="span" />
        </div>
        <div className={css.input}>
          <label htmlFor={numberId}>Number</label>
          <Field
            className={css.field}
            id={numberId}
            type="tel"
            name="number"
            pattern="[0-9\-]+$"
          />
          <ErrorMessage name="number" as="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

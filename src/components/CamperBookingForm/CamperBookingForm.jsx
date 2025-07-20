import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./CamperBookingForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  bookingDate: Yup.date()
    .min(new Date(), "Booking date cannot be in the past")
    .required("Booking date is required"),
  comment: Yup.string().max(500, "Comment must be less than 500 characters"),
});

function CamperBookingForm() {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form submitted:", values);
    // Здесь будет логика отправки данных

    // Симулируем отправку
    setTimeout(() => {
      alert("Booking request sent successfully!");
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className={css.formContainer}>
      <h3 className={css.formTitle}>Book your campervan now</h3>
      <p className={css.formSubtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className={css.bookingForm}>
            <div className={css.fieldGroup}>
              <Field
                type="text"
                name="name"
                placeholder="Name*"
                className={`${css.formInput} ${
                  errors.name && touched.name ? css.error : ""
                }`}
              />
              <ErrorMessage
                name="name"
                component="p"
                className={css.errorText}
              />
            </div>

            <div className={css.fieldGroup}>
              <Field
                type="email"
                name="email"
                placeholder="Email*"
                className={`${css.formInput} ${
                  errors.email && touched.email ? css.error : ""
                }`}
              />
              <ErrorMessage
                name="email"
                component="p"
                className={css.errorText}
              />
            </div>

            <div className={css.fieldGroup}>
              <Field
                type="date"
                name="bookingDate"
                placeholder="Booking date*"
                className={`${css.dateInput} ${
                  errors.bookingDate && touched.bookingDate ? css.error : ""
                }`}
              />
              <ErrorMessage
                name="bookingDate"
                component="p"
                className={css.errorText}
              />
            </div>

            <div className={css.fieldGroup}>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className={`${css.commentTextarea} ${
                  errors.comment && touched.comment ? css.error : ""
                }`}
              />
              <ErrorMessage
                name="comment"
                component="p"
                className={css.errorText}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={css.submitButton}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CamperBookingForm;

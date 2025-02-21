import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

const SignupForm = () => {
  return (
    <div>
      <h2>Sign In</h2>
      <Formik>
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                placeholder="Enter Name"
                id="name"
              />
              <ErrorMessage name="name" className="text-red-500 text-sm" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Enter Email"
                id="email"
              />
              <ErrorMessage name="email" className="text-red-500 text-sm" />
            </div>
            <div>
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                placeholder="Enter Name"
                id="name"
              />
              <ErrorMessage name="name" className="text-red-500 text-sm" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;

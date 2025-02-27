import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Auth from "../context/context";
import { toast } from "react-toastify";

const SignInForm = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(Auth);
  // Yup validation
  const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must not exceed 20 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await signIn(values);
      toast.success("signIn was successful ");
      resetForm();
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Sign in failed, Please try again");
    }
    setSubmitting(false);
  };

  return (
    <div className="mx-20 my-20">
      <h2>SignIn</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignInSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-slate-900 font-medium"
              >
                Email
              </label>
              <Field
                type="email"
                name="email"
                placeholder="Enter Email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-slate-900 font-medium"
              >
                Password
              </label>
              <Field
                type="password"
                name="password"
                placeholder="Enter Password"
                id="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-slate-900 text-white py-2 rounded-md font-medium hover:bg-slate-800 transition"
            >
              {isSubmitting ? "Signing In..." : "Sign In"}
            </button>
          </Form>
        )}
      </Formik>
      <p>
        Dont have an account? <Link to={"/signup"}>Sign Up</Link>
      </p>
    </div>
  );
};

export default SignInForm;

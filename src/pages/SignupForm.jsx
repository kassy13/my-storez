// import { ErrorMessage, Field, Form, Formik } from "formik";
// import React, { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import * as Yup from "yup";
// import { toast } from "react-toastify";
// import Auth from "../context/context";

// const SignupForm = () => {
//   const { signup } = useContext(Auth);
//   const navigate = useNavigate();
//   // Yup validation
//   const SignupSchema = Yup.object().shape({
//     name: Yup.string()
//       .min(2, "Name is too Short")
//       .max(50, "Name is too long")
//       .required("Name is required"),
//     email: Yup.string().email("Invalid Email").required("Email is required"),
//     password: Yup.string()
//       .min(6, "Password must be at least 6 characters")
//       .max(20, "Password must not be over 20 characters long")
//       .required("Password is required"),
//   });
//   const initialvalues = {
//     name: "",
//     email: "",
//     password: "",
//   };
//   const handlesubmit = async (values, { setSubmitting, resetForm }) => {
//     try {
//       await signup(values);
//       toast.success("signup successfull!!!");
//       resetForm();
//       setTimeout(() => {
//         navigate("/signin");
//       }, 3000);
//     } catch (err) {
//       console.log(err);
//       toast.error(err.message || "Signup failed, please try again");
//     }
//     setSubmitting(false);
//   };
//   return (
//     <div className="flex justify-center min-h-screen bg-gray-100 px-4">
//       <h2>Sign Up</h2>
//       <Formik
//         initialValues={initialvalues}
//         validationSchema={SignupSchema}
//         onSubmit={handlesubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <div>
//               <label htmlFor="name">Name</label>
//               <Field
//                 type="text"
//                 name="name"
//                 placeholder="Enter Name"
//                 id="name"
//               />
//               <div className="text-red-500 text-sm">
//                 <ErrorMessage
//                   name="name"
//                   // className="text-red-500 text-sm"
//                   // component="p"
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="email">Email</label>
//               <Field
//                 type="email"
//                 name="email"
//                 placeholder="Enter Email"
//                 id="email"
//               />
//               <ErrorMessage
//                 name="email"
//                 className="!text-red-500 text-sm"
//                 component="div"
//               />
//             </div>
//             <div>
//               <label htmlFor="password">Name</label>
//               <Field
//                 type="password"
//                 name="password"
//                 placeholder="Enter Password"
//                 id="password"
//               />
//               <ErrorMessage
//                 name="password"
//                 className="text-red-500 text-sm"
//                 component="div"
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="bg-slate-900 text-white "
//             >
//               {isSubmitting ? (
//                 <div>
//                   {" "}
//                   Signing up....{" "}
//                   <img src="https://lottiefiles.com/free-animation/trail-loading-LBtuXb8poE" />{" "}
//                 </div>
//               ) : (
//                 "sign Up"
//               )}
//             </button>
//           </Form>
//         )}
//       </Formik>
//       <p className="text-center py-3">
//         Alrady have an account? <Link to={"/signin"}>SignIn</Link>
//       </p>
//     </div>
//   );
// };

// export default SignupForm;

import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Auth from "../context/context";

const SignupForm = () => {
  const { signup } = useContext(Auth);
  const navigate = useNavigate();

  // Yup validation
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name is too short")
      .max(50, "Name is too long")
      .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must not exceed 20 characters")
      .required("Password is required"),
  });

  const initialvalues = {
    name: "",
    email: "",
    password: "",
  };

  const handlesubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await signup(values);
      toast.success("Signup successful!");
      resetForm();
      setTimeout(() => {
        navigate("/signin");
      }, 3000);
    } catch (err) {
      console.log(err);
      toast.error(err.message || "Signup failed, please try again");
    }
    setSubmitting(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-6">
          Sign Up
        </h2>
        <Formik
          initialValues={initialvalues}
          validationSchema={SignupSchema}
          onSubmit={handlesubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-slate-900 font-medium"
                >
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

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
                {isSubmitting ? "Signing up..." : "Sign Up"}
              </button>
            </Form>
          )}
        </Formik>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-slate-900 font-medium">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;

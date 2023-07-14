"use client";
import React from "react";
import Spinner from "../share/spinner";
import { useState } from "react";
import { Formik } from "formik";
import Cookies from "js-cookie";
// import { LoginSchema } from "@/app/utils/authValidation";
import { LoginSchema } from "@/utils/validations";
// import { loginService } from "@/app/api/auth";
// import { currentUser } from "@/redux/features/userReducer";
import { currentUser } from "@/src/redux/features/userReducer";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "@/generated/graphql";
// import AuthContainer from "./container";
import AuthContainer from "../share/AuthContainer";
import Input from "../share/Input";
import Button from "../share/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const [login] = useLoginMutation();
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <AuthContainer
      heading="LOG IN"
      subHeading=" Welcome back! Log in to your account to enjoy the feel of life"
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
          setIsLoading(true);
          try {
            const response = await login({
              variables: {
                input: {
                  email: values.email,
                  password: values.password,
                },
              },
            });

            if (response?.data?.login?.token === undefined)
              throw new Error("Something went wrong");
            let currentTime = new Date();
            currentTime.setMinutes(currentTime.getMinutes() + 14);
            let accessTokenExpireDate = currentTime.toUTCString();
            Cookies.set("accessToken", response?.data?.login?.token, {
              expires: new Date(accessTokenExpireDate),
            });
            // Cookies.set("refreshToken", response?.data?.user.refreshToken);
            // Cookies.set("email", response?.data?.user.email);
            dispatch(currentUser(response?.data?.login?.user));
            setIsLoading(false);
            // router.push("/");
            console.log(response);
            return response;
          } catch (error: any) {
            return error.message;
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center"
          >
            {}
            <Input
              placeholder="Enter Email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <Input
              placeholder="Enter Password"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <Button
              style="py-[8px] mt-4 border"
              type="submit"
              text={
                isLoading ? (
                  <Spinner color="white" height="26" width="26" />
                ) : (
                  "Login"
                )
              }
              disabled={isSubmitting}
            />
          </form>
        )}
      </Formik>
      <div className="flex justify-center items-center mt-5">
        <p className="mr-3 text-sm">Don't have an account yet?</p>
        <Link href="/auth/signup">
          <p className="text-sky-400">Sign up</p>
        </Link>
      </div>
    </AuthContainer>
  );
};

export default Login;

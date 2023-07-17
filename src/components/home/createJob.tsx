import React, { useState } from "react";
import { Formik } from "formik";
import Link from "next/link";
import Button from "../share/Button";
import Spinner from "../share/spinner";
import Input from "../share/Input";
import Uploader from "../share/uploader";
import AuthContainer from "../share/AuthContainer";
import { useCreateJobMutation, useProcessFileMutation } from "@/generated/graphql";
import { createJobSchema } from "@/utils/validations";

const CreateJob = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [createJob] = useCreateJobMutation();
  const [processFile] = useProcessFileMutation();
  return (
    <AuthContainer
      heading="Upload your file"
      subHeading="Easily upload your file we will handle the rest"
    >
      <Formik
        initialValues={{ description: "", file: "" }}
        validationSchema={createJobSchema}
        onSubmit={async (values) => {
          setIsLoading(true);
          console.log(values)
      
          try {
            const response = await createJob({
              variables: {
                input: {
                  userId: 1,
                  onGoing: false,
                  completed: false,
                  description: values.description,
                  file: values.file,
                },
              },
            });

            setIsLoading(false);
            console.log(response)
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
            <Uploader name="file" onChange={handleChange}/>
            {errors.file && touched.file && errors.file}
            <Input
              placeholder="Leave a note"
              type="text"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
             {errors.description && touched.description && errors.description}
            <Button
              style="py-[8px] mt-4 border"
              type="submit"
              text={
                isLoading ? (
                  <Spinner color="white" height="26" width="26" />
                ) : (
                  "Make order"
                )
              }
              disabled={isSubmitting}
            />
          </form>
        )}
      </Formik>
    </AuthContainer>
  );
};

export default CreateJob;

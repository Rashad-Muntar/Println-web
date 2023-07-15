import React,{useState} from 'react'
import { Formik } from 'formik';
import Link from 'next/link';
import Button from '../share/Button';
import Spinner from '../share/spinner';
import Input from '../share/Input';
import AuthContainer from '../share/AuthContainer';
import { useCreateJobMutation } from '@/generated/graphql';
import { LoginSchema } from '@/utils/validations';


const CreateJob = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [createJob] = useCreateJobMutation()
    return (
        <AuthContainer
          heading="LOG IN"
          subHeading=" Welcome back! Log in to your account to enjoy the feel of life"
        >
          <Formik
            initialValues={{ id: 0, description: "", file: "", email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={async (values) => {
              setIsLoading(true);
              try {
                const response = await createJob({
                  variables: {
                    input: {
                        userId: values.id, onGoing: false, completed: false, description: values.description, file: values.file
                    },
                  },
                });
    
                setIsLoading(false);
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
                      "Make order"
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
}

export default CreateJob
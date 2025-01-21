import React from "react";
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";

const AuthForm = () => {
  const data = useActionData();
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();

  const isLogin = searchParams.get("mode") === "login";
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="p-3 bg-red-950 rounded-lg">
      <div>
        <h3 className="text-lg font-semibold text-white text-center mb-3">
          {isLogin ? "Login to continue" : "Create an account"}
        </h3>
      </div>
      <Form method="post">
        {!isLogin && (
          <>
            <div className="flex justify-between gap-2 mb-2">
              <label htmlFor="name" className="text-white font-semibold">
                Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                required
                className="px-2 py-1 rounded-md"
              />
            </div>
            <div className="flex justify-between gap-2 mb-2">
              <label htmlFor="phone" className="text-white font-semibold">
                Phone
              </label>
              <input
                type="phone"
                name="phone"
                id="phone"
                required
                className="px-2 py-1 rounded-md"
              />
            </div>
          </>
        )}
        <div className="flex justify-between gap-2 mb-2">
          <label htmlFor="email" className="text-white font-semibold">
            Email:
          </label>
          <input
            name="email"
            type="text"
            id="email"
            required
            className="px-2 py-1 rounded-md"
          />
        </div>
        <div className="flex justify-between gap-2">
          <label htmlFor="password" className="text-white font-semibold">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="px-2 py-1 rounded-md"
          />
        </div>
        <div className="w-full flex items-center gap-2">
          <button
            disabled={isSubmitting}
            className="py-1 px-2 mr-auto mt-3 flex flex-col items-center font-bold text-white bg-green-600 rounded-md"
          >
            {isSubmitting ? "Submitting" : isLogin ? "Login" : "Signup"}
          </button>
          <Link
            to={`/auth?mode=${isLogin ? "register" : "login"}`}
            className="underline text-white "
          >
            {isLogin
              ? "Dont have an account? sign up"
              : "Already have an account? login."}
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default AuthForm;

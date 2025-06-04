"use client";
import { Upload } from "lucide-react";
import React, { useState } from "react";
import MyInput from "../ui/Input";
import { PasswordStrengthMeter } from "./PasswordStrengthMeter";

const RegistrationForm = () => {
  const [steps, setSteps] = useState(1);
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const stepIndData = [
    {
      step: 1,
      title: "Personal Ifo",
    },
    {
      step: 2,
      title: "Academic Details",
    },
    {
      step: 3,
      title: "Address & Conform",
    },
  ];

  const calculatePasswordStrength = (password) => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return Math.min(5, strength);
  };

  const handlePasswordChange = (e) => {
    const pass = e.target.value;
    // form.setValue("password", password);
    setPassword(pass);
    setPasswordStrength(calculatePasswordStrength(pass));
  };

  return (
    <section className="w-full">
      {/* form header */}

      <div className="bg-blue-600 text-white w-full p-8">
        <p className="text-2xl font-semibold">Student Registration</p>
        <p className="font-light no-wrap">
          Create your student account to get started
        </p>
      </div>

      {/* step indicater */}

      <div className="flex justify-between items-center flex-wrap p-8 w-full bg-white border-b border-gray-300">
        {stepIndData.map((step) => (
          <div key={step.step} className="px-8">
            <div className="flex items-center gap-2">
              <p
                onClick={() => setSteps(step.step)}
                className={`md:h-10 h-8 md:w-10 w-8 bg-blue-600 rounded-full flex justify-center items-center font-semibold ${
                  step.step === steps
                    ? "bg-blue-600  text-white"
                    : "bg-white border border-gray-300 text-gray-300"
                } `}
              >
                {step.step}
              </p>

              <div className="md:w-[80px] w-10 bg-gray-300 h-1 rounded-l-full rounded-r-full" />
            </div>

            <p
              className={` font-medium text-[12px] text-center py-3 no-wrap ${
                step.step === steps ? "text-blue-700" : "text-gray-300"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
      <form className="p-8">
        {steps === 1 && (
          <>
            <div className="flex md:flex-row flex-col justify-center gap-8 w-[100%]">
              <div className="grid w-full">
                <label>First Name</label>

                <MyInput type="text" placeholder="Enter your first name" />
              </div>

              <div className="grid w-full">
                <label>Last Name</label>
                <MyInput type="text" placeholder="Enter your last name" />
              </div>
            </div>

            {/* email */}

            <div className="grid w-full my-8">
              <label>Email Address</label>
              <MyInput type="email" placeholder="Enter your email/gmail" />
            </div>

            {/* phone number */}

            <div className="grid w-full my-8">
              <label>Phone Number</label>
              <MyInput type="number" placeholder="Enter your contact number" />
            </div>

            <div className="flex justify-center items-center">
              <div className="h-[160px] w-[160px] border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center">
                <div className="text-gray-500">
                  <div className="flex justify-center items-center">
                    <Upload size={30} />
                  </div>

                  <p className=" text-sm"> upload photo</p>
                </div>
              </div>
            </div>
          </>
        )}

        {steps === 2 && (
          <>
            {/* password */}
            <div>
              <div className="grid w-full">
                <label>Password</label>

                <input
                  type="password"
                  placeholder="Create a secure password"
                  onChange={handlePasswordChange}
                  className="p-3 border border-gray-300 rounded bg-white"
                />
              </div>

              <PasswordStrengthMeter strength={passwordStrength} />
            </div>

            {/* conform password */}

            <div className="grid w-full my-8">
              <label>Conform Password</label>

              <input
                type="password"
                placeholder="Conform your password"
                onChange={setConfirmPass}
                className="p-3 border border-gray-300 rounded bg-white"
              />
            </div>

            {/* select cources */}

            <div className="grid w-full my-8">
              <label>Cources</label>

              <select className="p-3 border border-gray-300 rounded text-gray-500">
                <option>Select your cource</option>
                <option>ADCA</option>
                <option>CCC</option>
                <option>O Level</option>
                <option>Web Development</option>
                <option>Full Stack Web Development</option>
                <option>Data Analysis</option>
              </select>
            </div>

            {/* select gender */}

            <div className="grid w-full my-8">
              <label>Gender</label>

              <select className="p-3 border border-gray-300 rounded  text-gray-500">
                <option>Select your gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/* <div className="flex gap-3 mt-8">
              <div className="flex gap-1">
                <input name="a" type="radio" />
                <label>Male</label>
              </div>
              <div className="flex gap-1">
                <input name="a" type="radio" />
                <label>Female</label>
              </div>
              <div className="flex gap-1">
                <input name="a" type="radio" />
                <label>Other</label>
              </div>
            </div> */}
          </>
        )}

        {steps === 3 && (
          <>
            <p className="text-2xl font-medium">Contact Information</p>

            {/* address and city */}

            <div className="flex md:flex-row flex-col justify-center my-8 gap-8 w-[100%]">
              <div className="grid w-full">
                <label>Address</label>

                <MyInput type="text" placeholder="Street adress" />
              </div>

              <div className="grid w-full">
                <label>City</label>
                <MyInput type="text" placeholder="City" />
              </div>
            </div>

            {/* state/province and zip/postal code*/}

            <div className="flex md:flex-row flex-col justify-center my-8 gap-8 w-[100%]">
              <div className="grid w-full">
                <label>State/Province</label>

                <MyInput type="text" placeholder="state or province" />
              </div>

              <div className="grid w-full">
                <label>Zip/Postal Code</label>
                <MyInput type="text" placeholder="zip or postal code" />
              </div>
            </div>

            {/* select country */}

            <div className="grid w-full my-8">
              <label>Country</label>

              <select className="p-3 border border-gray-300 rounded  text-gray-500">
                <option>Select your Country</option>
                <option>India</option>
                <option>Russia</option>
                <option>UK</option>
                <option>USA</option>
                <option>Israil</option>
                <option>Singapore</option>
                <option>UAE</option>
                <option>China</option>
              </select>
            </div>

            <div className="flex gap-2">
              <input type="checkbox" />

              <p>
                I agree to the{" "}
                <a className="text-blue-600" href="#">
                  terms and conditions
                </a>{" "}
                and {""}
                <a className="text-blue-600" href="#">
                  privacy policy
                </a>
              </p>
            </div>

            <p className="font-medium ml-5">
              You must agree to the terms and conditions
            </p>
          </>
        )}
      </form>

      {/* next / prev button section */}

      <div className="bg-white p-8 flex justify-between  ">
        <button
          onClick={() => setSteps((pre) => pre - 1)}
          disabled={steps <= 1}
          className={`px-6 py-2 rounded-lg border border-gray-300 text-gray-300 ${
            steps === 1 ? "opacity-0" : "opacity-100"
          }`}
        >
          previous
        </button>

        {/* continue btn */}
        <button
          onClick={() => setSteps((pre) => pre + 1)}
          disabled={steps >= stepIndData.length}
          className="px-6 py-2 rounded-lg  bg-blue-600 text-white"
        >
          Continue
        </button>
      </div>
    </section>
  );
};

export default RegistrationForm;

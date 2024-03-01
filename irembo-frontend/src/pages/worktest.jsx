import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function WorkTest() {
  const [citizenship, setCitizenship] = useState();
  const [purpose_of_importation, setPurpose] = useState();

  const schema = yup.object().shape({
    citizenship: yup.string().required("This field is required"),
    email: yup.string().email(),
    phone: yup.string().required("This field is required"),
    company: yup.string().required("This field is required"),
    TIN_number: yup.string().required("This field is required"),
    date: yup.string().required("This field is required"),
    purpose_of_importation: yup.string().required("This field is required"),
    product_category: yup.string().required("This field is required"),
    weight: yup.string().required("This field is required"),
    unit_of_measurement: yup.string().required("This field is required"),
    qty: yup
      .number()
      .min(1)
      .integer()
      .required(
        "This field is required",
        "Please provide a number greater than 0"
      ),
    desc: yup.string().required("This field is required"),
    national_id:
      citizenship === "Rwandan"
        ? yup.string().required("This field is required")
        : yup.string(),
    passport:
      citizenship === "Foreigner"
        ? yup.string().required("This field is required")
        : yup.string(),
    Other:
      purpose_of_importation == "Other"
        ? yup.string().required("This field is required")
        : yup.string(),

    // other_names: yup.string().required("This field is required"),
    // surname: yup.string().required("This field is required"),
    // nationality: yup.string().required("This field is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    reset();
    console.log(data);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto w-3/5 ">
          <div className="mt-16 bg-blue-400">
            <h5 className="px-10 py-2 text-blue-800 font-semibold">
              Business Owner Details
            </h5>
          </div>
          <div className="border border-blue-800 rounded-sm px-10 py-5">
            <p className="font-bold mt-2 mb-2">Business Owner Details</p>
            <label className="required font-bold">Applicant citizenship</label>
            <div>
              <select
                {...register("citizenship")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-2/4 p-1.5"
                onChange={(e) => setCitizenship(e.target.value)}
              >
                <option value="">Select citizenship</option>
                <option value="Rwandan">Rwandan</option>
                <option value="Foreigner">Foreigner</option>
              </select>
              {errors.citizenship && (
                <p className="text-red-500">{errors.citizenship.message}</p>
              )}
            </div>
            {citizenship === "Rwandan" && (
              <div className="py-3 w-2/3">
                <label htmlFor="national_id" className="font-bold">
                  National ID
                </label>

                <input
                  {...register("national_id")}
                  type="text"
                  id="national_id"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-3/4 p-1.5 mb-1"
                  placeholder="Enter national ID"
                />
                {/* <label className="font-bold">Other names</label>
                <input
                  {...register("other_names")}
                  type="text"
                  id="othernames"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-3/4 p-1.5"
                />
                <label className="font-bold">Surname</label>
                <input
                  {...register("surname")}
                  type="text"
                  id="surname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-3/4 p-1.5"
                />
                <label className="font-bold">Nationality</label>
                <input
                  {...register("nationality")}
                  type="text"
                  id="nationality"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-3/4 p-1.5"
                /> */}
                {errors.national_id && (
                  <p className="text-red-500">{errors.national_id.message}</p>
                )}
              </div>
            )}
            {citizenship === "Foreigner" && (
              <div className="py-3 w-2/3">
                <label htmlFor="foreigner" className="font-bold">
                  Passport number
                </label>
                <input
                  {...register("passport")}
                  type="text"
                  id="passport"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-3/4 p-1.5"
                  placeholder="Enter Passport Number"
                />
                {errors.passport && (
                  <p className="text-red-500">{errors.passport.message}</p>
                )}
              </div>
            )}
            <div className="py-3 flex justify-start ">
              <div className="pr-3 w-1/3">
                <label htmlFor="phone" className="font-bold">
                  Phone number
                </label>
                <input
                  {...register("phone")}
                  type="text"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5"
                  placeholder="Enter phone number"
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
              </div>
              <div className="w-1/3 pr-3">
                <label htmlFor="email" className="font-bold">
                  Email Address
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full block p-1.5"
                  placeholder="Enter email address"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <h5 className="py-3 font-bold">Business Owner Address</h5>

            <label className="py-3 font-bold required">Province</label>
            <div className="mb-4">
              <select
                placeholder="Select province"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-2/4 mt-2 block p-2.5"
              >
                <option value="">Select province</option>
                <option value="Kigali">Kigali</option>
                <option value="Eastern Province">Eastern Province</option>
                <option value="Southern Province">Southern Province</option>
                <option value="Western Province">Western Province</option>
                <option value="Northern Province">Northern Province</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-3/5 mx-auto">
          <div className="mt-6 bg-blue-400">
            <h5 className="px-10 py-2 text-blue-800 font-semibold">
              Business Details
            </h5>
          </div>
          <div className="border border-blue-800 rounded-sm px-10 py-5">
            <p className="font-bold mt-2 mb-2">Business Details</p>

            <div className="py-3 flex justify-start ">
              <div className="w-1/3 pr-3">
                <label className="required font-bold">Business Type</label>
                <select
                  {...register("business_type")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5"
                >
                  <option value="">Enter business type</option>
                  <option value="Retailer">Retailer</option>
                  <option value="Wholesale">Wholesale</option>
                  <option value="Manufacturer">Manufacturer</option>
                </select>
                {errors.business_type && (
                  <p className="text-red-500">{errors.business_type.message}</p>
                )}
              </div>
              <div className="pr-3 w-1/3">
                <label htmlFor="company" className="font-bold required">
                  Company name
                </label>
                <input
                  {...register("company")}
                  type="text"
                  id="company"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5"
                  placeholder="Enter company name"
                />
                {errors.company && (
                  <p className="text-red-500">{errors.company.message}</p>
                )}
              </div>
            </div>

            <div className="py-3 flex justify-start ">
              <div className="pr-3 w-1/3">
                <label htmlFor="TIN" className="font-bold required">
                  TIN Number
                </label>
                <input
                  {...register("TIN_number")}
                  type="text"
                  id="TIN"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5"
                  placeholder="Enter TIN number"
                />
                {errors.TIN_number && (
                  <p className="text-red-500">{errors.TIN_number.message}</p>
                )}
              </div>

              <div className="w-1/3 pr-3">
                <label htmlFor="date" className="font-bold required">
                  Registration Date
                </label>
                <input
                  {...register("date")}
                  type="date"
                  id="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full block p-1.5"
                  placeholder="Choose Date"
                />
                {errors.date && (
                  <p className="text-red-500">{errors.date.message}</p>
                )}
              </div>
            </div>

            <h5 className="py-3 font-bold">Business Address</h5>

            <label className="py-3 font-bold required">Province</label>
            <div className="mb-4">
              <select
                placeholder="Select province"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-2/4 mt-2 block p-2.5"
              >
                <option value="">Select province</option>
                <option value="Kigali">Kigali</option>
                <option value="Eastern Province">Eastern Province</option>
                <option value="Southern Province">Southern Province</option>
                <option value="Western Province">Western Province</option>
                <option value="Northern Province">Northern Province</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-3/5 mx-auto">
          <div className="mt-6 bg-blue-400">
            <h5 className="px-10 py-2 text-blue-800 font-semibold">
              Product information
            </h5>
          </div>
          <div className="border border-blue-800 rounded-sm px-10 py-5">
            <p className="font-bold mt-2 mb-2">Importation details</p>
            <label className="required font-bold">Purpose of importation</label>
            <div>
              <select
                {...register("purpose_of_importation")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-2/4 p-1.5"
                onChange={(e) => {
                  setPurpose(e.target.value);
                }}
              >
                <option value="">the purpose of importation</option>
                <option value="Direct sale">Direct sale</option>
                <option value="Personal use">Personal use</option>
                <option value="Trial use">Trial use</option>
                <option value="Other">Other</option>
              </select>
              {errors.purpose_of_importation && (
                <p className="text-red-500">
                  {errors.purpose_of_importation.message}
                </p>
              )}
              {purpose_of_importation === "Other" && (
                <div className="py-3 w-2/3">
                  <label htmlFor="purpose" className="font-bold">
                    Specify purpose of importation
                  </label>
                  <input
                    {...register("purpose_of_importation")}
                    type="text"
                    id="purpose"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-3/4 p-1.5"
                  />
                  {errors.Other && (
                    <p className="text-red-500">{errors.Other.message}</p>
                  )}
                </div>
              )}
            </div>

            <p className="font-bold mt-2 mb-2">Product details</p>

            <label className="required font-bold">Product category</label>
            <div>
              <select
                {...register("product_category")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-2/4 p-1.5"
              >
                <option value="">Select product category</option>
                <option value="General purpose">General purpose</option>
                <option value="Construction materials">
                  Construction materials
                </option>
                <option value="Chemicals">Chemicals</option>
              </select>
              {errors.product_category && (
                <p className="text-red-500">
                  {errors.product_category.message}
                </p>
              )}
            </div>
            <div className="pr-3 w-1/3 mt-4">
              <label htmlFor="weight" className="font-bold">
                Weight(kg)
              </label>
              <div>
                <input
                  {...register("weight")}
                  type="text"
                  id="weight"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5"
                  placeholder="Weight(kg)"
                />
                {errors.weight && (
                  <p className="text-red-500">{errors.weight.message}</p>
                )}
              </div>
            </div>
            <div className="py-3 flex justify-start ">
              <div className="pr-3 w-1/3">
                <label
                  htmlFor="unit_of_measurement"
                  className="font-bold required"
                >
                  Unit of measurement
                </label>
                <div>
                  <select
                    {...register("unit_of_measurement")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5"
                  >
                    <option value="">Select unit of measurement</option>
                    <option value="kgs">Kgs</option>
                    <option value="Tonnes">Tonnes</option>
                  </select>
                  {errors.unit_of_measurement && (
                    <p className="text-red-500">
                      {errors.unit_of_measurement.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-1/3 pr-3">
                <label htmlFor="qty" className="font-bold required">
                  Quantity of product(s)
                </label>
                <input
                  {...register("qty")}
                  type="number"
                  id="qty"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full block p-1.5"
                  placeholder="Enter quantity"
                  min={0}
                />
                {errors.qty && (
                  <p className="text-red-500">{errors.qty.message}</p>
                )}
              </div>
            </div>

            <div className="pr-3 w-2/3 mt-4">
              <label htmlFor="desc" className="font-bold required">
                Description of products
              </label>
              <textarea
                {...register("desc")}
                id="desc"
                cols="200"
                rows="6"
                placeholder="Enter product description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full block p-1.5"
              />
              {errors.desc && (
                <p className="text-red-500">{errors.desc.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="w-full text-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default WorkTest;

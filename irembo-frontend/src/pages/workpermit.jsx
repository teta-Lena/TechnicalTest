import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validSchema = yup.object().shape({
  citizenship: yup.string().required("This field is required"),
  email: yup.string().email(),
});

function WorkPermit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validSchema) });

  return (
    <div className="w-full">
      <form action="">
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-2/4 p-1.5"
                required
              >
                <option value="">Select citizenship</option>
                <option value="Rwandan" className="">
                  Rwandan
                </option>
                <option value="Foreigner" className="">
                  Foreigner
                </option>
              </select>
            </div>

            <div className="py-3 flex justify-start ">
              <div className="pr-3 w-1/3">
                <label htmlFor="" className="font-bold">
                  Phone number
                </label>
                <div>
                  <input
                    required
                    type="text"
                    name="phone"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
              <div className="w-1/3 pr-3">
                <label htmlFor="" className="font-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full block p-1.5"
                  placeholder="Enter email address"
                  required
                />
              </div>
            </div>

            <h5 className="py-3 font-bold">Business Owner Address</h5>

            <label className="py-3 font-bold">Province</label>
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5"
                  required
                >
                  <option value="">Enter business type</option>
                  <option value="Retailer" className="">
                    Retailer
                  </option>
                  <option value="Wholesale" className="">
                    Wholesale
                  </option>
                  <option value="Manufacturer" className="">
                    Manufacturer
                  </option>
                </select>
              </div>
              <div className="pr-3 w-1/3">
                <label htmlFor="" className="font-bold">
                  Company name
                </label>
                <div>
                  <input
                    required
                    type="text"
                    name="company"
                    id="company"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5"
                    placeholder="Enter company name"
                  />
                </div>
              </div>
            </div>

            <div className="py-3 flex justify-start ">
              <div className="pr-3 w-1/3">
                <label htmlFor="" className="font-bold">
                  TIN Number
                </label>
                <div>
                  <input
                    required
                    type="text"
                    name="TIN number"
                    id="TIN"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5"
                    placeholder="Enter TIN number"
                  />
                </div>
              </div>

              <div className="w-1/3 pr-3">
                <label htmlFor="" className="font-bold">
                  Registration Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full block p-1.5"
                  placeholder="Choose Date"
                  required
                />
              </div>
            </div>

            <h5 className="py-3 font-bold">Business Address</h5>

            <label className="py-3 font-bold">Province</label>
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-2/4 p-1.5"
                required
              >
                <option value="">the purpose of importation</option>
                <option value="Direct sale" className="">
                  Direct sale
                </option>
                <option value="Personal use" className="">
                  Personal use
                </option>
                <option value="Trial use" className="">
                  Trial use
                </option>
                <option value="Personal use" className="">
                  Other
                </option>
              </select>
            </div>

            <p className="font-bold mt-2 mb-2">Product details</p>

            <label className="required font-bold">Product category</label>
            <div>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-2/4 p-1.5"
                required
              >
                <option value="">Select product category</option>
                <option value="General purpose" className="">
                  General purpose
                </option>
                <option value="Construction materials" className="">
                  Construction materials
                </option>
                <option value="Chemicals" className="">
                  Chemicals
                </option>
              </select>
            </div>
            <div className="pr-3 w-1/3 mt-4">
              <label htmlFor="" className="font-bold">
                Weight(kg)
              </label>
              <div>
                <input
                  required
                  type="text"
                  name="weight"
                  id="weight"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5"
                  placeholder="Weight(kg)"
                />
              </div>
            </div>
            <div className="py-3 flex justify-start ">
              <div className="pr-3 w-1/3">
                <label htmlFor="" className="font-bold">
                  Unit of measurement
                </label>
                <div>
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5"
                    required
                  >
                    <option value="">Select unit of measurement</option>
                    <option value="kgs" className="">
                      Kgs
                    </option>
                    <option value="Tonnes" className="">
                      Tonnes
                    </option>
                  </select>
                </div>
              </div>

              <div className="w-1/3 pr-3">
                <label htmlFor="" className="font-bold">
                  Quantity of product(s)
                </label>
                <input
                  type="number"
                  id="qty"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full block p-1.5"
                  placeholder="Enter quantity"
                  min={0}
                  required
                />
              </div>
            </div>

            <div className="pr-3 w-2/3 mt-4">
              <label htmlFor="" className="font-bold required">
                Description of prodcuts
              </label>
              <textarea
                name="desc"
                id="desc"
                cols="200"
                rows="6"
                placeholder="Enter product description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full block p-1.5"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default WorkPermit;

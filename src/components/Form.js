import React from 'react'

function Form() {
   return (
      <div className="row">
         <div className="col-8">
            <h2>Example form</h2>
            <div className="row">
               <div className="col-12">
                  <h5>Applicant information</h5>
               </div>

               <div className="col-6 form-group">
                  <label for="first_name">First name</label>
                  <input
                     autoComplete="first_name"
                     className="form-control form-control-sm"
                     id="first_name"
                  />
               </div>

               <div className="col-6 form-group">
                  <label for="last_name">Last name</label>
                  <input
                     autoComplete="last_name"
                     className="form-control form-control-sm"
                     id="last_name"
                  />
               </div>

               <div className="col-12">
                  <p className="mb-2">
                     Are you the owner of your own contracting business?
                  </p>
                  <div className="ml-3 mb-3">
                     <div className="form-check">
                        <input
                           className="form-check-input"
                           type="radio"
                           name="contracting"
                           id="contracting_0"
                           value="Yes"
                        />
                        <label className="form-check-label" for="contracting_0">
                           Yes
                        </label>
                     </div>
                     <div className="form-check">
                        <input
                           className="form-check-input"
                           type="radio"
                           name="contracting"
                           id="contracting_1"
                           value="No"
                        />
                        <label className="form-check-label" for="contracting_1">
                           No
                        </label>
                     </div>
                  </div>
               </div>

               <div className="col-12">
                  <h5>Business address</h5>
               </div>

               <div className="col-12 form-group">
                  <label for="street_address_1">Street address 1</label>
                  <input
                     autoComplete="street_address_1"
                     className="form-control form-control-sm"
                     id="street_address_1"
                  />
               </div>

               <div className="col-12 form-group">
                  <label for="street_address_2">
                     Street address 2{' '}
                     <span className="text-muted">(optional)</span>
                  </label>
                  <input
                     autoComplete="street_address_2"
                     className="form-control form-control-sm"
                     id="street_address_2"
                  />
               </div>

               <div className="col-6 form-group">
                  <label for="city">City</label>
                  <input
                     autoComplete="city"
                     className="form-control form-control-sm"
                     id="city"
                  />
               </div>

               <div className="col-2 form-group">
                  <label for="state">State</label>
                  <input
                     autoComplete="state"
                     className="form-control form-control-sm"
                     id="state"
                  />
               </div>

               <div className="col-4 form-group">
                  <label for="zip_code">Zip code</label>
                  <input
                     autoComplete="zip_code"
                     className="form-control form-control-sm"
                     id="zip_code"
                  />
               </div>

               <div className="col-12">
                  <h5>Employees</h5>
               </div>

               <div className="col-12">
                  <p className="mb-2">Do you have any employees?</p>
                  <div className="ml-3 mb-3">
                     <div className="form-check">
                        <input
                           className="form-check-input"
                           type="radio"
                           name="employees"
                           id="employees_0"
                           value="Yes"
                        />
                        <label className="form-check-label" for="employees_0">
                           Yes
                        </label>
                     </div>
                     <div className="form-check">
                        <input
                           className="form-check-input"
                           type="radio"
                           name="employees"
                           id="employees_1"
                           value="No"
                        />
                        <label className="form-check-label" for="employees_1">
                           No
                        </label>
                     </div>
                  </div>
               </div>

               <div className="col-4 form-group">
                  <label for="employees_full_time">
                     How many full-time employees?
                  </label>
                  <input
                     autoComplete="employees_full_time"
                     className="form-control form-control-sm"
                     id="employees_full_time"
                  />
               </div>

               <div className="col-4 form-group">
                  <label for="employees_part_time">
                     How many part-time employees?
                  </label>
                  <input
                     autoComplete="employees_part_time"
                     className="form-control form-control-sm"
                     id="employees_part_time"
                  />
               </div>

               <div className="col-4 form-group">
                  <label for="employees_total">Total number of employees</label>
                  <input
                     disabled
                     autoComplete="employees_total"
                     className="form-control form-control-sm"
                     id="employees_total"
                  />
               </div>

               <div className="col-12">
                  <h5>Losses</h5>
               </div>

               <div className="col-12">
                  <p className="mb-2">Have you fulfilled any claims?</p>
                  <div className="ml-3 mb-3">
                     <div className="form-check">
                        <input
                           className="form-check-input"
                           type="radio"
                           name="losses"
                           id="losses_0"
                           value="Yes"
                        />
                        <label className="form-check-label" for="losses_0">
                           Yes
                        </label>
                     </div>
                     <div className="form-check">
                        <input
                           className="form-check-input"
                           type="radio"
                           name="losses"
                           id="losses_1"
                           value="No"
                        />
                        <label className="form-check-label" for="losses_1">
                           No
                        </label>
                     </div>
                  </div>
               </div>

               <div className="col-12">
                  <p className="mb-2">Please attach your loss runs</p>
                  <button className="btn btn-primary btn-sm">
                     Upload loss runs
                  </button>
               </div>
            </div>
         </div>
         <div className="col-4">
            <h2>Quote</h2>
            <p>This will show an updated total, as well as if denied.</p>
         </div>
      </div>
   )
}

export default Form

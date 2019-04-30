import React from 'react'
import form_elements from '../data/form_elements'
import _ from 'lodash'

class Form extends React.Component {
   constructor() {
      super()
      this.change_radio = this.change_radio.bind(this)
      this.state = {
         form_elements,
      }
   }

   change_radio(id, value) {
      const form_elements = [...this.state.form_elements].map(element => {
         if (element.id === id) element.answer = value
         return element
      })
      this.setState({ form_elements })
   }

   render() {
      return (
         <div className="row">
            <div className="col-8">
               <h2>Example form</h2>
               <div className="row">
                  {this.state.form_elements.map((element, i, arr) => {
                     const {
                        type,
                        col,
                        label,
                        id,
                        is_optional,
                        is_disabled,
                        choices,
                        answer,
                        conditional_logic,
                     } = element

                     const dependent_question = _.find(arr, {
                        id: conditional_logic.question,
                     })

                     if (
                        conditional_logic.question === '' ||
                        dependent_question.answer === conditional_logic.answer
                     ) {
                        if (type === 'heading') {
                           return (
                              <div className="col-12" key={id}>
                                 <h5>{label}</h5>
                              </div>
                           )
                        }

                        if (type === 'text_single_line') {
                           return (
                              <div className={`col-${col} form-group`} key={id}>
                                 <label htmlFor={id}>
                                    {label}
                                    {is_optional ? (
                                       <span className="text-muted">
                                          &nbsp;(optional)
                                       </span>
                                    ) : (
                                       <span />
                                    )}
                                 </label>
                                 <input
                                    autoComplete={id}
                                    disabled={is_disabled}
                                    className="form-control form-control-sm"
                                    id={id}
                                 />
                              </div>
                           )
                        }

                        if (type === 'multiple_choice') {
                           return (
                              <div className={`col-${col}`} key={id}>
                                 <p className="mb-2">{label}</p>
                                 <div className="ml-3 mb-3">
                                    <div className="form-check">
                                       <input
                                          className="form-check-input"
                                          type="radio"
                                          name={id}
                                          id={`${id}_0`}
                                          value={choices[0]}
                                          onChange={e =>
                                             this.change_radio(
                                                id,
                                                e.target.value
                                             )
                                          }
                                       />
                                       <label
                                          className="form-check-label"
                                          htmlFor={`${id}_0`}
                                       >
                                          {choices[0]}
                                       </label>
                                    </div>
                                    <div className="form-check">
                                       <input
                                          className="form-check-input"
                                          type="radio"
                                          name={id}
                                          id={`${id}_1`}
                                          value={choices[1]}
                                          onChange={e =>
                                             this.change_radio(
                                                id,
                                                e.target.value
                                             )
                                          }
                                       />
                                       <label
                                          className="form-check-label"
                                          htmlFor={`${id}_1`}
                                       >
                                          {choices[1]}
                                       </label>
                                    </div>
                                 </div>
                              </div>
                           )
                        }

                        if (type === 'upload') {
                           return (
                              <div className="col-12" key={id}>
                                 <p className="mb-2">{label}</p>
                                 <button className="btn btn-primary btn-sm">
                                    {choices[0]}
                                 </button>
                              </div>
                           )
                        }
                     }
                  })}
               </div>
            </div>
            <div className="col-4">
               <h2>Quote</h2>
               <p>This will show an updated total, as well as if denied.</p>
            </div>
         </div>
      )
   }
}

export default Form

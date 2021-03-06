const form_elements = [
   {
      type: 'heading',
      col: '12',
      label: 'Applicant information',
      id: 'applicant_information',
      is_optional: false,
      is_disabled: false,
      choices: [],
      answer: '',
      conditional_logic: {
         question: '',
         answer: '',
      },
   },
   {
      type: 'text_single_line',
      col: '6',
      label: 'First name',
      id: 'first_name',
      is_optional: false,
      is_disabled: false,
      choices: [],
      answer: '',
      conditional_logic: {
         question: '',
         answer: '',
      },
   },
   {
      type: 'text_single_line',
      col: '6',
      label: 'Last name',
      id: 'last_name',
      is_optional: false,
      is_disabled: false,
      choices: [],
      answer: '',
      conditional_logic: {
         question: '',
         answer: '',
      },
   },
   {
      type: 'multiple_choice',
      col: '12',
      label: 'Are you the owner of your own contracting business?',
      id: 'contracting',
      choices: ['Yes', 'No'],
      answer: '',
      price_adjustment: {
         operation: '+',
         value: 34,
      },
      conditional_logic: {
         question: '',
         answer: '',
      },
      error_validation: ['required'],
      call_us_validation: [
         {
            symbol: '=',
            answer: 'No',
         },
      ],
      decline_validation: [],
   },
   {
      type: 'heading',
      col: '12',
      label: 'Business address',
      id: 'business_address',
      is_optional: false,
      is_disabled: false,
      choices: [],
      answer: '',
      conditional_logic: {
         question: 'contracting',
         answer: 'Yes',
      },
   },
   {
      type: 'text_single_line',
      col: '12',
      label: 'Street address 1',
      id: 'street_address_1',
      is_optional: false,
      is_disabled: false,
      choices: [],
      answer: '',
      conditional_logic: {
         question: 'contracting',
         answer: 'Yes',
      },
   },
   {
      type: 'text_single_line',
      col: '12',
      label: 'Street address 2',
      id: 'street_address_2',
      is_optional: true,
      is_disabled: false,
      choices: [],
      answer: '',
      conditional_logic: {
         question: 'contracting',
         answer: 'Yes',
      },
   },
   {
      type: 'text_single_line',
      col: '6',
      label: 'City',
      id: 'city',
      is_optional: false,
      is_disabled: false,
      choices: [],
      answer: '',
      conditional_logic: {
         question: 'contracting',
         answer: 'Yes',
      },
   },
   {
      type: 'text_single_line',
      col: '2',
      label: 'State',
      id: 'state',
      is_optional: false,
      is_disabled: false,
      choices: [],
      answer: '',
      conditional_logic: {
         question: 'contracting',
         answer: 'Yes',
      },
   },
   {
      type: 'text_single_line',
      col: '4',
      label: 'Zip code',
      id: 'zip_code',
      is_optional: false,
      is_disabled: false,
      choices: [],
      answer: '',
      conditional_logic: {
         question: 'contracting',
         answer: 'Yes',
      },
   },
   {
      type: 'heading',
      col: '12',
      label: 'Employees',
      id: 'employees_section',
      is_optional: false,
      is_disabled: false,
      choices: [],
      answer: '',
      conditional_logic: {
         question: '',
         answer: '',
      },
   },
   {
      type: 'multiple_choice',
      col: '12',
      label: 'Do you have any employees?',
      id: 'employees',
      is_optional: false,
      is_disabled: false,
      choices: ['Yes', 'No'],
      answer: '',
      conditional_logic: {
         question: '',
         answer: '',
      },
   },
   {
      type: 'text_single_line',
      col: '4',
      label: 'How many full-time employees?',
      id: 'employees_full_time',
      is_optional: false,
      is_disabled: false,
      choices: [],
      answer: '',
      conditional_logic: {
         question: 'employees',
         answer: 'Yes',
      },
   },
   {
      type: 'text_single_line',
      col: '4',
      label: 'How many part-time employees?',
      id: 'employees_part_time',
      is_optional: false,
      is_disabled: false,
      choices: [],
      answer: '',
      conditional_logic: {
         question: 'employees',
         answer: 'Yes',
      },
   },
   {
      type: 'text_single_line',
      col: '4',
      label: 'Total number of employees',
      id: 'employees_total',
      is_optional: false,
      is_disabled: true,
      choices: [],
      answer: '',
      conditional_logic: {
         question: 'employees',
         answer: 'Yes',
      },
   },
   {
      type: 'heading',
      col: '12',
      label: 'Losses',
      id: 'losses',
      is_optional: false,
      is_disabled: false,
      choices: [],
      answer: '',
      conditional_logic: {
         question: '',
         answer: '',
      },
   },
   {
      type: 'multiple_choice',
      col: '12',
      label: 'Have you fulfilled any claims?',
      id: 'claims',
      is_optional: false,
      is_disabled: false,
      choices: ['Yes', 'No'],
      answer: '',
      conditional_logic: {
         question: '',
         answer: '',
      },
   },
   {
      type: 'upload',
      col: '12',
      label: 'Please attach your loss runs',
      id: 'loss_runs',
      is_optional: false,
      is_disabled: false,
      choices: ['Upload loss runs'],
      answer: '',
      conditional_logic: {
         question: 'claims',
         answer: 'Yes',
      },
   },
]

export default form_elements

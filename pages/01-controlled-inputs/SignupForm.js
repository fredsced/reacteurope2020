import React from 'react'
import onSubmit from '../../common/onSubmit'

/**
 * Objective: Maintain the values of firstName, lastName and email in
 * local state using `React.useState`, and call `onSubmit` with
 * the two values when the form is submitted.
 *
 * Example submission:
 *   {
 *     firstName: 'Erik',
 *     lastName: 'Rasmussen',
 *     email: 'erik@final-form.org'
 *   }
 */
export default function SignupForm() {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  return (
    <form>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>
      <div>{firstName}</div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <div>{lastName}</div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

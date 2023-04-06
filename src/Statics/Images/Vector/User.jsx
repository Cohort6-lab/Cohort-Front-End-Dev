import * as React from "react"
const User = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.833 16.625v-1.583a3.167 3.167 0 0 0-3.166-3.167H6.333a3.167 3.167 0 0 0-3.166 3.167v1.583M9.5 8.708a3.167 3.167 0 1 0 0-6.333 3.167 3.167 0 0 0 0 6.333Z"
    />
  </svg>
)
export default User

import React from "react"
import { Navigate } from "react-router-dom"

const goToForum = () => {
    return(<Navigate to='/foro' />)
}

export default goToForum;
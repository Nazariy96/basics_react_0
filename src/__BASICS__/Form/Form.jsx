import { useState } from "react"

const Form = () => {
    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comment: "",
            vaccinated: false,
            employment: "",
            lenguage:"",
            password:"",
            passwordConfirm:""
        }
    )

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
    /*  setFormData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value // [e.target.name] -> syntax to validate dots in property name (js)
            } 
        }) //explicid return */
        setFormData(prevState => ({
                ...prevState,
                [name]: type === "checkbox" ? checked : value // [e.target.name] -> syntax to validate dots in property name (js)
            })) //implicid return
    }

    const handleSubmit = (e) => {
        e.preventDefault() // stop default behavior ,re-render of page, upon submitting 
        if(formData.password !== formData.passwordConfirm) return console.log("password's do not match")
        console.log("submited form -> ",formData)

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                /><br /><br />

                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                /><br /><br />
{/* --------------------------------------------EMAIL---------------------------------------------------- */}

                <label htmlFor="email">email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                /><br /><br />
{/* --------------------------------------------PASSWORD---------------------------------------------------- */}
                <label htmlFor="password">password:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                /><br />
                <label htmlFor="passwordConfirm">confirm password:</label>
                <input
                    type="password"
                    name="passwordConfirm"
                    id="passwordConfirm"
                    value={formData.passwordConfirm}
                    onChange={handleChange}
                /><br /><br />
{/* -------------------------------------------------------------------------------------------------------- */}

                <label htmlFor="comment">comment:</label>
                <textarea
                    name="comment"
                    id="comment"
                    value={formData.comment}
                    onChange={handleChange}
                /><br /><br />
{/* ------------------------------------------------CHECKBOX-------------------------------------------------------- */}

                <label htmlFor="vaccinated">Vaccinated</label>
                <input
                    id="vaccinated"
                    type="checkbox"
                    name="vaccinated"
                    checked={formData.vaccinated}
                    onChange={handleChange}
                /><br /><br />

{/* -----------------------------------------------RADIO--------------------------------------------------------- */}
                <fieldset>
                    <legend>Current employment status</legend>

                    <label htmlFor="unemployed">Unemployed</label>
                    <input
                        id="unemployed"
                        type="radio"
                        name="employment"
                        value="unemployed"
                        checked={formData.employment === "unemployed"}
                        onChange={handleChange}
                    /><br />
                    <label htmlFor="part-time">Part-time</label>
                    <input
                        id="part-time"
                        type="radio"
                        name="employment"
                        value="part-time"
                        checked={formData.employment === "part-time"}
                        onChange={handleChange}
                    /><br />
                    <label htmlFor="full-time">Full-time</label>
                    <input
                        id="full-time"
                        type="radio"
                        name="employment"
                        value="full-time"
                        checked={formData.employment === "full-time"}
                        onChange={handleChange}
                    /><br />
                </fieldset><br />

{/* -----------------------------------------------SELECTION--------------------------------------------------------- */}
                <label htmlFor="lenguage">What lenguage do you speak?</label>
                <select id="lenguage" name="lenguage" value={formData.lenguage} onChange={handleChange}>
                    <option value="none">none</option>
                    <option value="spanish">Spanish</option>
                    <option value="english">English</option>
                    <option value="japonese">Japonese</option>
                    <option value="german">German</option>
                    <option value="other">other</option>
                </select><br /><br /><br />

                <button>Submit</button> {/* triggers forms onSubmit event handler, default type="submit" */}
            </form>
        </>
    )
}

export default Form
import { validateForm } from "../utils/validation.js";
import { fetchInfo } from "../services/api.js"

export class Form {
    constructor() { // used to create obj
        this.form = document.createElement("form");
        this.form.innerHTML = `
                <form>
                <h4 class="mb-4">Organization Information</h4>
                <hr class="mb-4">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div>
                        <label for="companyName">Company Name</label>
                        <input type="text" id="companyName" name="companyName"
                            class="focus:outline-none focus:ring-2 focus:ring-gray-500 p-2">
                        <span id="companyNameError" class="error text-red-500 text-xs"></span>
                    </div>
                    <div>
                        <label for="commercialRegistrationNumber">Commercial Registration Number</label>
                        <input type="number" id="commercialRegistrationNumber" name="commercialRegistrationNumber"
                            class="focus:outline-none focus:ring-2 focus:ring-gray-500 p-2">
                        <span id="commercialRegistrationNumberError" class="error text-red-500 text-xs"></span>
                    </div>
                    <div>
                        <label for="businessType">Business Type</label>
                        <select id="businessType" name="businessType"
                            class="focus:outline-none focus:ring-2 focus:ring-gray-500 p-2">
                            <option value="" selected></option>
                            <option value="Retail">Retail</option>
                            <option value="Manufacturnig">Manufacturnig</option>
                            <option value="Franchising">Franchising</option>
                            <option value="Insurance">Insurance</option>
                            <option value="Consulting">Consulting</option>
                            <option value="Ecommerce">Ecommerce</option>
                        </select>
                        <span id="businessTypeError" class="error text-red-500 text-xs"></span>
                    </div>
                </div>
                <br></br>
                <h4 class="mb-4">Owner Information</h4>
                <hr class="mb-4">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email"
                            class="focus:outline-none focus:ring-2 focus:ring-gray-500 p-2">
                        <span id="emailError" class="error text-red-500 text-xs"></span>
                    </div>
                    <div>
                        <label for="phoneNumber">Phone Number</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber"
                            class="focus:outline-none focus:ring-2 focus:ring-gray-500 p-2">
                        <span id="phoneNumberError" class="error text-red-500 text-xs"></span>
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password"
                            class="focus:outline-none focus:ring-2 focus:ring-gray-500 p-2">
                        <span id="passwordError" class="error text-red-500 text-xs"></span>
                    </div>
                    <div>
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword"
                            class="focus:outline-none focus:ring-2 focus:ring-gray-500 p-2">
                        <span id="confirmPasswordError" class="error text-red-500 text-xs"></span>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div>
                        <label for="city">City</label>
                        <input type="text" name="city" id='city' class="focus:outline-none focus:ring-2 focus:ring-gray-500 p-2">
                        <span id="cityError" class="error text-red-500 text-xs"></span>
                    </div>
                    <div>
                        <label for="Region">Region</label>
                        <input type="text" name="Region" id='Region' class="focus:outline-none focus:ring-2 focus:ring-gray-500 p-2">
                        <span id="RegionError" class="error text-red-500 text-xs"></span>
                    </div>
                    <div>
                        <label for="zipCode">Zip Code</label>
                        <input type="text" name="zipCode" id='zipCode'class="focus:outline-none focus:ring-2 focus:ring-gray-500 p-2">
                        <span id="zipCodeError" class="error text-red-500 text-xs"></span>
                    </div>
                </div>

                <div class="form-check my-5">
                    <input class="form-check-input" type="checkbox" id="Terms">
                    <label class="form-check-label py-0" for="Terms">
                        I agree to the <a href="#">Terms & Conditions</a>
                    </label>
                    <span id="TermsError" class="error text-red-500 text-xs"></span>
                </div>
                <hr>
                <div class="flex justify-center" id='bDiv'>
                    <button type="submit" id='butt'>Submit</button>
                </div>
                <div id="loadingSpinner">
                    <div class="spinner-icon"></div>
                    <p>Loading...</p>
                </div>
            </form>
        `;

        this.form.addEventListener("submit", this.handleFormSubmission.bind(this));
    }


    handleFormSubmission = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior;
        const companyName = document.getElementById("companyName").value.trim();
        const commercialRegistrationNumber = document.getElementById("commercialRegistrationNumber").value.trim();
        const email = document.getElementById("email").value.trim();
        const phoneNumber = document.getElementById("phoneNumber").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const city = document.getElementById("city").value.trim();
        const Region = document.getElementById("Region").value.trim();
        const zipCode = document.getElementById("zipCode").value.trim();
        const businessType = document.getElementById("businessType").value;
        const Terms = document.getElementById("Terms").checked;

        const errors = validateForm(companyName, commercialRegistrationNumber, email, phoneNumber, password, confirmPassword, city, Region, zipCode, businessType, Terms);

        document.getElementById("companyNameError").textContent = errors.companyName || "";
        document.getElementById("commercialRegistrationNumberError").textContent = errors.commercialRegistrationNumber || "";
        document.getElementById("phoneNumberError").textContent = errors.phoneNumber || "";
        document.getElementById("cityError").textContent = errors.city || "";
        document.getElementById("RegionError").textContent = errors.Region || "";
        document.getElementById("zipCodeError").textContent = errors.zipCode || "";
        document.getElementById("businessTypeError").textContent = errors.businessType || "";
        document.getElementById("TermsError").textContent = errors.Terms || "";
        document.getElementById("emailError").textContent = errors.email || "";
        document.getElementById("passwordError").textContent = errors.password || "";
        document.getElementById("confirmPasswordError").textContent = errors.confirmPassword || "";

        // Prepare the data to be sent
        const data = { companyName, commercialRegistrationNumber, email, phoneNumber, password, confirmPassword, city, Region, zipCode, businessType };

        if (!errors.companyName && !errors.commercialRegistrationNumber && !errors.phoneNumber && !errors.city && !errors.Region && !errors.zipCode && !errors.businessType && !errors.Terms && !errors.email && !errors.password && !errors.confirmPassword) {
            try {
                // Send the data using fetch API and await the response
                const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                // Check if the response was successful
                if (response.ok) {
                    const result = await response.json();
                    alert("Registration successful!");
                    let name = companyName;
                    let cr = commercialRegistrationNumber
                    let bt = businessType
                    let pass = password
                    let cp = confirmPassword
                    let Reg = Region
                    clear();
                    const fetchData = document.getElementById('bDiv');
                    let fetchButt = document.createElement('button');
                    fetchButt.innerText = 'Retrieve Data';
                    fetchButt.type = 'button'
                    fetchButt.classList.add('custom-button')
                    fetchButt.onclick = async() => {
                        await fetchInfo().then(
                            data =>
                                data.forEach(user => {
                                    if (user.company.name === name){
                                    document.getElementById('companyName').value = user.company.name
                                    document.getElementById('email').value = user.email
                                    document.getElementById('phoneNumber').value = user.phone
                                    document.getElementById('city').value = user.address.city
                                    document.getElementById('zipCode').value = user.address.zipcode
                                    document.getElementById("commercialRegistrationNumber").value = cr
                                    document.getElementById("Region").value = Reg
                                    document.getElementById("businessType").value = bt
                                    document.getElementById("Terms").checked = true
                                    document.getElementById("password").value = pass;
                                    document.getElementById("confirmPassword").value = cp;
                                    }
                                }
                                )
    
                        )
                    }

                    fetchData.appendChild(fetchButt);
                    //window.location.reload();
                    console.log(`Success: ${result.message}`);
                } else {
                    throw new Error('Something went wrong');
                }
            } catch (error) {
                console.log(`Error: ${error.message}`);
            }
        }


        function clear() {
            document.getElementById("companyName").value = "";
            document.getElementById("commercialRegistrationNumber").value = "";
            document.getElementById("phoneNumber").value = "";
            document.getElementById("city").value = "";
            document.getElementById("Region").value = "";
            document.getElementById("zipCode").value = "";
            document.getElementById("businessType").value = "";
            document.getElementById("Terms").checked = false;
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("confirmPassword").value = "";
        }

    };


    render(parent) {
        parent.appendChild(this.form);
    }
}


